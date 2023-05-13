import React from "react";

import Button from "@/app/components/Button";
import HeaderBanner from "@/app/components/HeaderBanner";
import BannerBlock from "@/app/components/BannerBlock";

import "./style.scss";

type Props = {};

export default function Header({}: Props) {
    return (
        <section className="header-wrapper">
            <div className="heading-wrapper">
                <p className="heading">WeWork + Salesforce</p>
                <Button>Publish/Share</Button>
            </div>
            <div className="header-banner-wrapper">
                <HeaderBanner />
                <div className="banner-block-wrapper">
                    <BannerBlock />
                </div>
            </div>
        </section>
    );
}
