import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl">Welcome to Smart Parking</h1>
    </div>
  );
}
