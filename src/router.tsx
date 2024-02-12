import {createBrowserRouter} from "react-router-dom"
import App from "./App.tsx";
import Layout from "./pages/Layout.tsx";
import Contact from "./components/contact/Contact.tsx";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },

]);