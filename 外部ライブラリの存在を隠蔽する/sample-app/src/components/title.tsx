type Props = {
  name: string;
  required: boolean;
  register: (...args: any[]) => any; // ライブラリの型定義に依存しない代わりに型の恩恵を受けられない
};

export const Title = (props: Props) => {
  const { name, register, required } = props;

  return (
    <select {...register(name, { required })} className='text-black'>
      <option value='Mr'>Mr</option>
      <option value='Mrs'>Mrs</option>
      <option value='Miss'>Miss</option>
      <option value='Dr'>Dr</option>
    </select>
  );
};
