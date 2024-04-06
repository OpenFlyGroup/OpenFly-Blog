import SignUpForm from './SignUpForm'
import { observer } from 'mobx-react-lite'

const SignInModal: React.FC = () => {
  return (
    <>
      <button
        className='btn btn-link'
        onClick={() => {
          const modal = document.getElementById(
            'singUpModal'
          ) as HTMLDialogElement
          if (modal) {
            modal.showModal()
          }
        }}
      >
        Sign up
      </button>
      <dialog id='singUpModal' className='modal'>
        <div className='modal-box w-full rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 bg-base-200'>
          <SignUpForm></SignUpForm>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button></button>
        </form>
      </dialog>
    </>
  )
}
export default observer(SignInModal)
