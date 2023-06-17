import { useFormHandler } from "@/hooks/useFormHandler";

type Props = {
  placeholder: string;
  required: boolean;
  pattern: RegExp;
};

export const Email = (props: Props) => {
  const { placeholder, required, pattern } = props;
  const { register } = useFormHandler();

  return (
    <input
      type='text'
      placeholder={placeholder}
      {...register(placeholder, { required, pattern })}
      className='text-black'
    />
  );
};
