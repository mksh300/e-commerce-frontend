import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react"
import Home from "./components/home"
import Header from './components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
