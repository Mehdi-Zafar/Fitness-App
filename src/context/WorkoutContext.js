import { createContext, useState } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) =>{

    const [workouts,setWorkouts] = useState(null);


    return(
        <WorkoutContext.Provider value={{workouts,setWorkouts}}>
            {children}
        </WorkoutContext.Provider>
    )
}