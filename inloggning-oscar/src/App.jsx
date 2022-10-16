import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

function Root() {
    return (
      <div>
        <Outlet />
      </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "home",
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
