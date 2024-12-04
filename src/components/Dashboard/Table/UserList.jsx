import { useState } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa"; // For the eye icon
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomModal from "../../CustomModal/CustomModal";
import { Button } from "antd";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export default function UserList() {
  const data = [
    {
      serial: "#01",
      UserName: "Kevin D.",
      date: "11 Oct 24, 11:10PM",
      email: "kevin@gmail.com",
    },
    {
      serial: "#02",
      UserName: "Kevin D.",
      date: "11 Oct 24, 11:10PM",
      email: "kevin@gmail.com",
    },
    {
      serial: "#03",
      UserName: "Kevin D.",
      date: "11 Oct 24, 11:10PM",
      email: "kevin@gmail.com",
    },
    {
      serial: "#04",
      UserName: "Kevin D.",
      date: "11 Oct 24, 11:10PM",
      email: "kevin@gmail.com",
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

  // Pagination button range (e.g. 1, 2, 3, ..., totalPages)
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
            <th className="px-6 py-3">Serial</th>
            <th className="px-6 py-3">User Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3"> Join Date</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              <td className="px-6 py-3">{item.serial}</td>
              <td className="px-6 py-3 flex items-center gap-2">
                {/* <img
                  src="/src/images/placeholder-avatar.png" // Placeholder image for customer
                  alt="Customer"
                  className="w-8 h-8 object-cover rounded-full"
                /> */}
                <span>{item.UserName}</span>
              </td>
              <td className="px-6 py-3">{item.email}</td>
              <td className="px-6 py-3">{item.date}</td>

              <td className=" flex gap-5 px-6 py-3 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaEye />
                </button>
                <button className=" text-xl text-black">
                  <MdDeleteForever />
                </button>

                <CustomModal
                  content={
                    <>
                      <div className=" space-y-5 text-xl ">
                        <h1 className=" text-center text-xl">User Details</h1>

                        <div className=" flex justify-between">
                          <h1>User Name : </h1>
                          <p>w3Ishy</p>
                        </div>
                        <hr />
                        <div className=" flex justify-between">
                          <h1>Email: </h1>
                          <p>****@gmail.com</p>
                        </div>
                        <hr />
                        <div className=" flex justify-between">
                          <h1>Phone number : </h1>
                          <p>#12345678</p>
                        </div>
                        <hr />
                        <div className=" flex justify-between">
                          <h1>Address: </h1>
                          <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                        </div>
                        <hr />
                        <div className=" flex justify-between">
                          <h1>Joining date : </h1>
                          <p>#16 Aug 2023</p>
                        </div>
                      </div>
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

      {/* Pagination Controls */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border text-white rounded disabled:bg-gray-400"
          >
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
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border text-white  rounded disabled:bg-gray-400"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
