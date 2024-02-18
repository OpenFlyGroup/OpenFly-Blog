import React from 'react'

interface BtnSubmitProps {
    text: string;
    onClick?: () => void;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({ text, onClick }) => {
  return (
    <button
    onClick={onClick}
    type="submit"
    className="w-full duration-200 text-white bg-[#0000ff] hover:bg-[#ffffff] hover:text-[#0000ff] hover:ring-2 focus:ring-4 focus:outline-none focus:ring-[#0000ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
  )
}

export default BtnSubmit