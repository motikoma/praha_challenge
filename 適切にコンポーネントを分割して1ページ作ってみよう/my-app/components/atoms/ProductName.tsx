type Props = {
  name: string;
};

export const ProductName = ({ name }: Props) => {
  return <h3 className='py-3 pl-5 font-semibold text-3xl'>{name}</h3>;
};
