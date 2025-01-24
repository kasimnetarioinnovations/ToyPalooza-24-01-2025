import React from "react";
import "../Carousal/Carousal.css";
import Truck from "../../Assets/Image/truck.png";
import Duck from "../../Assets/Image/duck.png";
import Purse from "../../Assets/Image/purse.png";
import Playful from "../../Assets/Image/playful.png";
import "bootstrap/dist/css/bootstrap.min.css"; //mention this
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";

const Carousal = () => {
  return (
    <div className="carousal">
      <div className="container-fluid ">
        <div className="row align-items-center">
          <div className="playful-toys">
            <div className="carousal">
              {/* carousal */}
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  {/* First Slide */}
                  <div className="carousel-item active">
                    <div
                      className="d-flex align-items-center justify-content-center carousal-cards"
                      style={{ height: "253px" }}
                    >
                      <div className="carousal-img">
                        <img
                          src={Playful}
                          alt="Icon 1"
                          style={{ width: "177px" }}
                        />
                      </div>
                      <div className="">
                        <h1 className="toy-heading">
                          Playful toys to engage with
                        </h1>
                        <button
                          className="toy-button"
                          style={{
                            padding: "3px 10px",
                            border: "1px solid #8565d1",
                            borderRadius: "10px",
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Second Slide */}
                  <div className="carousel-item">
                    <div
                      className="d-flex align-items-center justify-content-center carousal-cards"
                      style={{ height: "253px" }}
                    >
                      <div className="carousal-img">
                        <img
                          src={Duck}
                          alt="Icon 1"
                          style={{ width: "177px" }}
                        />
                      </div>
                      <div className="">
                        <h1 className="toy-heading">
                          Hair Accessories for your cute princess
                        </h1>
                        <button
                          className="toy-button"
                          style={{
                            padding: "3px 10px",
                            border: "1px solid #8565d1",
                            borderRadius: "10px",
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Third Slide */}
                  <div className="carousel-item">
                    <div
                      className="d-flex align-items-center justify-content-center carousal-cards"
                      style={{ height: "253px" }}
                    >
                      <div className="carousal-img">
                        <img
                          src={Purse}
                          alt="Icon 1"
                          style={{ width: "177px" }}
                        />
                      </div>
                      <div className="">
                        <h1 className="toy-heading">Carry bags</h1>
                        <button
                          className="toy-button"
                          style={{
                            padding: "3px 10px",
                            border: "1px solid #8565d1",
                            borderRadius: "10px",
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Four Slide */}
                  <div className="carousel-item">
                    <div
                      className="d-flex align-items-center justify-content-center carousal-cards"
                      style={{ height: "253px" }}
                    >
                      <div className="carousal-img">
                        <img
                          src={Duck}
                          alt="Icon 1"
                          style={{ width: "177px" }}
                        />
                      </div>
                      <div className="">
                        <h1 className="toy-heading">
                          Stationary to enhance their intellegence
                        </h1>
                        <button
                          className="toy-button"
                          style={{
                            padding: "3px 10px",
                            border: "1px solid #8565d1",
                            borderRadius: "10px",
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Five Slide */}
                  <div className="carousel-item">
                    <div
                      className="d-flex align-items-center justify-content-center carousal-cards"
                      style={{ height: "253px" }}
                    >
                      <div className="carousal-img">
                        <img
                          src={Duck}
                          alt="Icon 1"
                          style={{ width: "177px" }}
                        />
                      </div>
                      <div className="">
                        <h1 className="toy-heading">School Bags</h1>
                        <button
                          className="toy-button"
                          style={{
                            padding: "3px 10px",
                            border: "1px solid #8565d1",
                            borderRadius: "10px",
                          }}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Controls */}
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span>
                  <TiArrowLeft className="arrow" />
                  
               
                  </span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span>
                  
                  <TiArrowRight className="arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
