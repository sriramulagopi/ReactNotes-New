import { useDispatch, useSelector } from "react-redux";

const App = function(){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.count)
    const decre = function(){
        dispatch(asyncDecrement)
    }
    return <div>
        <h1>Count:{state}</h1>
        <button onClick={()=>{dispatch({type:"incre"})}}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
}
export default App;
const asyncDecrement = async function(dispatch,action){
    await new Promise(resolve=>setTimeout(()=>{resolve()},2000))
    dispatch({type:"decre"})
}