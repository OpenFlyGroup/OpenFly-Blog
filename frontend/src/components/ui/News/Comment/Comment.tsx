import { ICommentProps } from "@/types/ui/News/news.interface";

const Comment: React.FC<ICommentProps> = ({ props }) => {
  return (
    <div className=" flex flex-col gap-2 p-3 border-b-2 hover:bg-slate-100">
        <div className="flex gap-4 items-start">
            <img className="rounded-full w-[40px]" src={props.img} alt={`${props.nick} avatar`} />
            <div>
                <div className=" flex gap-2">
                    <h3 className='text-sm text-primary'>@{props.nick}</h3>
                    <h4 className='text-sm text-[#616161]'>{props.date}</h4>
                </div>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  )
};

export default Comment;