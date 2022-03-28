import react from "react";

export const Card = ({ url }) => {
  return (
    <div className="h-[200px] w-[200px] cursor-pointer bg-white m-2 rounded-full overflow-clip shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
      <img className="h-full w-full" src={url} alt="image" />
    </div>
  );
};
