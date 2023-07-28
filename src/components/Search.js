import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = (data) => {

  const location = useLocation();
  let [filterData, setfilterData] = useState([]);

  useEffect(() => {
    setfilterData(data.products);
  }, []);

  const filterResult = (id) => {
    let subcatdata = data.products.filter((subdata) => {
      return subdata.id == id;
    });
    setfilterData(subcatdata[0]);
  };
  console.log(filterData);

  const onChange = (e) => {
    let val = e.target.value;
    val != 0 ? filterResult(val) : setfilterData(data.products);
  };

  return (
    <>
      <div className="search_main_section">
        <div className="container">
          <div className="row res_padd">
            <div className="bread_crumb">
              <a href="#">Home</a>
              <span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <a href="#">Vegetables</a>
            </div>

            <div className="mobile_filter">
              {" "}
              <i className="fa fa-filter" aria-hidden="true"></i>
              <p>Show Filter</p>
            </div>

            <div className="laft_search_panel">
              <h3>Filter Options</h3>

              <div className="form_group" style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Keyword"
                  className="search-input"
                />
                <img src="images/icon36.png" className="search_icon" />
              </div>

              <div className="form_group">
                <label className="search_label">Category</label>
                <select className="slectt" onChange={onChange}>
                  <option value={0}>All Category</option>
                  {data.products.map((data, key) => {
                    return <option value={data.id}>{data.name}</option>;
                  })}
                </select>
              </div>

              <div className="form_group">
                <label className="search_label">Sub Category</label>
                <ul className="c_ul">
                  <li>
                    <label className="contect_container_checkBox">
                      Sub Category one
                      <input type="checkbox" checked="checked" name="text" />
                      <span className="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="contect_container_checkBox">
                      Sub Category two
                      <input type="checkbox" checked="checked" name="text" />
                      <span className="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="contect_container_checkBox">
                      Sub Category
                      <input type="checkbox" checked="checked" name="text" />
                      <span className="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="contect_container_checkBox">
                      Sub Categoru name here
                      <input type="checkbox" checked="checked" name="text" />
                      <span className="contect_checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="contect_container_checkBox">
                      Sub Category
                      <input type="checkbox" checked="checked" name="text" />
                      <span className="contect_checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="form_group">
                <label className="search_label">Price Range</label>
                <div className="slider_rnge">
                  <div
                    id="slider-range"
                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  >
                    <div
                      className="ui-slider-range ui-widget-header ui-corner-all"
                      style={{ left: 0, width: 100 }}
                    ></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      style={{ left: 0 }}
                    ></span>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      style={{ left: 100 }}
                    ></span>
                  </div>
                  <span className="range-text">
                    <input
                      type="text"
                      className="price_numb"
                      readOnly
                      id="amount"
                    />
                  </span>
                </div>
              </div>

              <button type="submit" className="search-submit1">
                Filter
              </button>
            </div>
            <div className="right_search_panel">
              <div className="evnt_shot_by_main">
                <label className="event-sort">
                  {filterData.name ? filterData.name : "All Categories"}
                </label>
                <div className="sort-filter">
                  <p>Sort by :</p>
                  <select className="sort-select">
                    <option>Select</option>
                    <option>Price - Low to High</option>
                    <option>Price - High to Low </option>
                  </select>
                </div>
              </div>
              {filterData.sub_categories ? (
                <div>
                  {filterData.sub_categories &&
                    filterData.sub_categories.map((data, key) => {
                      return (
                        <>
                          <div className="search_proo">
                            <div className="srch_pic_box">
                              <img src={data.image} alt="" />
                              <span>
                                <a href="#">Call For Enquiry</a>
                              </span>
                            </div>
                            <div className="srch_dtls_box">
                              <a href="#">{data.name}</a>
                              <p>Rs.40.00</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              ) : (
                <div>
                  {filterData.map((alldata) => {
                    return (
                      <>
                        {alldata.sub_categories && alldata.sub_categories.map((data) => (
                          <div className="search_proo">
                            <div className="srch_pic_box">
                              <img src={data.image} alt="" />
                              <span>
                                <a href="#">Call For Enquiry</a>
                              </span>
                            </div>
                            <div className="srch_dtls_box">
                              <a href="#">{data.name}</a>
                              <p>Rs.40.00</p>
                            </div>
                          </div>
                        ))}
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
