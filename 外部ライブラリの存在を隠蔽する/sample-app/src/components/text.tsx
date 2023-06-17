import { useFormHandler } from "@/hooks/useFormHandler";

type Props = {
  placeholder: string;
  required: boolean;
  max?: number;
  min?: number;
  maxLength: number;
};

export const Text = (props: Props) => {
  const { placeholder, required, max, min, maxLength } = props;
  const { register } = useFormHandler();

  if (max && min) {
    return (
      <input
        type='text'
        placeholder={placeholder}
        {...register(placeholder, { required, max, min, maxLength })}
        className='text-black'
      />
    );
  }

  return (
    <input
      type='text'
      placeholder={placeholder}
      {...register(placeholder, { required, maxLength })}
      className='text-black'
    />
  );
};
