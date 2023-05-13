import Image from "next/image";
export const Logo = () => {
  return (
    <Image src='/logo.svg' alt='Acme Store' width={32} height={32} priority />
  );
};
