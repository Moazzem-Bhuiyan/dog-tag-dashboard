import { useForm } from "react-hook-form";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ChangePassword:", data);
  };

  return (
    <div className=" h-[calc(100vh-170px)] items-center flex justify-center ">
      <div className=" w-full  lg:max-w-[40%] mx-auto px-10 my-10 border">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 py-10"
        >
          <h1 className="text-center text-2xl font-bold text-white">
            Change Password
          </h1>
          <div>
            <label htmlFor="Current Password" className="block text-white">
              Current Password
            </label>
            <input
              id="current-password"
              type="password"
              {...register("CurrentPassword", {
                required: "Current Password is required",
              })}
              className="border p-2 w-full"
            />
            {errors.CurrentPassword && (
              <p className="text-red-500">{errors.CurrentPassword.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="New Password" className="block text-white">
              New Password
            </label>
            <input
              id="New-password"
              type="password"
              {...register("Newpassword", {
                required: "New Password required",
              })}
              className="border p-2 w-full"
            />
            {errors.Newpassword && (
              <p className="text-red-500">{errors.Newpassword.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-white">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              {...register("ConfirmPassword", {
                required: "Confirm Password is required",
              })}
              className="border p-2 w-full"
            />
            {errors.ConfirmPassword && (
              <p className="text-red-500">{errors.ConfirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-black py-2 hover:bg-black-2"
          >
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
