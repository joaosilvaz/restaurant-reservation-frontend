import React from "react";

interface NavBarProps{
    active: "dashboard" | "movimentações" | "categorias"
}

export default function NavBar(props: NavBarProps){
    const { active } = props
    const classActive = "border-b-4 border-pink-700"

    return(
        <nav className="flex p-6 bg-slate-900 justify-between items-center">
            <h1 className="text-2xl font-bold">MoneyFlow</h1>
            <ul className="flex gap-4">
                <li className={active === "dashboard" ? classActive : ""}><a href="/dashboard">dashboard</a></li>
                <li className={active === "movimentações" ? classActive : ""}><a href="/transactions">movimentações</a></li>
                <li className={active === "categorias" ? classActive : ""}><a href="/categories">categorias</a></li>
            </ul>
            <img src="http://github.com/edvxndxvi.png" alt="avatar" className="size-12 rounded-full"/>
        </nav>
    )
}