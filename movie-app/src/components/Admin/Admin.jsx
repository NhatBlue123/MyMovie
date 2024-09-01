import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./Context/AdminProvider";
import Login from "./Login";
import Display from "./Display/Display";
const Admin = () => {
  const { isLogin, setIsLogin } = useContext(AdminContext);

  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    if (loginStatus === "true") {
      setIsLogin(true);
    }
  }, [setIsLogin]);
  return <>{isLogin ? <Display user={"Admin Dep Trai"} /> : <Display />}</>;
};

export default Admin;
