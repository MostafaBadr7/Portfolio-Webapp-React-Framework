import Layout from "./Components/Layout/Layout";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/App.css";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  const myRoute = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "home", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div className="App ">
      <RouterProvider router={myRoute}></RouterProvider>
    </div>
  );
}

export default App;
