import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const [userData, setuserData] = useState();
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(uid);
        const response = await axios.get(`http://localhost:5000/user/${uid}`);
        console.log(response.data);
        setuserData(response.data);
        localStorage.setItem("solde", response.data.solde);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const ajouterSolde = async (id: string, somme: number) => {
    const response = await fetch(
      `http://127.0.0.1:5000/user/${id}/ajouterSolde/${somme}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    window.location.reload();
    return data;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold p-2">Profile</h1>
      <div className="p-2">
        <h2>Nom complet : {(userData as any)?.nom_complet}</h2>
        <h2>Email : {(userData as any)?.email}</h2>
        <h2>Numero de télephone : {(userData as any)?.numero_de_telephone}</h2>
        <h2>Solde : {(userData as any)?.solde} DA</h2>
        <Button
          className="border-black bg-blue-200 border-[1px] rounded-[5px] mr-1"
          onClick={() => ajouterSolde((userData as any)?.id, 100)}
        >
          Ajouter solde (+100)
        </Button>
        <Button className="border-black border-[1px] rounded-[5px] mr-1">
          Edit account
        </Button>
        {/* <Button className="bg-red-600 text-white rounded-[5px] hover:bg-red-700">
          Delete account
        </Button> */}
      </div>
    </div>
  );
}
