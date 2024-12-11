import {useState} from "react";
import {FaArrowRight, FaEye} from "react-icons/fa"; // For the eye icon
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import CustomModal from "../../CustomModal/CustomModal";
import {Button} from "antd";

export default function OrderListTable() {
     const data = [
          {
               ProductName: "lazer",
               orderid: "#fff",
               date: "11 Oct 24, 11:10PM",
               customerName: "Kevin D.",
               status: "ongoing",
               amount: "$152",
               Action: "Ongoing",
          },
     ];

     const [currentPage, setCurrentPage] = useState(1);
     const rowsPerPage = 10;

     // Calculate the range of data for the current page
     const startIndex = (currentPage - 1) * rowsPerPage;
     const endIndex = startIndex + rowsPerPage;
     const paginatedData = data.slice(startIndex, endIndex);

     // Calculate total pages
     const totalPages = Math.ceil(data.length / rowsPerPage);

     // Handle page change
     const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     const pageNumbers = [];
     for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
     }

     // modal

     const [isModalOpen, setIsModalOpen] = useState(false);

     return (
          <div className="overflow-x-auto h-[calc(100vh-170px)]">
               <table className="min-w-full table-auto border-collapse">
                    <thead>
                         <tr className="bg-gray-900 text-white text-left">
                              <th className="px-6 py-3">Product Name</th>
                              <th className="px-6 py-3">Order Id</th>
                              <th className="px-6 py-3">Time & Date</th>
                              <th className="px-6 py-3">Customer name </th>
                              <th className="px-6 py-3">Status</th>
                              <th className="px-6 py-3">Ammount</th>
                              <th className="px-6 py-3 text-center">Action</th>
                         </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                         {paginatedData.map((item, index) => (
                              <tr
                                   key={index}
                                   className="border-b border-gray-300 hover:bg-gray-100">
                                   <td className="px-6 py-3">
                                        {item.ProductName}
                                   </td>
                                   <td className="px-6 py-3 flex items-center gap-2">
                                        {/* <img
                  src="/src/images/placeholder-avatar.png" // Placeholder image for customer
                  alt="Customer"
                  className="w-8 h-8 object-cover rounded-full"
                /> */}
                                        <span>{item.orderid}</span>
                                   </td>
                                   <td className="px-6 py-3">{item.date}</td>
                                   <td className="px-6 py-3">
                                        {item.customerName}
                                   </td>
                                   <td className="px-6 py-3">{item.status}</td>
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

               {/* Pagination Controls */}
               <div className="flex justify-end mt-4">
                    <div className="flex items-center space-x-2">
                         <button
                              onClick={() =>
                                   currentPage > 1 &&
                                   handlePageChange(currentPage - 1)
                              }
                              disabled={currentPage === 1}
                              className="px-3 py-1 border text-white rounded disabled:bg-gray-400">
                              <IoIosArrowBack />
                         </button>

                         {pageNumbers.map((number) => (
                              <button
                                   key={number}
                                   onClick={() => handlePageChange(number)}
                                   className={`px-3 py-1 rounded ${
                                        currentPage === number
                                             ? "bg-[#404140] text-white border"
                                             : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                   }`}>
                                   {number}
                              </button>
                         ))}

                         <button
                              onClick={() =>
                                   currentPage < totalPages &&
                                   handlePageChange(currentPage + 1)
                              }
                              disabled={currentPage === totalPages}
                              className="px-3 py-1 border text-white  rounded disabled:bg-gray-400">
                              <IoIosArrowForward />
                         </button>
                    </div>
               </div>
          </div>
     );
}
