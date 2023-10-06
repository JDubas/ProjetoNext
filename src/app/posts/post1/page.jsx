import Link from "next/link";
import Image from 'next/image'
export default function Post1(){

    return(
        <>
            <div>
                <h1>Meu primeiro Post 1</h1>
                <p><Link href="/">Voltar pro Home...</Link></p>
                <Image src="/imgs/imagem1.jpg"width={500} height={500} alt="Imagem 1"/>
            </div>
        </>
    )
}