import Link from "next/Link";

export default function NotFound(){
    return (
        <div>
            <h2>
                Página não encontrada! !
            </h2>
            <Link href="/">Retornar para Home</Link>
        </div>
    )
}