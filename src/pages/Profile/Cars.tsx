import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { DialogVoiture } from "@/components/DialogVoiture";
export default function Cars() {
  const [cars, setCars] = useState();
  const uid = localStorage.getItem("uid");
  // const [carDialog, setcarDialog] = useState(false);
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
      <div className="flex items-center">
        <h1 className="text-2xl font-bold p-2">Cars</h1>
        <DialogVoiture userID={localStorage.getItem("uid") || ""} />
      </div>
      <div className="">
        {(cars as any[] | undefined)?.map((car: any) => (
          <div
            key={car.id}
            className="bg-gray-100 rounded-[5px] w-fit flex mb-2"
          >
            <div className="w-[20%] flex flex-col items-center justify-center">
              <h2>
                <strong>Marque :</strong> {car.marque}
              </h2>
              <h2>
                <strong>Modele :</strong> {car.modele}
              </h2>
              <h2>
                <strong>Annee :</strong> {car.annee}
              </h2>
              <h2>
                <strong>Coleur :</strong> {car.couleur}
              </h2>
              <h2>
                <strong>{car.numero_immatriculation}</strong>
              </h2>
              <Button className="bg-red-600 text-white rounded-[5px] hover:bg-red-700">
                Delete
              </Button>
            </div>
            <div className="productImages grid grid-cols-2 grid-rows-2 gap-[10px] w-[570px]">
              {car.photos.map((photo: any, index: number) => (
                <img
                  key={photo + index}
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
