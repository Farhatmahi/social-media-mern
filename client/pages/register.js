import { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [picturePath, setPicturePath] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      firstName,
      lastName,
      location,
      occupation,
      picturePath,
    };
    const res = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser)
    });
    const data = await res.json()
    console.log(data)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col mr-4 mb-4">
              <label htmlFor="firstname" className="block font-medium mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="lastname" className="block font-medium mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block font-medium mb-1">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="occupation" className="block font-medium mb-1">
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profile_picture" className="block font-medium mb-1">
              Upload photo:
            </label>
            <input
              type="file"
              id="picturePath"
              value={picturePath}
              onChange={(e) => setPicturePath(e.target.value)}
              className="file-input file-input-primary w-full border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col mr-4 mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary btn-sm border-black hover:border-primary hover:bg-primary"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
