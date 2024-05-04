import { useEffect, useState } from "react";
import axios from "axios";

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
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2>{(userData as any)?.nom_complet}</h2>
        <h2>{(userData as any)?.email}</h2>
        <h2>{(userData as any)?.numero_de_telephone}</h2>
      </div>
    </div>
  );
}
