import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

function Layout() {
    return (
        <>
            <header>Starship</header>
            <Menu />
            <main><Outlet/></main>
            <footer>stopka</footer>
        </>
    );
}

export default Layout
