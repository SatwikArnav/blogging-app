import axios from "axios"

export const CreateComment = ( {comment,setComment,postId}:{comment:string,setComment:any,postId:string}) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 border bg-white rounded-lg w-[700px]">
            <textarea onChange={(e)=>{setComment(e.target.value)}} value={comment} className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm" placeholder="Add a comment" autoFocus />
            <div className="flex items-center space-x-2">
                
                
            </div>
            <div  onClick={ ()=>{
                axios.post(`/api/comment/${postId}`,{comment:comment})
            }} className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</div>
        </div>

        
    )
}