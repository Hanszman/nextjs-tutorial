'use client'
import { useState } from "react";

export function Button() {
    const [nome, setNome] = useState("Sujeito Programador");

    function handleChangeName() {
        alert('CLICK!')
        setNome("Victor Hanszman");
    }

    return (
        <div>
            <button
                className="bg-zinc-900 text-white rounded-md px-2 py-1 m-5 cursor-pointer"
                onClick={handleChangeName}
            >
                Alterar Nome!
            </button>
            <br/>
            <h3>Nome: {nome}</h3>
        </div>
    );
}