import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Dashboard/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
