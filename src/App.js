import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Dashboard/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import SalesReport from "./Components/SalesReport/SalesReport";
import ItemsReport from "./Components/ItemReport/ItemsReport";
import PurchaseOrderReport from "./Components/PurchaseOrderReport/PurchaseOrderReport";
import PurchaseComparisonReport from "./Components/PurchaseComparisonReport/PurchaseComparisonReport";
import CustomerComparisonReport from "./Components/CustomerComparisonReport/CustomerComparisonReport";
import Login from "./Components/Login/Login";
import MailPage from "./Components/Forget/ForgetPage";
import PasswordPage from "./Components/Forget/ResetPage";
import ForgetPage from "./Components/Forget/ForgetPage";
import ResetPage from "./Components/Forget/ResetPage";
import Protected from "./Components/Dashboard/Protected";
import PageNotFound from "./Components/Login/PageNotFound";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/header" exact element={<Protected Component={Header} />} />

          <Route path="/dashboard" exact element={<Protected Component={Dashboard} />} />
          <Route path="/sale" exact element={<Protected Component={SalesReport} />} />
          <Route path="/item" exact element={<Protected Component={ItemsReport} />} />
          <Route path="/purchase-order" exact element={<Protected Component={PurchaseOrderReport} />} />
          <Route path="/purchase-comp" exact element={<Protected Component={PurchaseComparisonReport} />} />
          <Route path="/customer" exact element={<Protected Component={CustomerComparisonReport} />} />
          <Route path="/forget" exact element={<ForgetPage />} />
          <Route path="/reset" exact element={<ResetPage />} />
          <Route path="*" exact element={<PageNotFound />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
