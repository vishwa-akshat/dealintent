import React from "react";
import { Button as AntButton } from "antd";

import "./style.scss";

type Props = {
    children: React.ReactNode;
};

export default function Button({ children }: Props) {
    return (
        <AntButton className="button" type="primary">
            {children}
        </AntButton>
    );
}
