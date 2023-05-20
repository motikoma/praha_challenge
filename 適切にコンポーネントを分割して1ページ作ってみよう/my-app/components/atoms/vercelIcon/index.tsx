import Image from "next/image";
import Link from "next/link";
export const VercelIcon = () => {
  return (
    <Link href='/'>
      <Image src='/vercel2.svg' alt='github' width={107} height={24} />
    </Link>
  );
};
