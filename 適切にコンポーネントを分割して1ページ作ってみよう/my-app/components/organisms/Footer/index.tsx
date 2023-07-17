import { VercelIcon } from "../../atoms/vercelIcon";
import { GithubIcon } from "../../atoms/githubIcon";
import { LogoIcon } from "../../atoms/logoIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='text-black bg-white dark:bg-black dark:text-white'>
      <div className='w-full mx-auto max-w-7xl'>
        <div className='grid gap-8 py-12 border-b border-gray-700 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-3'>
            <div className='flex items-center font-bold'>
              <span className='mr-2'>
                <LogoIcon />
              </span>
              <Link href={"/"}>
                <p>Acme Store</p>
              </Link>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-7'>
            <ul className='grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4'>
              <li className='pb-3'>
                <Link href={"/"}>Home</Link>
              </li>
              <li className='pb-3'>
                <Link href={"/"}>About</Link>
              </li>
              <li className='pb-3'>
                <Link href={"/"}>Terms & Conditions</Link>
              </li>
              <li className='pb-3'>
                <Link href={"/"}>Shippings ＆ Return Policy</Link>
              </li>
              <li className='pb-3'>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li className='pb-3'>
                <Link href={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <GithubIcon />
          </div>
        </div>
        <div className='flex items-center justify-between pt-6 pb-10 space-y-4'>
          <p>© 2023 Acme Store. All rights reserved.</p>
          <p className='flex'>
            <span className='mr-3'>Created by</span>
            <VercelIcon />
          </p>
        </div>
      </div>
    </footer>
  );
};
