"use client";
import { useEffect, useState } from "react";

export default function ViewReservation() {
    const [reserva, setReserva] = useState<any>(null);

    useEffect(() => {
        const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
        setReserva(reservas[reservas.length - 1]); 
    }, []);

    if (!reserva) return <p className="text-center mt-10 text-white">Nenhuma reserva encontrada.</p>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full">
                <h2 className="text-3xl font-bold text-center">Reserva Criada</h2>
                <div className="mt-10 text-lg text-center">
                    <p>📅 <b>Data:</b> {reserva.date}</p>
                    <p>⏰ <b>Horário:</b> {reserva.time}</p>
                    <p>👥 <b>Pessoas:</b> {reserva.people}</p>
                    <p>📞 <b>Telefone:</b> {reserva.phone}</p>
                    <p>👤 <b>Nome:</b> {reserva.name}</p>
                    <p>📧 <b>Email:</b> {reserva.email}</p>
                </div>
                <div className="flex justify-center mt-12">
                    <button onClick={() => window.location.href = "/home#reservas"} className="w-1/3 bg-orange-500 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-black">Fechar</button>
                </div>
            </div>
        </div>
    );
}