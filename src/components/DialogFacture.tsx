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

interface Props {
  invoiceID: String;
  userID: String;
  invoiceSum: number;
}

export function DialogFacture({ invoiceID, userID, invoiceSum }: Props) {
  async function handlePaiement() {
    const response = await fetch(
      `http://127.0.0.1:5000/user/${userID}/payInvoice/${invoiceID}/${invoiceSum}`,
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
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 text-white rounded-[5px] hover:bg-red-700">
          Payer la facture
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader>
          <DialogTitle>Payer facture</DialogTitle>
          <DialogDescription>Payer les factures en attente.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-fit">
          <Label className="">
            Solde : {Number(localStorage.getItem("solde")) || 0} DA
          </Label>
          <Label className="">
            Solde après paiement :{" "}
            {(Number(localStorage.getItem("solde")) ?? 0) - invoiceSum} DA
          </Label>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-600 text-white rounded-[5px] hover:bg-green-700"
            onClick={handlePaiement}
          >
            Payer facture
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
