import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import Root from "./pages/Root";
import LoadingAnimation from "./component/LoadingAnimation";
import BlogPostPage from "./pages/BlogPostPage";
import ProdcutCodes from "./pages/ProdcutCodes";
import { createContext, useState } from 'react';
import Tds from "./pages/Tds.js";
import AdminPanel from "./pages/AdminPanel.js";
import CreatePost from "./component/CreatePost.js";
import Login from "./pages/Login.js";

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root  />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "blog-post/:id",
          element: <BlogPostPage />,
        },
        {
          path: "product-code/:id",
          element: <ProdcutCodes />,
        },
        {
          path: "tds/:id",
          element: <Tds />,
        },
        {
          path: "bonyan-admin-panel",
          element: <AdminPanel />,
        },
        
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "bonyan-admin-panel/create-post",
          element: <CreatePost />,
        },
      ],
    },
    
  ]);
  return (
   
    <div className="App">
      
      
      <RouterProvider router={router} />
     
   
    </div>
    
  );
}

export default App;
