import { IoMdClose } from 'react-icons/io';

const Modal = ({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-[50vh] p-4 bg-skin-white rounded-lg "
      >
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          <IoMdClose size={24} color="black" />
        </button>
        <div className="w-full text-2xl font-bold Inter-400">
          <h2 className="bg-white p-2 text-skin-black">{title}</h2>
        </div>
        <div className="w-full text-md font-normal Inter-400">
          <p className="bg-white p-2 text-skin-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
