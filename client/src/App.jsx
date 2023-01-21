import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Factory from "./pages/Factory";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/clients",
        element: <Clients/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/factory",
        element: <Factory/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
