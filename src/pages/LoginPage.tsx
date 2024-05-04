import { useEffect, useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  // save the forms data and set the default value to empty string
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    mot_de_passe: "",
  });
  const loggedIn = localStorage.getItem("session");
  console.log(loggedIn);
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn);
    if (loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <form className="flex">
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={formData.mot_de_passe}
            onChange={(e) =>
              setFormData({ ...formData, mot_de_passe: e.target.value })
            }
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            // send the data to the server
            axios
              .post("http://localhost:5000/login", formData)
              .then((res) => {
                // if the login is successful, redirect to the home page
                console.log(res.data);
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("session", res.data);
                navigate("/");
              })
              .catch((err) => {
                // if the login is not successful, show an error message
                console.log(err);
                alert("Login failed");
              });
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
