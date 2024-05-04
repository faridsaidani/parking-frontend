import { useEffect, useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Car from "../assets/images/Car.png";

export default function RegisterPage() {
  // save the forms data and set the default value to empty string
  const [formData, setFormData] = useState({
    nom_complet: "",
    email: "",
    numero_de_telephone: "",
    mot_de_passe: "",
    information_bancaires: "",
  });
  // useNavigate hook
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn);
    if (loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-200 flex items-center h-screen">
      <div className="flex-1 w-[40%]">
        <img src={Car} alt="car" />
      </div>
      <div className="w-[60%] flex justify-center">
        <div className=" w-[450px] rounded-[10px] bg-white p-4 shadow-lg space-y-[10px]">
          <h1 className="text-2xl">Register</h1>
          <form className="flex flex-col space-y-[10px]">
            <Label>
              Full Name:
              <Input
                type="text"
                value={formData.nom_complet}
                onChange={(e) =>
                  setFormData({ ...formData, nom_complet: e.target.value })
                }
              />
            </Label>
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
              Phone Number:
              <Input
                type="text"
                value={formData.numero_de_telephone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numero_de_telephone: e.target.value,
                  })
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
                axios
                  .post("http://localhost:5000/register", formData)
                  .then((response: any) => {
                    console.log(response);
                    // clear the form
                    setFormData({
                      nom_complet: "",
                      email: "",
                      numero_de_telephone: "",
                      mot_de_passe: "",
                      information_bancaires: "",
                    });
                    // navigate to home page /
                    // useNavigate hook
                    navigate("/login");
                  });
              }}
            >
              Register
            </Button>
            <p className="self-center">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
