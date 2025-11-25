"use client";

import { useState } from "react";

export default function ContactModal({ isOpen, onClose }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
  if (!name || !phone) {
    alert("Please fill all fields");
    return;
  }

  const res = await fetch("https://script.google.com/macros/s/AKfycbwauLWq9gsEEOdTHjAUgz5Mx-xuD9CG0V5GTRYJgbirz3VIfFz9NuRQeEQMhlKgWzcN/exec", {
    method: "POST",
    body: JSON.stringify({ name, phone }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    alert("Submitted Successfully!");
    onClose();
  } else {
    alert("Something went wrong!");
  }
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl">
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter Phone Number 10 digits"
            className="w-full border p-2 rounded"
            value={phone}
            pattern="[0-9]{10}"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="cursor-pointer w-full mt-3 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
