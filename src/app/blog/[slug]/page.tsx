import { notFound } from "next/navigation";

import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import ButtonBack from "@/components/ButtonBack";

interface Props {
    params: {
        slug: string;
    };
}

// se debe indicar a Next que las páginas de posts (01-blog, 02-blog, 03-blog) deben ser html
// para ello se utiliza el método generateStaticParams (puede ser asincrono)
// en este caso no sera asincrono porque todo esta estático
// este método se genera antes de los Layouts o Pages correspondientes
// debe devolver un array de objetos, cada objeto representa los segmentos dinámicos poblados de una sola ruta.
// luego procedemos con la compilacion : npm run build
// se generan archivos SSG : static site generation que son static HTML + JSON
// si se agregan más posts, se debe volver a compilar la aplicación con el comando npm run build
export const generateStaticParams = () => {
    /*   return [
    { slug: "01-blog" },
    {
      slug: "02-blog",
    },
    {
      slug: "03-blog",
    },
  ]; */

    return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: Props) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
    // para saltarse que post es posiblemente 'undefined'
    //se coloca signo de interrogación ? luego de la palabra post
    return {
        title: post?.title,
        description: post?.description,
    };
};

const PostLayout = ({ params }: Props) => {
    //console.log(params);

    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

    let MDXContent;

    if (!post) {
        /* return <div>Post not found </div>; */
        // podria ser redirigido a la pagina posts
        notFound();
    } else {
        MDXContent = useMDXComponent(post.body.code);
    }
    return (
        <>
            <h1 className="text-center text-2xl font-bold uppercase">
                {post.title}
            </h1>
            <div className="mb-8 text-center">
                <time className="text-gray-700">
                    {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </div>

            <MDXContent />

            <div className="mt-8 text-center">
                <ButtonBack>Volver</ButtonBack>
            </div>
        </>
    );
};
export default PostLayout;
