"use server";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/bookings";

// Buscar todas as reservas
export async function getBookings() {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Erro ao buscar reservas");
  return response.json();
}

// Criar nova reserva
export async function createBooking(initialState: any, formData: FormData) {
  const data = {
    user: formData.get("name"),
    telefoneCliente: formData.get("phone"),
    emailCliente: formData.get("email"),
    dataReserva: formData.get("date"), 
    horaReserva: formData.get("time"),
    quantidadePessoas: parseInt(formData.get("guests") as string),
    status: false, 
    mesa: 0, // você pode alterar isso conforme necessário
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(API_URL, options); // faltava o "await" aqui!

  redirect("/bookings");
}

// Atualizar reserva
export async function updateBooking(id: number, formData: FormData) {
  const data = {
    user: formData.get("name"),
    telefoneCliente: formData.get("phone"),
    emailCliente: formData.get("email"),
    dataReserva: formData.get("date"), // formato: "2025-04-08"
    horaReserva: formData.get("time"), // formato: "19:00"
    quantidadePessoas: parseInt(formData.get("guests") as string),
    status: false, // ou true, dependendo do valor padrão
    mesa: 0, // você pode alterar isso conforme necessário
  };

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  redirect("/bookings");
}

// Deletar reserva
export async function deleteBooking(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  redirect("/bookings");
}
