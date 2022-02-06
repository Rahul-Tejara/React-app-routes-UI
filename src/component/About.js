import React from "react";
import about from "../../assets/img/about.png";
import cloud from "../../assets/img/cloud-download.svg";
import heart from "../../assets/img/heart-outline.svg";

export default function About() {
  return (
    // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-6 col-lg-6">
            <div className="about_img">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-md-12 col-md-6 col-lg-6">
            <div className="about_dating_content">
              <div className="datin_small_heading">
                <p>About Dating app</p>
                <span className="seprator"></span>
              </div>
              <div className="datin_heading">
                <h1>
                  Love Can Happen
                  <br />
                  Anywhere, Anytime
                </h1>
                <p>
                  Dating Room Agency is a long established dating agency (est.
                  since 1966). We have successfully connected thousands of
                  singles together with our personal 'one on one' compatibility
                  system. Our database of single men and women is the largest in
                  the area, so we really do have somebody for everyone.
                </p>
              </div>
              <div className="download_app">
                <div className="total_download">
                  <span className="d-icon">
                    <img src={cloud} alt="" />
                  </span>
                  <div className="count">
                    <h1>105 K</h1>
                    <span>+</span>
                  </div>
                  <p>Download App</p>
                </div>
                <div className="total_download">
                  <span className="d-icon">
                    <img src={heart} alt="" />
                  </span>
                  <div className="count">
                    <h1>90%</h1>
                  </div>
                  <p>Successful Relationship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
