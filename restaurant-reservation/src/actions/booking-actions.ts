"use server";
import { redirect } from "next/navigation";

// O Next.js vai ler dinamicamente o valor do seu arquivo .env
const BASE_URL = process.env.API_URL;

// Endpoints construídos a partir da URL base do .env
const BOOKINGS_API = `${BASE_URL}/bookings`;
const USERS_API = `${BASE_URL}/usuarios`; // Ajuste se o endpoint do Java for diferente

// ==========================================
//           CONTEXTO: USUÁRIOS & LOGIN
// ==========================================

// Criar novo usuário (Cadastro)
export async function registerUser(formData: FormData) {
  const data = {
    nome: formData.get("name"),
    email: formData.get("email"),
    senha: formData.get("password"),
  };

  const response = await fetch(`${USERS_API}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao cadastrar usuário");

  redirect("/login");
}

// Efetuar Login
export async function loginUser(formData: FormData) {
  const data = {
    email: formData.get("email"),
    senha: formData.get("password"),
  };

  const response = await fetch(`${USERS_API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("E-mail ou senha incorretos");

  redirect("/bookings");
}


// ==========================================
//           CONTEXTO: RESERVAS (BOOKINGS)
// ==========================================

// Buscar todas as reservas
export async function getBookings() {
  // Caso a variável mude de nome ou suma por algum motivo, uma proteção simples:
  if (!BOOKINGS_API) throw new Error("A API_URL não foi definida no ambiente.");

  const response = await fetch(BOOKINGS_API, { cache: "no-store" });
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
    mesa: 0, 
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(BOOKINGS_API, options);

  redirect("/bookings");
}

// Atualizar reserva
export async function updateBooking(id: number, formData: FormData) {
  const data = {
    user: formData.get("name"),
    telefoneCliente: formData.get("phone"),
    emailCliente: formData.get("email"),
    dataReserva: formData.get("date"), 
    horaReserva: formData.get("time"), 
    quantidadePessoas: parseInt(formData.get("guests") as string),
    status: false, 
    mesa: 0, 
  };

  await fetch(`${BOOKINGS_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  redirect("/bookings");
}

// Deletar reserva
export async function deleteBooking(id: number) {
  await fetch(`${BOOKINGS_API}/${id}`, {
    method: "DELETE",
  });

  redirect("/bookings");
}