import React from "react";
import "../HomeStyle/FootEr.css";

const FootEr = () => {
  return (
    <div>
      <footer className="footer-list">
        <div className="container">
          <div className="row pt-3">
            <div className="col-md-6">
              <div className="row">
                <div className="col-4">
                  <p className="ErosAds">EROSADS</p>
                </div>
                <div className="col-4">
                  <div className="footer-item">
                    <p className="Contact">Contact</p>
                    <p className="Contact">Privacy</p>
                  </div>
                </div>
                <div className="col-4">
                  {" "}
                  <div className="footer-item">
                    <p className="Contact">Terms & Conditions</p>
                    <p className="Contact">Advertiser Agreement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-4">
                  {" "}
                  <div className="footer-item">
                    <p className="Contact">F.A.Q.</p>
                    <p className="Contact">About Eros Ads</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="footer-item">
                    <p className="Contact">2257 Exemption</p>
                    <p className="Contact">DMCA Complaints</p>
                  </div>
                </div>
                <div className="col-4">
                  {" "}
                  <p className="footer-About">About ErosAds</p>
                </div>
              </div>
            </div>
            <div className="col-md-9 ">
              <p className="Customization">
                Customization Services brought to you by Eros-guide.com™ All
                Things Erotic™. © 1997-2016 MPF Media Services GmbH
                Obergrundstrasse 73CH-6003 Luzern
              </p>
            </div>
            <div className="col-md-3 ">
              <p className="Trademarks">
                Read about out{" "}
                <span className="TrademarksIP ">Trademarks/IP</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FootEr;
