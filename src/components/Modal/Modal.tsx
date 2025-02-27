// const Modal = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <>
//       <button
//         className="btn"
//         onClick={() =>
//           (
//             document.getElementById('my_modal_2') as HTMLDialogElement
//           ).showModal()
//         }
//       >
//         open modal
//       </button>
//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">{title}</h3>
//           <p className="py-4">{description}</p>
//         </div>
//         <form method="dialog" className="modal-backdrop">
//           <button
//             title="Close"
//             aria-label="Close"
//             className="btn btn-sm btn-circle btn-ghost"
//           >
//             <button
//               className="btn"
//               onClick={() =>
//                 (
//                   document.getElementById('my_modal_2') as HTMLDialogElement
//                 ).close()
//               }
//             >
//               Close modal
//             </button>
//           </button>
//         </form>
//       </dialog>
//     </>
//   );
// };

// export default Modal;
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
