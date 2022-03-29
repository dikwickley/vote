import Link from "next/link";
import Head from "next/head";

export function Layout({
  children,
  setCurrentCategory,
  title = "This is the default title",
}) {
  const handleCatergoryChange = (id) => {
    setCurrentCategory(id);
  };

  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="absolute w-[100px] h-[100px] left-6 top-6">
        <img src="/logo.jpg" className="rounded-full" />
      </div>

      <div className="absolute  flex flex-row justify-center items-center  bg-zinc-900 right-1/2 top-[250px] translate-x-[50%]">
        <div
          onClick={() => {
            handleCatergoryChange(0);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Artist Of The Year
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(1);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Style Icon Of The Year
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(2);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Rising Star
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(3);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Sportsperson Of The Year
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(4);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Innovator Of The Year
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(5);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Mr. and Mrs. Persona
        </div>
        <div
          onClick={() => {
            handleCatergoryChange(6);
          }}
          className="flex justify-center items-center text-2xl p-2 font-mono leading-[1.5rem] text-center  h-[90px] w-[200px] m-2 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        >
          Face Of The Year
        </div>
      </div>

      <div className="bg-zinc-900 min-h-[100vh]">{children}</div>
    </div>
  );
}
