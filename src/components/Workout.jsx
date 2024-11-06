
import Sectionwrapper from "./Sectionwrapper";
import ExcerciseCard from './ExcerciseCard';


const Workout = (props) => {
  const { workout } = props;
  return (
    <Sectionwrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "danger ", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((excercise, i) => {
          return <ExcerciseCard i={i} excercise={excercise} key={i} />;
        })}
      </div>
    </Sectionwrapper>
  );
};

export default Workout;
