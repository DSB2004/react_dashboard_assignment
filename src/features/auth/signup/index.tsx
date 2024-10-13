import Input from "../../../components/input";
import { useAlert } from "../../../context/useAlert";
import { signUpSchema } from "../../../lib/validation";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import LoadingIcon from "../../../components/loadingIcon";

export default function SignUp() {
  const { renderAlert } = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //mimic signup
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white  dark:bg-neutral-900  w-80 md:w-96 min-h-96  py-4 h-auto flex align-middle justify-center items-center flex-col"
    >
      <h1 className="text-2xl  p-1 font-bold  dark:text-white text-center my-2 uppercase">
        User SignUp
      </h1>
      <Input
        {...register("name")}
        placeholder="Enter your name...."
        type="text"
        className="my-3"
        error={errors.name?.message}
      />
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
      <Input
        {...register("confirmPassword")}
        placeholder="Confirm your password...."
        type="password"
        className="my-3"
        error={errors.confirmPassword?.message}
      />
      <Button className="my-3 w-56" type="submit">
        {isSubmitting ? <LoadingIcon /> : <>Sign Up</>}
      </Button>

      <Link className="my-2 text-base  dark:text-white " to="/auth/login">
        Log In! Click here
      </Link>
    </form>
  );
}
