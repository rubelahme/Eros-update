import React from "react";
import RightSite from "./RightSite";
import "../HomeStyle/HeadEr.css";
import Login from "./Login";

const HeadEr = () => {
  return (
    <div>
      <div className="Header1">
        <div className="container">
          <div className="row pt-4">
            <div className="col-lg-4">
              <Login></Login>
            </div>
            <div className="col-lg-8">
              <RightSite></RightSite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadEr;
