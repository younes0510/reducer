import { useContext } from "react";
import { Context } from "../store/Context";

const Theme = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <>
       
        <div className="text-center mt-10 flex justify-center gap-5 pt-4"> 
            <button  onClick={() => dispatch({type: 'theme'})} className="text-2xl absolute right-5 top-3">{state.theme == 'light' ? '🌞' : '🌙'}</button>
            
       </div>
       </>
    )
}

export default Theme;