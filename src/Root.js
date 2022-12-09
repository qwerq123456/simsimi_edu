import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import App from "./App";
import SharedView from "./components/SharedView";

function Root() {
  return (
    <BrowserRouter>
      <div className="Root">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sharedSimSimi/:id" element={<SharedView />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default Root;