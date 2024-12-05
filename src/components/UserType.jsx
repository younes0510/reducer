import { useContext } from "react";
import { Context } from "../store/Context";

const UserType = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <>
        <div className="text-center pt-6 flex justify-center gap-5"> 
            <button  onClick={() => dispatch({type: 'usertype'})}  className="text-2xl px-3 py-2 bg-black text-white rounded-lg shadow-md border border-zinc-100">Admin</button>
            <button  onClick={() => dispatch({type: 'usertype'})} className="text-2xl px-3 py-2 bg-black text-white rounded-lg shadow-md border border-zinc-100"> Guest</button>
       </div> </>
    )
}

export default UserType;