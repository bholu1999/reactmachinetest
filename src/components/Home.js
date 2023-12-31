import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = (data = []) => {
  return (
    <>
      <section className="banner">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="container">
            <div className="row res_padd">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            </div>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/banner1.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/banner2.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/banner3.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about_us_area">
        <div className="container">
          <div className="row res_padd">
            <h1>Welcom To BazarMoynaguri</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla
              scelerisque erat in nam at efficitur tortor, vitae porttitor mi.
              Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit
              amet velit nec leo imperdiet.
            </h2>
            <img src="images/icon05.jpg" alt="" />

            <div className="linee"></div>

            <div className="aboput_boxx line_left">
              <img src="images/icon12.png" alt="" />
              <h3>Best Quality Product</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="aboput_boxx">
              <img src="images/icon11.png" alt="" />
              <h3>Free Shipping</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="aboput_boxx border_none line_right">
              <img src="images/icon10.png" alt="" />
              <h3>On Time Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <a href="#">Quality product at your door step</a>
          </div>
        </div>
      </div>
      <div className="slider_one_area">
        <div className="container">
          <div className="row res_padd">
            <div id="offer" className="owl-carousel testimonial-carousel-main">
              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon06.JPG" alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src="images/cruve.png" alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon08.jpg" alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon33.jpg" alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src="images/cruve.png" alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon34.jpg" alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon35.jpg" alt="" />
                  <div className="containtt_one">
                    <h1>Simply dummy Offer text here</h1>
                    <h2>100% Organic Vegetable</h2>
                    <span>
                      <img src="images/cruve.png" alt="" />
                      <a href="#">
                        CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="boxx_sg">
                  <img src="images/icon36.jpg" alt="" />
                  <div className="containtt_two">
                    <span>
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <a href="#">Call For Enquiry</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_products">
        <div className="container">
          <div className="row res_padd2">
            <h1>Our Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src="images/icon05.jpg" alt="" />

            <div className="linee"></div>
            <div>
              {data.products.map((data,key) => {
                return (
                  <>
                    <div className="product_box">
                      <div className="pro_image">
                        <a href="#">
                          <img src={data.image} alt="" />
                        </a>
                        <span className="enq01">
                          <a href="#">Call For Enquiry</a>
                        </span>
                      </div>
                      <div className="pro_desc">
                        <a href="#">{data.name}</a>
                        <p>Rs.40.00 </p>
                        <span className="pro_line">
                          <strong></strong>
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="small_banner">
        <div className="container">
          <div className="row rellati res_padd">
            <h1>If you have any quary please fell free to contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="latest_products">
        <div className="container">
          <div className="row rellati">
            <div className="lp_product"></div>

            <h1>Latest Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src="images/icon05.jpg" alt="" />

            <div className="linee"></div>

            <div
              id="latest_product_slider"
              className="owl-carousel testimonial-carousel-main rounded_pro"
            >
              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon30.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon29.png" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon28.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon27.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon26.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon30.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon29.png" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon28.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon27.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon26.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon30.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon29.png" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon28.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon27.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>

              <div className="item">
                <div className="lp_round">
                  <a href="#">
                    <img src="images/icon26.jpg" alt="" />
                  </a>
                </div>
                <a href="#">Product name show here</a>
                <p>Rs.40.00 </p>
                <a href="#" className="inqq">
                  Call For Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
