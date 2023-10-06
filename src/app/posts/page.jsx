import Link from "next/link";
export default function MeuPrimeiroPost(){

    return(
        <>
            <div>
                <h1>Meu primeiro Post</h1>
                <p><Link href="/">Voltar pro Home...</Link></p>
            </div>
        </>
    )
}