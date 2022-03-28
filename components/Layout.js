import Link from "next/link";
import Head from "next/head";

export function Layout({ children, title = "This is the default title" }) {
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

      <div className="absolute  flex flex-row justify-center items-center  bg-white right-1/2 top-[250px] translate-x-[50%]">
        <div className="h-[90px] w-[90px] m-1 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"></div>
        <div className="h-[90px] w-[90px] m-1 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"></div>
        <div className="h-[90px] w-[90px] m-1 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"></div>
        <div className="h-[90px] w-[90px] m-1 cursor-pointer  transition-all duration-500 bg-gradient-to-t to-red-400   via-pink-400 from-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"></div>
      </div>

      <div className="bg-zinc-900 min-h-[100vh]">{children}</div>
    </div>
  );
}
