import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Dashboard/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import SalesReport from "./Components/SalesReport/SalesReport";
import ItemsReport from "./Components/ItemReport/ItemsReport";
import PurchaseOrderReport from "./Components/PurchaseOrderReport/PurchaseOrderReport";
import PurchaseComparisonReport from "./Components/PurchaseComparisonReport/PurchaseComparisonReport";
import CustomerComparisonReport from "./Components/CustomerComparisonReport/CustomerComparisonReport";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Login />} />
          <Route path="/header" exact element={<Header />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/sale" exact element={<SalesReport />} />
          <Route path="/item" exact element={<ItemsReport />} />
          <Route path="/purchase-order" exact element={<PurchaseOrderReport />} />
          <Route path="/purchase-comp" exact element={<PurchaseComparisonReport />} />
          <Route path="/customer" exact element={<CustomerComparisonReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
