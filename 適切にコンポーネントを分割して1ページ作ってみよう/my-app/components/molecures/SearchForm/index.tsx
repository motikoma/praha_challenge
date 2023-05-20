import { FormEvent, useState } from "react";
import Image from "next/image";

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 検索処理
    alert(`検索キーワード: ${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='relative items-center border border-gray-200 bg-transparent p-0 dark:border-gray-500'
    >
      <input
        type='text'
        placeholder='Search for products...'
        autoComplete='off'
        className='w-full px-4 py-2 text-black dark:bg-black dark:text-gray-100'
        id='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
        <Image
          className='h-5'
          src='/search.svg'
          alt='Acme Store'
          width={20}
          height={20}
          priority
        />
      </div>
    </form>
  );
};
