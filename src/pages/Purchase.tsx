
import { useState } from "react";
import { ArrowLeft, Check, CreditCard, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState("256/8");
  const [selectedColor, setSelectedColor] = useState("space-gray");
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: ""
  });

  const memoryOptions = [
    { id: "128/4", label: "128 ГБ / 4 ГБ ОЗУ", price: 89999, popular: false },
    { id: "256/8", label: "256 ГБ / 8 ГБ ОЗУ", price: 99999, popular: true },
    { id: "512/8", label: "512 ГБ / 8 ГБ ОЗУ", price: 109999, popular: false },
    { id: "1TB/12", label: "1 ТБ / 12 ГБ ОЗУ", price: 129999, popular: false }
  ];

  const colorOptions = [
    { id: "space-gray", label: "Космический серый", hex: "#4A5568" },
    { id: "pearl-white", label: "Перламутровый белый", hex: "#F7FAFC" },
    { id: "deep-blue", label: "Глубокий синий", hex: "#2B6CB0" }
  ];

  const selectedMemoryOption = memoryOptions.find(option => option.id === selectedMemory);
  const selectedColorOption = colorOptions.find(option => option.id === selectedColor);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative pt-8 pb-12 px-6">
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
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              Купить RENZON R14 AURA
            </h1>
            <p className="text-xl text-gray-400">
              Выберите конфигурацию и оформите заказ
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Configuration Section */}
            <div className="space-y-8">
              {/* Memory Configuration */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Конфигурация памяти</h2>
                <RadioGroup value={selectedMemory} onValueChange={setSelectedMemory}>
                  <div className="space-y-4">
                    {memoryOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`relative flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          selectedMemory === option.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-white font-medium">{option.label}</span>
                              {option.popular && (
                                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs rounded-full">
                                  Популярный
                                </span>
                              )}
                            </div>
                            <span className="text-white font-semibold">
                              {formatPrice(option.price)} ₽
                            </span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Color Selection */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Цвет</h2>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                  <div className="space-y-4">
                    {colorOptions.map((color) => (
                      <div
                        key={color.id}
                        className={`relative flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          selectedColor === color.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <RadioGroupItem value={color.id} id={color.id} />
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-600"
                          style={{ backgroundColor: color.hex }}
                        />
                        <Label htmlFor={color.id} className="flex-1 cursor-pointer">
                          <span className="text-white font-medium">{color.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Features */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Включено в комплект</h2>
                <div className="space-y-3">
                  {[
                    "Быстрая зарядка 90 Вт",
                    "Беспроводная зарядка 50 Вт",
                    "Зарядное устройство в комплекте",
                    "Защитное стекло предустановлено",
                    "Гарантия 2 года"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary & Form */}
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Ваш заказ</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">RENZON R14 AURA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Память: {selectedMemoryOption?.label}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Цвет: {selectedColorOption?.label}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">Итого:</span>
                      <span className="text-white font-bold text-2xl">
                        {formatPrice(selectedMemoryOption?.price || 0)} ₽
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Truck className="w-5 h-5 text-blue-400" />
                    <span>Бесплатная доставка по России</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span>Гарантия возврата 14 дней</span>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Информация для доставки</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">Имя</Label>
                      <Input
                        id="firstName"
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">Фамилия</Label>
                      <Input
                        id="lastName"
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Введите фамилию"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Введите email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address" className="text-gray-300">Адрес</Label>
                    <Input
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Улица, дом, квартира"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-gray-300">Город</Label>
                      <Input
                        id="city"
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Введите город"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-gray-300">Индекс</Label>
                      <Input
                        id="zipCode"
                        value={customerInfo.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="123456"
                      />
                    </div>
                  </div>
                </div>

                {/* Purchase Button */}
                <Button
                  size="lg"
                  className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Оформить заказ за {formatPrice(selectedMemoryOption?.price || 0)} ₽
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
