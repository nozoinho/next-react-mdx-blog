import { allPosts, Post } from "contentlayer/generated";
import PostLists from "@/components/PostLists";
import PostsPagination from "@/components/PostsPagination";
import { getPagination } from "@/utils/pagination";
//import { getPostsPagination, totalPages } from "@/utils/pagination";
import { notFound } from "next/navigation";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props {
    params: {
        number: string;
    };
}

export const generateStaticParams = () => {
    return Array.from({ length: posts.length }).map((_, index) => ({
        number: `${index + 1}`,
    }));
};

//const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));
// al colocar el cursor en Post[] se pueden visualizar los datos que contiene post y su tipo validado
//console.log(allPosts[0].title);

// paginacion
/* const totalPosts = posts.length;
const postPerPage = 2;
const totalPages = Math.ceil(totalPosts / postPerPage); */

const LayoutPages = ({ params }: Props) => {
    /* let arrayCurrentPosts;

    try {
        if (!/^\d+$/.test(params.number)) {
            throw new Error("Invalid page number");
        }
        const currentPage = parseInt(params.number);
        arrayCurrentPosts = getPostsPagination(currentPage).currentPosts;
    } catch (error) {
        notFound();
    } */

    let arrayCurrentPosts;
    let totalPagesNumber;
    try {
        //const currentPage = parseInt(params.number);
        const { currentPosts, totalPages } = getPagination(
            posts,
            2,
            params.number
        );
        arrayCurrentPosts = currentPosts;
        totalPagesNumber = totalPages;
    } catch (error) {
        console.log(error);
        notFound();
    }

    //console.log(params);

    /*   const offset = (currentPage - 1) * postPerPage; // maneja la posición de elementos que se mostrarán en cada página
  const currentPosts = posts.slice(offset, offset + postPerPage); */
    // son los posts que se deben mostrar en la página actual
    // array que contiene los 2 posts
    // slice recorta el array y devuelve el array cortado,
    // los parámetros son valor inicial y valor final

    //const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div>
            {/* <h1 className="my-4 text-center text-3xl">Posts</h1> */}
            <div className="gpa4 grid">
                {/* <PostLists posts={posts} /> */}
                {/* <PostLists posts={currentPosts} /> */}
                <PostLists posts={arrayCurrentPosts} />
                {totalPagesNumber > 1 && (
                    <PostsPagination
                        totalPages={totalPagesNumber}
                        currentPage={parseInt(params.number)}
                    />
                )}
            </div>
        </div>
    );
};
export default LayoutPages;
