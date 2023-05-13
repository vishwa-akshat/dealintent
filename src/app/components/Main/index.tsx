import React from "react";

import MutualActionProgress from "@/app/components/MutualActionProgress";

import "./style.scss";

type Props = {};

export default function Main({}: Props) {
    return (
        <section className="main-section-wrapper">
            <div className="heading-wrapper">
                <p className="heading">Project Scope Recap</p>
                <MutualActionProgress />
            </div>
        </section>
    );
}
