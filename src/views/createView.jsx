import React, { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateView = (props) => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors/create", data)
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          const errorResponseDataErrors = response.data.error.errors;
          const errMsgArr = [];
          for (const eachKey in errorResponseDataErrors) {
            errMsgArr.push(errorResponseDataErrors[eachKey].message);
          }
          setErrors(errMsgArr);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Create a new Author</h1>
      <Form
        onSubmitHandler={onSubmitHandler}
        initialFirstName=""
        initialLastName=""
      />
      {errors.map((eachErr, i) => (
        <p key={i}> {eachErr}</p>
      ))}
    </div>
  );
};

export default CreateView;
