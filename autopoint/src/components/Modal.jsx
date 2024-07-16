import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, title, description }) => {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const [input4Value, setInput4Value] = useState("");
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input 1:", input1Value);
    console.log("Input 2:", input2Value);
    console.log("Input 3:", input3Value);
    console.log("input 4:", input4Value);
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={closeModal}>
            <svg
              className="w-6 h-6 text-gray-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-700">{description}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border rounded px-3 py-2 mt-4 w-full"
            placeholder="Avtomobilin QN daxil edin misal uçün 77-AN-155"
            value={input1Value}
            onChange={(e) => setInput1Value(e.target.value)}
          />
          <input
            type="text"
            className="border rounded px-3 py-6 mt-2 w-full"
            placeholder="Hansı işlərin görüldüyünü və tarixi qeyd edin"
            value={input2Value}
            onChange={(e) => setInput2Value(e.target.value)}
          />
          <input
            type="text"
            className="border rounded px-3 py-2 mt-2 w-full"
            placeholder="Qiyməti qeyd edin"
            value={input3Value}
            onChange={(e) => setInput3Value(e.target.value)}
          />
           <input
            type="text"
            className="border rounded px-3 py-2 mt-2 w-full"
            placeholder="Ustanin adin qeyd edin"
            value={input3Value}
            onChange={(e) => setInput4Value(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
