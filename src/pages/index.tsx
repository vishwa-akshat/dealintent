import Head from "next/head";

import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Layout from "@/app/layout";

import "./style.scss";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Dealintent</title>
            </Head>
            <main className="container">
                <Navbar />
                <Header />
            </main>
        </Layout>
    );
}
