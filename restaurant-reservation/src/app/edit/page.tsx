"use client"
import Reservation from "@/components/reservation";
import { useState } from "react";

export default function EditReservation() {
  const reservaExistente = {
    date: "2024-09-20",
    time: "19:30",
    people: "2",
    phone: "11987654321",
    name: "João Silva",
    email: "joao@email.com"
  };

  const [date, setDate] = useState(reservaExistente.date);
  const [time, setTime] = useState(reservaExistente.time);
  const [people, setPeople] = useState(reservaExistente.people);
  const [phone, setPhone] = useState(reservaExistente.phone);
  const [name, setName] = useState(reservaExistente.name);
  const [email, setEmail] = useState(reservaExistente.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !people || !phone || !name || !email) {
      alert("Por favor, preencha todos os campos antes de atualizar a reserva.");
      return;
    }

    console.log("Reserva atualizada:", { date, time, people, phone, name, email });
    alert("Reserva atualizada com sucesso!");
  };


  return (
    <>
      <div className="bg-[#294056] p-6 rounded-lg max-w-md mx-auto mt-10 text-white">
        <img
          src="/images/yamato-popup.png"
          alt="Yamato Sushi"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-center">Editar Reserva</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">📅</span>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 pl-10 bg-white text-gray-700 rounded-lg focus:outline-none"
            >
              <option value="2024-09-20">20 de Setembro</option>
              <option value="2024-09-21">21 de Setembro</option>
              <option value="2024-09-22">22 de Setembro</option>
            </select>
          </div>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
          />

          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white text-gray-700 rounded-lg focus:outline-none"
          />

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="w-1/2 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer"
            >
              Alterar Reserva
            </button>
            <button
              type="button"
              className="w-1/3 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition cursor-pointer"
              onClick={() => window.location.href = "/#reservas"}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
