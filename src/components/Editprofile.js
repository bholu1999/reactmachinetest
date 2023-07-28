import React, { useEffect, useState } from "react";
import axios from "axios";

const Editprofile = () => {
  let [profdata, setprofData] = useState({});

  // useEffect(() => {
  //      setprofData(JSON.parse(localStorage.getItem("user")))
  // }, []);

  const handleData = (e) => {
    setprofData({...profdata, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!profdata.name || !profdata.email || !profdata.phone){
      alert("Name, Email, Phone is required");
    }
    console.log(profdata)
    if (profdata.new_password != profdata.confirm_password) {
      alert("Password Must be Same");
    } else {
      axios.post("https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile",profdata,{
            headers : {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
      })
        .then((res) => {
          if (res.data.error) {
            alert("Invalid Data");
            console.log(res.data)
          } else {
            alert("Edit Profile Succesfull");
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data.result.userData));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }

  return (
    <>
      <div style={{ paddingTop: 170 }}>
        <div className="container">
          <div className="mainDasbordInr">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 pl-0">
                <div className="dasbordLeftsec">
                  <a
                    href="#url"
                    className="showmeu"
                    data-toggle="collapse"
                    data-target="#demo"
                  >
                    <i className="fa fa-bars"></i>Show Menus
                  </a>
                  <div className="dasbordLeft ">
                    <div className="profibx">
                      <em>
                        <img src="images/dachprofi.jpg" alt="" />
                      </em>
                      <strong>Rabin Mnna</strong>
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/star1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/star2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <span>(410)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="dasbordLeftlink">
                      <ul>
                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico1.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="#" className="activ">
                            <span>
                              <img
                                src="images/dashico2.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico3.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            My Order
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico10.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            My Favorite
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico4.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Reviews
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico7.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Messages<em>10</em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <img
                                src="images/dashico8.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Notifications
                            <em>14</em>
                          </a>
                        </li>
                        <li>
                          <a href="login.html">
                            <span>
                              <img
                                src="images/dashico9.png"
                                alt=""
                                className="dashico1"
                              />
                            </span>
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 pr-0">
                <div className="dasbordRightlink">
                  <h1>Edit Profile</h1>
                  <div className="dasbordRightBody">
                    <div className="editProformBx">
                      <form onSubmit={handleSubmit}>
                        <div className="editProformir">
                          <div className="row">
                            <div className="col-md-4 col-sm-12">
                              <div className="iputBx">
                                <label>Name</label>
                                <input
                                  type="text"
                                  placeholder="Enter here"
                                  name="name"
                                  value={profdata.name}
                                  onChange={handleData}
                                />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <div className="iputBx">
                                <label>Email</label>
                                <input 
                                type="text"
                                placeholder="Enter here"
                                name="email"
                                value={profdata.email}
                                onChange={handleData}
                                />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <div className="iputBx">
                                <label>Phone</label>
                                <input 
                                type="text" 
                                placeholder="Enter here" 
                                name="phone"
                                value={profdata.phone}
                                onChange={handleData}
                                />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="iputBx">
                                <label>About me</label>
                                <textarea placeholder="Enter your description here..."
                                name="about_me"
                                value={profdata.about_me}
                                onChange={handleData}
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-md-5 col-sm-6">
                              <div className="iputBx">
                                <label>Date of Birth</label>
                                <input
                                  type="text"
                                  className="datepicker"
                                  placeholder="Enter here"
                                  name="date_of_birth"
                                  value={profdata.date_of_birth}
                                  onChange={handleData}
                                />
                              </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                              <div className="genfil">
                                <span>Gender</span>
                                <ul>
                                  <li>
                                    <input
                                      type="radio"
                                      id="radio1"
                                      name="gender"
                                      value={profdata.gender}
                                      onChange={handleData}
                                    />
                                    <label>Male</label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="radio2"
                                      name="gender"
                                      value={profdata.gender}
                                      onChange={handleData}
                                    />
                                    <label value="F">Female</label>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form_group edt_checkk">
                                <label className="search_label">Travel</label>
                                <ul className="c_ul">
                                  <li>
                                    <label className="contect_container_checkBox">
                                      Bus
                                      <input
                                        type="checkbox"
                                        checked=""
                                        name="text"
                                      />
                                      <span className="contect_checkmark"></span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="contect_container_checkBox">
                                      Car
                                      <input type="checkbox" name="text" />
                                      <span className="contect_checkmark"></span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="contect_container_checkBox">
                                      Track
                                      <input type="checkbox" name="text" />
                                      <span className="contect_checkmark"></span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="contect_container_checkBox">
                                      Walk
                                      <input type="checkbox" name="text" />
                                      <span className="contect_checkmark"></span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="contect_container_checkBox">
                                      Scooter
                                      <input type="checkbox" name="text" />
                                      <span className="contect_checkmark"></span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form_fild_area_m frm_grp arro">
                                <label>Language </label>
                                <select>
                                  <option value=""></option>
                                  <option value="">Htmuyyiyyuyu uyytuyl</option>
                                  <option value="">Htmuyyiyyuyu uyytuyl</option>
                                  <option value="">Htmuyyiyyuyu uyytuyl</option>
                                  <option value="">Htmuyyiyyuyu uyytuyl</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="uplodimg">
                                <span>Profile Image</span>
                                <div className="uplodimgfil">
                                  <input
                                    type="file"
                                    name="file-1[]"
                                    id="file-1"
                                    className="inputfile inputfile-1"
                                    data-multiple-caption="{count} files selected"
                                    multiple
                                  />
                                  <label for="file-1">
                                    Click here to Upload Profile Image
                                    <img src="images/clickhe.png" alt="" />
                                  </label>
                                </div>
                                <div className="uplodimgfilimg">
                                  <em>
                                    <img src="images/uplodimg.jpg" alt="" />
                                  </em>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="locatioSec">
                            <h3>Location</h3>
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <div className="iputBx">
                                  <label>Country</label>
                                  <select>
                                    <option>Select</option>
                                    <option>Select1</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="iputBx">
                                  <label>State</label>
                                  <input type="text" placeholder="Enter here" 
                                  name="state"
                                  value={profdata.state}
                                  onChange={handleData}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    placeholder="Enter your full address"
                                    name="city"
                                    value={profdata.city}
                                    onChange={handleData}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="locatioSec">
                            <h3>Change password</h3>
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <div className="iputBx">
                                  <label>Current password</label>
                                  <input
                                    type="password"
                                    placeholder="Enter here"
                                    name="password"
                                    value={profdata.password}
                                    onChange={handleData}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6">
                                <div className="iputBx">
                                  <label>New password</label>
                                  <input
                                    type="password"
                                    placeholder="Enter here"
                                    name="new_password"
                                    value={profdata.new_password}
                                    onChange={handleData}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="iputBx">
                                  <label>Confirm password</label>
                                  <input
                                    type="password"
                                    placeholder="Enter here"
                                    name="confirm_password"
                                    value={profdata.confirm_password}
                                    onChange={handleData}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="footdashSec">
                            <button
                            type="submit"
                            className="subbtn"
                            >
                            Save all Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
