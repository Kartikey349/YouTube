const commentData = [
    {
        name: "Weeknd",
        text: "XO tatted all over her Body",
        replies: [
            {
                name: "playBoi carti",
                text: "ajbdadjkamd an",
                replies: [
                    {
                        name: "kartikey",
                        text: "achaa theek hai",
                        replies: [
                            {
                                name: "kartikey",
                                text: "achaa theek hai",
                                replies: [
                                    {
                                        name: "kartikey",
                                        text: "achaa theek hai",
                                        replies: []
                                    },
                                    {
                                        name: "kartikey",
                                        text: "achaa theek hai",
                                        replies: []
                                    },
                                ]
                            },{
                                name: "kartikey",
                                text: "achaa theek hai",
                                replies: []
                            },
                        ]
                    },
                    {
                        name: "kartikey",
                        text: "achaa theek hai",
                        replies: []
                    },
                    {
                        name: "kartikey",
                        text: "achaa theek hai",
                        replies: []
                    },
                ]
            },
            {
                name: "kartikey",
                text: "achaa theek hai",
                replies: []
            },
            {
                name: "kartikey",
                text: "achaa theek hai",
                replies: []
            },
            {
                name: "kartikey",
                text: "achaa theek hai",
                replies: []
            },

    
        ]
    },
    {
        name: "kartikey",
        text: "achaa theek hai",
        replies: []
    },
    {
        name: "kartikey",
        text: "achaa theek hai",
        replies: []
    },
    {
        name: "kartikey",
        text: "achaa theek hai",
        replies: []
    },
    {
        name: "kartikey",
        text: "achaa theek hai",
        replies: []
    },
    {
        name: "kartikey",
        text: "achaa theek hai",
        replies: []
    },

]
const Comment = ({data}) => {

    const {name, text, replies} = data;

    return <div className="flex mt-2 bg-gray-100 p-2 rounded-lg items-center">
        <img className="w-9 h-9 rounded-full " src="https://tse1.mm.bing.net/th/id/OIP.-NGiWgBDhMPjrzwpmgNdJwHaHa?pid=Api&P=0&h=180" />

        <div className="px-2 leading-5">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentList = ({comments}) => {
    return (
        <div>
            {comments.map((comment,index) => {
                return (
                    <div>
                        <Comment key={index} data={comment} />

                        <div className="ml-5 pl-5 border-l-1">
                            <CommentList comments={comment.replies} />
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export const CommentsContainer = () => {
    return <div>
        <CommentList comments={commentData} />
    </div>
}