import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const loggedIn = localStorage.getItem("loggedIn");
  const username = localStorage.getItem("user");
  //   const username = JSON.parse(localStorage.getItem("user") || "").username;
  return (
    <div className="bg-blue-300 h-[10vh] p-4 flex justify-between items-center">
      <h1>
        <a href="/">Smart Parking</a>
      </h1>
      <div>
        {loggedIn ? (
          <div className="flex items-center">
            <a href="/profile">{username}</a>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => navigate("/register")}
              className="bg-white rounded-[5px] hover:bg-gray-400 mr-2"
            >
              Register
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="bg-white rounded-[5px] hover:bg-gray-400"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
