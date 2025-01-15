/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center">
      <h1>Benvenuto nell'app! &nbsp; &nbsp;</h1>
      <button
        className="text-black"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/my-gallery");
        }}
      >
        Accedi
      </button>
    </div>
  );
}

export default Home;
