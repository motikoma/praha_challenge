type Props = {
  name: string;
};

export const ProductName = ({ name }: Props) => {
  return (
    <h3 className='p-5 py-3 text-3xl font-semibold text-black bg-white dark:text-white dark:bg-black'>
      {name}
    </h3>
  );
};
