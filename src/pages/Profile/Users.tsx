import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [usersData, setusersData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users`);
        console.log(response.data);
        setusersData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Email
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Numero
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Solde
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((user) => (
                <tr
                  key={user.id}
                  className={user.solde < 0 ? "bg-red-500" : ""}
                >
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {user.nom_complet}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {user.email}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {user.numero_de_telephone}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {user.id}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {user.solde} DA
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
