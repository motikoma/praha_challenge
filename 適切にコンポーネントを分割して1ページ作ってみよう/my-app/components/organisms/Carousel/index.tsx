import Image from "next/image";
import Link from "next/link";

type Product = {
  name: string;
  imagePath: string;
};

type Props = {
  data: Product[];
};

export const Carousel = (props: Props) => {
  const { data } = props;

  if (!data?.length) return null;

  return (
    <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
      <div className='flex animate-carousel'>
        {data.map((item, i) => (
          <Link
            key={item.name}
            href={`/product/${item.name}`}
            className='relative h-[30vh] flex-none w-1/2 md:w-1/3'
          >
            <Image
              alt={item.name}
              sizes='33vw'
              fill
              className='object-cover w-full h-full'
              src={item.imagePath}
            />
            <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
              <div className='inline-flex p-4 text-xl font-semibold text-black bg-white dark:bg-black dark:text-white'>
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
