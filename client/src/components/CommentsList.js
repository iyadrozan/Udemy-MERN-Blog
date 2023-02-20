import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments :
      </h3>
      {comments.map((comment, index) => (
        <div key={index} className="shadow rounded-lg">
          <h4 className="text-xl font-bold pl-3">{comment.username}:</h4>
          <p className="mt-1 mb-4 pl-20">{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
