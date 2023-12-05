import React from "react";
import style from "./customerStyle.module.css";
import { RiCopyrightLine } from "react-icons/ri";

function CustomerComparisonReport() {
  return (
    <>
      <div className="container" id={style.customerContent}>
        <div className="row mb-4" id={style.itemBack}>
          <div>
            {" "}
            <h5 className={style.item1}>Customer Comparison Report</h5>
            <div>
              <span className={style.home}>Home /</span>
              <span className={style.item}>Customer Comparison Report</span>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12" id={style.table}>
            <div className="d-flex mb-3">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="text-start mx-2">Report-2023</div>{" "}
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                <label>Month</label>

                <select className={style.formSelect}>
                  <option>select</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Customers</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Apr</th>
                  <th>May</th>
                  <th>Jun</th>
                  <th>Jul</th>
                  <th>Aug</th>
                  <th>Sep</th>
                  <th>Oct</th>
                  <th>Nov</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amazon</td>
                  <td>999</td>
                  <td>$9.9</td>
                  <td>$934.39</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                </tr>
                <tr>
                  <td>Bodner Emiline</td>
                  <td>999</td>
                  <td>$9.9</td>
                  <td>$934.39</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                </tr>
                <tr>
                  <td>Grand Total</td>
                  <td>999</td>
                  <td>$9.9</td>
                  <td>$934.39</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                  <td>934.39</td>
                  <td>0</td>
                  <td>556</td>
                  <td>627828</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>

        <hr className={style.tableHr} />
        <div className="text-center">
          <span>
            <RiCopyrightLine /> Copyright
          </span>
          <span className={style.demeter}>Demeter Fragrances.</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}

export default CustomerComparisonReport;
