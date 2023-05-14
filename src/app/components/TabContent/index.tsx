import React from "react";
import { Divider, Badge } from "antd";

import OverviewTabContent from "@/app/components/OverviewTabContent";
import ContentHeadingAction from "@/app/components/ContentHeadingActions";
import ContentMainActions from "@/app/components/ContentMainActions";

import weworkLogo from "@/Images/wework-logo.png";
import chat from "@/Images/chat.svg";
import share from "@/Images/share.svg";

import "./style.scss";
import Image from "next/image";

type Props = {};

export default function TabContent({}: Props) {
    return (
        <div className="tab-content-wrapper">
            <div className="tab-content-left">
                <OverviewTabContent />
            </div>
            <div className="tab-content-right">
                <div className="heading-wrapper">
                    <p className="title">Company Profile</p>
                    <ContentHeadingAction />
                </div>
                <div className="content-wrapper">
                    <ContentMainActions />
                    <div className="info-wrapper">
                        <Image
                            className="wework-logo"
                            src={weworkLogo}
                            alt="wework"
                        />
                        <p className="info">
                            For all the ways you work, we&apos;re here
                        </p>
                    </div>
                </div>
                <div className="content-share-wrapper">
                    <Badge count={8}>
                        <Image className="chat-logo" src={chat} alt="wework" />
                    </Badge>
                    <Divider type="vertical" />
                    <Image className="share-logo" src={share} alt="wework" />
                </div>
            </div>
        </div>
    );
}
