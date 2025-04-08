"use client";
import React from "react";

export interface Booking {
    id: number;
    user: string;
    telefoneCliente: string;
    emailCliente: string;
    dataReserva: string;
    horaReserva: string;
    quantidadePessoas: number;
    status: boolean;
    mesa: number;
}

interface Props {
    booking: Booking;
}


export default function ViewReservation({ booking}: Props) {
    if (!booking) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full text-center">
                    <h2 className="text-2xl font-bold">Reserva não encontrada</h2>
                    <button
                        onClick={() => window.location.href = "/#reservas"}
                        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer transition"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full">
                <h2 className="text-3xl font-bold text-center">
                   Sua reserva:
                </h2>
                <div className="mt-10 text-lg text-center">
                    <p>📅 <b>Data:</b> {booking.dataReserva}</p>
                    <p>⏰ <b>Horário:</b> {booking.horaReserva}</p>
                    <p>👥 <b>Pessoas:</b> {booking.quantidadePessoas}</p>
                    <p>📞 <b>Telefone:</b> {booking.telefoneCliente}</p>
                    <p>🙍‍♂️ <b>Nome:</b> {booking.user}</p>
                    <p>📧 <b>Email:</b> {booking.emailCliente}</p>
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
