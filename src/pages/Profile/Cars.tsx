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
      <h1 className="text-2xl font-bold p-2">Cars</h1>
      <div className="flex">
        {(cars as any[] | undefined)?.map((car: any) => (
          <div key={car.id} className="bg-gray-100 rounded-[5px] w-fit flex">
            <div className="w-[20%] flex flex-col items-center justify-center">
              <h2>Maker : {car.marque}</h2>
              <h2>Model : {car.modele}</h2>
              <h2>Year : {car.annee}</h2>
              <h2>Color : {car.couleur}</h2>
              <h2>{car.numero_immatriculation}</h2>
            </div>
            <div className="productImages grid grid-cols-2 grid-rows-2 gap-[10px] w-[570px]">
              {car.photos.map((photo: any) => (
                <img
                  className="w-[270px] h-[270px] rounded-[10px] min-w-[270px]"
                  style={{ objectFit: "cover", maxWidth: "100%" }}
                  src={photo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
