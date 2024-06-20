interface p{
 
    name:string;
    title:string;
    content:string;
    time:string;
}


export const BlogCard=({name,title,content,time}:p)=>{
    return(
        

<div className="p-6 border-b-2 max-w-2xl shadow-xl">
  <div className="flex">
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">S</span>
    
</div>
<div className="flex flex-col justify-center">
    <div className="pl-2 text-sm font-semibold">
    {name}.
</div>
</div>
<div className="flex flex-col justify-center">
<div className="pl-5 text-xs text-gray-600">
  {time}
</div>

</div >

  </div>  
  <div className="pt-3 font-bold text-xl">
    {title}
  </div>  
  <div className="pt-2  text-base">
  {content.slice(0, 100) + "..."}
  </div>  
  <div className="text-sm text-gray-500 pt-5">
  {`${Math.ceil(content.length / 100)} min read`}
  </div>


</div>



    )


} 