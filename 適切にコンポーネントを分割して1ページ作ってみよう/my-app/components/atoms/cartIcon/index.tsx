import Image from "next/image";
import Link from "next/link";
export const CartIcon = () => {
  return (
    <Link href='/'>
      <Image src='/cart.svg' alt='カート' width={22} height={22} />
    </Link>
  );
};
