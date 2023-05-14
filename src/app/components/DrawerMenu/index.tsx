import React from "react";
import Image from "next/image";
import { Drawer, Badge } from "antd";

import Avatar from "@/app/components/Avatar";

import closeIcon from "@/Images/close.svg";
import search from "@/Images/search.svg";
import box from "@/Images/box.svg";
import bell from "@/Images/bell.svg";
import help from "@/Images/help.svg";
import avatar from "@/Images/dummy-avatar.png";

import "./style.scss";

type Props = {
    onClose: () => void;
    isMenuOpen: boolean;
};

export default function index({ onClose, isMenuOpen }: Props) {
    return (
        <Drawer
            closeIcon={<Image src={closeIcon} alt="close" />}
            placement="right"
            onClose={onClose}
            open={isMenuOpen}
        >
            <div className="item-wrapper">
                <Avatar image={avatar} />
                <div className="profile-info-wrapper">
                    <p className="name">Jane Smith</p>
                    <p className="title">Sales Executive</p>
                </div>
            </div>
            <div className="item-wrapper">
                <Image className="nav-link" src={search} alt="" />
                <p className="item-name">Search</p>
            </div>
            <div className="item-wrapper">
                <Image className="nav-link" src={box} alt="" />
                <p className="item-name">Inbox</p>
            </div>
            <div className="item-wrapper">
                <Badge count={25}>
                    <Image className="nav-link" src={bell} alt="" />
                </Badge>
                <p className="item-name">Notification</p>
            </div>
            <div className="item-wrapper">
                <Image className="nav-link" src={help} alt="" />
                <p className="item-name">Help</p>
            </div>
        </Drawer>
    );
}
