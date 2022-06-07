import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./HydrationScreen.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HydrationScreen = () => {
  const date = new Date();
  const now = date.getDate();
  const [mls, setMls] = useState(0);
  const [perc, setPerc] = useState(0);
  const [color, setColor] = useState("#63CAEC");

  function onClickHandler(ml) {
    setMls(ml + mls);
    setPerc(Math.floor(((mls + ml) / 4000) * 100));
    localStorage.setItem(
      "hydration",
      JSON.stringify({
        date: now,
        percentage: Math.floor(((mls + ml) / 4000) * 100),
        drank: ml + mls,
      })
    );
  }

  // function reset() {
  //   localStorage.setItem(
  //     "hydration",
  //     JSON.stringify({
  //       date: now,
  //       percentage: 0,
  //       drank: 0,
  //     })
  //   );
  //   setMls(0);
  //   setPerc(0);
  //   setColor("#63CAEC");
  // }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("hydration"));
    if (data.date === now) {
      setMls(data.drank);
      setPerc(data.percentage);
    } else {
      setMls(0);
      setPerc(0);
    }
    if (perc >= 100) {
      setColor("#53e97e");
    }
  }, [now, perc]);

  return (
    <>
      <Navbar />
      <div className="ht-container">
        <div className="ht-box">
          <h1>HYDRATION TRACKER</h1>
          <div className="ht-content-container">
            <div
              style={{
                width: "13vw",
                height: "fit-content",
                marginLeft: "2vw",
              }}
            >
              <CircularProgressbar
                value={perc}
                strokeWidth={5}
                text={`${perc}%`}
                styles={buildStyles({
                  textSize: "15px",
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  pathColor: color,
                })}
              />
            </div>
            <div className="ht-right">
              <p style={{ textAlign: "center" }}>
                <span style={{ opacity: "0.3" }}>{mls}ml</span> ~ 4000ml
              </p>
              <div className="ht-btns">
                <div className="ht-btn" onClick={() => onClickHandler(100)}>
                  100ml
                </div>
                <div className="ht-btn" onClick={() => onClickHandler(120)}>
                  120ml
                </div>
                <div className="ht-btn" onClick={() => onClickHandler(200)}>
                  200ml
                </div>
                <div className="ht-btn" onClick={() => onClickHandler(500)}>
                  500ml
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ht-btn" onClick={reset}>
          Reset
        </div> */}
      </div>
    </>
  );
};

export default HydrationScreen;
