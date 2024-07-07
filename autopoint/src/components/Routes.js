import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Calendar from "./Calendar";


const routes = [
    {
    path: "/",
    element: <About />,
    
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "Calendar",
        element: <Calendar/>
    },
   




]


export default routes;

