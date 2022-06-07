import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./PomodoroScreen.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PomodoroScreen = () => {
  const [toggleTabs, setToggleTabs] = useState(1);
  const [showSettings, setShowSettings] = useState(false);

  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(10);
  const [longBreakTime, setLongBreakTime] = useState(30);
  const [isPause, setIsPause] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  function setMode(index) {
    setToggleTabs(index);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (typeof pomodoroTime === "string") {
      setPomodoroTime(pomodoroTime);
    }
    if (typeof shortBreakTime === "string") {
      setShortBreakTime(shortBreakTime);
    }
    if (typeof longBreakTime === "string") {
      setLongBreakTime(longBreakTime);
    }
    setShowSettings(false);
  }

  function pomodoroHander(e) {
    setPomodoroTime(e.target.value);
  }

  function sbHandler(e) {
    setShortBreakTime(e.target.value);
  }

  function lbHandler(e) {
    setLongBreakTime(e.target.value);
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <Navbar />
      <div
        className="pd-content"
        style={
          toggleTabs === 1
            ? { backgroundColor: "#ef6565" }
            : toggleTabs === 2
            ? { backgroundColor: "#9cc0f3" }
            : toggleTabs === 3
            ? { backgroundColor: "#c99cf3" }
            : { backgroundColor: "#f1b151" }
        }
      >
        <div className="pd-box">
          <div className="pd-header">
            <h1>POMODORO</h1>
            <i
              className="material-icons pd-settings"
              onClick={() => {
                setShowSettings(!showSettings);
              }}
            >
              {showSettings ? "close" : "settings"}
            </i>
          </div>
          <hr />
          {showSettings ? (
            <>
              <h2
                style={{
                  textAlign: "center",
                  userSelect: "none",
                  cursor: "default",
                }}
              >
                Settings
              </h2>
              <hr />
              <div className="pd-settings-panel">
                <form onSubmit={onSubmitHandler}>
                  <div className="pd-settings-center">
                    <label
                      className="pd-settings-pomorodo"
                      for="pd-pomodoro"
                      style={{ display: "block" }}
                    >
                      Pomodoro
                    </label>
                    <input
                      type="text"
                      name="pd-pomodoro"
                      value={pomodoroTime}
                      onChange={pomodoroHander}
                    />
                    <label
                      className="pd-settings-sb"
                      for="pd-sb"
                      style={{ display: "block" }}
                    >
                      Short Break
                    </label>
                    <input
                      type="text"
                      name="pd-sb"
                      value={shortBreakTime}
                      onChange={sbHandler}
                    />
                    <label
                      className="pd-settings-lb"
                      for="pd-lb"
                      style={{ display: "block" }}
                    >
                      Long Break
                    </label>
                    <input
                      type="text"
                      name="pd-lb"
                      value={longBreakTime}
                      onChange={lbHandler}
                    />
                    <button id="pd-settings-btn" type="submit">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="pd-btns">
                <div
                  className={
                    toggleTabs === 1 ? "pd-btn pd-btn-active" : "pd-btn"
                  }
                  onClick={() => setMode(1)}
                >
                  Pomodoro
                </div>
                <div
                  className={
                    toggleTabs === 2 ? "pd-btn pd-btn-active" : "pd-btn"
                  }
                  onClick={() => setMode(2)}
                >
                  Short Break
                </div>
                <div
                  className={
                    toggleTabs === 3 ? "pd-btn pd-btn-active" : "pd-btn"
                  }
                  onClick={() => setMode(3)}
                >
                  Long Break
                </div>
              </div>
              <hr />
              {/* Pomodoro */}
              <div
                className={
                  toggleTabs === 1 ? "pd-timer pd-show-timer" : "pd-timer"
                }
              >
                <div
                  style={{
                    width: "190px",
                    height: "fit-content",
                    marginLeft: "12.7rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  <CircularProgressbar
                    value={`1`}
                    strokeWidth={5}
                    text={`${pomodoroTime}`}
                    styles={buildStyles({
                      textSize: "20px",
                      textColor: "#000",
                      trailColor: "#d9d9d9q",
                      pathColor: "#f76969",
                    })}
                  />
                </div>
                <div className="pd-funcs">
                  <div className="pd-btn">Stop</div>
                  <div className="pd-btn">Start</div>
                  <div className="pd-btn">Reset</div>
                </div>
              </div>
              {/* Short Break */}
              <div
                className={
                  toggleTabs === 2 ? "pd-timer pd-show-timer" : "pd-timer"
                }
              >
                <div
                  style={{
                    width: "190px",
                    height: "fit-content",
                    marginLeft: "12.7rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  <CircularProgressbar
                    value={`1`}
                    strokeWidth={5}
                    text={shortBreakTime}
                    styles={buildStyles({
                      textSize: "20px",
                      textColor: "#000",
                      trailColor: "#d9d9d9q",
                      pathColor: "#63CAEC",
                    })}
                  />
                </div>
                <div className="pd-funcs">
                  <div className="pd-btn">Stop</div>
                  <div className="pd-btn">Start</div>
                  <div className="pd-btn">Reset</div>
                </div>
              </div>
              {/*Long Break */}
              <div
                className={
                  toggleTabs === 3 ? "pd-timer pd-show-timer" : "pd-timer"
                }
              >
                <div
                  style={{
                    width: "190px",
                    height: "fit-content",
                    marginLeft: "12.7rem",
                    marginTop: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  <CircularProgressbar
                    value={`1`}
                    strokeWidth={5}
                    text={longBreakTime}
                    styles={buildStyles({
                      textSize: "20px",
                      textColor: "#000",
                      trailColor: "#d9d9d9q",
                      pathColor: "#c381e3",
                    })}
                  />
                </div>
                <div className="pd-funcs">
                  <div className="pd-btn">Stop</div>
                  <div className="pd-btn">Start</div>
                  <div className="pd-btn">Reset</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PomodoroScreen;
