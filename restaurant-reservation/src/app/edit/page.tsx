"use client";
import { useEffect, useState } from "react";

type Booking = {
  user: string;
  telefoneCliente: string;
  emailCliente: string;
  dataReserva: string;
  horaReserva: string;
  quantidadePessoas: number;
  status: boolean;
  mesa: number;
};

type Props = {
  booking: Booking;
};

const getAllDates = (year = 2025) => {
  const dates = [];
  const start = new Date(`${year}-04-10`);
  const end = new Date(`${year}-12-31`);
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

export default function EditReservation({ booking }: Props) {
  const [dataReserva, setDataReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [user, setUser] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [mesa, setMesa] = useState(0);

  useEffect(() => {
    if (booking) {
      setDataReserva(booking.dataReserva);
      setHoraReserva(booking.horaReserva);
      setQuantidadePessoas(booking.quantidadePessoas);
      setTelefoneCliente(booking.telefoneCliente);
      setUser(booking.user);
      setEmailCliente(booking.emailCliente);
      setMesa(booking.mesa);
    }
  }, [booking]);

  const allDates = getAllDates(2025);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dataReserva || !horaReserva || !quantidadePessoas || !telefoneCliente || !user || !emailCliente) {
      alert("Por favor, preencha todos os campos antes de atualizar a reserva.");
      return;
    }

    const reservaAtualizada: Booking = {
      user,
      telefoneCliente,
      emailCliente,
      dataReserva,
      horaReserva,
      quantidadePessoas,
      status: true,
      mesa,
    };

    console.log("Reserva atualizada:", reservaAtualizada);
    alert("Reserva atualizada com sucesso!");
    window.location.href = "/#reservas";
  };

  return (
    <div className="inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
      <div className="bg-black rounded-lg max-w-md mx-auto text-white relative w-full">
        <img
          src="/images/bg-cadastro.jpg"
          alt="Yamato Sushi"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <h2 className="text-2xl font-bold text-center mt-4">Editar Reserva</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 p-6">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">📅</span>
            <select
              value={dataReserva}
              onChange={(e) => setDataReserva(e.target.value)}
              className="w-full p-3 pl-10 bg-white text-gray-700 rounded-lg focus:outline-none"
            >
              <option value="">Dia da Reserva</option>
              {allDates.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <input
            type="time"
            value={horaReserva}
            onChange={(e) => setHoraReserva(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
            placeholder="Horário"
          />

          <input
            type="number"
            value={quantidadePessoas}
            onChange={(e) => setQuantidadePessoas(parseInt(e.target.value))}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
            min={1}
            placeholder="Pessoas"
          />

          <input
            type="number"
            value={mesa}
            onChange={(e) => setMesa(parseInt(e.target.value))}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
            placeholder="Mesa"
            min={0}
          />

          <input
            type="tel"
            value={telefoneCliente}
            onChange={(e) => setTelefoneCliente(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
            placeholder="Telefone"
          />

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="w-1/2 bg-white text-black font-bold py-3 rounded-lg hover:bg-black hover:text-white hover:border border-white transition cursor-pointer"
            >
              Editar Reserva
            </button>
            <button
              type="button"
              className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
              onClick={() => window.location.href = "/#reservas"}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
