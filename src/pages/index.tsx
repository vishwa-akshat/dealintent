import Head from "next/head";

import Layout from "@/app/layout";

import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";

import "./style.scss";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Dealintent</title>
                <link rel="shortcut icon" href="logo.svg" />
            </Head>
            <main className="container">
                <Navbar />
                <Header />
                <Main />
            </main>
        </Layout>
    );
}
