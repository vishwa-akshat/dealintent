import React from "react";
import { Progress } from "antd";

import "./style.scss";

type Props = {};

export default function MutualActionProgress({}: Props) {
    return (
        <div className="progress-wrapper">
            <div className="progress-bar-info-wrapper">
                <p className="title">Mutual Action Plan</p>
                <p className="percentage">3%</p>
            </div>
            <Progress
                strokeColor="#00B686"
                percent={3}
                steps={18}
                size={[10, 8]}
                showInfo={false}
            />
        </div>
    );
}
