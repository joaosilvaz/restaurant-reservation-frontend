import Link from "next/link";

interface ReservationProps {
  active: "create" | "edit" | "view" | "delete";
}

export default function Reservation(props: ReservationProps) {
  const { active } = props
  const classActive = "";

  return (
    <section id="reservas" className="bg-black text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center">RESERVAS</h2>
        <p className="text-center mt-6 text-white text-[20px]">
          Aqui você pode criar, alterar, visualizar e excluir suas reservas de forma rápida e fácil
        </p>

        <div className="mt-10 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Como Funciona?</h3>
            <ul className="mt-2 text-white space-y-2 text-xl">
              <li><strong>Passo 1:</strong> Escolha uma data e horário disponíveis.</li>
              <li><strong>Passo 2:</strong> Informe a quantidade de pessoas.</li>
              <li><strong>Passo 3:</strong> Confirme sua reserva e receba a confirmação.</li>
              <li><strong>Passo 4:</strong> Caso precise, altere ou cancele facilmente.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <Link href="/create">
              <button
                className={`w-64 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition cursor-pointer ${active === "create" ? classActive : ""}`}
              >
                CRIAR RESERVA
              </button>
            </Link>
            <Link href="/edit">
              <button className={`w-64 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition cursor-pointer ${active === "edit" ? classActive : ""}`}>
                ALTERAR RESERVA
              </button>
            </Link>
            <Link href="/view-reservations">
              <button className={`w-64 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition cursor-pointer ${active === "view" ? classActive : ""}`}>
                VER RESERVA
              </button>
            </Link>
            <Link href="/delete">
              <button className={`w-64 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition cursor-pointer ${active === "delete" ? classActive : ""}`}>
                EXCLUIR RESERVA
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
