import axios from "axios";
import { useEffect, useState } from "react";

export default function Cars() {
  const [cars, setCars] = useState();
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(uid);
        const response = await axios.get(
          `http://localhost:5000/vehicules/${uid}`
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
      <h1>Cars</h1>
      <div>
        {(cars as any[] | undefined)?.map((car: any) => (
          <div key={car.id} className="bg-gray-300 rounded-[5px] w-fit">
            <h2>{car.marque}</h2>
            <h2>{car.modele}</h2>
            <h2>{car.annee}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
