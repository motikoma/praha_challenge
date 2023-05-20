import Image from "next/image";
import Link from "next/link";

export const Carousel = () => {
  const products = [
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 1",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 2",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 3",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 4",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 5",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 6",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 7",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 8",
    },
    {
      imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
      name: "Product 9",
    },
  ];

  if (!products?.length) return null;

  return (
    <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
      <div className='flex animate-carousel'>
        {products.map((product, i) => (
          <Link
            key={product.name}
            href={`/product/${product.name}`}
            className='relative h-[30vh] flex-none w-1/2 md:w-1/3'
          >
            <Image
              alt={product.name}
              sizes='33vw'
              fill
              className='object-cover w-full h-full'
              src={product.imagePath}
            />
            <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
              <div className='inline-flex p-4 text-xl font-semibold text-black bg-white dark:bg-black dark:text-white'>
                {product.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
