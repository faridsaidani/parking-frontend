import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

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
      <h1 className="text-2xl font-bold p-2">Invoices</h1>
      <div>
        {(cars as any[] | undefined)?.map((car: any) => (
          <div
            key={car.id}
            className="bg-gray-100 rounded-[5px] w-[150px] p-2 m-2"
          >
            <h2>
              <strong>Car ID :</strong> {car.id}
            </h2>
            <h2>
              <strong>In/out ID :</strong> {car.entree_sortie}
            </h2>
            <h2>
              <strong>Amount :</strong> {car.montant_a_regler}
            </h2>
            {car.regle ? (
              <Button className="bg-green-600 text-white rounded-[5px] hover:bg-green-700">
                Paid
              </Button>
            ) : (
              <Button className="bg-red-600 text-white rounded-[5px] hover:bg-red-700">
                Not Paid
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
