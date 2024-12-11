import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import CustomModal from "../../components/CustomModal/CustomModal";

const Products = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [image, setImage] = useState(null);

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setValue("productImage", file);
  };

  return (
    <div className=" h-[calc(100vh-170px)]">
      <div className=" flex justify-between">
        <NavLink to="/product">
          {" "}
          <h1 className=" text-2xl text-white ">All Products</h1>
        </NavLink>

        <button
          className=" bg-white rounded-lg p-3"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
      </div>

      <CustomModal
        content={
          <>
            <div className="  ">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Add Product
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Product Gallery */}
                <div className="mb-4">
                  <label
                    htmlFor="productImage"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Product Gallery
                  </label>

                  {/* Custom Drag-and-Drop Styled Input */}
                  <div className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 hover:border-black transition">
                    {/* Icon */}
                    <div className="text-gray-500 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v1.25A2.25 2.25 0 005.25 20h13.5A2.25 2.25 0 0021 17.75V16.5M16.5 12l-4.5-4.5m0 0L7.5 12m4.5-4.5V19"
                        />
                      </svg>
                    </div>

                    {/* Drag-and-Drop Text */}
                    <p className="text-sm text-gray-600 mb-1">
                      Drop your image here, or{" "}
                      <span className="text-blue-500">browse</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      JPEG, PNG are allowed
                    </p>

                    {/* Hidden Input */}
                    <input
                      type="file"
                      id="productImage"
                      accept="image/jpeg, image/png"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      {...register("productImage", {
                        required: "Product image is required",
                      })}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.productImage && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.productImage.message}
                    </p>
                  )}

                  {/* Display Selected Image Name */}
                  {image && (
                    <p className="mt-2 text-gray-500 text-sm font-medium">
                      {image.name}
                    </p>
                  )}
                </div>

                {/* Product Name */}
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-gray-700 font-medium"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    placeholder="Enter product name"
                    className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
                    {...register("productName", {
                      required: "Product name is required",
                    })}
                  />
                  {errors.productName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.productName.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Enter product description"
                    className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Regular Price */}
                <div className="mb-4">
                  <label
                    htmlFor="regularPrice"
                    className="block text-gray-700 font-medium"
                  >
                    Regular Price
                  </label>
                  <input
                    type="text"
                    id="regularPrice"
                    placeholder="$110.40"
                    className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
                    {...register("regularPrice", {
                      required: "Price is required",
                    })}
                  />
                  {errors.regularPrice && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.regularPrice.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex gap-10 justify-between mt-4">
                  <button
                    type="submit"
                    className="bg-[#3A3C3B] text-white p-2 rounded-md w-full"
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    onClick={() =>setIsModalOpen(false)}
                    className="bg-gray-300 p-2 rounded-md w-full"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </>
        }
        isopen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Products;
