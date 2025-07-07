import React from 'react';

const commentsData = [
    {
        name: "Neschal Singh",
        text: "This is a comment",
        replies: [
            {
                name: "Neschal Singh",
                text: "This is a comment",
                replies: [
                    {
                        name: "Neschal Singh",
                        text: "This is a comment",
                        replies: [
                            {
                                name: "Mohan Yadav",
                                text: "Long live India",
                                replies: [
                                    {
                                        name: "Neschal Singh",
                                        text: "This is a comment",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Neschal Singh",
                        text: "This is a comment",
                        replies: [
                            {
                                name: "Neschal Singh",
                                text: "This is a comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Mohan Yadav",
        text: "Long live India",
        replies: [
            {
                name: "Neschal Singh",
                text: "This is a comment",
                replies: []
            },
            {
                name: "Neschal Singh",
                text: "This is a comment",
                replies: [
                    {
                        name: "Neschal Singh",
                        text: "Long live India",
                        replies: [
                            {
                                name: "Mohan Yadav",
                                text: "I love you",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <>
            <div className="flex m-2">
                <img
                    src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg"
                    alt="user profile"
                    className="w-10 h-10 rounded-full"
                />
                <div className="px-1 py-1">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-md font-medium px-1">{text}</p>

                    {/* Recursive rendering of replies */}
                    {replies.length > 0 && (
                        <div className="ml-2 border-l border-gray-400 pl-2 mt-2">
                            {replies.map((reply, index) => (
                                <Comment key={index} data={reply} />
                            ))}
                        </div>
                    )}

                </div>
            </div>

        </>
    );
};

const CommentsContainer = () => {
    return (
        <div className="m-4 px-2">
            <h1 className="text-2xl font-bold mb-6">Comments:</h1>
            {commentsData.map((comment, index) => (
                <div key={index}>
                    <Comment data={comment} />
                    <hr className="border-t border-gray-400 my-4" />
                </div>
            ))}
        </div>
    );
};


export default CommentsContainer;
