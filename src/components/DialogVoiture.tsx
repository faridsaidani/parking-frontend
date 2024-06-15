import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  userID: String;
}

export function DialogVoiture({ userID }: Props) {
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [immatricule, setImmatricule] = useState("");
  const [couleur, setCouleur] = useState("");
  const [annee, setAnnee] = useState("");
  async function handleAddVoiture() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/vehicules`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numero_immatriculation: immatricule,
          marque,
          modele: model,
          couleur,
          annee,
          photos: [
            "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg",
            "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg",
            "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg",
            "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg",
          ], // You need to add a state for photos if you want the user to input it
          propietaire: userID,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      window.location.reload();
      return data;
    } catch (error: any) {
      if (error.message.includes("400")) {
        alert("Vehicule existe deja");
      } else {
        console.error(error);
      }
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-[5px]">
          Ajouter voiture
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white bg-gray-800">
        <DialogHeader>
          <DialogTitle>Ajouter voiture</DialogTitle>
          <DialogDescription>
            Ajouter votre voiture pour faciliter le stationnement.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Marque
            </Label>
            <Input
              id="marque"
              className="col-span-3"
              placeholder="Ex: Peugeot, Renault, ..."
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Modele
            </Label>
            <Input
              id="model"
              placeholder="Ex: 208, Clio, ..."
              className="col-span-3"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Immatricule
            </Label>
            <Input
              id="immatricule"
              placeholder="Ex: 123456, 789101, ..."
              className="col-span-3"
              value={immatricule}
              onChange={(e) => setImmatricule(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Couleur
            </Label>
            <Input
              id="couleur"
              className="col-span-3"
              placeholder="Ex: Rouge, Noir, ..."
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Annee
            </Label>
            <Input
              id="annee"
              type="number"
              placeholder="Ex: 2020, 2019, ..."
              className="col-span-3"
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Photos (facultatif)
            </Label>
            <Input id="files" type="file" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="border-white border text-white rounded-[5px] bg-gray-900 hover:bg-gray-700"
            onClick={handleAddVoiture}
          >
            Ajouter voiture
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
