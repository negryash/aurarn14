import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Button onClick={() => window.history.back()} variant="outline" className="mb-8 border-gray-600 text-slate-900 bg-zinc-200 hover:bg-zinc-100">
          ← Назад
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-purple-400 mb-8">
            Свяжитесь с нами
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* About Section */}
            <div className="space-y-6 text-left">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">О компании</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-white font-semibold">Aura Showcase</span> — это современная витрина 
                цифрового дизайна. Мы стремимся продемонстрировать передовые визуальные и интерфейсные 
                решения, которые вдохновляют и упрощают создание впечатляющих веб-проектов.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Наша миссия — делать технологии доступными и красивыми, обеспечивая пользователей 
                инструментами, которые упрощают разработку и делают её интуитивно понятной.
              </p>
              
              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-white">Мы верим в:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💡</span>
                    <span className="text-gray-300">Инновации и креатив</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧩</span>
                    <span className="text-gray-300">Простоту и гибкость</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🤝</span>
                    <span className="text-gray-300">Открытость и сообщество</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Контакты</h2>
              
              <p className="text-gray-300 text-lg">
                Если вы хотите сотрудничать с нами, предложить идею или просто оставить отзыв — свяжитесь с нами!
              </p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mt-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Mail className="text-purple-400" size={24} />
                  <span className="text-xl font-semibold text-white">Email</span>
                </div>
                <a href="mailto:djbalda0@gmail.com" className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors">
                  djbalda0@gmail.com
                </a>
              </div>
              
              <div className="mt-8">
                <Button onClick={() => window.location.href = 'mailto:djbalda0@gmail.com'} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <Mail className="mr-2" size={20} />
                  Написать нам
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;