import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { DialogFacture } from "@/components/DialogFacture";

export default function Invoices() {
  const [factures, setFactures] = useState();
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(uid);
        const response = await axios.get(
          `http://localhost:5000/users/${uid}/invoices`
        );
        console.log(response.data);
        setFactures(response.data);
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
        {(factures as any[] | undefined)?.map((facture: any) => (
          <div
            key={facture.id}
            className="bg-gray-100 rounded-[5px] w-fit p-2 m-2"
          >
            <h2>
              <strong>Invoice ID :</strong> {facture.id}
            </h2>
            <h2>
              <strong>Voiture :</strong> {facture.numero_immatriculation}
            </h2>
            <h2>
              <strong>Heure entree :</strong> {facture.heure_entree}
            </h2>
            <h2>
              <strong>Heure sortie :</strong> {facture.heure_sortie}
            </h2>
            {/*
             */}
            <h2>
              <strong>Montant :</strong> {Math.round(facture.total_cost)} DA
            </h2>
            {facture.regle ? (
              <Button className="bg-green-600 text-white rounded-[5px] hover:bg-green-700">
                Paid
              </Button>
            ) : (
              <DialogFacture
                userID={localStorage.getItem("uid") || ""}
                invoiceID={facture.id}
                invoiceSum={facture.total_cost}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
