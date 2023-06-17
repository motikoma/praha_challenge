type Props = {
  placeholder: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  register: (...args: any[]) => any; // ライブラリの型定義に依存しない代わりに型の恩恵を受けられない
};

export const Telephone = (props: Props) => {
  const { placeholder, register, required, minLength, maxLength } = props;

  return (
    <input
      type='tel'
      placeholder={placeholder}
      {...register(placeholder, { required, minLength, maxLength })}
      className='text-black'
    />
  );
};
