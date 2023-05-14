import { GlobalNavigation } from "@/components/molecures/GlobalNavigation";
import { LogoIcon } from "@/components/atoms/LogoIcon";
import { CartIcon } from "@/components/atoms/CartIcon";
import { SearchForm } from "@/components/molecures/SearchForm";

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-6'>
      <div className='w-1/3 flex'>
        <div className='mr-4'>
          <LogoIcon />
        </div>
        <GlobalNavigation />
      </div>
      <div className='w-1/3'>
        <SearchForm />
      </div>
      <div className='w-1/3 flex justify-end'>
        <CartIcon />
      </div>
    </header>
  );
};
