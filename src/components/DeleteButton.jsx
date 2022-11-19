import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
  const navigate = useNavigate();
  const { id } = props;
  const onClickHandler = (e) => {
    axios
      .delete("http://localhost:8000/api/authors/" + id)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={onClickHandler}>Delete</button>
    </div>
  );
};

export default DeleteButton;
