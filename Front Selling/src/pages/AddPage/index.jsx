import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss"
import { Helmet } from "react-helmet-async";

function AddPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function getAll() {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  function handleAdd(val) {
    fetch("http://localhost:8000/", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function deleteById(id) {
    fetch("http://localhost:8000/"+id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <>
     <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="addPage">
        <div className="forms">
          <Formik
            initialValues={{ name: "", image: "", desc: "", price: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("name"),
              image: Yup.string().required("image"),
              desc: Yup.string().required("desc"),
              price: Yup.number().required("price"),
            })}
            onSubmit={(values, { setSubmitting ,resetForm}) => {
              setTimeout(() => {
                handleAdd(values);
                setSubmitting(false);
                resetForm()
              }, 400);
            }}
          >
            <Form className="form">
              <label htmlFor="name"></label>
              <Field
                name="name"
                type="text"
                placeholder="name"
                className="field"
              />
              <ErrorMessage name="name" />

              <label htmlFor="image"></label>
              <Field
                name="image"
                type="text"
                placeholder="image"
                className="field"
              />
              <ErrorMessage name="image" />

              <label htmlFor="desc"></label>
              <Field
                name="desc"
                type="text"
                placeholder="description"
                className="field"
              />
              <ErrorMessage name="desc" />

              <label htmlFor="price"></label>
              <Field
                name="price"
                type="text"
                placeholder="price"
                className="field"
              />
              <ErrorMessage name="price" />

              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
        <div className="adminpanel">
          <div className="table">
            <table>
              <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
                   {products.map((x)=>(
                   <tr key={x._id}>
                    <td>   <img src={x.image} alt="" /></td>
                    <td>{x.name}</td>
                    <td>{x.desc}</td>
                    <td>${x.price}</td>
                    <td><button onClick={()=>deleteById(x._id)}>Delete</button></td>
              </tr>
              ))}
              </tbody>
           
           
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
