import { useFormHandler } from "@/hooks/useFormHandler";

type Props = {
  name: string;
  required: boolean;
};

export const Title = (props: Props) => {
  const { name, required } = props;
  const { register } = useFormHandler();

  return (
    <select {...register(name, { required })} className='text-black'>
      <option value='Mr'>Mr</option>
      <option value='Mrs'>Mrs</option>
      <option value='Miss'>Miss</option>
      <option value='Dr'>Dr</option>
    </select>
  );
};
