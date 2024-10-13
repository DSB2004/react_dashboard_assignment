import Input from "../../../components/input";
import { useAlert } from "../../../context/useAlert";
import { loginSchema } from "../../../lib/validation";
import LoadingIcon from "../../../components/loadingIcon";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

export default function Login() {
  const { renderAlert } = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //mimic login
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white  dark:bg-neutral-900 w-80 md:w-96 min-h-96 h-auto flex align-middle justify-center items-center flex-col"
    >
      <h1 className="text-2xl p-1 font-bold  dark:text-white text-center my-2 uppercase">
        User Login
      </h1>
      <Input
        {...register("email")}
        placeholder="Enter your email...."
        type="text"
        className="my-3"
        error={errors.email?.message}
      />
      <Input
        {...register("password")}
        placeholder="Enter your password...."
        type="password"
        className="my-3"
        error={errors.password?.message}
      />
      <Button className="my-3 w-56" type="submit">
        {isSubmitting ? <LoadingIcon /> : <>Login</>}
      </Button>

      <Link
        className=" my-1 mt-2 text-base  dark:text-white"
        to="/auth/forget-password"
      >
        Forget Password! Click here
      </Link>

      <Link className="my-1 text-base  dark:text-white" to="/auth/signup">
        Sign Up! Click here
      </Link>
    </form>
  );
}
