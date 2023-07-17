import Link from "next/link";
import Image from "next/image";
import { Price } from "../../atoms/price";
import { ProductName } from "../../atoms/productName";

type Props = {
  name: string;
  price: number;
  imagePath: string;
};

export const Product = (props: Props) => {
  const { name, price, imagePath } = props;

  return (
    <div className='relative'>
      <Link href='/'>
        <Image
          src={imagePath}
          alt={name}
          width={1080}
          height={1080}
          className='w-full h-full'
        />
        <div className='absolute top-0 left-0'>
          <ProductName name={name} />
          <Price price={price} />
        </div>
      </Link>
    </div>
  );
};
