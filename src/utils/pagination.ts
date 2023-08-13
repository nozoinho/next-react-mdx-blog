//import { Post, allPosts } from "contentlayer/generated";

//const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

/* const totalPosts = posts.length;
const postPerPage = 2;
export const totalPages = Math.ceil(totalPosts / postPerPage); */

const isNumber = (value: string) => /^\d+$/.test(value);

/* export const getPagination = (currentPage: number = 1) => { */
export const getPagination = <T>(
    items: T[],
    postPerPage = 2,
    currentPage = "1"
) => {
    // <T> y T[] simbolizan que es un tipo genérico
    if (!isNumber(currentPage)) {
        throw new Error("Invalid page number");
    }
    /* const totalPosts = posts.length; */
    const currentPageInt = parseInt(currentPage, 10);
    const totalPosts = items.length;
    //const postPerPage = 2;
    const totalPages = Math.ceil(totalPosts / postPerPage);

    if (currentPageInt > totalPages) {
        throw new Error(`Page ${currentPageInt} does not exist`);
    }

    const offset = (currentPageInt - 1) * postPerPage;
    /* const currentPosts = posts.slice(offset, offset + postPerPage); */
    const currentPosts = items.slice(offset, offset + postPerPage);

    return { currentPosts, totalPages };
};
