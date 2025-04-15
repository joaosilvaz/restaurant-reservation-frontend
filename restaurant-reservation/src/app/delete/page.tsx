"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Booking {
    id: number;
    telefoneCliente: string;
    dataReserva: string;
    horaReserva: string;
    quantidadePessoas: number;
    status: boolean;
    mesa: number;
}

export default function DeleteReservation() {
    const [booking, setBooking] = useState<Booking | null>(null);
    const router = useRouter()

    useEffect(() => {
        const reserva = localStorage.getItem("reserva");
        if (reserva) {
            setBooking(JSON.parse(reserva));
        }
    }, []);

    const handleDelete = async () => {
        if (!booking) return;

        const isConfirmed = window.confirm(
            "Tem certeza que deseja excluir esta reserva? Esta ação não pode ser desfeita."
        );

        if (!isConfirmed) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:8080/bookings/${booking.id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Reserva excluída com sucesso!");
                localStorage.removeItem("reserva");
                window.location.href = "/#reservas";
            } else {
                const errorText = await response.text();
                console.error("Erro ao excluir reserva:", errorText);
                alert("Erro ao excluir reserva: " + errorText);
            }
        } catch (error) {
            console.error("Erro ao deletar reserva:", error);
            alert("Erro inesperado ao excluir reserva.");
        }
    };

    if (!booking) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full text-center">
                    <h2 className="text-2xl font-bold">Reserva não encontrada</h2>
                    <button
                        onClick={() => (window.location.href = "/#reservas")}
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
                    Tem certeza que deseja excluir esta reserva?
                </h2>
                <p className="text-base text-white text-center mt-6">
                    Essa ação não pode ser desfeita. Após a exclusão, os detalhes da
                    reserva serão permanentemente removidos do sistema.
                </p>

                <div className="mt-10 text-lg text-center">
                    <p><b>Data:</b> {booking.dataReserva}</p>
                    <p><b>Horário:</b> {booking.horaReserva}</p>
                    <p><b>Pessoas:</b> {booking.quantidadePessoas}</p>
                    <p><b>Telefone:</b> {booking.telefoneCliente}</p>
                </div>

                <div className="flex justify-between mt-12 gap-4">
                    <button
                        onClick={handleDelete} // Chama a função handleDelete ao clicar no botão
                        className="w-1/2 bg-white text-black font-bold py-3 rounded-lg hover:bg-black hover:text-white border border-white transition cursor-pointer"
                    >
                        Excluir Reserva
                    </button>
                    <button
                        onClick={() => router.push("/#reservas")}
                        className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
