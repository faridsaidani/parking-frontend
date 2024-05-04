import { useEffect, useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>Register</h1>
      <form className="flex">
        <label>
          Full Name:
          <input
            type="text"
            value={formData.nom_complet}
            onChange={(e) =>
              setFormData({ ...formData, nom_complet: e.target.value })
            }
          />
        </label>
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
          Phone Number:
          <input
            type="text"
            value={formData.numero_de_telephone}
            onChange={(e) =>
              setFormData({ ...formData, numero_de_telephone: e.target.value })
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
        </button>
      </form>
    </div>
  );
}
