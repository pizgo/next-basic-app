import Link from 'next/link';
import Image from 'next/image'
import Head from "next/head";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}