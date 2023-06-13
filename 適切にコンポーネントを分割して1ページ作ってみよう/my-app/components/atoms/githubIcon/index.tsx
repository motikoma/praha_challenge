import Image from "next/image";
import Link from "next/link";
export const GithubIcon = () => {
  return (
    <Link href='/'>
      <Image src='/github.svg' alt='github' width={24} height={24} />
    </Link>
  );
};
