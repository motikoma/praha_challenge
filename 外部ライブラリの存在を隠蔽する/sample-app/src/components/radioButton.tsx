import { useFormHandler } from "@/hooks/useFormHandler";

type Props = {
  name: string;
  required: boolean;
  value: string;
};

export const RadioButton = (props: Props) => {
  const { name, required, value } = props;
  const { register } = useFormHandler();

  return (
    <>
      <input
        {...register(name, { required })}
        type='radio'
        value={value}
        className='text-white'
      />
      <label className='ml-2 text-white'>{value}</label>
    </>
  );
};
