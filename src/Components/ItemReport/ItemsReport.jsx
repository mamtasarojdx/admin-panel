import React from "react";
import style from "./itemStyle.module.css";
import { IoSearchOutline } from "react-icons/io5";

function ItemsReport() {
  return (
    <>
      <div>
        <div className="container" id={style.itemContent}>
          <div className="row d-flex mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                {" "}
                <h5 className={style.item1}>Items Report</h5>
                <div>
                  <span className={style.home}>Home /</span>
                  <span className={style.item}>Items Report</span>
                </div>
              </div>

              <div className={style.searchBar}>
                <div className={style.search}>Search by</div>
                <div className="d-flex mt-3">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div class="form-group">
                      <label for="name">Items Name</label>
                      <input type="text" class="form-control" id={style.name} name="" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 mx-2">
                    {" "}
                    <div class="form-group ">
                      <label for="stock">Stock Status</label>
                      <select class={style.formSelect}>
                        <option>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>{" "}
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 mx-2">
                    <div class="form-group">
                      <label for="stock">Status</label>
                      <select class={style.formSelect}>
                        <option>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 mx-2">
                    <div class="form-group">
                      <label for="stock">Status</label>
                      <select class={style.formSelect}>
                        <option>select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 mx-2">
                    <div class="form-group ">
                      <label for="stock">Sale Price</label>
                      <select class={style.formSelect}>
                        <option>High to Low</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="text-end">
                      <button type="button" id={style.searchBtn}>
                        <IoSearchOutline className={style.searchIcon} />
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="mt-3" id={style.table}>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Purchase price</th>
                      <th>Sale Price</th>
                      <th>Income Account Name</th>
                      <th>Stock</th>
                      <th>Status</th>
                      <th>Created Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>998789</td>
                      <td>$9.9</td>
                      <td>$934.39</td>
                      <td>PMU unique income</td>
                      <td>0</td>
                      <td>Active</td>
                      <td>jan0627828</td>
                    </tr>
                    <tr>
                      <td>998789</td>
                      <td>$9.9</td>
                      <td>$934.39</td>
                      <td>PMU unique income</td>
                      <td>0</td>
                      <td>Active</td>
                      <td>jan0627828</td>
                    </tr>
                    <tr>
                      <td>998789</td>
                      <td>$9.9</td>
                      <td>$934.39</td>
                      <td>PMU unique income</td>
                      <td>0</td>
                      <td>Active</td>
                      <td>jan0627828</td>
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

export default ItemsReport;
