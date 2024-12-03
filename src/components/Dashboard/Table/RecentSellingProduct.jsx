import { FaEye } from "react-icons/fa";
import React, { useState } from 'react';
import CustomModal from "../../CustomModal/CustomModal";

export default function RecentSellingProducts() {

  const data = [
    {
      serial: "#02",
      product: "Oreowate wh..",
      email: "info@gmail.com",
      date: "11 Oct 24, 11:10PM",
      amount: "$152",
    },
    {
      serial: "#03",
      product: "Oreowate wh..",
      email: "info@gmail.com",
      date: "11 Oct 24, 11:10PM",
      amount: "$152",
    },
    {
      serial: "#04",
      product: "Oreowate wh..",
      email: "info@gmail.com",
      date: "11 Oct 24, 11:10PM",
      amount: "$152",
    },
    {
      serial: "#05",
      product: "Oreowate wh..",
      email: "info@gmail.com",
      date: "11 Oct 24, 11:10PM",
      amount: "$152",
    },
    {
      serial: "#06",
      product: "Oreowate wh..",
      email: "info@gmail.com",
      date: "11 Oct 24, 11:10PM",
      amount: "$152",
    },
  ];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (



    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white text-left">
            <th className="px-6 py-3">Serial</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              <td className="px-6 py-3">{item.serial}</td>
              <td className="px-6 py-3 flex items-center gap-2">
               
                <img
                  src="/src/images/DogtagProduct/product.png"
                  alt="Product"
                  className="w-8 h-8 object-cover rounded"
                />
                <span>{item.product}</span>
              </td>
              <td className="px-6 py-3">{item.email}</td>
              <td className="px-6 py-3">{item.date}</td>
              <td className="px-6 py-3">{item.amount}</td>
              <td className="px-6 py-3 text-center">
                <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-gray-900">
                  <FaEye />
                </button>
                <CustomModal
        title="Vertically Centered Modal"
        content={
          <>
            <p>Some content...</p>
            <p>Some more content...</p>
            <p>Even more content...</p>
          </>
        }
        isopen={isModalOpen}
       
        onClose={() => setIsModalOpen(false)}
      />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
