import React, { useEffect, useState } from "react";
import style from "./saleStyle.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";
import axios from "axios";


function SalesReport() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://192.168.1.122:5000/sales-report");
      
        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);



  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pages.push(i);
  }
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

 
  function prevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextClick() {
    if (currentPage < 35800) {
      setCurrentPage(currentPage + 1);
    }
  }

  function firstClick() {
    setCurrentPage(1);
  }

  function secondClick() {
    setCurrentPage(2);
  }

  function thirdClick() {
    setCurrentPage(3);
  }

  function searchClick(e) {
    // setSearchText(e.target.value);
    e.preventDefault();
   
  }

  const filteredArray = data.filter((item) => {
    if (isNaN(searchText)) {
      return item.CustomerName.toLowerCase().includes(searchText.toLowerCase())
    }
    else if (searchText) {
      return item.Memo.toString() === searchText;
    }
    else {
      return item.PONumber.toString() === searchText;
    }
  });

  return (
    <>
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
                    <input type="text" class="form-control" id={style.name} name="" onChange={(e)=>setSearchText(e.target.value)} />
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2" id={style.memo}>
                  <div class="form-group">
                    <label for="name">Memo</label>
                    <input type="text" class="form-control" id={style.name} name="" onChange={(e)=>setSearchText(e.target.value)}/>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2" id={style.CustomerPO}>
                  <div class="form-group">
                    <label for="name">PO</label>
                    <input type="text" class="form-control" id={style.name} name=""  onChange={(e)=>setSearchText(e.target.value)}/>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerOrder}>
                  <div class="form-group">
                    <label>Order Type</label>
                    <select class={style.formSelect}>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 " id={style.CustomerPrice}>
                  <div class="form-group ">
                    <label for="stock">Price</label>
                    <select class={style.formSelect}>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2" id={style.DateRange}>
                  <div class="form-group ">
                    <label for="stock">Date Range</label>
                    <input type="date" class="form-control" id={style.name} name="" />
                  </div>

                  <div className="text-end">
                    <button type="button" id={style.searchBtn} onClick={searchClick}>
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
                {isLoading ? (
                  <>
                    <div className="spinner-container">
                      <div className={style.loadingSpinner}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <tbody>
                      {searchText
                        ? filteredArray.map((item) => (
                            <tr key={item.id}>
                              <td>{item.PONumber}</td>
                              <td>{item.CustomerName}</td>
                              <td>{item.Memo}</td>
                              <td>{item.RefNumber}</td>
                              <td>{item.Subtotal}</td>
                              <td>{item.Subtotal}</td>
                              <td>{item.SalesTaxPercentage}</td>
                              <td>{item.SalesTaxTotal}</td>
                              <td>{item.BalanceRemaining}</td>
                              <td>{item.DueDate}</td>
                            </tr>
                          ))
                        : currentPost.map((item) => (
                            <tr key={item.id}>
                              <td>{item.PONumber}</td>
                              <td>{item.CustomerName}</td>
                              <td>{item.Memo}</td>
                              <td>{item.RefNumber}</td>
                              <td>{item.AppliedAmount}</td>
                              <td>{item.Subtotal}</td>
                              <td>{item.RefNumber}</td>
                              <td>{item.TxnNumber}</td>
                              <td>{item.BalanceRemaining}</td>
                              <td>{item.DueDate}</td>
                            </tr>
                          ))}
                    </tbody>
                  </>
                )}
              </table>{" "}
              <br />
              <div className="pag-1 d-inline-flex fw-bold m-1">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" aria-label="Previous" onClick={prevClick} id={style.activeText}>
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" onClick={firstClick} id={style.activeText}>
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" onClick={secondClick} id={style.activeText}>
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" onClick={thirdClick} id={style.activeText}>
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" aria-label="Next" onClick={nextClick} id={style.activeText}>
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesReport;
