import { useEffect, useState } from "react";
import axios from "axios";

export default function Invoices() {
  const [cars, setCars] = useState();
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(uid);
        const response = await axios.get(
          `http://localhost:5000/users/${uid}/invoices`
        );
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Invoices</h1>
      <div>
        {(cars as any[] | undefined)?.map((car: any) => (
          <div key={car.id} className="bg-gray-300 rounded-[5px] w-fit">
            <h2>{car.id}</h2>
            <h2>{car.entree_sortie}</h2>
            <h2>{car.montant_a_regler}</h2>
            <h2>{car.regle ? "Reglé" : "Non reglé"}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
