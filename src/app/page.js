import Link from "next/link";

export default function Home(){
  return(
    <div>    
      <h1>Home</h1>
      <p><Link href="/posts">Meu Post...</Link></p>
      <p><Link href="/posts/post1">Meu Post1...</Link></p>
      <p><Link href="/posts/post2">Meu Post2...</Link></p>
      <p><Link href="/posts/post3">Meu Post3...</Link></p>
    </div>
  )
}