import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menu-items";
import jwt_decode from "jwt-decode";
import { Loader } from "../../styles/Loader";

const BASE_URL = "http://localhost:5000/api/v1/";

function Navigation({ active, setActive }) {
  const history = useNavigate();
  const { user, setUser } = useGlobalContext();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
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
    <>
      {user ? (
        <NavStyled>
          <div className="user-con">
            {/* <img src={} alt="" /> */}
            <div className="text">
              <h2>{user?.name} tracker</h2>
              <p>{user?.email} </p>
            </div>
          </div>
          <ul className="menu-items">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <div className="bottom-nav">
            <li onClick={handleLogout}>{signout} Sign Out</li>
          </div>
        </NavStyled>
      ) : (
        <Loader />
      )}
    </>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
