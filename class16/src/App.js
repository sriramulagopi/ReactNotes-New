import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Homepage from "./homepage.js";
import MoviesList from "./movieslist.js";
import SelectedSongs from "./selectedsongs.js";
import LikedSongs from "./likedsongs.js";
import "./style.css";
const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Homepage}>
            <Route path="" Component={MoviesList}/>
            <Route path="movie/:id" Component={SelectedSongs} />
            <Route path="likedsongs" Component={LikedSongs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
