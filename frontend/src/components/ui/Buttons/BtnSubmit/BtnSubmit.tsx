interface IBtnSubmitProps {
    text: string;
}

const BtnSubmit: React.FC<IBtnSubmitProps> = ({ text }) => {
  return (
    <button
    type="submit"
    className="w-full duration-200 text-white bg-primary hover:bg-white hover:text-primary hover:ring-2 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
  )
}

export default BtnSubmit