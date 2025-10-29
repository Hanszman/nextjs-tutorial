import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>NextJS</div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <Link href="/" className="cursor-pointer">Home</Link>
                        <Link href="/posts" className="cursor-pointer">Posts</Link>
                        <Link href="/dashboard" className="cursor-pointer">Dashboard</Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}