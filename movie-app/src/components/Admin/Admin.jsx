import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./Context/AdminProvider";
import Login from "./Login";
import Display from "./Display/Display";
const Admin = () => {
  const { isLogin, setIsLogin } = useContext(AdminContext);

  const navigate = useNavigate();
  return <>{isLogin ? <Display user={"Admin Dep Trai"} /> : <Display />}</>;
};

export default Admin;
