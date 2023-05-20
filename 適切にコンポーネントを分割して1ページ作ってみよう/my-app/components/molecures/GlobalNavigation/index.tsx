import Link from "next/link";
export const GlobalNavigation = () => {
  const items = [
    { text: "All", url: "/" },
    { text: "Shirts", url: "/" },
    { text: "Stickers", url: "/" },
  ];

  return (
    <nav className='flex'>
      <ul className='flex'>
        {items.map((item) => (
          <List key={item.text} text={item.text} url={item.url} />
        ))}
      </ul>
    </nav>
  );
};

type ListProps = {
  text: string;
  url: string;
};

const List = ({ text, url }: ListProps) => {
  return (
    <li className='px-2 py-1 rounded-lg text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'>
      <Link href={url}>{text}</Link>
    </li>
  );
};
