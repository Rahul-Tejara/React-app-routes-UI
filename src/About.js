import React from "react";
import d from "../";

/**
 * Simple about page (no navigation inside)
 */

export default function About() {
  return (
    // <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-6 col-lg-6">
            <div class="about_img">
              <img src="../assets/img/about.png" />
            </div>
          </div>
          <div class="col-md-12 col-md-6 col-lg-6">
            <div class="about_dating_content">
              <div class="datin_small_heading">
                <p>About Dating app</p>
                <span class="seprator"></span>
              </div>
              <div class="datin_heading">
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
              <div class="download_app">
                <div class="total_download">
                  <span class="d-icon">
                    <img src="assets/img/cloud-download.svg" />
                  </span>
                  <div class="count">
                    <h1>105 K</h1>
                    <span>+</span>
                  </div>
                  <p>Download App</p>
                </div>
                <div class="total_download">
                  <span class="d-icon">
                    <img src="./assets/img/heart-outline.svg" />
                  </span>
                  <div class="count">
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
