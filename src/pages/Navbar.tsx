import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <div className="bg-gray-200 p-4 flex justify-between items-center">
      <h1>Smart Parking</h1>
      <div>
        <Button onClick={() => navigate("/register")}>Register</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button
          onClick={() => {
            if (loggedIn) logout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
