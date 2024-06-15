import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Synchronize() {
  const [isFetching, setIsFetching] = useState(false);

  const handleSynchronize = () => {
    setIsFetching(true);
    fetch("http://localhost:5000/synchronize", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // alert("Synchronized successfully!");
      })
      .catch((error) => {
        console.error("Error synchronizing:", error);
        alert("Failed to synchronize!");
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      {isFetching ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <Button
          className="bg-red-600 text-white rounded-[5px] hover:bg-red-700"
          onClick={handleSynchronize}
        >
          Synchronize
        </Button>
      )}
    </div>
  );
}
