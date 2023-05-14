"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "@/app/components/Logo";
import NavLinksGroup from "@/app/components/NavLinksGroup";
import DrawerMenu from "@/app/components/DrawerMenu";

import menuIcon from "@/Images/menu-icon.svg";

import "./style.scss";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showDrawer = () => {
        setIsMenuOpen(true);
    };

    const onClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar-wrapper">
            <Logo />
            <NavLinksGroup />
            <div className="menu-icon" onClick={showDrawer}>
                <Image src={menuIcon} alt="menu open" />
            </div>
            <DrawerMenu isMenuOpen={isMenuOpen} onClose={onClose} />
        </nav>
    );
}
