import Input from "../../../components/input";
import { useAlert } from "../../../context/useAlert";
import { resetPasswordSchema } from "../../../lib/validation";
import LoadingIcon from "../../../components/loadingIcon";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function ResetPassword() {
  const { renderAlert } = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //mimic login
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white  dark:bg-neutral-900  w-80 md:w-96  h-96 flex align-middle justify-center items-center flex-col"
    >
      <h1 className="text-2xl  dark:text-white p-1 font-bold text-center my-3 uppercase">
        Reset Password
      </h1>
      <Input
        {...register("newPassword")}
        placeholder="Enter your password...."
        type="password"
        className="my-5"
        error={errors.newPassword?.message}
      />
      <Input
        {...register("confirmPassword")}
        placeholder="Confirm your password...."
        type="password"
        className="my-5"
        error={errors.confirmPassword?.message}
      />
      <Button className="my-4 w-56" type="submit">
        {isSubmitting ? <LoadingIcon /> : <>Change Password</>}
      </Button>
    </form>
  );
}
