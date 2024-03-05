import React, { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { IComment } from "../../lib/types/comment";
import ReactPaginate from "react-paginate";
interface Props {
  comments: IComment[];
}

const CommentSection: React.FC<Props> = ({ comments }) => {
  const { t } = useLanguage();
  const itemsPerPage = 4; // Số lượng bình luận hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderReplies = (replies: IComment[] | undefined) => {
    if (!replies || replies.length === 0) {
      return null;
    }

    return (
        <div className="ml-8 mt-4">
          {replies.map((reply) => (
            <div key={reply.id} className="p-4 bg-gray-100 border rounded-md shadow-md mb-2">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold">{reply.name}</p>
                  <p>{reply.content}</p>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-500">
                  <span>Like</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18l-1 1-1-1H3a2 2 0 01-2-2V7a2 2 0 012-2h1l1-1h8l1 1h1a2 2 0 012 2v9a2 2 0 01-2 2h-7zm-2 0h4v-1.061a3.5 3.5 0 00-2-.939 3.5 3.5 0 00-2 .939V18z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="flex items-center space-x-2 text-gray-500">
                  <span>Reply</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.95 12h-8.96a2 2 0 00-1.98 2c0 .228.047.447.126.646A2.986 2.986 0 006 17a3 3 0 003 3 3 3 0 001.677-.523A3.978 3.978 0 0016 14.01v-1.055a3.964 3.964 0 00-1.336-.788 4.007 4.007 0 001.286-7.474 2 2 0 00-.414-3.775 4.955 4.955 0 00-1.584-.251c-2.935 0-5.55 1.282-7.345 3.315A9.994 9.994 0 002 18v2H1v-2c0-2.121.799-4.07 2.249-5.554C4.327 11.22 5.743 10 7.5 10H9V9H7.5a6.518 6.518 0 00-3.676 1.144A6.96 6.96 0 003 15c0 3.859 3.14 7 7 7s7-3.141 7-7c0-1.501-.475-2.292-1.05-2.981z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    };
    const indexOfLastComment = currentPage * itemsPerPage;
    const indexOfFirstComment = indexOfLastComment - itemsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  
    const totalPages = Math.ceil(comments.length / itemsPerPage);
  return (
    <div className="grid gap-4 grid-cols-12 my-8 pt-1 xl:max-w-[2100px] mx-auto">
        <div className="col-span-12 mb-4 ml-4">
            <h2 className="text-2xl font-bold">Review Comments</h2>
        </div>
    {currentComments.map((comment) => (
      <div key={comment.id} className="col-span-12 p-4 bg-white border rounded-md shadow-md mb-4 ml-2 mr-2">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-bold">{comment.name}</p>
            <p className="text-gray-500">{comment.registerDate}</p>
          </div>
        </div>
        <div className="mt-2">
          {Array.from({ length: comment.starRating }).map((_, i) => (
            <span key={i} className="text-yellow-500">&#9733;</span>
          ))}
        </div>
        <p className="mt-2">{comment.content}</p>
        <div className="mt-4 flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-500">
            <span>Like</span>    
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18l-1 1-1-1H3a2 2 0 01-2-2V7a2 2 0 012-2h1l1-1h8l1 1h1a2 2 0 012 2v9a2 2 0 01-2 2h-7zm-2 0h4v-1.061a3.5 3.5 0 00-2-.939 3.5 3.5 0 00-2 .939V18z"
                    clipRule="evenodd"
                  />
                </svg>
            </button>
            <button className="flex items-center space-x-2 text-gray-500">
                <span>Reply</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.95 12h-8.96a2 2 0 00-1.98 2c0 .228.047.447.126.646A2.986 2.986 0 006 17a3 3 0 003 3 3 3 0 001.677-.523A3.978 3.978 0 0016 14.01v-1.055a3.964 3.964 0 00-1.336-.788 4.007 4.007 0 001.286-7.474 2 2 0 00-.414-3.775 4.955 4.955 0 00-1.584-.251c-2.935 0-5.55 1.282-7.345 3.315A9.994 9.994 0 002 18v2H1v-2c0-2.121.799-4.07 2.249-5.554C4.327 11.22 5.743 10 7.5 10H9V9H7.5a6.518 6.518 0 00-3.676 1.144A6.96 6.96 0 003 15c0 3.859 3.14 7 7 7s7-3.141 7-7c0-1.501-.475-2.292-1.05-2.981z"
                    clipRule="evenodd"
                  />
                </svg>
            </button>
        </div>

          {renderReplies(comment.replies)}
        </div>
     ))}
    <div className="col-span-12 flex justify-center mt-8">
        <nav className="inline-block">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 border rounded-full ${
                    index + 1 === currentPage ? "bg-gray-300" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommentSection;