import React from "react";
import topImg from "../../assets/img/top_img.png";
import apple from "../../assets/img/apple.png";
import googlePlay from "../../assets/img/google_play.png";

export default function Home() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="top_banener_section">
          <div className="top_img">
            <img src={topImg} alt="hero_image" />
          </div>
          <div className="find_love">
            <h1>Find the love of your life</h1>
          </div>
          <p>
            Still looking for your significant other? Loven is the place for
            you! Join us now to meet single men and women worldwide
          </p>
          <div className="apps_link">
            <a href="javascript:;" className="apple">
              <img src={apple} alt="" />
            </a>
            <a href="javascript:;" className="google">
              <img src={googlePlay} />
            </a>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
