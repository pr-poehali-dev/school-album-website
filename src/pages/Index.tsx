import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#374151]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2937]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-[#D4AF37]" size={28} />
            <span className="text-xl font-display font-bold text-white">Школьный год</span>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#1F2937] font-semibold">
            Связаться с нами
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/30">
                <span className="text-[#D4AF37] text-sm font-semibold">ПРЕМИАЛЬНОЕ КАЧЕСТВО</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Книга года
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Создаём выпускные альбомы премиум-класса совместно с администрацией школы. 
                Каждый ученик, учитель и важное событие года — в одной элегантной книге памяти.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#1F2937] font-semibold text-lg px-8">
                  <Icon name="Camera" className="mr-2" size={20} />
                  Узнать подробнее
                </Button>
                <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/09af2aeb-b057-47dc-8d52-1044ed21951d/files/7637c9c8-427e-46bd-b959-78665deeed00.jpg" 
                alt="Профессиональная съёмка выпускного альбома"
                className="rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-display font-bold text-white text-center mb-16">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Icon name="Camera" className="text-[#D4AF37]" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">Фотосъёмка</h3>
                <p className="text-gray-300 leading-relaxed">
                  Профессиональная съёмка каждого ученика в школе. Индивидуальные и групповые портреты высочайшего качества.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Icon name="BookOpen" className="text-[#D4AF37]" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">Создание альбома</h3>
                <p className="text-gray-300 leading-relaxed">
                  Дизайн классного альбома и отдельных портретов. Премиальная печать на качественной бумаге с золотым тиснением.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Icon name="Monitor" className="text-[#D4AF37]" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">Онлайн-сервис</h3>
                <p className="text-gray-300 leading-relaxed">
                  Просмотр всех фотографий онлайн. Простой выбор и заказ нужных снимков через удобный сервис.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/09af2aeb-b057-47dc-8d52-1044ed21951d/files/fb131b15-a2fd-4b99-b0a5-a6cf39bf631c.jpg" 
                alt="Премиум альбом с золотым тиснением"
                className="rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Что включено в альбом
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <Icon name="Users" className="text-[#D4AF37]" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Все ученики года</h3>
                    <p className="text-gray-300">Индивидуальные портреты каждого ученика с указанием класса и достижений</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <Icon name="Award" className="text-[#D4AF37]" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Учителя и администрация</h3>
                    <p className="text-gray-300">Официальные портреты преподавателей и руководства школы</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <Icon name="Calendar" className="text-[#D4AF37]" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">События года</h3>
                    <p className="text-gray-300">Яркие моменты школьной жизни: праздники, конкурсы, спортивные достижения</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <Icon name="Star" className="text-[#D4AF37]" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Особые достижения</h3>
                    <p className="text-gray-300">Отдельная страница для отличников и победителей олимпиад</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Sparkles" className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Премиальное качество на долгие годы
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Мы используем профессиональное оборудование, качественную бумагу и элегантное оформление 
            с золотым тиснением. Каждый альбом — это произведение искусства, которое будет храниться десятилетиями.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-display font-bold text-[#D4AF37] mb-2">300+</div>
              <p className="text-gray-300">Школ доверяют нам</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-[#D4AF37] mb-2">15+</div>
              <p className="text-gray-300">Лет опыта</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-[#D4AF37] mb-2">50K+</div>
              <p className="text-gray-300">Довольных семей</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Готовы сохранить воспоминания?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Свяжитесь с нами, чтобы обсудить детали съёмки и создания альбома для вашей школы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#1F2937] font-semibold text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black/30 backdrop-blur-sm border-t border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-[#D4AF37]" size={24} />
              <span className="text-lg font-display font-bold text-white">Школьный год</span>
            </div>
            <p className="text-gray-400 text-center">
              © 2024 Студия выпускных альбомов. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#D4AF37]">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#D4AF37]">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#D4AF37]">
                <Icon name="MapPin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
