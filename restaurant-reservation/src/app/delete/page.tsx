"use client";
import { useState } from "react";

export default function DeleteReservation() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-[#1E3147] p-20 rounded-lg text-white max-w-xl w-full">
                <h2 className="text-3xl font-bold text-center">
                    Tem certeza que deseja excluir esta reserva?
                </h2>
                <p className="text-lg text-white text-center mt-6">
                    Essa ação não pode ser desfeita. Após a exclusão, os detalhes da reserva serão permanentemente removidos do sistema.
                </p>

                <div className="mt-6 text-lg">
                    <p>📅 <b>Data:</b> 15/03/2025</p>
                    <p>⏰ <b>Horário:</b> 19:30</p>
                    <p>👥 <b>Pessoas:</b> 4</p>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        className="w-1/2 bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                    >
                        Deletar Reserva
                    </button>
                    <button
                        onClick={() => window.location.href = "/#reservas"}
                        className="w-1/3 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition cursor-pointer"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
