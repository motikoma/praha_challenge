import { Dialog } from "@headlessui/react";
import { SideNavIcon } from "../../atoms/SideNavIcon";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon } from "../../atoms/CloseIcon";
import { SearchForm } from "../SearchForm";
import { MobileNavList } from "../../atoms/MobileNavList";

const contents = [
  {
    text: "All",
    link: "/",
  },
  {
    text: "Shirts",
    link: "/",
  },
  {
    text: "Stickers",
    link: "/",
  },
];

export const MobileNav = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    setMobileMenuIsOpen(false);
  }, [pathName, searchParams]);

  return (
    <>
      <button onClick={() => setMobileMenuIsOpen(true)}>
        <SideNavIcon />
      </button>
      <AnimatePresence initial={false}>
        {mobileMenuIsOpen && (
          <Dialog
            as={motion.div}
            initial='closed'
            animate='open'
            exit='closed'
            key='dialog'
            static
            open={mobileMenuIsOpen}
            onClose={() => setMobileMenuIsOpen(false)}
          >
            <motion.div
              variants={{
                open: { opacity: 1, backdropFilter: "blur(0.5px)" },
                closed: { opacity: 0, backdropFilter: "blur(0px)" },
              }}
              className='fixed inset-0 bg-black/30'
              aria-hidden='true'
            >
              <div className='fixed inset-0 flex justify-end'>
                <Dialog.Panel
                  as={motion.div}
                  variants={{
                    open: { translateX: 0 },
                    closed: { translateX: "-100%" },
                  }}
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  className='flex w-full bg-white dark:bg-black'
                >
                  <div className='w-full p-4'>
                    <div className='mb-4'>
                      <button onClick={() => setMobileMenuIsOpen(false)}>
                        <CloseIcon />
                      </button>
                    </div>
                    <div className='mb-4'>
                      <SearchForm />
                    </div>
                    <MobileNavList contents={contents} />
                  </div>
                </Dialog.Panel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
