import React from "react";
import { Route, Routes } from "react-router-dom";

import Registration from "./components/registretion";
import Login from "./components/login";
import Post from './components/post'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
