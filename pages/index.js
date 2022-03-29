import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ currentCategoryData, setCurrentCategory }) {
  console.log(currentCategoryData);

  return (
    <Layout title={"Home"} setCurrentCategory={setCurrentCategory}>
      <div className="h-[300px] bg-gradient-to-br from-pink-400   to-red-600 flex flex-col justify-center items-center">
        <div className="p-1 px-2 mb-6 text-sm font-bold text-white rounded-md bg-zinc-900">
          Red Carpet Awards
        </div>
        <div className="p-4 font-serif text-6xl font-extrabold text-white md:p-0">
          {currentCategoryData.category}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-40 md:mt-20">
        <div className="flex flex-row flex-wrap justify-center   my-3 w-[50%]">
          {currentCategoryData.nominee.map((item, index) => {
            return (
              <Card
                key={index}
                url={`/cid_${
                  currentCategoryData.cid
                }/${item.name.toLowerCase()}.jpeg`}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
