import Input from "../../../components/input";
import { useAlert } from "../../../context/useAlert";
import { forgetPasswordSchema } from "../../../lib/validation";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import LoadingIcon from "../../../components/loadingIcon";

export default function ForgetPassword() {
  const { renderAlert } = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //mimic login
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white   dark:bg-neutral-900 w-80 md:w-96  h-96 flex align-middle justify-center items-center flex-col"
    >
      <h1 className="text-2xl dark:text-white p-1 font-bold text-center my-4 uppercase">
        Forget Password
      </h1>
      <p className="text-lg mb-6 font-medium  dark:text-white">
        Reset password with your registered Email
      </p>
      <Input
        {...register("email")}
        placeholder="Enter your registered email...."
        type="text"
        className="my-4"
        error={errors.email?.message}
      />

      <Button className="my-3 w-56" type="submit">
        {isSubmitting ? <LoadingIcon /> : <>Submit email</>}
      </Button>

      <Link className="my-3 text-base  dark:text-white" to="/auth/login">
        Log In! Click here
      </Link>
    </form>
  );
}
