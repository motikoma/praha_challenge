import Link from "next/link";

type Content = {
  text: string;
  link: string;
};

type Props = {
  contents: Content[];
};

export const MobileNavList = (props: Props) => {
  const { contents } = props;

  return (
    <ul className='flex flex-col'>
      {contents.map((content) => (
        <Link key={content.text} href={content.link}>
          <li className='text-xl'>{content.text}</li>
        </Link>
      ))}
    </ul>
  );
};
