import { Link } from "react-router-dom";
export const playList = [
    {
      id: 1,
      name: "Devara",
      releaseDate: "27 September 2024",
      displayPicture:
        "https://assets.thehansindia.com/h-upload/2023/07/19/1365933-jr-ntr.webp",
      songs: [
        {
          id: 100,
          title: "All Hail the tiger",
          fileAddress: "/Devara/devara1.mp3",
        },
        {
          id: 101,
          title: "Ayudha Pooja",
          fileAddress: "/Devara/devara2.mp3",
        },
        {
          id: 102,
          title: "Daavudi",
          fileAddress: "/Devara/devara3.mp3",
        },
        {
          id: 103,
          title: "Chuttamalle",
          fileAddress: "/Devara/devara4.mp3",
        },
      ],
    },
    {
      id: 2,
      name: "Mirchi",
      releaseDate: "8 February 2013",
      displayPicture:
        "https://static.toiimg.com/thumb/msid-18396085,width-1070,height-580,imgsize-25969,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      songs: [
        {
          id: 104,
          title: "Nee Choopula",
          fileAddress: "/Mirchi/mirchi1.mp3",
        },
        {
          id: 105,
          title: "Mirchi",
          fileAddress: "/Mirchi/mirchi2.mp3",
        },
        {
          id: 106,
          title: "Idhedho Bagundhe",
          fileAddress: "/Mirchi/mirchi3.mp3",
        },
        {
          id: 107,
          title: "Darlingey",
          fileAddress: "/Mirchi/mirchi4.mp3",
        },
      ],
    },
    {
      id: 3,
      name: "Animal",
      releaseDate: "24 March 2024",
      displayPicture: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
      songs: [
        {
          id: 108,
          title: "Ammayi",
          fileAddress: "/Animal/animal1.mp3",
        },
        {
          id: 109,
          title: "Abrars Entry Jamal Kudu",
          fileAddress: "/Animal/animal2.mp3",
        },
        {
          id: 110,
          title: "Nanna Nuv Naa Pranam",
          fileAddress: "/Animal/animal3.mp3",
        },
        {
          id: 111,
          title: "Evarevaro",
          fileAddress: "/Animal/animal4.mp3",
        },
      ],
    },
    {
      id: 4,
      name: "Chirutha",
      releaseDate: "11 May 2012",
      displayPicture:
        "https://i.scdn.co/image/ab67616d00001e027ed261d3645abbaf932279b7",
      songs: [
        {
          id: 112,
          title: "Marro Marro",
          fileAddress: "/Chirutha/chirutha1.mp3",
        },
        {
          id: 113,
          title: "Chamka Chamka",
          fileAddress: "/Chirutha/chirutha2.mp3",
        },
        {
          id: 114,
          title: "Yenduko",
          fileAddress: "/Chirutha/chirutha3.mp3",
        },
        {
          id: 115,
          title: "Love U Raa",
          fileAddress: "/Chirutha/chirutha4.mp3",
        },
      ],
    },
];
const MoviesList = function(){
    return <div className="moviesList">
        {playList.map(movie=>{
            return <Link key={movie.id} to={`movie/${movie.id}`} className="movie">
                <img src={movie.displayPicture} alt="Image failed to load"/>
                <h3>{movie.name}</h3>
                <b>{movie.releaseDate}</b>
            </Link>
        })}
    </div>
}
export default MoviesList;