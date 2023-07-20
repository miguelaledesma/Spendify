import { useGlobalContext } from "../../context/globalContext";
import { menuItems } from "../../utils/menu-items";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { home, signout } from "../../utils/icons";
// const BASE_URL = "http://localhost:5000/api/v1/";
import { BASE_URL } from "../../context/globalContext";

const ResponsiveNavigation = ({ active, setActive }) => {
  const { user, setUser } = useGlobalContext();
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/");
  };

  const handleHome = () => {
    history("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      axios
        .get(`${BASE_URL}user/${decodedToken.userId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      history("/login");
    }
  }, [history, setUser]);
  return (
    <div className="navbar dark:bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <span className="normal-case text-xl dark:text-white">
          {user?.name}'s Spending Summary
        </span>
      </div>
      <div className="navbar-end">
        <div className="tooltip tooltip-bottom" data-tip="logout">
          <button className="btn btn-ghost btn-circle">
            <span className="sign-out-btn" onClick={handleLogout}>
              {signout}
            </span>
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="home">
          <button className="btn btn-ghost btn-circle" onClick={handleHome}>
            <div className="indicator">
              <span className="home-btn">{home}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavigation;
