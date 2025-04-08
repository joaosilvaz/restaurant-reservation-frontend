"use client";
import { useState } from "react";

export default function CreateReservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getAllDates = () => {
    const dates = [];
    const start = new Date("2025-01-01");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !people || !phone || !name || !email) {
      alert("Por favor, preencha todos os campos antes de criar a reserva.");
      return;
    }

    const novaReserva = { date, time, people, phone, name, email };
    const reservasExistentes = JSON.parse(localStorage.getItem("reservas") || "[]");
    reservasExistentes.push(novaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasExistentes));

    alert("Reserva criada com sucesso!");
    window.location.href = "/home";
  };

  return (
    <div className="bg-black p-6 rounded-lg max-w-md mx-auto mt-10 text-white">
      <img src="/images/yamato-popup.png" alt="Yamato Sushi" className="w-full h-40 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-center">Yamato Sushi</h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
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

        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-3 bg-white text-gray-700 rounded-lg" placeholder="Horário" />
        <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} className="w-full p-3 bg-white text-gray-700 rounded-lg" placeholder="Pessoas" />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 bg-white text-gray-700 rounded-lg" placeholder="Telefone" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-white text-gray-700 rounded-lg" placeholder="Nome" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-white text-gray-700 rounded-lg" placeholder="Email" />

        <div className="flex justify-between mt-4">
          <button type="submit" className="w-1/2 bg-[#A8BBCD] text-white font-bold py-3 rounded-lg hover:bg-gray-400">Criar Reserva</button>
          <button type="button" onClick={() => (window.location.href = "/home#reservas")} className="w-1/3 bg-red-600 text-white font-bold py-3 rounded-lg">Fechar</button>
        </div>
      </form>
    </div>
  );
}