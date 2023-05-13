import React from "react";
import Image from "next/image";
import { Divider } from "antd";

import download from "@/Images/download.svg";
import magnifyPlus from "@/Images/magnify-plus.svg";
import magnifyMinus from "@/Images/magnify-minus.svg";
import send from "@/Images/send.svg";
import pdf from "@/Images/pdf.svg";

import "./style.scss";

type Props = {};

export default function ContentMainAction({}: Props) {
    return (
        <div className="content-main-actions-wrapper">
            <div className="content-action">
                <Image
                    className="action-image"
                    src={pdf}
                    alt="pdf"
                    width={22}
                    height={24}
                />
                <p className="pdf-text">1/15</p>
            </div>
            <Divider type="vertical" />
            <Image
                className="action-image"
                src={download}
                alt="download"
                width={24}
                height={24}
            />
            <Divider type="vertical" />
            <Image
                className="action-image"
                src={magnifyMinus}
                alt="magnify minus"
                width={24}
                height={24}
            />
            <Divider type="vertical" />
            <Image
                className="action-image"
                src={magnifyPlus}
                alt="magnify plus"
                width={24}
                height={24}
            />
            <Divider type="vertical" />
            <Image
                className="action-image"
                src={send}
                alt="send"
                width={24}
                height={24}
            />
        </div>
    );
}
