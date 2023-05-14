import Image from "next/image";
import Link from "next/link";
export const LogoIcon = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='Acme Store' width={32} height={32} priority />
    </Link>
  );
};
