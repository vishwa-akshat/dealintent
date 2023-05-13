import Image from "next/image";
import { Badge } from "antd";

import Avatar from "@/app/components/Avatar";

import search from "@/Images/search.svg";
import box from "@/Images/box.svg";
import bell from "@/Images/bell.svg";
import help from "@/Images/help.svg";
import avatar from "@/Images/dummy-avatar.png";

import "./style.scss";

type Props = {};

export default function NavLinksGroup({}: Props) {
    return (
        <div className="nav-links-group">
            <Image className="nav-link" src={search} alt="" />
            <Image className="nav-link" src={box} alt="" />
            <Badge count={25}>
                <Image className="nav-link" src={bell} alt="" />
            </Badge>

            <Image className="nav-link" src={help} alt="" />
            <Avatar image={avatar} />
        </div>
    );
}
