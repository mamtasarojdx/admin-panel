import React from "react";
import style from "./saleStyle.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";

function SalesReport() {
  return (
    <>
      <div>
        <div className="container" id={style.saleContent}>
          <div className="row d-flex mb-4 mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                {" "}
                <h5 className={style.item1}>Sales Report</h5>
                <div>
                  <span className={style.home}>Home /</span>
                  <span className={style.item}>Sales Report</span>
                </div>
              </div>

              <div className={style.searchBar}>
                <div className={style.search}>Search by</div>
                <div className="d-flex mt-3">
                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.CustomerName}>
                    <div class="form-group">
                      <label for="name">Customer Name</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.memo}>
                    <div class="form-group">
                      <label for="name">Memo</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2" id={style.CustomerPO}>
                    <div class="form-group">
                      <label for="name">PO</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerOrder}>
                    <div class="form-group">
                      <label>Order Type</label>
                      <select class={style.formSelect}>
                        <option>select</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerPrice}>
                    <div class="form-group ">
                      <label for="stock">Price</label>
                      <select class={style.formSelect}>
                        <option>High to Low</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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

              <div className="d-flex mt-4">
                <div className="col-lg-4 col-md-4 col-sm-4" id={style.sales1}>
                  <div className={style.salePart}>
                    Total Orders <span className={style.sale1}>| 2023</span>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6 mt-2" id={style.purchase}>
                      <BsFillBagCheckFill className={style.purchase} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mt-2 mx-3 mt-3">
                      <div>2999</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 mx-3" id={style.sales2}>
                  <div className={style.salePart}>
                    Total Revenue <span className={style.sale1}>| 2023</span>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6 mt-2" id={style.mobile}>
                      <FaMobileRetro className={style.mobile} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mt-2 mx-3 mt-3">
                      <div>$9.2999</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4" id={style.sales3}>
                  <div className={style.salePart}>
                    Largest Orders<span className={style.sale1}>| 2023</span>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="mt-2" id={style.cogs}>
                      <BsFillBoxSeamFill className={style.cogs} />
                    </div>
                    <div className="mx-4">
                      <div className={style.order}>KSA 2nd Order</div>
                      <span className={style.math0}>(99748900)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4" id={style.table}>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>PO Number</th>
                      <th>Customer Name</th>
                      <th>Memo</th>
                      <th>Order Type</th>
                      <th>Quantity</th>
                      <th>Subtotal Price</th>
                      <th>Discount</th>
                      <th>Tax</th>
                      <th>Balance Remaining</th>
                      <th>Dated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KSA 2nd Order</td>
                      <td>Reem KSA</td>
                      <td>$934.39</td>
                      <td>KSA 2nd Order</td>
                      <td>Web</td>
                      <td>3,9099</td>
                      <td>$566.56</td>
                      <td>$366.56</td>

                      <td>$566.56444</td>
                      <td>Nov 03 2023</td>
                    </tr>
                    <tr>
                      <td>KSA 2nd Order</td>
                      <td>Reem KSA</td>
                      <td>$934.39</td>
                      <td>KSA 2nd Order</td>
                      <td>Web</td>
                      <td>3,9099</td>
                      <td>$566.56</td>
                      <td>$366.56</td>

                      <td>$566.56444</td>
                      <td>Nov 03 2023</td>
                    </tr>
                    <tr>
                      <td>KSA 2nd Order</td>
                      <td>Reem KSA</td>
                      <td>$934.39</td>
                      <td>KSA 2nd Order</td>
                      <td>Web</td>
                      <td>3,9099</td>
                      <td>$566.56</td>
                      <td>$366.56</td>

                      <td>$566.56444</td>
                      <td>Nov 03 2023</td>
                    </tr>
                  </tbody>
                </table>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesReport;
