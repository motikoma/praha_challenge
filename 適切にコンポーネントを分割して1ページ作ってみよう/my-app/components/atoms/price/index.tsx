type Props = {
  price: number;
};

export const Price = ({ price }: Props) => {
  return (
    <p className='px-5 py-3 text-sm font-semibold text-black bg-white w-fit dark:text-white dark:bg-black'>
      ${price} USD
    </p>
  );
};
