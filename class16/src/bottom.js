import { useDispatch, useSelector } from "react-redux";
import { playList } from "./movieslist";
import { useEffect, useRef, useState } from "react";
import { setBool } from "./store";

const Bottom = function(){
    const dispatch = useDispatch()
    const defaultImage = "https://assets.thehansindia.com/h-upload/2023/07/19/1365933-jr-ntr.webp"
    const state = useSelector(state=>state.a);
    const ref1 = useRef();
    let selectedMovie;
    let selectedSong;
    if(state.movieId){
        selectedMovie=playList.filter(item=>item.id==state.movieId)[0];
        selectedSong=selectedMovie.songs.filter(item=>item.id==state.songId)[0];
    }
    const playPause = function(){
        dispatch(setBool({...state,bool:state.bool?false:true}));
    }
    useEffect(()=>{
        if(selectedMovie){
            ref1.current.paused?ref1.current.play():ref1.current.pause();
        }
    },[state.bool,state.songId])
    return <div className="bottom">
        <div className="bottomChild1">
            <img src={selectedMovie?selectedMovie.displayPicture:defaultImage} alt="Image failed load"/>
            <div className="playingSong">
                <div className="div1">
                    <span className="bottomTitle">{selectedMovie?selectedSong.title:"Devara"}</span>
                    <span className="material-icons">favorite</span>
                </div>
                <b>Shilpa rao</b>
            </div>
        </div>
        <div className="bottomChild2">
            <div className="buttons">
                <span className="material-icons">skip_previous</span>
                <span className="material-icons" onClick={playPause}>{state.bool?"pause":"play_arrow"}</span>
                <span className="material-icons">skip_next</span>
            </div>
            <div className="bar">
                <div className="insideBar"></div>
            </div>
        </div>
        <div className="bottomChild3" >
            <audio ref={ref1} src={selectedSong?selectedSong.fileAddress:"/Devara/devara2.mp3"} controls></audio>
        </div>
    </div>
}
export default Bottom;