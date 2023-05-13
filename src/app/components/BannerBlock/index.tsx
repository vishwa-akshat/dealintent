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
            <Image width={77} height={77} src={weIcon} alt="wework" />
            <Image width={18} height={18} src={plus} alt="plus" />
            <Image
                width={81}
                height={81}
                src={salesforceIcon}
                alt="salesforce"
            />
        </div>
    );
}
