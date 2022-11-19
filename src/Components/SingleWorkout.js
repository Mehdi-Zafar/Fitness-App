import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SingleWorkout = (props) => {

    function handleDelete(){
        props.deleteWorkout(props.id)
    }

    return ( 
        <div className="single-workout">
            <h3>{props.workout.title}</h3>
            <p><b>Exercise Load :</b> {props.workout.load} Kg</p>
            <p><b>Exercise Reps :</b> {props.workout.reps}</p>
            <p><b>Exercise Duration :</b> {props.workout.duration} min</p>
            <button className="trash-btn" onClick={handleDelete} data-title="Delete"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
     );
}
 
export default SingleWorkout;