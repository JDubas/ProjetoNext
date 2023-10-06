import Link from "next/link";
import Image from "next/image";
export default function Post3(){

    return(
        <>
            <div>
                <h1>Meu primeiro Post 3</h1>
                <p><Link href="/">Voltar pro Home...</Link></p>,
                <Image src="/imgs/imagem3.jpg"       
                width={500}
                height={500}
                alt="Imagem 3"/>
            </div>
        </>
    )
}