import { IBtnSubmitProps } from '@/types/ui/ui.interface'

const BtnSubmit: React.FC<IBtnSubmitProps> = ({ text }) => (
  <button type='submit' className="btn btn-primary w-full">
    {text}
  </button>
)

export default BtnSubmit
