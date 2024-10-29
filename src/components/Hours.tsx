import { useHours } from "../hooks/useHours";

const Hours = () => {
    const {hour, minutes} = useHours();
    
  
  return <div className="hours-box">


    <div className="hours-box_values">{hour} : {minutes < 10 ? `0${minutes}` : minutes }</div>
    <div className="hours-box_labels">
        <p>AM</p>
        <p>Time</p>
    </div>
  </div>;
};

export default Hours;