import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/profile");
  };

  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="background flex justify-between">
      <div className="blur-background w-[40%] flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-3xl font-semibold text-white m-3">
          Welcome to Smart Parking
        </h1>
        {loggedIn ? (
          <Button
            onClick={handleButtonClick}
            className="bg-white text-black rounded-[5px] hover:bg-gray-200"
          >
            Go to Profile
          </Button>
        ) : (
          <div className="flex w-[30%] justify-between">
            <Button
              onClick={() => navigate("/register")}
              className="bg-white text-black rounded-[5px] hover:bg-gray-200"
            >
              Register
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="bg-blue-400 text-black rounded-[5px] hover:bg-blue-500 hover:text-white"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
