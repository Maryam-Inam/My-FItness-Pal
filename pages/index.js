import Head from "next/head";
import Header from "../components/header/Header";
import Banners from "../components/banners/Banners";
import StickyBtn from "../components/header/StickyBtn";
export default function Home() {
  return (
    <div>
      <Head>
        <title>My Fitness App</title>
      </Head>

      <main>
        <Header />
        <Banners />
        <StickyBtn />
      </main>
    </div>
  );
}
