import { useState } from "react";

const ExcerciseCard = (props) => {
  const { excercise, i } = props;

  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetIncreament = () => {
    setSetsCompleted((setsCompleted + 1) % 6);
  };

  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400 px-2 py-2">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {excercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize px-3">
          {excercise.type}
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{excercise.muscles.join(" & ")}</p>
      </div>
      <div className="flex flex-col bg-slate-950 rounded gap-2">
        {excercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${excercise.unit}` : info}
              </h3>
              <p className="font-medium">{excercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncreament}
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full duration-200"
        >
          <h3 className="capitalize text-slate-400 text-sm">sets completed</h3>
          <p className="font-medium">{setsCompleted}/5</p>
        </button>
      </div>
    </div>
  );
};

export default ExcerciseCard;
