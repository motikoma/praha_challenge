type Props = {
  name: string;
};

export const ProductName = ({ name }: Props) => {
  return <p className='py-3 pl-5'>{name}</p>;
};
