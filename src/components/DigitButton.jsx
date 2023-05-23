import { ACTIONS } from "../App";
import "../App.css";

function DigitButton({ dispatch, digit }) {
    return (
        <button 
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
          {digit}
        </button>
      )
    }

export default DigitButton;
