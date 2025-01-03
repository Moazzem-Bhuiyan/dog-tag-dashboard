import {FaEye} from "react-icons/fa";
import React, {useState} from "react";
import CustomModal from "../../CustomModal/CustomModal";
import {Button} from "antd";

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
               <h1 className=" text-2xl font-semibold text-white my-2">
                    Recent Selling Products
               </h1>
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
                                   className="border-b border-gray-300 hover:bg-gray-100">
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
                                        <button
                                             onClick={() =>
                                                  setIsModalOpen(true)
                                             }
                                             className="text-gray-700 hover:text-gray-900">
                                             <FaEye />
                                        </button>
                                        <CustomModal
                                             content={
                                                  <>
                                                       <div className=" space-y-5 text-xl ">
                                                            <h1 className=" text-center text-xl">
                                                                 Order Details
                                                            </h1>

                                                            {/* product image here */}

                                                            <div className=" flex justify-center">
                                                                 <img
                                                                      src="/product.png"
                                                                      alt=""
                                                                 />
                                                            </div>

                                                            <div className=" flex justify-between">
                                                                 <h1>
                                                                      Order ID :{" "}
                                                                 </h1>
                                                                 <p>
                                                                      #12345678
                                                                 </p>
                                                            </div>
                                                            <hr />
                                                            <div className=" flex justify-between">
                                                                 <h1>
                                                                      Date :{" "}
                                                                 </h1>
                                                                 <p>
                                                                      11 Oct 24,
                                                                      11:10PM
                                                                 </p>
                                                            </div>
                                                            <hr />
                                                            <div className=" flex justify-between">
                                                                 <h1>
                                                                      Customer
                                                                      Name :{" "}
                                                                 </h1>
                                                                 <p>w3Ishy</p>
                                                            </div>
                                                            <hr />
                                                            <div className=" flex justify-between">
                                                                 <h1>
                                                                      Status:{" "}
                                                                 </h1>
                                                                 <p>Pending</p>
                                                            </div>
                                                            <hr />
                                                            <div className=" flex justify-between">
                                                                 <h1>
                                                                      Amount :{" "}
                                                                 </h1>
                                                                 <p>
                                                                      {/* ToDo : Ekhane Bithish pound sign hobe  */}
                                                                      $30
                                                                 </p>
                                                            </div>

                                                            <div className=" flex justify-between gap-5 py-10 ">
                                                                 <Button
                                                                      variant="default"
                                                                      className=" w-1/2 hover:bg-black">
                                                                      Download
                                                                 </Button>
                                                                 <Button className=" w-1/2">
                                                                      Print
                                                                 </Button>
                                                            </div>
                                                       </div>
                                                  </>
                                             }
                                             isopen={isModalOpen}
                                             onClose={() =>
                                                  setIsModalOpen(false)
                                             }
                                        />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}
