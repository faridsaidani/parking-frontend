import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <div>
      <h1>Welcome to smart parking</h1>
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
  );
}
