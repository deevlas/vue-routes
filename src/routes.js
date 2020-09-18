import Home from "./components/Home";
import Contacts from "./components/Contacts";
import MyProjects from "./components/app";


export const routes = [
    {
        path: "", component: Home
    },
    {
        path: "/Contacts", component: Contacts
    },
    {
        path: "/MyProjects", component: MyProjects
    }
    ]