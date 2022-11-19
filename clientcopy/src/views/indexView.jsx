import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";
import axios from "axios";

const IndexView = (props) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Link to="/authors/create">Add Author</Link>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, i) => {
            return (
              <tr key={i}>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>
                  <DeleteButton id={author._id} />
                  <Link to={"/authors/" + author._id + "/edit"}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IndexView;
