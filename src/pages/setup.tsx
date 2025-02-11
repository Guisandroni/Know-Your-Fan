import { useState } from 'react';

const Setup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    endereco: '',
    jogosFavoritos: '',
    timesFavoritos: '',
    eventos: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.nome || !formData.cpf || !formData.email || !formData.endereco) {
        alert('Por favor, preencha todos os campos');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className={`text-sm ${currentStep >= 1 ? 'font-bold' : ''}`}>Dados Básicos</span>
        <span className={`text-sm ${currentStep >= 2 ? 'font-bold' : ''}`}>Documentos</span>
        <span className={`text-sm ${currentStep >= 3 ? 'font-bold' : ''}`}>Redes Sociais</span>
        <span className={`text-sm ${currentStep >= 4 ? 'font-bold' : ''}`}>Interesses</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div 
          className="h-full bg-blue-600 rounded transition-all duration-500"
          style={{ width: `${(currentStep - 1) * 33.33}%` }}
        />
      </div>
    </div>
  );

  const BasicInfoStep = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Seus Dados Básicos</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu nome completo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu CPF"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Endereço</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu endereço"
          />
        </div>
      </div>
    </div>
  );

  const DocumentsStep = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Upload de Documentos</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M24 8v32M8 24h32" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-gray-600">Arraste seus documentos ou clique para fazer upload</p>
        <input
        title='doc'
          type="file"
          className="hidden"
          id="fileInput"
          onChange={(e) => console.log(e.target.files)}
        />
        <button
          onClick={() => document.getElementById('fileInput').click()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Selecionar Arquivos
        </button>
      </div>
    </div>
  );

  const SocialMediaStep = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Conecte Suas Redes Sociais</h2>
      <div className="space-y-4">
        <button
          onClick={() => console.log('Conectar Twitter')}
          className="w-full p-3 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Conectar com Twitter
        </button>
        <button
          onClick={() => console.log('Conectar Instagram')}
          className="w-full p-3 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Conectar com Instagram
        </button>
        <button
          onClick={() => console.log('Conectar Facebook')}
          className="w-full p-3 border rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Conectar com Facebook
        </button>
      </div>
    </div>
  );

  const InterestsStep = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Seus Interesses em eSports</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Jogos favoritos</label>
          <select
            name="jogosFavoritos"
            value={formData.jogosFavoritos}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecione um jogo</option>
            <option value="csgo">CS:GO</option>
            <option value="valorant">Valorant</option>
            <option value="lol">League of Legends</option>
            <option value="dota2">Dota 2</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Times favoritos</label>
          <input
            type="text"
            name="timesFavoritos"
            value={formData.timesFavoritos}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: FURIA, MIBR, etc"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Eventos que participou no último ano</label>
          <textarea
            name="eventos"
            value={formData.eventos}
            onChange={handleInputChange}
            rows={3}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Liste os eventos que você participou"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">FURIA Fan Profile</div>
          <button className="px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-200">
            Login
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <ProgressBar />

        {currentStep === 1 && <BasicInfoStep />}
        {currentStep === 2 && <DocumentsStep />}
        {currentStep === 3 && <SocialMediaStep />}
        {currentStep === 4 && <InterestsStep />}

        <div className="mt-6 flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={handlePrev}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Anterior
            </button>
          )}
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={() => console.log('Dados finais:', formData)}
              className="ml-auto px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setup;