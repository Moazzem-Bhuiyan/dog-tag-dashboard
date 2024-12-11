import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FaArrowUp, FaImage} from "react-icons/fa";

const PersonalInformation = () => {
     const {register, handleSubmit, watch} = useForm();
     const [previewImage, setPreviewImage] = useState(null);
     const profilePicture = watch("profilePicture");

     React.useEffect(() => {
          if (profilePicture && profilePicture.length > 0) {
               const file = profilePicture[0];
               setPreviewImage(URL.createObjectURL(file));
          }
     }, [profilePicture]);

     const onSubmit = (data) => {
          console.log(data);
     };

     return (
          <div className="">
               <div className="p-8 text-white h-[calc(100vh-170px)] flex items-center justify-center">
                    <div className=" border rounded-lg shadow-md w-full lg:max-w-3xl p-6">
                         <h2 className="text-xl font-semibold mb-6">
                              Personal Information
                         </h2>

                         <div className=" grid grid-cols-3 gap-10">
                              <div className=" flex items-center gap-6 mb-6">
                                   <div className="mt-6 rounded-lg p-6 text-white flex items-center space-x-4 justify-center">
                                        <div className="relative">
                                             {previewImage ? (
                                                  // Render preview image
                                                  <img
                                                       src={previewImage}
                                                       alt="Admin Profile"
                                                       className="w-24 h-24 rounded-full object-cover border-2 border-white"
                                                  />
                                             ) : (
                                                  // Render placeholder icons if no image exists
                                                  <div className="w-24 h-24 flex flex-col items-center justify-center text-white border-2 border-gray-300 rounded-full bg-gray-100">
                                                       <FaImage className="text-3xl" />
                                                  </div>
                                             )}
                                             {/* Upload Button */}
                                             <label
                                                  htmlFor="profilePicture"
                                                  className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer">
                                                  <FaArrowUp />
                                             </label>
                                             <input
                                                  type="file"
                                                  id="profilePicture"
                                                  accept="image/*"
                                                  {...register(
                                                       "profilePicture",
                                                  )}
                                                  className="hidden"
                                             />
                                        </div>
                                   </div>

                                 
                              </div>
                              <div className=" col-span-2">
                                   <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-4">
                                        {/* Name Field */}
                                        <div>
                                             <label className="block text-white mb-1">
                                                  Name
                                             </label>
                                             <input
                                                  {...register("name")}
                                                  type="text"
                                                  defaultValue="James Tracy"
                                                  className="w-full bg-white text-black border rounded-md p-2 outline-none"
                                             />
                                        </div>
                                        {/* Email Field */}
                                        <div>
                                             <label className="block text-white mb-1">
                                                  Email
                                             </label>
                                             <input
                                                  {...register("email")}
                                                  type="email"
                                                  defaultValue="enrique@gmail.com"
                                                  className="w-full bg-white text-black border rounded-md p-2 outline-none"
                                             />
                                        </div>
                                        {/* Phone Number Field */}
                                        <div>
                                             <label className="block text-white mb-1">
                                                  Phone Number
                                             </label>
                                             <div className="flex gap-2">
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
                                             className="w-full mt-6 bg-black hover:bg-black-2 text-white rounded-md py-2 font-medium">
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
