"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
// 1. IMPORTANTE: Importe a função de atualizar do seu arquivo do servidor
// Ajuste o caminho do import ('@/actions/bookings' ou onde estiver o seu arquivo do servidor)
import { updateBooking } from "../../../actions/booking-actions";

type Booking = {
  id: number;
  telefoneCliente: string;
  dataReserva: string;
  horaReserva: string;
  quantidadePessoas: number;
  status: boolean;
  mesa: number;
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

export default function EditReservation() {
  const { id } = useParams(); // pega o id da URL
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataReserva, setDataReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");
  const [quantidadePessoas, setQuantidadePessoas] = useState<number | "">("");
  const [mesa, setMesa] = useState<number | "">("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (id) {
      // Como o Next.js no Client precisa ler a variável da Render para buscar os dados iniciais,
      // buscamos de forma segura. (Se preferir centralizar, pode criar um getBookingById no seu server file)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://restaurant-reservation-jcz8.onrender.com";

      fetch(`${apiUrl}/bookings/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBooking(data);
          setDataReserva(data.dataReserva);
          setHoraReserva(data.horaReserva);
          setQuantidadePessoas(data.quantidadePessoas);
          setTelefoneCliente(data.telefoneCliente);
          setMesa(data.mesa);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro ao buscar reserva:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading)
    return <div className="text-white text-center mt-10">Carregando...</div>;

  if (!booking)
    return (
      <div className="text-red-500 text-center mt-10">
        Reserva não encontrada.
      </div>
    );

  const allDates = getAllDates(2025);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid =
      dataReserva.trim() !== "" &&
      horaReserva.trim() !== "" &&
      telefoneCliente.trim() !== "" &&
      quantidadePessoas !== "" &&
      Number(quantidadePessoas) > 0 &&
      mesa !== "" &&
      Number(mesa) > 0;

    if (!isValid) {
      alert("Por favor, preencha todos os campos correctamente antes de atualizar a reserva.");
      return;
    }

    // 2. Montamos o FormData que a sua Server Action 'updateBooking' espera receber
    const formData = new FormData();
    formData.append("name", "Cliente"); // Altere dinamicamente se tiver o nome do usuário logado
    formData.append("phone", telefoneCliente);
    formData.append("email", "cliente@email.com");
    formData.append("date", dataReserva);
    formData.append("time", horaReserva);
    formData.append("guests", quantidadePessoas.toString());

    try {
      // 3. Chamamos a Server Action passando o ID numérico e o FormData
      await updateBooking(booking.id, formData);

      // Atualiza o estado local do localStorage para manter os dados sincronizados na máquina do cliente
      const reservaAtualizada: Booking = {
        id: booking.id,
        telefoneCliente,
        dataReserva,
        horaReserva,
        quantidadePessoas: Number(quantidadePessoas),
        status: true,
        mesa: Number(mesa),
      };
      localStorage.setItem("reserva", JSON.stringify(reservaAtualizada));

      alert("Reserva atualizada com sucesso!");
      router.push("/#reservas");
    } catch (error) {
      console.error("Erro ao atualizar a reserva:", error);
      alert("Erro ao atualizar a reserva. Tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[url('/images/bg-cadastro.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-60">
      <div className="inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="bg-black rounded-lg max-w-md mx-auto h-[520px] text-white relative w-full">
          <h2 className="text-2xl font-bold text-center mt-10">Editar Reserva</h2>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3 p-6">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📅</span>
              <select
                defaultValue={booking.dataReserva}
                onChange={(e) => setDataReserva(e.target.value)}
                className="w-full p-3 pl-10 bg-white text-gray-700 rounded-lg focus:outline-none"
              >
                <option value={booking.dataReserva}>Dia da Reserva</option>
                {allDates.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="time"
              defaultValue={booking.horaReserva}
              onChange={(e) => setHoraReserva(e.target.value)}
              className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
              placeholder="Horário"
            />

            <input
              type="number"
              value={quantidadePessoas}
              onChange={(e) =>
                setQuantidadePessoas(e.target.value === "" ? "" : parseInt(e.target.value))
              }
              className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
              placeholder="Pessoas"
            />

            <input
              type="number"
              value={mesa}
              onChange={(e) =>
                setMesa(e.target.value === "" ? "" : parseInt(e.target.value))
              }
              className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
              placeholder="Mesa"
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
                className="w-1/2 bg-white text-black border border-transparent font-bold py-3 rounded-lg hover:bg-black hover:text-white hover:border-white transition cursor-pointer"
              >
                Editar Reserva
              </button>
              <button
                type="button"
                className="w-1/3 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                onClick={() => router.push("/#reservas")}
              >
                Fechar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}