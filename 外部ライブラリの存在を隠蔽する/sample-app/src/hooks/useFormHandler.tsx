import { useForm } from "react-hook-form";

export const useFormHandler = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return {
    register,
    handleSubmit,
    errors,
  };
};
