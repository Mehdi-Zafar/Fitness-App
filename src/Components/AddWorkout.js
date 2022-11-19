import { useState } from "react";

const AddWorkout = (props) => {

    const [title,setTitle] = useState("");
    const [reps,setReps] = useState("");
    const [load,setLoad] = useState("");
    const [duration,setDuration] = useState("")

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function handleForm(e){
        e.preventDefault();
        props.createWorkout(capitalizeFirstLetter(title),
                            capitalizeFirstLetter(reps),
                            capitalizeFirstLetter(load),
                            capitalizeFirstLetter(duration))
        setTitle("");
        setReps("");
        setLoad("");
        setDuration("");
    }

    return ( 
        <div className="add-workout">
            <div className="workout-form">
                <h3>Add Workout</h3>
                <form onSubmit={handleForm}>
                    <label>Exercise Title:</label><br />
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/><br /><br />
                    <label>Exercise reps:</label><br />
                    <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps} required/><br /><br />
                    <label>Exercise load (Kg):</label><br />
                    <input type="number" onChange={(e)=>setLoad(e.target.value)} value={load} required/><br /><br />
                    <label>Exercise duration (mins):</label><br />
                    <input type="number" onChange={(e)=>setDuration(e.target.value)} value={duration} required/><br /><br />
                    <button className="add-workout-btn">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddWorkout;