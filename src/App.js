import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Editprofile from "./components/Editprofile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  let [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      await axios
        .post(
          "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data"
        )
        .then((res) => {
          setCategory(res.data.result.categories);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCategory();
  }, []);

  return (
    <>
      <Header />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={ category.length > 0 ? <Home products={category}/> : <div>Loading ...</div>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={ category.length > 0 ? <Search products={category}/> : <div>Loading ...</div>} />
          <Route path="/editprofile" element={<Editprofile />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
