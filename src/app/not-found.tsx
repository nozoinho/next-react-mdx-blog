import ButtonBack from "@/components/ButtonBack";

const NotFound = () => {
    return (
        <div className="grid gap-4">
            <h1 className="text-center text-2xl">404</h1>
            <div className="text-center">
                <ButtonBack>Volver</ButtonBack>
            </div>
        </div>
    );
};
export default NotFound;

/* import Link from "next/link";

En ocasiones, el Link de next utilizado para la página NotFound no renderiza la página a la que queremos redireccionar, en este caso al Home

Por ello, a manera de solución se utilizará el Link del useRouter
es decir, usar la navegación por el lado del cliente

const NotFound = () => {
  return (
    <div className="grid gap-4 place-content-center h-screen">
      <h1 className="text-center text-2xl">404</h1>
      <Link
        href="/"
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};
export default NotFound; */
