import { Button } from "@/components/button";
import Link from "next/link";

export interface PostProps {
    id: number,
    title: string,
    body: string,
    userId: number,
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json();
    console.log('DATA:', data);

    async function handleFetchPosts() {
        'use server'
        console.log('CLICOOOU');
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'
        const userId = formData.get('userId');
        console.log('TESTEEEE', userId);
    }

    return (
        <div>
            <h1  className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts!</h1>
            
            <button
                className="bg-zinc-900 text-white rounded-md px-2 py-1 m-5 cursor-pointer"
                onClick={handleFetchPosts}
                type="button"
            >
                Buscar Posts
            </button>
            <Button/>

            <form
                className="flex fap-2 my-4"
                action={handleSearchUsers}
            >
                <input
                    type="text"
                    placeholder="ID do Usuário"
                    className="border border-gray-200 p-2"
                    name="userId"
                />
                <button
                    className="bg-blue-500 text-white p-2 cursor-pointer"
                    onClick={handleFetchPosts}
                    type="submit"
                >
                    Buscar Usuário
                </button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link
                            className="text-blue-500"
                            href={`/posts/${post.id}`}
                        >
                            Acessar Detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}