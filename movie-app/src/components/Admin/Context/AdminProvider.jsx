import React, {createContext, useState } from "react";


export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  
    const [isLogin, setIsLogin] = useState(false);
 
  return (
     <AdminContext.Provider value={{isLogin,setIsLogin}}>
        {children}
     </AdminContext.Provider>
  )
}

export default AdminProvider