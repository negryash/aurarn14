
import { ArrowLeft, Camera, Battery, Cpu, Smartphone, Wifi, Bluetooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Specifications = () => {
  const navigate = useNavigate();

  const specs = [
    {
      category: "Дисплей",
      icon: Smartphone,
      items: [
        { label: "Размер", value: "6.7 дюймов" },
        { label: "Разрешение", value: "3200 x 1440 пикселей" },
        { label: "Тип", value: "AMOLED с поддержкой HDR10+" },
        { label: "Частота обновления", value: "120 Гц" },
        { label: "Защита", value: "Gorilla Glass Victus" }
      ]
    },
    {
      category: "Камера",
      icon: Camera,
      items: [
        { label: "Основная камера", value: "108 МП, f/1.8" },
        { label: "Ультраширокоугольная", value: "12 МП, f/2.2" },
        { label: "Телефото", value: "10 МП, f/2.4, 3x zoom" },
        { label: "Фронтальная", value: "32 МП, f/2.2" },
        { label: "Видео", value: "8K при 30 fps, 4K при 60 fps" }
      ]
    },
    {
      category: "Производительность",
      icon: Cpu,
      items: [
        { label: "Процессор", value: "QuantumCore X7 (4 нм)" },
        { label: "Оперативная память", value: "12 ГБ LPDDR5" },
        { label: "Встроенная память", value: "256 ГБ UFS 3.1" },
        { label: "GPU", value: "Adreno 740" },
        { label: "AI движок", value: "Hexagon NPU 7-го поколения" }
      ]
    },
    {
      category: "Батарея и зарядка",
      icon: Battery,
      items: [
        { label: "Емкость", value: "5300 мАч" },
        { label: "Быстрая зарядка", value: "90 Вт (0-100% за 28 мин)" },
        { label: "Беспроводная зарядка", value: "50 Вт" },
        { label: "Обратная зарядка", value: "10 Вт" },
        { label: "Время работы", value: "До 2 дней активного использования" }
      ]
    },
    {
      category: "Связь",
      icon: Wifi,
      items: [
        { label: "5G", value: "Sub-6 GHz и mmWave" },
        { label: "Wi-Fi", value: "Wi-Fi 6E (802.11ax)" },
        { label: "Bluetooth", value: "5.3 с aptX HD" },
        { label: "NFC", value: "Поддерживается" },
        { label: "GPS", value: "GPS, GLONASS, BeiDou, Galileo" }
      ]
    },
    {
      category: "Дизайн и защита",
      icon: Bluetooth,
      items: [
        { label: "Размеры", value: "163.3 x 75.9 x 8.9 мм" },
        { label: "Вес", value: "195 грамм" },
        { label: "Материалы", value: "Алюминиевая рамка, стеклянная задняя панель" },
        { label: "Защита от воды", value: "IP68" },
        { label: "Цвета", value: "Космический серый, Перламутровый белый, Глубокий синий" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative pt-8 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-white hover:bg-gray-800/50 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
              Технические характеристики
            </h1>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              RENZON R14 AURA
            </p>
          </div>
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {specs.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.category}
                    </h2>
                  </div>

                  {/* Specifications List */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start py-3 border-b border-gray-800/50 last:border-b-0"
                      >
                        <span className="text-gray-400 font-medium">
                          {item.label}
                        </span>
                        <span className="text-white text-right max-w-xs">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl">
              Узнать цену и купить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
