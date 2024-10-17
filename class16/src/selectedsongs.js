import { useParams } from "react-router-dom";
import { playList } from "./movieslist";
import { useDispatch, useSelector } from "react-redux";
import { setBool } from "./store";

const SelectedSongs = function(){
    const state = useSelector(state=>state.a);
    const dispatch = useDispatch();
    const playSong = function(movieId,songId){
        if(state.songId && state.songId!==songId){
            dispatch(setBool({movieId,songId,bool:true}));
        }
        else{
            dispatch(setBool({movieId,songId,bool:state.bool?false:true}));
        }
    }
    const {id} = useParams();
    const clickedSongs = playList.filter(item=>item.id==id)[0].songs;
    return <div className="selectedSongs">
        {clickedSongs && clickedSongs.map((item)=>{
            return <div className="song" key={item.id}>
                <h3>{item.title}</h3>
                <span className="material-icons" onClick={()=>{playSong(id,item.id)}}>{(item.id==state.songId && state.bool)?"pause":"play_arrow"}</span>
                <span className="material-icons">favorite</span>
            </div>
        })}
    </div>
}
export default SelectedSongs;