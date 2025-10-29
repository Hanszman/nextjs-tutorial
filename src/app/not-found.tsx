import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-3xl">Página 404 Não Econtrada!</h1>
            <p className="mt-2">Essa página que tentou acessar não existe!</p>
            <Link href="/" className="font-bold text-zinc-900">Voltar para a home</Link>
        </div>
    );
}