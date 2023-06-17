type Props = {
  name: string;
  required: boolean;
  value: string;
  register: (...args: any[]) => any; // ライブラリの型定義に依存しない代わりに型の恩恵を受けられない
};

export const RadioButton = (props: Props) => {
  const { name, register, required, value } = props;
  console.log(value);

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
