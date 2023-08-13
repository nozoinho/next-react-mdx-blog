import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number; // ? significa que el elementos es opcional
}

const PostsPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        Prev
      </Link>
      {
        Array.from({ length: totalPages }).map((_, index) => (
          <Link
            href={`/page/${index + 1}`}
            key={index}
            className={`${
              currentPage === index + 1
                ? "text-gray-600 pointer-events-none"
                : "text-blue-700"
            }`}
          >
            {index + 1}
          </Link>
        ))
        //Array.from crea un array, se establece la longitud que tiene totalPages
      }
      <Link
        href={`/page/${currentPage + 1}`}
        className={`${
          currentPage === totalPages
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        Next
      </Link>
      {/*   <button>1</button>
      <button>2</button>
      <button>3</button> */}
    </div>
  );
};
export default PostsPagination;
