import React from "react";
import { useForm } from "react-hook-form";

const PersonalInformation = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">

    <div className="p-8 text-white h-[calc(100vh-170px)] flex items-center justify-center">
      <div className=" border rounded-lg shadow-md w-full lg:max-w-3xl p-6">
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

        <div className=" grid grid-cols-3 gap-10">
          <div className=" flex items-center gap-6 mb-6">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div>
              <p className="text-white">Profile</p>
              <p className="font-bold text-lg">Admin</p>
            </div>
          </div>
          <div className=" col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-white mb-1">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue="James Tracy"
                  className="w-full bg-white text-black border rounded-md p-2 outline-none"
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  defaultValue="enrique@gmail.com"
                  className="w-full bg-white text-black border rounded-md p-2 outline-none"
                />
              </div>
              {/* Phone Number Field */}
              <div>
                <label className="block text-white mb-1">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center bg-white text-black border rounded-md px-5 ">
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="Country Flag"
                      className="w-6 h-4 mr-2"
                    />
                    +1242
                  </div>
                  <input
                    {...register("phone")}
                    type="text"
                    defaultValue="3000597212"
                    className="w-full bg-white text-black border rounded-md p-2 outline-none"
                  />
                </div>
              </div>
              {/* Edit Profile Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-black hover:bg-black-2 text-white rounded-md py-2 font-medium"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default PersonalInformation;
