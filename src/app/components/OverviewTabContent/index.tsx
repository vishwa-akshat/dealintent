import React from "react";

import "./style.scss";

type Props = {};

export default function OverviewTabContent({}: Props) {
    return (
        <div className="overview-tab-content-wrapper">
            <p className="heading item">Overview</p>
            <p className="item">Welcome</p>
            <p className="item">Product Capabilities</p>
            <p className="item">Customer Success Stories</p>
            <p className="item">File Sharing</p>
            <p className="item">Our Deck</p>
        </div>
    );
}
