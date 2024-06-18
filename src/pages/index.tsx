import Link from "next/link";
import Perfil from "./componentes/Perfil";

// busque :useeffect,usestate
export default function Home() {
  return (
    <>
    <nav>
      
        <Link href="about">
          about
        </Link>
      
    </nav>
      <p> hola</p>
      <Perfil nombre="luciano" apellido="Carrizo" edad={20}/>
      <Perfil nombre="perdro" apellido="pasten" edad={21}/>
    </>
  );
}
