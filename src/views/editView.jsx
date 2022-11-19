import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditView = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((response) => {
        setAuthor(response.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id, data)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>We are editing author: {author.firstName} </h1>
      {loaded && (
        <Form
          onSubmitHandler={onSubmitHandler}
          initialFirstName={author.firstName}
          initialLastName={author.lastName}
        />
      )}
      <DeleteButton id={author._id} />
    </div>
  );
};

export default EditView;
