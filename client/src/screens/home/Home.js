import "./home.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import axios from "axios";
axios.defaults.withCredentials = true;

const Home = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  const style = {
    textDecoration: "none",
  };

  return (
    <>
      {userInfo ? <Navbar userInfo={userInfo} /> : <></>}

      <div className="home-header">
        <h1 className="home-header-heading">Welcome to Kronos</h1>
        <p className="home-header-subtext">A place for productivity</p>
      </div>
      <div className="home-content">
        <p>
          Kronos{" "}
          <strong>
            <u>(ˈkrəʊnɒs)</u>
          </strong>{" "}
          comes from the Greek Mythological God, the God of time and it is a
          place where productity is done right! Kronos provides with everything
          a person requires to work on a daily basis and have a productive day!
          Kronos provides with a{" "}
          <strong>
            To-Do List manager, Stickies, Pomodoro Timer and a hydration tracker
          </strong>
          !
          <br />
          <br /> Our development will soon be adding more features in Kronos for
          better efficiency and user experience!
          <br /> Kronos is very simple and easy to use! So what are you waiting
          for?
        </p>
      </div>
      {userInfo ? (
        <>
          <div className="home-buttons">
            <Link style={style} to="/developers">
              <Button bg="#333333" text="Developers" color="#fff" />
            </Link>
          </div>
        </>
      ) : (
        <div className="home-buttons">
          <Link style={style} to="/register">
            <Button bg="#333333" text="Register" color="#fff" />
          </Link>
          <Link style={style} to="/login">
            <Button bg="#333333" text="Login" color="#fff" />
          </Link>
          <Link style={style} to="/developers">
            <Button bg="#333333" text="Developers" color="#fff" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
