import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function CookiesModal() {
  const [showModal, setShowModal] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setTimeout(() => {
        setShowModal(true);
      }, 250)
    }
  }, []);

  const handleAccept = () => {
    // Inicia a animação de saída
    setAnimateOut(true);

    // Define um timeout para esperar a animação antes de ocultar o modal
    setTimeout(() => {
      setShowModal(false);
      localStorage.setItem('cookiesAccepted', 'true');
    }, 1000); // Tempo deve coincidir com a duração da animação de saída
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all duration-500 ${animateOut ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div
        className={`bg-white p-6 rounded-md shadow-md max-w-xl mx-4 transform transition-transform duration-300 ${animateOut ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
      >
        <p className="text-gray-700 mb-4">
          Utilizamos cookies para permitir uma melhor experiência.  <br /> Ao navegar no site você consente com sua utilização. <br />
          <a href="/termos-de-uso" className="text-amber-600 underline ml-1">
            Termos de Uso e Condições
          </a>
        </p>
        <div className="w-full flex justify-end pt-4">
          <Button onClick={handleAccept}>
            Eu aceito
          </Button>
        </div>
      </div>
    </div>
  );
}
