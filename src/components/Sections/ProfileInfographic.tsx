export default function ProfileInfographic() {
  const profilePoints = [
    "Ter o desejo de adquirir imóveis na planta com o suporte de cotas de consórcio.",
    "Ser profissional liberal ou empresário de qualquer segmento.",
    "Conhecer sua capacidade de investimento.",
  ];

  return (
    <div className="min-h-screen bg-custom-background-two text-white px-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          O que você precisa é ter o seguinte perfil:
        </h1>

        <div className="relative">
          {profilePoints.map((point, index) => (
            <div key={index} className="flex items-start mb-6">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-custom-background-button mt-1.5 mr-4"></div>
              <div className="flex-grow">
                <div className="bg-custom-background-card p-4 rounded-lg">
                  <p className="text-sm md:text-base">{point}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-custom-background-button"></div>
        </div>

        <p className="text-center text-sm md:text-base font-semibold mt-8">
          Faturar a partir de R$35.000,00 e se encaixar nesse perfil. Seu lugar
          já está garantido!
        </p>
      </div>
    </div>
  );
}
