"use client";
import { useState } from "react";

export default function ViewReservation() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full">
                <h2 className="text-3xl font-bold text-center">
                    Tem certeza que deseja excluir esta reserva?
                </h2>
                <p className="text-base text-white text-center mt-6">
                    Essa ação não pode ser desfeita. Após a exclusão, os detalhes da reserva serão permanentemente removidos do sistema.
                </p>

                <div className="mt-10 text-lg text-center">
                    <p>📅 <b>Data:</b> 15/03/2025</p>
                    <p>⏰ <b>Horário:</b> 19:30</p>
                    <p>👥 <b>Pessoas:</b> 4</p>
                    <p>👥 <b>Telefone: </b> 11 99553-3435</p>
                    <p>👥 <b>Nome: </b> João Vitor da Silva</p>
                    <p>👥 <b>Email: </b> joao123@gmail.com</p>
                </div>

                <div className="flex justify-center gap-10 mt-12">
                    <button
                        onClick={() => window.location.href = "/#reservas"}
                        className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}