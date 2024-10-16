import { Topbar, TopbarHamburger, TopbarItem, TopbarItems, TopbarLogo } from "./_components/top-navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { send } from "@emailjs/browser";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import BlurIn from "@/components/ui/blur-in";
import WordPullUp from "@/components/ui/word-pull-up";
import BoxReveal from "@/components/ui/box-reveal";
import WordFadeIn from "@/components/ui/word-fade-in";
import CookiesModal from "./_components/cookies-modal";
import BlurFade from "@/components/ui/blur-fade";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { FaqComponent } from "./_components/faq";
import Logo from "/src/assets/images/logo.png";
import HeaderBanner from "/src/assets/images/header-banner.jpg";
import EscorasImage from "/src/assets/images/produtos/escoras.jpg";
import CompactadorImage from "/src/assets/images/produtos/compactador.png";
import CompressoresImage from "/src/assets/images/produtos/compressores.png";
import FuradeirasImage from "/src/assets/images/produtos/furadeiras.png";
import AndaimesImage from "/src/assets/images/produtos/andaimes.png";
import RodizioImage from "/src/assets/images/produtos/rodizio.png";
import FachadaMake from "/src/assets/images/fachada_make_editada.jpg";
import PanoramicaFachada from "/src/assets/images/panoramica_fachada_make_editada.jpg";
import ContactImage from "/src/assets/images/retrato-de-jovem-homem-caucasiano-com-emocoes-brilhantes-no-estudio-laranja.png";



