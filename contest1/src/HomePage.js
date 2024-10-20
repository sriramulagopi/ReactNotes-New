import { useDispatch } from "react-redux";
import { postCodeDetails } from "./store";
import { useNavigate } from "react-router-dom";

const HomePage = function () {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const onSubmit = async function (e) {
    e.preventDefault();
    navigate(`pincode/${e.target.pincode.value}`)
    await fetch(
      `https://api.postalpincode.in/pincode/${e.target.pincode.value}`
    )
      .then((respondse) => respondse.json())
      .then((data) => {
        dispatch(postCodeDetails({ apiStatus: "success", data: data }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <h1>Enter Pincode</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Pincode" name="pincode" required/>
        <button>Lookup</button>
      </form>
    </div>
  );
};
export default HomePage;
