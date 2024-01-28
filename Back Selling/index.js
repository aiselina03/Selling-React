import cors from "cors";
import express from "express";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const sellingSchema = new Schema({
  name: String,
  desc: String,
  image: String,
  price: Number,
});
const SellingModel = mongoose.model("SellingModel", sellingSchema);

app.get("/", async (req, res) => {
  try {
    const products= await SellingModel.find({})
    res.json(products);
  } catch (error) {
    res.send(error.message)
  }
});

app.get("/:id", async (req, res) => {
    try {
        const {id}= req.params
        const products= await SellingModel.findById(id)
        res.json(products);
      } catch (error) {
        res.send(error.message)
      }
});

app.post("/", async (req, res) => {
    try {
        const {name, desc, image,price} =req.body
        const newProducts=  new SellingModel({name, desc, image,price})
        await newProducts.save()
        res.json(newProducts);
      } catch (error) {
        res.send(error.message)
      }
})

app.put("/:id", async (req, res) => {
    try {
        const {name, desc, image,price} =req.body
        const {id}= req.params
        const products= await SellingModel.findByIdAndUpdate(id,{name, desc, image,price})
        res.json(products);
      } catch (error) {
        res.send(error.message)
      }
});

app.delete("/:id", async (req, res) => {
    try {
        const {id}= req.params
        const products= await SellingModel.findByIdAndDelete(id)
        res.json(products);
      } catch (error) {
        res.send(error.message)
      }
});

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
