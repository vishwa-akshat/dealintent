import Logo from "@/app/components/Logo";
import NavLinksGroup from "@/app/components/NavLinksGroup";

import "./style.scss";

export default function Navbar() {
    return (
        <nav className="navbar-wrapper">
            <Logo />
            <NavLinksGroup />
        </nav>
    );
}
