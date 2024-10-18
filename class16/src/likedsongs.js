import { useDispatch, useSelector } from "react-redux";
import { playList } from "./movieslist";
import { addSong, removeSong, setBool } from "./store";

const LikedSongs = function () {
  const state = useSelector((state) => state.a);
  const state2 = useSelector((state) => state.b);
  const dispatch = useDispatch();
  let likedSongs = [];
  for (let i in state2) {
    let list = playList
      .filter((item) => item.id == state2[i].movieId)[0]
      .songs.filter((item) => item.id == i)[0];
    likedSongs.push(list);
  }
  const playSong = function (movieId, songId) {
    if (state.songId && state.songId !== songId) {
      dispatch(setBool({ movieId, songId, bool: true }));
    } else {
      dispatch(setBool({ movieId, songId, bool: state.bool ? false : true }));
    }
  };
  const like = (movieId, songId) => {
    if (!state2[songId]) {
      dispatch(addSong({ movieId, songId }));
    } else {
      dispatch(removeSong({ songId }));
    }
  };
  if (likedSongs.length === 0) {
    return <h1>No Liked Songs</h1>;
  }
  return (
    <div className="selectedSongs">
      {likedSongs.map((item) => {
        return (
          <div className="song" key={item.id}>
            <h3>{item.title}</h3>
            <span
              className="material-icons"
              onClick={() => {
                let id = state2[item.id].movieId;
                playSong(id, item.id);
              }}
            >
              {item.id == state.songId && state.bool ? "pause" : "play_arrow"}
            </span>
            <span className="material-icons" onClick={()=>{
                let id = state2[item.id].movieId
                like(id,item.id)}} style={{color:state2[item.id]?"green":"white"}}>favorite</span>
          </div>
        );
      })}
    </div>
  );
};
export default LikedSongs;
