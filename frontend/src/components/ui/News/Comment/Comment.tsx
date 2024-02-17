import { ICommentsProps } from "@/types/ui/News/news.interface"

const Comment: React.FC<ICommentsProps> = ({id, img, nick, date, text}) => {
  return (
    <div
    key={id}
    className=" flex flex-col gap-2 p-3 border-b-2 hover:bg-slate-100">
        <div className="flex gap-4 items-start">
            <img className="rounded-full w-[40px]" src={img} alt={`${nick} avatar`} />
            <div>
                <div className=" flex gap-2">
                    <h3 className='text-sm text-primary'>@{nick}</h3>
                    <h4 className='text-sm text-[#616161]'>{date}</h4>
                </div>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
};

export default Comment;