import { Book, DollarSign, PieChart, Settings, Calendar } from 'lucide-react';

export default function Help() {
  const features = [
    {
      icon: DollarSign,
      title: 'Gerenciamento de Transações',
      description: 'Adicione receitas e despesas facilmente. Você pode registrar transações únicas ou recorrentes que se repetem mensalmente.'
    },
    {
      icon: Calendar,
      title: 'Transações Recorrentes',
      description: 'Configure pagamentos ou receitas que se repetem todo mês, como aluguel, salário ou assinaturas.'
    },
    {
      icon: PieChart,
      title: 'Relatórios Detalhados',
      description: 'Visualize seus gastos e receitas em gráficos intuitivos. Analise seu fluxo de caixa e distribuição por categorias.'
    },
    {
      icon: Settings,
      title: 'Personalização',
      description: 'Ajuste as configurações do aplicativo, incluindo tema escuro e categorias de transações.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Book className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Como usar o Finance Control</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Bem-vindo ao guia completo do seu aplicativo de controle financeiro.
            Aqui você encontrará tudo que precisa saber para gerenciar suas finanças.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Dicas para um melhor controle financeiro</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-indigo-600 mr-2">•</span>
              <span>Registre todas as suas transações regularmente para manter um controle preciso</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-indigo-600 mr-2">•</span>
              <span>Use categorias adequadas para melhor organização e análise dos gastos</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-indigo-600 mr-2">•</span>
              <span>Configure transações recorrentes para não esquecer pagamentos importantes</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-indigo-600 mr-2">•</span>
              <span>Consulte os relatórios mensalmente para entender seus padrões de gastos</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Ainda tem dúvidas? Entre em contato com nosso suporte através do email{' '}
            <a href="mailto:support@financecontrol.com" className="text-indigo-600 hover:text-indigo-500">
              support@financecontrol.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}