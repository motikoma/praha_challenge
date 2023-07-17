import { Product } from "../../molecures/product";

type Props = {
  data: {
    name: string;
    price: number;
    imagePath: string;
  }[];
};

export const ProductList = (props: Props) => {
  const { data } = props;

  const products = data.map((item) => (
    <Product
      key={item.name}
      name={item.name}
      price={item.price}
      imagePath={item.imagePath}
    />
  ));

  return (
    <section className='lg:grid lg:grid-cols-6 lg-grid-rows-2'>
      <div className='lg:col-span-4 lg:row-span-2'>{products[0]}</div>
      <div className='lg:col-span-2 lg:row-span-1'>{products[1]}</div>
      <div className='lg:col-span-2 lg:row-span-1'>{products[2]}</div>
    </section>
  );
};
