type Props = {
  placeholder: string;
  required: boolean;
  pattern: string;
  register: (...args: any[]) => any; // ライブラリの型定義に依存しない代わりに型の恩恵を受けられない
};

export const Email = (props: Props) => {
  const { placeholder, register, required, pattern } = props;

  return (
    <input
      type='text'
      placeholder={placeholder}
      {...register(placeholder, { required, pattern })}
      className='text-black'
    />
  );
};
