import { useState } from "react";
import starIcon from "../assets/images/icon-star.svg";

export const Raiting = () => {
  const [view, setView] = useState(true);
  const [raiting, setRaiting] = useState(null);
  const handleClick = () => {
    setView(false);
  };
  return (
    <>
      {view ? (
        <section className="max-w-sm p-8 text-white flex flex-col gap-4 bg-zinc-800 rounded-[30px]">
          <div className="w-10 h-10 bg-zinc-700 rounded-full flex justify-center items-center">
            <img className="w-4" src={starIcon} alt="icon" />
          </div>
          <p className="text-2xl font-bold ">How did we do?</p>
          <p className="text-sm leading-6 text-zinc-400 font-semibold">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="w-full flex justify-around mt-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                className="hover:bg-Orange hover:text-zinc-800 text-sm text-zinc-400 bg-zinc-700 w-12 h-12 flex items-center justify-center rounded-full font-bold  focus:bg-white focus:text-zinc-800 "
                key={n}
                onClick={() => setRaiting(n)}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            className="hover:bg-white hover:text-zinc-800 mt-2 w-full rounded-full bg-Orange py-3 text-Dark-Blue font-bold text-sm tracking-widest"
            onClick={() => handleClick()}
          >
            SUBMIT
          </button>
        </section>
      ) : (
        <section className="text-white">{raiting}</section>
      )}
    </>
  );
};
