import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart,AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {authLogout} from "../../services/store/auth/index"
import Search from "../Search/Search";


const Header = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const _signOut = () => {
    dispatch(authLogout());
  };


  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        className="starbucksLogo"
        src="https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
        onClick={() => {
          navigate("/");
        }}
      ></img>

      <Link className="menu" to={"/menu"}> Menü</Link>

      <Search/>

      {!auth.token ? (
        <Link to={"/giris-yap"} className="giris">
        <AiOutlineUser className="user" />
        
        <div href="">
          Giriş yap
        </div>
        </Link>
      ): null}
      
      
      {auth.token && (
          <button
            className="signOutButton"
            onClick={() => {
              _signOut();
            }}
          >
            <AiOutlineUser className="user" />
            Çıkış yap
          </button>
        )}
      <Link to={'/sepet'} className="Shoppingcart">
        <AiOutlineShoppingCart />
      </Link>

     
      



    </div>
  );
};

export default Header;
