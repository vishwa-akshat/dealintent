import Image from "next/image";

import logo from "@/Images/logo.svg";
import chevron from "@/Images/chevron-left.svg";

import "./style.scss";

type Props = {};

export default function Logo({}: Props) {
    return (
        <div className="logo-wrapper">
            <Image
                width={38}
                height={38}
                src={logo}
                alt="logo"
                className="logo"
            />
            <Image
                width={24}
                height={24}
                src={chevron}
                alt="logo chevron"
                className="chevron"
            />
        </div>
    );
}
