import { GlobalNavigation } from "../../molecures/GlobalNavigation";
import { LogoIcon } from "../../atoms/LogoIcon";
import { CartIcon } from "../../atoms/CartIcon";
import { SearchForm } from "../../molecures/SearchForm";
import { MobileNav } from "../../molecures/MobileNav";

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4'>
      <div className='hidden w-1/3 md:flex'>
        <div className='mr-4'>
          <LogoIcon />
        </div>
        <GlobalNavigation />
      </div>
      <div className='hidden w-1/3 md:block'>
        <SearchForm />
      </div>
      <div className='block w-1/3 md:hidden'>
        <MobileNav></MobileNav>
      </div>
      <div className='flex justify-self-center md:hidden'>
        <LogoIcon />
      </div>
      <div className='flex justify-end w-1/3'>
        <CartIcon />
      </div>
    </header>
  );
};
