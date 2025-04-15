"use client";
import { useEffect, useState } from "react";
import { useRouter} from "next/navigation";

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

  if (!reserva) {
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
        <h2 className="text-3xl font-bold text-center">Sua reserva:</h2>
        <div className="mt-10 text-lg text-center">
          <p> <b>Data:</b> {reserva.dataReserva}</p>
          <p> <b>Horário:</b> {reserva.horaReserva}</p>
          <p> <b>Pessoas:</b> {reserva.quantidadePessoas}</p>
          <p> <b>Telefone:</b> {reserva.telefoneCliente}</p>
        </div>

        <div className="flex justify-center gap-10 mt-12">
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
