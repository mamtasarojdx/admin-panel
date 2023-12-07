import { useState } from "react";
import style from "./Dashboard.module.css";
import { LuBellRing } from "react-icons/lu";
import { GoDot } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import ItemsReport from "../ItemReport/ItemsReport";
import SalesReport from "../SalesReport/SalesReport";
import PurchaseOrderReport from "../PurchaseOrderReport/PurchaseOrderReport";
import PurchaseComparisonReport from "../PurchaseComparisonReport/PurchaseComparisonReport";
import CustomerComparisonReport from "../CustomerComparisonReport/CustomerComparisonReport";
import Dashboard from "./Dashboard";
import { BsFillBagCheckFill } from "react-icons/bs";
import { TbBrandAsana } from "react-icons/tb";
import { MdAssignmentAdd } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [active, IsActive] = useState(1);
  console.log(IsActive);

  const handleClick = (token) => {
    sessionStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <>
      {/* ----------navbar----------- */}
      <div className="container-fluid" id={style.navbar}>
        <div className="row mt-3">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="mb-5">
              <span className={style.demeter}>Demeter Fragrances</span>
              <span className={style.menu}>
                <IoMenu />
              </span>
            </div>
          </div>
          {/* <div className={style.vertical1}></div> */}

          <div className="col-lg-6 col-md-6 col-sm-6 d-flex ">
            <div className={style.bellIcon}>
              <LuBellRing /> <GoDot className={style.dot} />
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div>
              <button onClick={handleClick} className={style.logout}>
                Log out
              </button>

              <img src="https://themewagon.github.io/Modernize/src/assets/images/profile/user-1.jpg" className={style.man1}></img>
            </div>
          </div>
        </div>
      </div>

      {/* ----------dashboard tabbing----------- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2" id={style.dashTab}>
            <div id={style.dash}>
              <div
                className={style.dashboard}
                onClick={() => IsActive(1)}
                style={
                  active === 1
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <LuLayoutDashboard className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Dashboard</span>
              </div>
              <br />
              <div
                className={style.dashboard}
                onClick={() => IsActive(2)}
                style={
                  active === 2
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <MdAssignmentAdd className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Sales Report</span>
              </div>
              <br />
              <div
                className={style.dashboard}
                onClick={() => IsActive(3)}
                style={
                  active === 3
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <MdAssignment className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Items Report</span>
              </div>
              <br />
              <div
                className={style.dashboard}
                onClick={() => IsActive(4)}
                style={
                  active === 4
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <BsFillBagCheckFill className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Open Purchase Order Report</span>
              </div>{" "}
              <br />
              <div
                className={style.dashboard}
                onClick={() => IsActive(5)}
                style={
                  active === 5
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <TbBrandAsana className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Open Purchase Comparison Report</span>
              </div>{" "}
              <br />
              <div
                className={style.dashboard}
                onClick={() => IsActive(6)}
                style={
                  active === 6
                    ? { backgroundColor: "#5d87ff", color: "white", borderRadius: "10px", cursor: "pointer" }
                    : { color: "#0d377e", cursor: "pointer" }
                }
              >
                <span>
                  {" "}
                  <TbBrandAsana className={style.dashboardIcon} />
                </span>
                <span className={style.dashboardContent}>Customer Comparison Report</span>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className={style.about1}>
              {active === 1 && (
                <>
                  <Dashboard />
                </>
              )}
              {active === 2 && (
                <>
                  <SalesReport />
                </>
              )}
              {active === 3 && (
                <>
                  <ItemsReport />
                </>
              )}
              {active === 4 && (
                <>
                  <PurchaseOrderReport />
                </>
              )}

              {active == 5 && (
                <>
                  <PurchaseComparisonReport />
                </>
              )}

              {active == 6 && (
                <>
                  <CustomerComparisonReport />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
