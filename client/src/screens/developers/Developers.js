import "./developers.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "../../components/card/Card";
axios.defaults.withCredentials = true;

const Developers = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  return (
    <>
      {userInfo ? <Navbar userInfo={userInfo} /> : <></>}

      <div className="dev-head">
        <h1>Developers</h1>
      </div>
      <div className="dev-cards">
        <Card
          name={"B. Haneesh Raj"}
          img="xd.png"
          role="Frontend"
          info="Full Stack Web developer"
          ig={"instagram.png"}
          twt={"twitter.png"}
          li={"download.png"}
        />
        <Card
          name={"G. Harish Reddy"}
          img="lol.png"
          role="Backend and Authentication"
          info="Full Stack Web developer"
        />
      </div>
    </>
  );
};

export default Developers;
