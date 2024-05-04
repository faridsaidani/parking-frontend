import { useEffect, useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Car from "../assets/images/Car2.png";

export default function LoginPage() {
  // save the forms data and set the default value to empty string
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    mot_de_passe: "",
  });
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn);
    if (loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-200 flex justify-center items-center h-[90vh]">
      <div className="flex w-[40%] items-end justify-center">
        <img
          src={Car}
          alt="car"
          style={{
            maxWidth: "50%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="w-[60%] flex justify-center">
        <div className=" w-[450px] rounded-[10px] bg-white p-4 shadow-lg space-y-[10px]">
          <h1 className="text-2xl">Login</h1>
          <form className="flex flex-col space-y-[10px]">
            <Label>
              Email:
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Label>
            <Label>
              Password:
              <Input
                type="password"
                value={formData.mot_de_passe}
                onChange={(e) =>
                  setFormData({ ...formData, mot_de_passe: e.target.value })
                }
              />
            </Label>
            <Button
              className="bg-blue-500 text-white p-2 rounded-[5px] mt-2 hover:bg-gray-400"
              onClick={(e) => {
                e.preventDefault();
                // send the data to the server
                axios
                  .post("http://localhost:5000/login", formData)
                  .then((res) => {
                    // if the login is successful, redirect to the home page
                    console.log(res.data);
                    localStorage.setItem("loggedIn", "true");
                    localStorage.setItem("user", res.data.username);
                    localStorage.setItem("uid", res.data.uid);
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
            </Button>
            <p className="self-center">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
