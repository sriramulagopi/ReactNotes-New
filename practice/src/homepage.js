import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const HomePage = function () {
  const { pathname } = useLocation();;
  return (
    <div>
      {(pathname === "/login" || pathname === "/signup")?false:true && (
        <div className="navbar">
            <h1>Post App</h1>
          <div className="buttons">
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/signup">
              SignUp
            </Link>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};
export default HomePage;
