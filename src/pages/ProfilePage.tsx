import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import Cars from "./Profile/Cars";
import Invoices from "./Profile/Invoices";
import Settings from "./Profile/Settings";
import Users from "./Profile/Users";

export default function ProfilePage() {
  const [profile, setprofile] = useState(true);
  const [cars, setcars] = useState(false);
  const [invoices, setinvoices] = useState(false);
  const [settings, setsettings] = useState(false);
  const [users, setusers] = useState(false);
  // const [isAdmin, setisAdmin] = useState(false);
  let isAdmin = false;
  const uid = localStorage.getItem("uid");
  console.log("uid = ", uid);
  if (uid == "1") {
    console.log("true");
    isAdmin = true;
  }
  const username = localStorage.getItem("user");
  const handleInvoices = () => {
    setinvoices(true);
    setcars(false);
    setsettings(false);
    setprofile(false);
    setusers(false);
    console.log(profile, cars, invoices, settings);
  };
  const handleCars = () => {
    setinvoices(false);
    setcars(true);
    setsettings(false);
    setprofile(false);
    setusers(false);
    console.log(profile, cars, invoices, settings);
  };
  const handleSettings = () => {
    setinvoices(false);
    setcars(false);
    setsettings(true);
    setprofile(false);
    setusers(false);

    console.log(profile, cars, invoices, settings);
  };
  const handleProfile = () => {
    setinvoices(false);
    setcars(false);
    setsettings(false);
    setprofile(true);
    setusers(false);

    console.log(profile, cars, invoices, settings, users);
  };
  const handleUsers = () => {
    setinvoices(false);
    setcars(false);
    setsettings(false);
    setprofile(false);
    setusers(true);

    console.log(profile, cars, invoices, settings);
  };

  const navigate = useNavigate();

  const checkLoggedIn = () => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, [navigate]);
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-2xl">Profile</h1>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <a href="/" className="px-[5px]">
            Home
          </a>
          <p
            onClick={() => handleProfile()}
            className={
              profile
                ? "cursor-pointer py-[10px] px-[5px] rounded-[5px] bg-white text-gray-800"
                : "cursor-pointer py-[10px] px-[5px] rounded-[5px] hover:bg-white hover:text-gray-800"
            }
          >
            Profile
          </p>
          <p
            onClick={() => handleCars()}
            className={
              cars
                ? "cursor-pointer py-[10px] px-[5px] rounded-[5px] bg-white text-gray-800"
                : "cursor-pointer py-[10px] px-[5px] rounded-[5px] hover:bg-white hover:text-gray-800"
            }
          >
            My cars
          </p>
          <p
            onClick={() => handleInvoices()}
            className={
              invoices
                ? "cursor-pointer py-[10px] px-[5px] rounded-[5px] bg-white text-gray-800"
                : "cursor-pointer py-[10px] px-[5px] rounded-[5px] hover:bg-white hover:text-gray-800"
            }
          >
            My invoices
          </p>
          <p
            onClick={() => handleSettings()}
            className={
              settings
                ? "cursor-pointer py-[10px] px-[5px] rounded-[5px] bg-white text-gray-800"
                : "cursor-pointer py-[10px] px-[5px] rounded-[5px] hover:bg-white hover:text-gray-800"
            }
          >
            Settings
          </p>
          {isAdmin ? (
            <p
              onClick={() => handleUsers()}
              className={
                users
                  ? "cursor-pointer py-[10px] px-[5px] rounded-[5px] bg-white text-gray-800"
                  : "cursor-pointer py-[10px] px-[5px] rounded-[5px] hover:bg-white hover:text-gray-800"
              }
            >
              Users
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-center h-16 border-t border-gray-700">
          <p>Welcome, {username}!</p>
        </div>
      </div>
      <div className="content w-[100%]">
        {profile && <Profile />}
        {cars && <Cars />}
        {invoices && <Invoices />}
        {settings && <Settings />}
        {users && <Users />}
      </div>
    </div>
  );
}
