import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded p-3 w-full max-w-[85%] relative">
        {children}
      </div>
    </div>
  );
};


   