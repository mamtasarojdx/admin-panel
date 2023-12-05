import React from "react";
import style from "./purchaseStyle.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { RiCopyrightLine } from "react-icons/ri";

function PurchaseOrderReport() {
  return (
    <>
      <div>
        <div className="container" id={style.purchaseContent}>
          <div className="row d-flex mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                {" "}
                <h5 className={style.item1}>Open Purchase Order Report</h5>
                <div>
                  <span className={style.home}>Home /</span>
                  <span className={style.item}>Open Purchase Order Report</span>
                </div>
              </div>

              <div className={style.searchBar}>
                <div className={style.search}>Search by</div>
                <div className="d-flex mt-3">
                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.CustomerName}>
                    <div class="form-group">
                      <label for="name">Vender Name</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.memo}>
                    <div class="form-group">
                      <label for="name">Memo</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerPrice}>
                    <div class="form-group ">
                      <label for="stock">Price</label>
                      <select className={style.formSelect}>
                        <option>High to Low</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerOrder}>
                    <div class="form-group">
                      <label for="stock">Order Status</label>
                      <select className={style.formSelect}>
                        <option>High to Low</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.DateRange}>
                    <div class="form-group ">
                      <label for="stock">Date Range</label>
                      <input type="date" class="form-control" id={style.name} name="" />
                    </div>

                    <div className="text-end">
                      <button type="button" id={style.searchBtn}>
                        <IoSearchOutline className={style.searchIcon} />
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="mt-4" id={style.table}>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Ref Number</th>

                      <th>Memo</th>
                      <th>Order Status</th>

                      <th>Total Price</th>
                      <th>Vendor Name</th>
                      <th>Dated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>{" "}
              </div>
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
      </div>
    </>
  );
}

export default PurchaseOrderReport;
