import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Logo } from "../components/atoms/Logo";

export default function Commerce() {
  return (
    <main>
      <header className='flex py-4 px-6'>
        <div className='mr-4'>
          <Logo />
        </div>
        <GlobalNavigation />
      </header>
    </main>
  );
}
