import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./utils/cartSlice";
import Cart from "./components/Cart";

//const {loggedInUser} = useContext(UserContext);

const Grocery = lazy(()=>import("./components/Grocery"));

const appStore = configureStore({
  reducer : {
    cart : cartReducer,
  }
});

const AppLayout = () => {

const [userName, setUserName] = useState();
useEffect(()=>{
  //some authentication
  const data = {
    name : "Abhishek Choudhary",
  }
  setUserName(data.name);
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
   
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h2>Loading ...</h2>}><Grocery /></Suspense>,
      },
      {
        path : "/menu/:id",
        element : <RestaurentMenu />
      }, 
      {
        path : "/cart",
        element : <Cart />
      },
    ]
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
