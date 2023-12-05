import React from "react";
import style from "./Dashboard.module.css";
import ApexColumnBarChart from "./ApexColumnBarChart";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoDot } from "react-icons/go";
import DonutChart from "./DonutChart";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

import { FaBasketShopping } from "react-icons/fa6";

import { FaMobileRetro } from "react-icons/fa6";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";

function Dashboard() {
  return (
    <>
      {/* -----------Sales,Open Purchase,Cogs-------- */}
      <div className="container" id={style.saleContent}>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4" id={style.sales1}>
            <div className={style.salePart}>
              Sales <span className={style.sale1}>| 2023</span>
            </div>
            <div className="d-flex mt-2">
              <div className="mt-2" id={style.mobile}>
                <FaMobileRetro className={style.mobile} />
              </div>
              <div className="mx-4">
                <div>$966,645.27</div>
                <span className={style.math34}>34.947</span> <span>total</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4" id={style.sales2}>
            <div className={style.salePart}>
              Open Purchase Order <span className={style.sale1}>| 2023</span>
            </div>
            <div className="d-flex mt-2">
              <div className="mt-2" id={style.purchase}>
                <BsFillBagCheckFill className={style.purchase} />
              </div>
              <div className="mx-4">
                <div>$86,322.31</div>
                <span className={style.math58}>58</span> <span>total</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4" id={style.sales2}>
            <div className={style.salePart}>
              Cog <span className={style.sale1}>| 2023</span>
            </div>
            <div className="d-flex mt-2">
              <div className="mt-2" id={style.cogs}>
                <BsFillBoxSeamFill className={style.cogs} />
              </div>
              <div className="mx-4">
                <div>$86,322.31</div>
                <span className={style.math0}>0</span> <span>total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------graph,yearly,monthly---------- */}
      <div className="container" id={style.graphContent}>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="card-body" id={style.chart}>
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Sales Overview</h5>
                </div>
                <div>
                  <select class="form-select">
                    <option value="1">March 2023</option>
                    <option value="2">April 2023</option>
                    <option value="3">May 2023</option>
                    <option value="4">June 2023</option>
                  </select>
                </div>
              </div>

              <div className="mt-3" id={style.apexGraph}>
                {" "}
                <ApexColumnBarChart />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div id={style.yearly} className="pt-4 pb-5 ">
              <div className="d-flex">
                <div className="col-lg-6 col-md-6 col-sm-6 text-start mx-3">
                  <h5 className="mb-4">Yearly Breakup</h5>
                  <h5 className="fw-bold">$36,358</h5>
                  <div className="mt-2">
                    {" "}
                    <IoIosArrowRoundBack className={style.arrow1} /> <span>+9% last year</span>
                  </div>

                  {/* ------------dot 2023------- */}
                  <div className="d-flex mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div>
                        <GoDot className={style.dot1} /> <span>2023</span>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div>
                        <GoDot className={style.dot2} /> <span>2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -----------donut chart---------- */}
                <div className="col-lg-6 col-md-6 col-sm-6" id={style.DonutChart}>
                  <DonutChart />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div id={style.monthlyEarning} className="pt-4 pb-5">
              <div className="d-flex ">
                <div className="col-lg-6 col-md-6 col-sm-6 text-start mx-3">
                  <h5> Monthly Earnings </h5>

                  <div className="mt-4">
                    <h4>$6,820</h4>
                    <IoIosArrowRoundBack className={style.arrow2} /> <span>+9% last year</span>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div id={style.dolar}>
                    {" "}
                    <PiCurrencyDollarSimpleBold id={style.dolarIcon} />
                  </div>
                </div>
              </div>

              {/* <RealTimeChart/> */}
            </div>
          </div>
        </div>
      </div>

      {/* ----------recent transactions---------- */}
      <div className="container" id={style.recentContent}>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div id={style.Transactions} className="pt-4">
              <h5 className="mx-3 mb-4">Recent Transactions</h5>

              {/* ------------1st line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">09:30</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">Payment received from John Doe of $385.90</div>
              </div>

              {/* ------------2nd line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">10:00</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">
                  <div className={style.new}>New sale recorded</div>
                  <a href="">#ML-3467</a>
                </div>
              </div>

              {/* ------------3rd line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">12:00</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot2} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">Payment was made of $64.95 to Michael</div>
              </div>

              {/* ------------4th line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">09:30</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot3} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">
                  <div className={style.new}>New sale recorded</div>
                  <a href="">#ML-3467</a>
                </div>
              </div>

              {/* ------------5th line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">09:30</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot4} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">
                  <div className={style.new}>New arrival recorded</div>
                </div>
              </div>

              {/* ------------6th line------------ */}
              <div className="d-flex text-center" id={style.transactionContent}>
                <div className="col-lg-5 col-md-5 col-sm-5 text-end">12:00</div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <GoDot className={style.GoDot2} />
                  <div className={style.vertical2}></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 text-start">Payment Done</div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-8">
            <div id={style.budget}>
              <h5 className=" ">Recent Transactions</h5>

              {/* ------------id data---------- */}
              <div className="d-flex mt-4 mb-4">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div>Id</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div>Assigned</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>Name</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>priority</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>Budget</div>
                </div>
              </div>

              {/* ----------------1st time----------- */}
              <div className="d-flex mt-4 mb-4">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div>1</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className={style.nameSunil}>Sunil Joshi</div>
                    <div className={style.profile}>Web Designer</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className={style.name}>Elite Admin</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <button className={style.btnLow}>Low</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>$3.9</div>
                </div>
              </div>

              {/* ----------------2nd time----------- */}
              <div className="d-flex mt-4 mb-4 ">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div>Id</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className={style.nameSunil}>Andrew McDownland</div>
                    <div className={style.profile}>Project Manager</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className={style.name}>Real Homes WP Theme</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <button className={style.btnMedium}>Medium</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>$24.5K</div>
                </div>
              </div>
              {/* ------------------3rd time-------- */}

              <div className="d-flex mt-4 mb-4">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div>Id</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className={style.nameSunil}>Christopher Jamil</div>
                    <div className={style.profile}>Project Manager</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className={style.name}>MedicalPro WP Theme</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <button className={style.btnHigh}>High</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>$12.8K</div>
                </div>
              </div>

              {/* ----------------4th time--------- */}

              <div className="d-flex mt-4 mb-5">
                <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div>Id</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className={style.nameSunil}>Nirav Joshi</div>
                    <div className={style.profile}>Frontend Engineer</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className={style.name}>Hosting Press HTML</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <button className={style.btnCritical}>Critical</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div>$2.4K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------images---------- */}
      <div className="container" id={style.imageContent}>
        <div className="row d-flex" id={style.images}>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div class="card" id={style.imageBack}>
              <img src="https://themewagon.github.io/Modernize/src/assets/images/products/s4.jpg" class="card-img-top" />
              <p className={style.basket}>
                <FaBasketShopping />
              </p>
              <div class="card-body">
                <h5 class="card-title" id={style.cardTitle}>
                  Boat Headphone
                </h5>
                <p class="card-text ">
                  <div className="d-flex">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <h6 className={style.dolar5}>$50</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id={style.dolar6}>
                      $65
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8" id={style.star}>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div class="card" id={style.imageBack}>
              <img src="https://themewagon.github.io/Modernize/src/assets/images/products/s5.jpg" class="card-img-top" />
              <p className={style.basket}>
                <FaBasketShopping />
              </p>
              <div class="card-body">
                <h5 class="card-title" id={style.cardTitle}>
                  MacBook Air Pro
                </h5>
                <p class="card-text ">
                  <div className="d-flex">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <h6 className={style.dolar5}>$65</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id={style.dolar6}>
                      $900
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8" id={style.star}>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>{" "}
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div class="card" id={style.imageBack}>
              <img src="https://themewagon.github.io/Modernize/src/assets/images/products/s7.jpg" class="card-img-top" />
              <p className={style.basket}>
                <FaBasketShopping />
              </p>
              <div class="card-body">
                <h5 class="card-title" id={style.cardTitle}>
                  Boat Headphone
                </h5>
                <p class="card-text ">
                  <div className="d-flex">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <h6 className={style.dolar5}>$150</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id={style.dolar6}>
                      $200
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8" id={style.star}>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>{" "}
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div class="card" id={style.imageBack}>
              <img src="https://themewagon.github.io/Modernize/src/assets/images/products/s11.jpg" class="card-img-top" />
              <p className={style.basket}>
                <FaBasketShopping />
              </p>
              <div class="card-body">
                <h5 class="card-title" id={style.cardTitle}>
                  Boat Headphone
                </h5>
                <p class="card-text ">
                  <div className="d-flex">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <h6 className={style.dolar5}>$28</h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id={style.dolar6}>
                      $345
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8" id={style.star}>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                      <span>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* ----------footer content------- */}
        <div className={style.lastContent}>
          Design and Developed by
          <a href="https://adminmart.com/">AdminMart.com</a> Distributed by
          <a href="https://themewagon.com/">ThemeWagon</a>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
