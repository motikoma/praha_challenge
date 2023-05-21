import { GlobalNavigation } from "../../molecures/globalNavigation";
import { LogoIcon } from "../../atoms/logoIcon";
import { CartIcon } from "../../atoms/cartIcon";
import { SearchForm } from "../../molecures/searchForm";

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4'>
      <div className='flex w-1/3'>
        <div className='mr-4'>
          <LogoIcon />
        </div>
        <GlobalNavigation />
      </div>
      <div className='w-1/3'>
        <SearchForm />
      </div>
      <div className='flex justify-end w-1/3'>
        <CartIcon />
      </div>
    </header>
  );
};
