import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const navigate = useNavigate();
  return <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Aura Showcase
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Современная витрина цифрового дизайна. Мы стремимся продемонстрировать передовые 
              визуальные и интерфейсные решения, которые вдохновляют и упрощают создание 
              впечатляющих веб-проектов.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-lg">💡</span>
                <span>Инновации и креатив</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-lg">🧩</span>
                <span>Простоту и гибкость</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-lg">🤝</span>
                <span>Открытость и сообщество</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Контакты</h3>
            
            <p className="text-gray-400">
              Хотите сотрудничать с нами, предложить идею или оставить отзыв?
            </p>
            
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail size={20} />
              <a href="mailto:djbalda0@gmail.com" className="hover:text-purple-400 transition-colors">
                djbalda0@gmail.com
              </a>
            </div>
            
            <Button onClick={() => navigate('/contact')} variant="outline" className="border-gray-600 hover:bg-gray-800 hover:border-gray-500 text-slate-500">
              Связаться с нами
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Aura Showcase. Все права защищены.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;