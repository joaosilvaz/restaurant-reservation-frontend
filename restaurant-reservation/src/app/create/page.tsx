"use client";
import ViewReservation from "@/app/view-reservations/page"; // Importa o modal
import { useState } from "react";
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

export default function CreateReservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [mesa, setMesa] = useState("");
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const getAllDates = () => {
    const dates = [];
    const start = new Date("2025-04-09");
    const end = new Date("2025-12-31");

    let current = start;
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates.map((d) => ({
      value: d.toISOString().split("T")[0],
      label: d.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    }));
  };

  const allDates = getAllDates();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !people || !phone || !mesa) {
      alert("Por favor, preencha todos os campos antes de criar a reserva.");
      return;
    }

    const novaReserva = {
      telefoneCliente: phone,
      dataReserva: date,
      horaReserva: time,
      quantidadePessoas: parseInt(people),
      status: true,
      mesa: parseInt(mesa),
    };

    try {
      const response = await fetch("http://localhost:8080/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaReserva),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro na resposta:", errorText);
        throw new Error(`Erro ao criar reserva: ${errorText}`);
      }

      const data = await response.json();
      alert("Reserva criada com sucesso!");
      setCreatedBooking(data);
      localStorage.setItem("reserva", JSON.stringify(data)); // salva a reserva
      setShowModal(true);


    } catch (error) {
      console.error("Erro ao enviar reserva:", error);
      alert("Erro ao criar a reserva. Tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[url('/images/bg-cadastro.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-60">
      <div className="inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="bg-black rounded-lg max-w-md mx-auto h-[520px] text-white relative w-full">
          <h2 className="text-2xl font-bold text-center mt-10">Yamato Sushi</h2>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3 p-6">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📅</span>
              <select value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 pl-10 bg-white text-gray-700 rounded-lg focus:outline-none">
                <option value="">Dia da Reserva</option>
                {allDates.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <input type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 bg-white text-gray-700 rounded-lg"
              placeholder="Horário" />

            <input type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full p-3 bg-white text-gray-700 rounded-lg"
              placeholder="Pessoas" />

            <input type="number"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
              className="w-full p-3 bg-white text-gray-700 rounded-lg"
              placeholder="Mesa" />

            <input type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-white text-gray-700 rounded-lg"
              placeholder="Telefone"
              maxLength={20} />

            <div className="flex justify-between mt-4">
              <button type="submit"
                className="w-1/2 bg-white text-black border border-transparent font-bold py-3 rounded-lg hover:bg-black hover:text-white hover:border-white transition cursor-pointer">
                Criar Reserva
              </button>
              <button type="button"
                onClick={() => (router.push("/#reservas"))}
                className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer">
                Fechar
              </button>
            </div>
          </form>

          {showModal && createdBooking && (
            <ViewReservation booking={createdBooking} />
          )}
        </div>
      </div>
    </div>
  );
}
