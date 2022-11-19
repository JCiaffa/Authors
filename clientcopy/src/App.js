import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateView from "./views/createView";
import IndexView from "./views/indexView";
import EditView from "./views/editView";
import DetailView from "./views/detailView";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navigate to="/authors/" />} path="/" />
        <Route element={<IndexView />} path="/authors/" />
        <Route element={<CreateView />} path="/authors/create" />
        <Route element={<DetailView />} path="/authors/:id" />
        <Route element={<EditView />} path="/authors/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
