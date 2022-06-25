import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

import vscodeHomePicture from "../assets/vscode-home-picture.png";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col mt-10 mx-auto lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[640px] flex flex-col items-center text-center px-6 lg:block lg:text-left lg:py-0">
          <Logo />

          <h1 className="mt-8 text-[1.875rem] leading-tight lg:text-[2.5rem]">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="text-sm mt-6 text-gray-200 leading-relaxed lg:text-base lg:mt-4">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="mt-8 p-8 bg-gray-700 border border-gray-500 lg:rounded lg:mt-0">
          <strong className="text-lg mb-6 block lg:text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={vscodeHomePicture} alt="" />
    </div>
  );
}
