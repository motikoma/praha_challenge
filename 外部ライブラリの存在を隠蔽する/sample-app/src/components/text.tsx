type Props = {
  placeholder: string;
  required: boolean;
  max?: number;
  min?: number;
  maxLength: number;
  register: (...args: any[]) => any; // ライブラリの型定義に依存しない代わりに型の恩恵を受けられない
};

export const Text = (props: Props) => {
  const { placeholder, register, required, max, min, maxLength } = props;

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
