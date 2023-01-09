import "./app.css"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Application from "./pages/Application";


const Layout=()=>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/application",
        element:<Application />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
