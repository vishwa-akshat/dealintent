import React from "react";
import { Tabs as AntTabs } from "antd";

import TabContent from "@/app/components/TabContent";

import "./style.scss";

type Props = {};

const onChange = (key: string) => {
    console.log(key);
};

const items = [
    {
        label: "Basic Info",
        key: "1",
        children: <TabContent />,
    },
    {
        label: "Files",
        key: "2",
        children: <TabContent />,
    },
    {
        label: "Mutual Action Plan",
        key: "3",
        children: <TabContent />,
    },
    {
        label: "Contact",
        key: "4",
        children: <TabContent />,
    },
    {
        label: "Internal Actions",
        key: "5",
        children: <TabContent />,
    },
];

export default function Tabs({}: Props) {
    return <AntTabs onChange={onChange} type="card" items={items} />;
}
