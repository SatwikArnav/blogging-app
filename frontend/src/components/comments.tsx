export const Comments = ({ comments }: { comments: any[] }) => {
    return (
        <div >
        
           <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion </h2>
            </div>
        
        <div className="grid grid-col-1 md:grid md:grid-cols-2  gap-2 p-2"> 

            {comments.map((comment, index) => (
                <div key={index} className="flex items-center justify-start px-3 py-2 border bg-white rounded-lg">
                    <div className="flex items-center space-x-2">
                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{comment.author.name[0]}</span>
                        </div>
                        <div className="pl-2 flex flex-col">
                            <div className="text-sm font-medium text-gray-900">{comment.author.name}</div>
                            <div className="text-sm text-gray-600">{comment.content}</div>
                            <div className="text-xs text-gray-400">{comment.createdAt}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    
    )
}

//make a div that has a loading animation


                                