export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await send("make_locacoes_web", "make_template", formData, "n49E1cjqGNt-hKSgi");
      toast({
        title: 'Sua mensagem foi enviada!',
        description: 'Nós retornaremos o contato em até 3 dias!'
      })
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };



  return (
    <main className="w-full h-auto bg-zinc-50 ">
      <CookiesModal />
      <link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css" />
      <a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5511995996833&text=Oii,%20vim%20pelo%20Site!%0AGostaria%20de%20um%20or%C3%A7amento%20ou%20falar%20com%20um%20representante">
        <div className="rwb-tooltip">Fale conosco</div>
        <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />
      </a>
      <Topbar>
        <TopbarLogo>
          <img src={Logo} className="w-[60px] md:w-[45px]" alt="Logo" />
          <span className="font-lexend leading-none text-md ">MAKE LOCAÇÕES</span>
        </TopbarLogo>

        <TopbarHamburger isOpen={isOpen} toggleMenu={toggleMenu} />

        <TopbarItems isOpen={isOpen}>
          <TopbarItem href="/">HOME</TopbarItem>
          <TopbarItem href="#products">PRODUTOS</TopbarItem>
          <TopbarItem href="#aboutus">SOBRE NÓS</TopbarItem>
          <TopbarItem href="#faq">DÚVIDAS FREQUENTES</TopbarItem>
          <TopbarItem href="#contactus">FALE CONOSCO</TopbarItem>
        </TopbarItems>

        {/* <TopbarLink>
        <img
          src="src/assets/images/whatsapp.png"
          className="w-[25px]"
          alt="WhatsApp"
        />
        <span className="font-lexend font-bold">CHAMAR NO WHATSAPP</span>
      </TopbarLink> */}
      </Topbar>
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Coluna de Textos */}
        <div className="px-6 md:px-8 flex flex-col justify-center ">
          <TypingAnimation
            className="text-xl md:text-3xl font-light uppercase font-lexend text-zinc-800  text-left"
            text="Equipamentos certos para sua obra"
          />
          <TypingAnimation
            className="text-3xl md:text-5xl font-extrabold uppercase text-[#FE7A26] text-left"
            text="Quando você precisar"
          />
          <div className="py-2 md:py-4">
            <BlurIn
              duration={2}
              word="As melhores máquinas e ferramentas para sua obra"
              className="text-xs md:text-sm font-light"
            />
          </div>
        </div>


        {/* Coluna da Imagem - Escondida em Telas Pequenas */}
        <div className="w-full h-full object-cover hidden md:flex justify-end items-center">
          <BlurFade inView delay={0.3}>
            <img
              src={HeaderBanner}
              alt="banner"
              className="rounded-xl shadow-sm"
            />
          </BlurFade>
        </div>
      </section>

      <section id='products' className="w-full  font-lexend py-12 ">
        <div className="w-full flex justify-center items-center flex-col ">
          <WordPullUp
            className="text-sm font-light text-zinc-800 leading-none"
            words="conheça nossos produtos"
          />
          <BoxReveal boxColor={"#F97316"} duration={0.4} >
            <div className="px-6 md:px-24">
              <span className="uppercase font-normal text-zinc-800  text-2xl ">
                DESDE <span className="font-bold text-[#F97316]">BETONEIRAS</span> ATÉ <span className="font-bold text-[#F97316]">ANDAIMES</span>
              </span>
            </div>

          </BoxReveal>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 px-4">
            {[
              { src: EscorasImage, label: "Escoras metálicas" },
              { src: CompactadorImage, label: "Compactador" },
              { src: CompressoresImage, label: "Compressores" },
              { src: FuradeirasImage, label: "Furadeiras" },
              { src: AndaimesImage, label: "Andaimes" },
              { src: RodizioImage, label: "Rodízios" },
            ].map((product, index) => (
              <div
                key={index}
                className=" w-[300px] border border-orange-400/50 h-[260px] rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col items-center bg-white place-items-stretch"
              >

                <div className="w-full object-contain rounded-lg">
                  <img
                    src={product.src}
                    alt={product.label}
                    className="w-full h-[210px] object-cover rounded-lg  border-b-8  border-orange-400 "
                  />
                </div>
                <div className="py-2 w-full px-2">
                  <span className="font-lexend text-zinc-800 hover:text-orange-600 transition-all duration-300">{product.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="aboutus"
        className="w-full my-32 font-lexend font-light text-zinc-800 px-8 md:px-24"
      >
        {/* Título e Subtítulo */}
        <div className="w-full flex justify-center items-center flex-col">
          <WordPullUp
            className="text-sm font-light text-zinc-800 leading-none"
            words="um breve resumo"
          />
          <BoxReveal boxColor={"#F97316"} duration={1}>
            <span className="font-bold text-2xl text-[#F97316]">
              da nossa essência
            </span>
          </BoxReveal>
        </div>

        {/* Conteúdo e Imagens */}
        <div className="w-full py-8 px-4 grid grid-cols-1 md:grid-cols-2 justify-center gap-8 md:gap-32">
          {/* Texto Sobre Nós */}
          <div className="w-full flex flex-col gap-4 text-justify">
            <span>
              A{" "}
              <span className="text-[#F97316] font-bold">
                Make Locações de Escoras e Andaimes
              </span>{" "}
              destaca-se no mercado pela combinação de preços competitivos, variedade
              de equipamentos e facilidade de acesso.
            </span>
            <span>
              Nossa localização estratégica facilita o acesso e a logística,
              garantindo agilidade no atendimento e na entrega dos equipamentos.
              Valorizamos a satisfação dos nossos clientes, proporcionando um
              atendimento personalizado e focado em suas necessidades específicas.
            </span>
            <span>
              Com sede no{" "}
              <span className="text-[#F97316] font-bold">
                coração de Atibaia
              </span>
              , somos uma empresa comprometida em fornecer soluções eficientes e
              seguras para a construção civil.
            </span>
            <span>
              Na <span className="text-[#F97316] font-bold">Make</span>, você
              encontra qualidade, confiança e excelência em serviços, tornando-se
              nosso parceiro para o sucesso da sua obra.
            </span>
          </div>

          {/* Imagens */}
          <div className="w-full flex flex-col gap-8 md:flex-row justify-center items-center h-auto">
            <img
              src={FachadaMake}
              className="w-full md:w-auto h-full max-h-[300px] rounded-lg object-cover"
              alt="Fachada da Make"
            />
            <img
              src={PanoramicaFachada}
              className="w-full md:w-auto h-full max-h-[300px] rounded-lg object-cover"
              alt="Vista panorâmica da fachada"
            />
          </div>
        </div>
      </section>


      <section
        id="faq"
        className="w-full mb-9 font-lexend font-light text-zinc-800 px-6 md:px-24"
      >
        {/* Título e Subtítulo */}
        <div className="w-full flex flex-col items-start justify-center mb-10">
          <WordFadeIn
            delay={0.25}
            className="text-2xl md:text-4xl text-zinc-700"
            words="DÚVIDAS E PERGUNTAS"
          />
          <WordPullUp
            delayMultiple={2000}
            className="text-5xl md:text-7xl font-bold text-[#F97316]"
            words="FREQUENTES"
          />
          <span>
            <TypingAnimation
              className="text-sm md:text-md font-light mt-2"
              duration={20}
              text="Esclareça suas dúvidas sobre nossos serviços de locação de equipamentos em Atibaia e região"
            />
          </span>
        </div>

        {/* Acordeão de Perguntas Frequentes */}
        <FaqComponent />
      </section>

      <section
        id="contactus"
        className="w-full h-auto items-center gap-12 m-0 font-lexend font-light text-zinc-800 px-6 md:px-24 grid grid-cols-1 md:grid-cols-2"
      >
        {/* Título e Subtítulo */}
        <div className="w-full flex flex-col">
          <span className="text-3xl md:text-4xl text-[#FE7A26] font-bold">
            Entre em contato conosco
          </span>
          <span className="text-sm text-muted-foreground">
            Precisa de equipamentos para sua obra em Atibaia e região?
          </span>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1 text-[#FE7A26]">
              <Label>SEU NOME</Label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Digite seu nome" />
            </div>
            <div className="space-y-1 text-[#FE7A26]">
              <Label>SEU E-MAIL</Label>
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu e-mail" />
            </div>
            <div className="space-y-1 text-[#FE7A26]">
              <Label>SEU TELEFONE</Label>
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Digite seu telefone" />
            </div>
            <div className="space-y-1 text-[#FE7A26]">
              <Label>MENSAGEM</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                placeholder="Sua mensagem"
              />
              <p id="charCount" className="text-xs">500 caracteres restantes</p>
            </div>
            <Button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </div>

        {/* Imagem */}
        <div className="w-full flex justify-center mt-6 md:mt-0">
          <BlurFade inView delay={0.8}>
            <img
              src={ContactImage}
              className="w-full max-w-md md:max-w-full h-auto rounded-lg"
              alt="Entre em contato conosco"
            />
          </BlurFade>
        </div>
      </section>

      <footer className="w-full bg-zinc-800 py-8 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} className="w-20" alt="Logo" />
            <span className="text-sm mt-2">© 2024 Make Locações. Todos os direitos reservados.</span>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4">
            <a href="#products" className="hover:text-[#F97316]">Produtos</a>
            <a href="#aboutus" className="hover:text-[#F97316]">Sobre Nós</a>
            <a href="#faq" className="hover:text-[#F97316]">Dúvidas Frequentes</a>
            <a href="#contactus" className="hover:text-[#F97316]">Contato</a>
          </div>
        </div>
      </footer>

    </main >
  )
}