type Props = {
  show: boolean;
  closeModal: () => void;
};

export const CookiePolicyModal = (props: Props) => {
  const { show, closeModal } = props;

  if (!show) return null;
  return (
    <div className='fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4 text-black bg-white'>
      <h2 className='font-bold'>当サイトはCokkieを利用します</h2>
      <div className='flex items-center justify-between'>
        <div className='mr-2'>
          <button className='p-4' onClick={closeModal}>
            同意する
          </button>
        </div>
        <button className='p-4' onClick={closeModal}>
          拒否する
        </button>
      </div>
    </div>
  );
};
