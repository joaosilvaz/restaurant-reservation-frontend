"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface Booking {
  id: number;
  telefoneCliente: string;
  dataReserva: string;
  horaReserva: string;
  quantidadePessoas: number;
  status: boolean;
  mesa: number;
}

interface Props {
  booking?: Booking;
}

export default function ViewReservation({ booking }: Props) {
  const [reserva, setReserva] = useState<Booking | null>(booking ?? null);
  const router = useRouter();

  useEffect(() => {
    if (!reserva) {
      const stored = localStorage.getItem("reserva");
      if (stored) {
        setReserva(JSON.parse(stored));
      }
    }
  }, [reserva]);

  const handleEdit = () => {
    if (reserva) {
      localStorage.setItem("reserva", JSON.stringify(reserva));
      router.push(`/edit/${reserva.id}`);
    }
  };

  const handleDelete = async () => {
    if (!reserva) return;

    const isConfirmed = window.confirm(
      "Tem certeza que deseja excluir esta reserva? Esta ação não pode ser desfeita."
    );

    if (!isConfirmed) return;

    try {
      const response = await fetch(`http://localhost:8080/bookings/${reserva.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Reserva excluída com sucesso!");
        localStorage.removeItem("reserva");
        router.push("/#reservas");
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

  if (!reserva) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[url('/images/bg-cadastro.jpg')] bg-no-repeat bg-cover bg-opacity-50">
        <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full text-center">
          <h2 className="text-2xl font-bold">Reserva não encontrada</h2>
          <button
            onClick={() => router.push("/#reservas")}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer transition"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 bg-background-image(url)">
      <div className="bg-black p-12 rounded-lg text-white max-w-xl w-full relative">
        <button
          onClick={() => router.push("/#reservas")}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <img src="/images/close-popup.png" alt="Fechar" className="w-8 h-8" />
        </button>
        <h2 className="text-3xl font-bold text-center">Sua reserva:</h2>
        <div className="mt-10 text-lg text-center">
          <p><b>Data:</b> {reserva.dataReserva}</p>
          <p><b>Horário:</b> {reserva.horaReserva}</p>
          <p><b>Pessoas:</b> {reserva.quantidadePessoas}</p>
          <p><b>Telefone:</b> {reserva.telefoneCliente}</p>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {/* <button
            onClick={() => router.push("/#reservas")}
            className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
          >
            Fechar
          </button> */}
          <button
            onClick={handleEdit}
            className="w-1/3 bg-white text-black font-bold py-3 rounded-lg border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="w-1/3 bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
