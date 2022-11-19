import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";

const DetailView = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((response) => {
        setAuthor(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Author Information</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td>
              <DeleteButton id={author._id} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailView;
