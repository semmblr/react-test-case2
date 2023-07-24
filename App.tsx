import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./src/index";
import SinglePost from "./src/singlePost";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          {/* <Route path="/posts/:id" element={<SinglePost />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
