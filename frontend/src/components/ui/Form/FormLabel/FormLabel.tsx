import { ReactNode } from "react";

type TypeFormLabelProps = {
    children: ReactNode;
};

const FormLabel: React.FC<TypeFormLabelProps> = ({ children }) => {
  return <label className="block mb-2 text-sm font-medium text-gray-900">{ children }</label>
}

export default FormLabel