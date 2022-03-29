import react from "react";

export const Card = ({ url, name }) => {
  return (
    <div className="p-2 m-2 text-center transition duration-300 ease-in-out delay-150 rounded-md shadow-lg cursor-pointer overflow-clip hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
      <img className="h-[200px] w-[200px] rounded-full" src={url} alt="image" />
      <div className="mt-2 text-white">{name}</div>
    </div>
  );
};
