import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)] pointer-events-none" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-glow">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Школьный год</span>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg shadow-purple-500/30">
            Связаться с нами
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                <span className="text-purple-700 text-sm font-semibold">ПРЕМИАЛЬНОЕ КАЧЕСТВО</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Книга года
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Создаём выпускные альбомы премиум-класса совместно с администрацией школы. 
                Каждый ученик, учитель и важное событие года — в одной элегантной книге памяти.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all">
                  <Icon name="Camera" className="mr-2" size={20} />
                  Узнать подробнее
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <img 
                src="https://cdn.poehali.dev/projects/09af2aeb-b057-47dc-8d52-1044ed21951d/files/7637c9c8-427e-46bd-b959-78665deeed00.jpg" 
                alt="Профессиональная съёмка выпускного альбома"
                className="relative rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">Простой процесс создания вашего альбома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group bg-white/70 backdrop-blur-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/40 group-hover:animate-float">
                  <Icon name="Camera" className="text-white" size={36} />
                </div>
                <div className="w-12 h-1 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Фотосъёмка</h3>
                <p className="text-gray-600 leading-relaxed">
                  Профессиональная съёмка каждого ученика в школе. Индивидуальные и групповые портреты высочайшего качества.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/70 backdrop-blur-xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-xl shadow-pink-500/40 group-hover:animate-float">
                  <Icon name="BookOpen" className="text-white" size={36} />
                </div>
                <div className="w-12 h-1 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Создание альбома</h3>
                <p className="text-gray-600 leading-relaxed">
                  Дизайн классного альбома и отдельных портретов. Премиальная печать на качественной бумаге с золотым тиснением.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/70 backdrop-blur-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/40 group-hover:animate-float">
                  <Icon name="Monitor" className="text-white" size={36} />
                </div>
                <div className="w-12 h-1 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Онлайн-сервис</h3>
                <p className="text-gray-600 leading-relaxed">
                  Просмотр всех фотографий онлайн. Простой выбор и заказ нужных снимков через удобный сервис.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-30" />
                <img 
                  src="https://cdn.poehali.dev/projects/09af2aeb-b057-47dc-8d52-1044ed21951d/files/fb131b15-a2fd-4b99-b0a5-a6cf39bf631c.jpg" 
                  alt="Премиум альбом с золотым тиснением"
                  className="relative rounded-3xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-5xl font-bold mb-8">
                Что включено в альбом
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Users" className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Все ученики года</h3>
                    <p className="text-white/90 text-lg">Индивидуальные портреты каждого ученика с указанием класса и достижений</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Award" className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Учителя и администрация</h3>
                    <p className="text-white/90 text-lg">Официальные портреты преподавателей и руководства школы</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Calendar" className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">События года</h3>
                    <p className="text-white/90 text-lg">Яркие моменты школьной жизни: праздники, конкурсы, спортивные достижения</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Star" className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Особые достижения</h3>
                    <p className="text-white/90 text-lg">Отдельная страница для отличников и победителей олимпиад</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center mx-auto mb-6 animate-glow">
            <Icon name="Sparkles" className="text-white" size={32} />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Премиальное качество на долгие годы
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Мы используем профессиональное оборудование, качественную бумагу и элегантное оформление 
            с золотым тиснением. Каждый альбом — это произведение искусства, которое будет храниться десятилетиями.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 hover:scale-105 transition-transform">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">300+</div>
              <p className="text-gray-700 font-semibold text-lg">Школ доверяют нам</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-100 hover:scale-105 transition-transform">
              <div className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
              <p className="text-gray-700 font-semibold text-lg">Лет опыта</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 hover:scale-105 transition-transform">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50K+</div>
              <p className="text-gray-700 font-semibold text-lg">Довольных семей</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Готовы сохранить воспоминания?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Свяжитесь с нами, чтобы обсудить детали съёмки и создания альбома для вашей школы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-10 py-6 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all">
              <Icon name="Phone" className="mr-2" size={22} />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold py-6">
              <Icon name="Mail" className="mr-2" size={22} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 bg-gradient-to-r from-purple-600 to-pink-600 border-t-4 border-white/20">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">Школьный год</span>
            </div>
            <p className="text-white/90 text-center">
              © 2024 Студия выпускных альбомов. Все права защищены.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-xl">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-xl">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-xl">
                <Icon name="MapPin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
