const Modal = ({ onclose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onclose}
    >
      <div
        open
        className="bg-white p-6 rounded-lg max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
