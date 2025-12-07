import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    {
      title: 'Диагностика',
      description: 'Полная компьютерная диагностика всех систем автомобиля',
      price: 'от 1 500 ₽',
      icon: 'Search',
      time: '30-60 мин'
    },
    {
      title: 'ТО и замена масла',
      description: 'Техническое обслуживание согласно регламенту производителя',
      price: 'от 3 000 ₽',
      icon: 'Wrench',
      time: '1-2 часа'
    },
    {
      title: 'Ремонт двигателя',
      description: 'Капитальный и текущий ремонт двигателей любой сложности',
      price: 'от 15 000 ₽',
      icon: 'Settings',
      time: 'от 1 дня'
    },
    {
      title: 'Шиномонтаж',
      description: 'Замена резины, балансировка колёс, ремонт шин',
      price: 'от 800 ₽',
      icon: 'CircleDot',
      time: '30 мин'
    },
    {
      title: 'Кузовной ремонт',
      description: 'Покраска, рихтовка, полировка кузова',
      price: 'от 5 000 ₽',
      icon: 'Sparkles',
      time: 'от 3 дней'
    },
    {
      title: 'Электрика',
      description: 'Ремонт и диагностика электрооборудования',
      price: 'от 2 000 ₽',
      icon: 'Zap',
      time: '1-3 часа'
    }
  ];

  const reviews = [
    {
      name: 'Алексей Морозов',
      rating: 5,
      text: 'Отличный сервис! Быстро продиагностировали и устранили проблему с двигателем. Цены адекватные, мастера профессионалы.',
      date: '2 недели назад'
    },
    {
      name: 'Марина Соколова',
      rating: 5,
      text: 'Делала здесь ТО. Всё чётко, по времени, без навязывания лишних услуг. Буду обращаться ещё!',
      date: '1 месяц назад'
    },
    {
      name: 'Дмитрий Петров',
      rating: 5,
      text: 'Лучший автосервис в городе! Ребята знают своё дело. Отремонтировали подвеску быстро и качественно.',
      date: '3 недели назад'
    }
  ];

  const galleryItems = [
    {
      title: 'Ремонт двигателя BMW X5',
      category: 'Двигатель',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format',
      description: 'Капитальный ремонт двигателя'
    },
    {
      title: 'Полировка кузова Mercedes',
      category: 'Детейлинг',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format',
      description: 'Полная полировка и защитное покрытие'
    },
    {
      title: 'Замена подвески Audi',
      category: 'Подвеска',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format',
      description: 'Замена стоек и амортизаторов'
    },
    {
      title: 'Шиномонтаж премиум класса',
      category: 'Шины',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format',
      description: 'Установка и балансировка колёс'
    },
    {
      title: 'Покраска крыла Toyota',
      category: 'Кузовной ремонт',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format',
      description: 'Локальная покраска после ДТП'
    },
    {
      title: 'Диагностика электроники',
      category: 'Электрика',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&auto=format',
      description: 'Компьютерная диагностика систем'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !name || !phone) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: `${name}, мы свяжемся с вами в ближайшее время для подтверждения записи.`
    });

    setIsDialogOpen(false);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setPhone('');
    setComment('');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-secondary text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Профессиональный<br />автосервис
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              Качественный ремонт и обслуживание вашего автомобиля с гарантией. Современное оборудование и опытные мастера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-right">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться онлайн
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Онлайн-запись</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Услуга *</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.title} value={service.title}>
                              {service.title} ({service.price})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Дата *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Время *</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Время" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="12:00">12:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="17:00">17:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment">Комментарий</Label>
                      <Textarea
                        id="comment"
                        placeholder="Опишите проблему или пожелания"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей любых марок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Icon name="Clock" size={14} className="inline mr-1" />
                        {service.time}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">
              Примеры выполненных работ — качество говорит само за себя
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={item.title}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Более 500 довольных клиентов доверяют нам свои автомобили
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={review.name} 
                className="animate-fade-in border-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы привести авто в порядок?</h2>
          <p className="text-xl mb-8 text-white/90">
            Запишитесь на диагностику прямо сейчас и получите скидку 10%
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться со скидкой
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">АвтоСервис Про</h3>
              <p className="text-white/80">
                Профессиональный ремонт и обслуживание автомобилей с 2010 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@autoservice.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Москва, ул. Автомобильная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">График работы</h4>
              <div className="space-y-2 text-white/80">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 АвтоСервис Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;