import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const dist = parseFloat(distance);
    if (dist > 0) {
      const basePrice = 150;
      const pricePerKm = 25;
      const total = basePrice + dist * pricePerKm;
      setCalculatedPrice(total);
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      comment: "Отличный сервис! Водитель приехал вовремя, машина чистая.",
      date: "2 дня назад",
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      rating: 5,
      comment: "Быстро, качественно, недорого. Рекомендую!",
      date: "1 неделю назад",
    },
    {
      id: 3,
      name: "Елена Козлова",
      rating: 4,
      comment:
        "Хорошее такси, вежливый водитель. Немного задержались из-за пробок.",
      date: "2 недели назад",
    },
  ];

  const services = [
    {
      title: "Городские поездки",
      description: "Комфортные поездки по городу",
      icon: "MapPin",
    },
    {
      title: "Встреча в аэропорту",
      description: "Трансфер из аэропорта с табличкой",
      icon: "Plane",
    },
    {
      title: "Деловые поездки",
      description: "Надежный транспорт для деловых встреч",
      icon: "Briefcase",
    },
    {
      title: "Грузоперевозки",
      description: "Перевозка небольших грузов",
      icon: "Package",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-taxi-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-taxi-yellow" />
            <h1 className="text-2xl font-bold">СитиТакси</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="hover:text-taxi-yellow transition-colors"
            >
              Услуги
            </a>
            <a
              href="#calculator"
              className="hover:text-taxi-yellow transition-colors"
            >
              Калькулятор
            </a>
            <a
              href="#reviews"
              className="hover:text-taxi-yellow transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="hover:text-taxi-yellow transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-taxi-yellow text-taxi-black hover:bg-yellow-600 font-semibold">
            <Icon name="Phone" size={16} className="mr-2" />
            Вызвать такси
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-taxi-lightGray to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-taxi-black mb-6">
                Надежное такси <span className="text-taxi-yellow">24/7</span>
              </h2>
              <p className="text-xl text-taxi-gray mb-8">
                Профессиональные водители, комфортные автомобили и доступные
                цены. Заказывайте такси быстро и удобно!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-taxi-yellow text-taxi-black hover:bg-yellow-600 font-semibold text-lg px-8 py-3">
                  <Icon name="Car" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button
                  variant="outline"
                  className="border-taxi-black text-taxi-black hover:bg-taxi-black hover:text-white text-lg px-8 py-3"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/82e6d01a-a827-4f8c-9a3c-57fc7c083aa0.jpg"
                alt="Такси"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -left-4 bg-taxi-yellow p-4 rounded-full shadow-lg">
                <Icon name="Star" size={24} className="text-taxi-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-taxi-yellow">
            <CardHeader className="bg-taxi-yellow text-taxi-black">
              <CardTitle className="text-2xl font-bold text-center">
                <Icon name="MapPin" size={24} className="inline mr-2" />
                Быстрый заказ такси
              </CardTitle>
              <CardDescription className="text-center text-taxi-black">
                Заполните форму и мы свяжемся с вами в течение минуты
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="from">Откуда</Label>
                  <Input
                    id="from"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Введите адрес подачи"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="to">Куда</Label>
                  <Input
                    id="to"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Введите адрес назначения"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="bg-taxi-yellow text-taxi-black hover:bg-yellow-600 font-semibold flex-1">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать такси
                </Button>
                <Button
                  variant="outline"
                  className="border-taxi-black text-taxi-black hover:bg-taxi-black hover:text-white flex-1"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-taxi-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-taxi-gray">
              Полный спектр транспортных услуг для вашего комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-taxi-yellow transition-colors duration-300"
              >
                <CardHeader className="text-center">
                  <div className="bg-taxi-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-taxi-black"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-taxi-gray text-center">
                    {service.description}
                  </p>
                  <Button className="w-full mt-4 bg-taxi-yellow text-taxi-black hover:bg-yellow-600 font-semibold">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-taxi-gray">
              Рассчитайте примерную стоимость поездки
            </p>
          </div>
          <Card className="max-w-2xl mx-auto border-2 border-taxi-yellow">
            <CardHeader className="bg-taxi-yellow text-taxi-black">
              <CardTitle className="text-2xl font-bold text-center">
                <Icon name="Calculator" size={24} className="inline mr-2" />
                Расчет стоимости поездки
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="distance">Расстояние (км)</Label>
                  <Input
                    id="distance"
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="Введите расстояние в километрах"
                    className="mt-2"
                  />
                </div>
                <Button
                  onClick={calculatePrice}
                  className="w-full bg-taxi-yellow text-taxi-black hover:bg-yellow-600 font-semibold"
                >
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {calculatedPrice && (
                  <div className="text-center p-4 bg-taxi-lightGray rounded-lg">
                    <p className="text-lg text-taxi-gray mb-2">
                      Примерная стоимость поездки:
                    </p>
                    <p className="text-3xl font-bold text-taxi-black">
                      {calculatedPrice} ₽
                    </p>
                    <p className="text-sm text-taxi-gray mt-2">
                      *Итоговая стоимость может отличаться в зависимости от
                      времени суток и пробок
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 p-4 bg-taxi-lightGray rounded-lg">
                <h3 className="font-semibold text-taxi-black mb-2">Тарифы:</h3>
                <div className="space-y-2 text-sm text-taxi-gray">
                  <div className="flex justify-between">
                    <span>Базовая стоимость подачи:</span>
                    <span className="font-semibold">150 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Стоимость за километр:</span>
                    <span className="font-semibold">25 ₽</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-taxi-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-taxi-gray">
              Что говорят о нас наши пассажиры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="border-2 border-transparent hover:border-taxi-yellow transition-colors duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-taxi-gray">
                        {review.date}
                      </CardDescription>
                    </div>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="text-taxi-yellow fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-taxi-gray">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Badge
              variant="secondary"
              className="bg-taxi-yellow text-taxi-black text-lg px-4 py-2"
            >
              <Icon name="Star" size={16} className="mr-2" />
              Средняя оценка: 4.8/5
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-taxi-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-taxi-gray">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-taxi-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-taxi-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-taxi-yellow text-lg font-bold">
                +7 (999) 123-45-67
              </p>
              <p className="text-taxi-gray">Круглосуточно</p>
            </div>
            <div className="text-center">
              <div className="bg-taxi-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-taxi-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-taxi-gray">ул. Центральная, 123</p>
              <p className="text-taxi-gray">г. Москва, 123456</p>
            </div>
            <div className="text-center">
              <div className="bg-taxi-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-taxi-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-taxi-yellow">info@citytaxi.ru</p>
              <p className="text-taxi-gray">Ответим в течение часа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-taxi-black text-white py-8 border-t border-taxi-yellow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Car" size={24} className="text-taxi-yellow" />
              <span className="text-xl font-bold">СитиТакси</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-taxi-gray hover:text-taxi-yellow transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-taxi-gray hover:text-taxi-yellow transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-taxi-gray hover:text-taxi-yellow transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-taxi-gray" />
          <div className="text-center text-taxi-gray">
            <p>&copy; 2024 СитиТакси. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
