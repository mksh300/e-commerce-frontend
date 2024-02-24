import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Br
} from "react-router-dom";
import React from "react"
import Home from "./components/home"
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/cart';
import ProductDetails from './components/productDetails';



const Layout = ({ children }) => {
  return (<React.Fragment>
    <Header />
    <div className='app-content'>
    {children}
    </div>
    <Footer />
  </React.Fragment>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home/>
    </Layout>,
  },
  {
    path: "/cart",
    element: <Layout>
      <Cart />
    </Layout>,
  },
  {
    path: "/product/:id",
    element: <Layout>
      <ProductDetails />
    </Layout>,
  },
]);

const App = () => {
  return (
    <div className='app'>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
