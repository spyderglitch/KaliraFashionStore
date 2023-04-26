import { Routes, Route, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Home from "./routes/home/home";
import Navigation from "./components/navigation/navigation";
// import SignIn from './routes/sign-in/sign-in';
import Footer from '../src/components/Footer/Footer';
import Shop from "./components/Shop/Shop";
import ProductDesc from "./components/ProductDesc/ProductDesc";

const Layout = () => {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/shop",
        element: <Shop />
      },
      {
        path:"/product/:id",
        element: <ProductDesc />
      },
    ]
  },
])

const App = () => {
  return (
    <div className="app">
    
    <RouterProvider router={router} />
    </div>
  );
};

export default App;
