import "../styles/globals.css";
import jsonData from "./../data/data.json";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  console.log(jsonData);
  const [data, setData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    data && (
      <Component
        currentCategoryData={data[currentCategory]}
        setCurrentCategory={setCurrentCategory}
        {...pageProps}
      />
    )
  );
}

export default MyApp;
