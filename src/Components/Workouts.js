import { useEffect, useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import AddWorkout from "./AddWorkout";
import SingleWorkout from "./SingleWorkout";
import { BeatLoader } from "react-spinners";
import { WorkoutContext } from "../context/WorkoutContext";


const Workouts = () => {
    // const [workouts,setWorkouts] = useState(null);
    const {workouts,setWorkouts} = useContext(WorkoutContext);
    const [loading,setLoading] = useState(false);

    const createWorkout = async (title,reps,load,duration)=>{
        const res = await fetch(
            "https://react-fitness-app-822e4-default-rtdb.firebaseio.com/fitness-app.json",
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    reps,
                    load,
                    duration
                })
            }
        )
        const json = await res.json();
        const newWorkout = {[json.name]:{title,reps,load,duration}}
        const NewWorkouts = {...workouts,...newWorkout};
        setWorkouts(NewWorkouts)
    }

    const deleteWorkout = async (id)=>{
        const res = await fetch(`https://react-fitness-app-822e4-default-rtdb.firebaseio.com/fitness-app/${id}.json`,{
            method:'DELETE'
        })
        if(res.ok){
            const {[id]:remove,...workoutsLeft} = workouts;
            setWorkouts(workoutsLeft);
        }
    }

    useEffect(()=>{
        if(workouts !== null){
            if(Object.keys(workouts).length === 0){
                setWorkouts(null)
            }
        }
    },[workouts])

    useEffect(()=>{
        const fetchWorkout= async()=>{
            setLoading(true)
            const res = await fetch("https://react-fitness-app-822e4-default-rtdb.firebaseio.com/fitness-app.json")
            const json = await res.json()
            if(res.ok){
                setLoading(false)
                setWorkouts(json)
            }
        }
        fetchWorkout()
    },[])
    

    const list=[];
    for(const entry in workouts){
        list.push(<SingleWorkout key={entry} workout={workouts[entry]} id={entry} deleteWorkout={deleteWorkout}/>)
    }


    return ( 
        <div className="workouts">
            <h3>Your Workouts</h3>
            <div className="flex-container">
                <div className="single-workouts">
                    {loading ? 
                    <div className="loader"><BeatLoader color="crimson"/> </div>:
                    workouts ? 
                        list:
                        <div className="no-workout"> 
                            <h2>No workouts to show!</h2>
                            <h2><FontAwesomeIcon icon={faThumbsDown} /></h2>
                        </div>}                    
                </div>
                <AddWorkout createWorkout={createWorkout}/>
            </div>
        </div>
     );
}
 
export default Workouts;