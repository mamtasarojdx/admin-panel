import React from "react";
import style from "./purchaseComparison.module.css";
import { RiCopyrightLine } from "react-icons/ri";

function PurchaseComparisonReport() {
  return (
    <>
      <div className="container" id={style.purchaseContent}>
        <div className="row mb-4">
          <div>
            {" "}
            <h5 className={style.item1}>Open Purchase Comparison Report</h5>
            <div>
              <span className={style.home}>Home /</span>
              <span className={style.item}>Open Purchase Comparison Report</span>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <table class="table table-bordered" id={style.CompBack}>
              <thead>
                <tr>
                  <th className={style.tableTh}>Previous Year - 2022</th>
                  <th>
                    <label>Month</label>

                    <select className={style.formSelect}>
                      <option>select</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Order</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Manually Closed Order</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Received Orders</td>
                  <td>5</td>
                </tr>

                <tr>
                  <td>Printed Orders</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>Emalled Orders</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Total Vendors</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <table class="table table-bordered" id={style.CompBack}>
              <thead>
                <tr>
                  <th className={style.tableTh}>Current Year - 2022</th>
                  <th>
                    <label>Month</label>

                    <select className={style.formSelect}>
                      <option>select</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Order</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Manually Closed Order</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Received Orders</td>
                  <td>5</td>
                </tr>

                <tr>
                  <td>Printed Orders</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>Emalled Orders</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Total Vendors</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>
        <hr className={style.footerHr} />
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

export default PurchaseComparisonReport;
