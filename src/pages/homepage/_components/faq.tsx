import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "Quais áreas vocês atendem?",
    answer:
      "Atendemos Atibaia, SP, e cidades próximas em um raio de 50 km, incluindo Bragança Paulista, Jundiaí, e a região metropolitana de Campinas. Também realizamos entregas em locais mais distantes mediante consulta de disponibilidade e logística específica.",
  },
  {
    question: "Como faço para alugar um equipamento?",
    answer:
      "Você pode solicitar um orçamento diretamente pelo nosso site, através do WhatsApp, ou por telefone. Ao entrar em contato, nossa equipe consultará a disponibilidade do equipamento desejado e orientará sobre o contrato de locação e procedimentos de entrega.",
  },
  {
    question: "Existe um valor mínimo para locação?",
    answer:
      "Não há valor mínimo estabelecido para locação. Trabalhamos tanto com pequenas obras quanto com projetos maiores, e nossos contratos podem ser personalizados conforme a necessidade do cliente, incluindo serviços pontuais ou de longa duração.",
  },
  {
    question: "Vocês realizam a entrega dos equipamentos?",
    answer:
      "Sim, oferecemos entrega e retirada dos equipamentos diretamente no local da obra. Nossos motoristas realizam o transporte com segurança e agilidade. Caso precise de logística especial, consulte-nos para alinharmos a melhor solução.",
  },
  {
    question: "Os equipamentos alugados têm manutenção inclusa?",
    answer:
      "Sim, a manutenção preventiva e corretiva está inclusa no período de locação. Caso o equipamento apresente falhas durante o uso, enviamos técnicos para reparo ou realizamos a substituição do equipamento sem custos adicionais.",
  },
  {
    question: "Vocês alugam equipamentos para obras noturnas?",
    answer:
      "Sim, nossas locações são flexíveis para atender obras que funcionam em horários alternativos, como turnos noturnos e finais de semana. Basta informar no momento da contratação para ajustarmos a logística e o atendimento.",
  },
  {
    question: "Qual a duração mínima do contrato de locação?",
    answer:
      "A locação pode ser feita por períodos diários, semanais ou mensais, dependendo do tipo de equipamento e da necessidade do cliente. Projetos de longa duração também são bem-vindos e podem receber condições especiais.",
  },
  {
    question: "Os equipamentos são novos ou usados?",
    answer:
      "Trabalhamos com equipamentos novos e revisados. Todos os itens disponíveis para locação passam por rigorosas manutenções preventivas para garantir a segurança e o desempenho ideal durante o uso.",
  },
  {
    question: "Vocês fornecem suporte técnico durante a locação?",
    answer:
      "Sim, nosso time de suporte técnico está disponível para auxiliar em caso de dúvidas ou problemas operacionais. Oferecemos atendimento rápido para minimizar qualquer impacto na sua obra.",
  },
  {
    question: "Posso devolver o equipamento antes do prazo?",
    answer:
      "Sim, você pode devolver o equipamento antes do prazo acordado. No entanto, a cobrança será referente ao período mínimo estabelecido no contrato. Entre em contato conosco para ajustar a devolução.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos diversas formas de pagamento, como boleto bancário, transferência, e cartão de crédito. Para contratos recorrentes ou de longo prazo, podemos negociar condições diferenciadas de pagamento.",
  },
  {
    question: "Como é calculado o valor da locação?",
    answer:
      "O valor é definido com base no tipo e quantidade dos equipamentos, além da duração da locação. Também levamos em consideração serviços adicionais, como transporte e seguro, caso solicitado pelo cliente.",
  },
  {
    question: "Vocês atendem empresas e pessoas físicas?",
    answer:
      "Sim, atendemos tanto empresas quanto pessoas físicas. Seja para obras particulares ou grandes projetos corporativos, nossos serviços são flexíveis para atender todas as demandas.",
  },
  {
    question: "Os equipamentos são entregues prontos para uso?",
    answer:
      "Sim, todos os equipamentos são entregues revisados e prontos para uso imediato. Também oferecemos orientações sobre a operação correta, garantindo eficiência e segurança para sua obra.",
  },
  {
    question: "Posso estender o período de locação?",
    answer:
      "Sim, basta entrar em contato conosco para solicitar a prorrogação do contrato. Faremos os ajustes necessários para garantir a continuidade do serviço sem interrupções.",
  },
];

export function FaqComponent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const handlePageChange = (page: number): void => setCurrentPage(page);

  const paginatedQuestions = questions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages: number = Math.ceil(questions.length / itemsPerPage);

  return (
    <div>
      <Accordion type="single" collapsible className="space-y-2">
        {paginatedQuestions.map((item, index) => (
          <AccordionItem
            value={`item-${index + (currentPage - 1) * itemsPerPage}`}
            key={index}
            className="shadow-sm"
          >
            <AccordionTrigger className="bg-[#F97316] rounded-md px-2 text-white text-sm md:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-4 md:py-6 text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Pagination className="mt-6">
        <PaginationContent>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index} className="cursor-pointer select-none">
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "text-[#F97316]" : ""  }
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
