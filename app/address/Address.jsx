"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddressForm() {
  const [form, setForm] = useState({
    country: "",
    name: "",
    mobileNumber: "",
    postalCode: "",
    address: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.country ||
      !form.name ||
      !form.mobileNumber ||
      !form.postalCode ||
      !form.address
    ) {
      setError("All fields are necessary");
      return;
    }
    try {
      const res = await fetch("/api/addaddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      if (res.ok) {
        alert("Address added");

        console.log("Address add");
        router.refresh();
        router.push("/profile");
      } else {
        const errorMessage = await res.text();
        alert("Address add failed");
        console.log("Address add failed:", errorMessage);
      }
    } catch (error) {
      alert("Address does not Add");
      console.log("Error during added Address", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-pink-200 shadow-pink-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Address</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              value={form.country}
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              onChange={(e) =>
                setForm({ ...form, mobileNumber: e.target.value })
              }
              value={form.mobileNumber}
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
              value={form.postalCode}
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              value={form.address}
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rose-800 text-white py-2 px-4 rounded-md hover:bg-rose-400 transition duration-300"
          >
            Add Address
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
