import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import HomePage from "./pages/HomePage";

import RandomMeal from "./pages/RandomMeal";
import Categories from "./pages/Categories";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/random" element={<RandomMeal />} />
        <Route path="/" element={<HomePage />} />
         <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;


      