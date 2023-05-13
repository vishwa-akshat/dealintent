import React from "react";

import Button from "@/app/components/Button";

import "./style.scss";

type Props = {};

export default function Header({}: Props) {
    return (
        <section className="header-wrapper">
            <div className="heading-wrapper">
                <p className="heading">WeWork + Salesforce</p>
                <Button>Publish/Share</Button>
            </div>
        </section>
    );
}
