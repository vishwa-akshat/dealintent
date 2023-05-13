import React from "react";
import Image from "next/image";
import { Divider } from "antd";

import arrowDown from "@/Images/arrow-down.svg";
import trash from "@/Images/delete.svg";
import hidden from "@/Images/hidden.svg";

import "./style.scss";

type Props = {};

export default function ContentHeadingAction({}: Props) {
    return (
        <div className="content-heading-actions-wrapper">
            <Image
                className="heading-action-image"
                src={arrowDown}
                alt="arrow down"
                width={24}
                height={24}
            />
            <Divider type="vertical" />
            <Image
                className="heading-action-image"
                src={hidden}
                alt="hidden"
                width={24}
                height={24}
            />
            <Divider type="vertical" />
            <Image
                className="heading-action-image"
                src={trash}
                alt="trash"
                width={24}
                height={24}
            />
        </div>
    );
}
