import { ReactNode } from 'react'

type TypeFormLabelProps = {
  children: ReactNode
}

const FormLabel: React.FC<TypeFormLabelProps> = ({ children }) => (
  <label className='block mb-2 text-sm font-medium text-white'>
    {children}
  </label>
)

export default FormLabel
