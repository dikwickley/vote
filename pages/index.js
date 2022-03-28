import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="h-[300px] bg-gradient-to-br from-pink-400   to-red-600 flex flex-col justify-center items-center">
        <div className="bg-zinc-900  text-white p-1 px-2 rounded-md text-sm font-bold mb-6">
          Red Carpet Awards
        </div>
        <div className="font-serif font-extrabold text-6xl text-white">
          Style Icon of the Year, 2022
        </div>
      </div>

      <div className="flex flex-row justify-center items-center mt-20">
        <div className="w-[400px] h-[500px] bg-white my-6 mr-7 border-8 border-white">
          <img
            className="h-full w-full"
            src={"https://picsum.photos/200/300"}
            alt="image"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center   my-3 w-[50%]">
          <Card url={"https://picsum.photos/id/137/300/300"} />
          <Card url={"https://picsum.photos/id/200/300/300"} />
          <Card url={"https://picsum.photos/id/139/300/300"} />
          <Card url={"https://picsum.photos/id/140/300/300"} />
          <Card url={"https://picsum.photos/id/141/300/300"} />
          <Card url={"https://picsum.photos/id/142/300/300"} />
          <Card url={"https://picsum.photos/id/143/300/300"} />
        </div>
      </div>
    </Layout>
  );
}
