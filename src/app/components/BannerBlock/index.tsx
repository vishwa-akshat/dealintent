import React from "react";
import Image from "next/image";

import plus from "@/Images/plus.svg";
import weIcon from "@/Images/we.svg";
import salesforceIcon from "@/Images/salesforce.svg";

import "./style.scss";

type Props = {};

export default function BannerBlock({}: Props) {
    return (
        <div className="banner-block">
            <Image className="we-image" src={weIcon} alt="wework" />
            <Image className="plus-image" src={plus} alt="plus" />
            <Image
                className="salesforce-image"
                src={salesforceIcon}
                alt="salesforce"
            />
        </div>
    );
}
