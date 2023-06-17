import { useFormHandler } from "@/hooks/useFormHandler";

type Props = {
  placeholder: string;
  required: boolean;
  minLength: number;
  maxLength: number;
};

export const Telephone = (props: Props) => {
  const { placeholder, required, minLength, maxLength } = props;
  const { register } = useFormHandler();

  return (
    <input
      type='tel'
      placeholder={placeholder}
      {...register(placeholder, { required, minLength, maxLength })}
      className='text-black'
    />
  );
};
