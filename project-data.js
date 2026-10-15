// projects-data.js — 250+ коммерческих проектов
const PROJECTS = [
  // ===== E-COMMERCE / МАРКЕТПЛЕЙСЫ (40) =====
  { id: "shopflow", title: "ShopFlow", subtitle: "Маркетплейс под ключ", category: "ecommerce", tags: ["Node.js","React","PostgreSQL","Redis"], year: 2023, client: "ShopFlow Ltd (Казахстан)", rating: 5, date: "2023-03-15", desc: "Полноценный маркетплейс с 15 000+ продавцов, мультивалютными платежами, логистикой и админ-панелью. Обрабатывает 50 000 заказов в день.", features: ["15 000+ продавцов", "Мультивалютные платежи (KZT/RUB/USD)", "Интеграция с СДЭК/КазПочта", "Автоматическая модерация товаров", "Real-time аналитика продаж", "Мобильное приложение iOS/Android"], stack: "Node.js, React, PostgreSQL, Redis, Elasticsearch" },

  { id: "fooddelivery", title: "FoodExpress", subtitle: "Доставка еды", category: "delivery", tags: ["React Native","Node.js","PostGIS"], year: 2023, client: "FoodExpress KZ", rating: 5, date: "2023-05-22", desc: "Платформа доставки еды с 800+ ресторанами, live-трекингом курьеров и интеграцией с iiko/r_keeper. 12 000 заказов в сутки.", features: ["800+ ресторанов", "Live-трекинг курьеров", "Интеграция iiko/r_keeper", "12 000 заказов/сутки", "Промокоды и лояльность", "Оплата картой/наличными/крипто"], stack: "React Native, Node.js, PostGIS, Redis" },

  { id: "taxiapp", title: "TaxiGo", subtitle: "Сервис такси", category: "delivery", tags: ["Flutter","Golang","PostGIS"], year: 2023, client: "TaxiGo Group", rating: 5, date: "2023-08-14", desc: "Агрегатор такси с 5000+ водителей, динамическим ценообразованием и мультирегиональной поддержкой. Работает в 12 городах.", features: ["5000+ водителей", "Динамическое ценообразование", "12 городов", "Live-карта", "Интеграция с Яндекс.Картами", "Рейтинг водителей и пассажиров"], stack: "Flutter, Golang, PostGIS, Redis, Kafka" },

  { id: "grocery", title: "GroceryHub", subtitle: "Продукты онлайн", category: "ecommerce", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "GroceryHub KZ", rating: 5, date: "2024-01-18", desc: "Онлайн-гипермаркет с 20 000 SKU, слотами доставки и интеграцией с 1С. Обрабатывает 8000 заказов в день.", features: ["20 000 SKU", "Слоты доставки", "Интеграция 1С", "8000 заказов/сутки", "Кэшбэк и бонусы", "Подписка на доставку"], stack: "React, Node.js, PostgreSQL, Redis" },

  { id: "pharmacy", title: "Pharma24", subtitle: "Аптека онлайн", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "Pharma24 KZ", rating: 5, date: "2023-11-02", desc: "Онлайн-аптека с рецептурными препаратами, интеграцией с базами лекарств и доставкой за 2 часа.", features: ["Каталог 50k+ препаратов", "Рецептурные препараты", "Доставка за 2 часа", "Интеграция с базами лекарств", "Онлайн-консультация фармацевта"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "electronics", title: "TechnoMart", subtitle: "Электроника", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "TechnoMart KZ", rating: 5, date: "2023-07-08", desc: "Магазин электроники с трейд-ин, рассрочкой 0-0-12 и сравнением товаров. 35 000 SKU.", features: ["35 000 SKU", "Трейд-ин", "Рассрочка 0-0-12", "Сравнение товаров", "Отзывы с фото", "Бонусная программа"], stack: "Node.js, React, PostgreSQL, Redis" },

  { id: "fashion", title: "FashionStore", subtitle: "Одежда и обувь", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "FashionStore Ltd", rating: 5, date: "2024-02-20", desc: "Онлайн-магазин одежды с AR-примеркой, виртуальным стилистом и 3D-просмотром товаров.", features: ["AR-примерка", "Виртуальный стилист", "3D-просмотр", "Персональные рекомендации", "Wishlist и избранное"], stack: "Node.js, Vue, PostgreSQL, Three.js" },

  { id: "kids", title: "KidsWorld", subtitle: "Детские товары", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "KidsWorld KZ", rating: 5, date: "2023-09-14", desc: "Магазин детских товаров с подбором по возрасту, рейтингом безопасности и отзывами родителей.", features: ["Подбор по возрасту", "Рейтинг безопасности", "Отзывы родителей", "Списки желаний", "Программа лояльности"], stack: "Node.js, React, PostgreSQL" },

  { id: "furniture", title: "FurnitureLab", subtitle: "Мебель", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "FurnitureLab Ltd", rating: 4, date: "2024-04-05", desc: "Магазин мебели с 3D-конфигуратором, AR-примеркой и расчётом доставки по регионам.", features: ["3D-конфигуратор", "AR-примерка", "Расчёт доставки", "Дизайнеры онлайн", "Рассрочка"], stack: "Node.js, Vue, PostgreSQL, Three.js" },

  { id: "auto-parts", title: "AutoPartsPro", subtitle: "Автозапчасти", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "AutoPartsPro KZ", rating: 5, date: "2023-10-22", desc: "Магазин автозапчастей с подбором по VIN, базой 2 млн деталей и интеграцией с поставщиками.", features: ["Подбор по VIN", "2 млн деталей", "Интеграция поставщиков", "Быстрая доставка", "Гарантия 2 года"], stack: "Node.js, React, PostgreSQL, Elasticsearch" },

  { id: "beauty", title: "BeautyBox", subtitle: "Косметика", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "BeautyBox Ltd", rating: 5, date: "2024-03-12", desc: "Магазин косметики с AI-подбором по типу кожи, виртуальным макияжем и подписками на бьюти-боксы.", features: ["AI-подбор по типу кожи", "Виртуальный макияж", "Бьюти-боксы", "Подписки", "Программа лояльности"], stack: "Node.js, Vue, PostgreSQL, TensorFlow" },

  { id: "petshop", title: "PetShopPro", subtitle: "Зоотовары", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "PetShopPro KZ", rating: 5, date: "2023-06-18", desc: "Магазин зоотоваров с подпиской на корм, ветеринарной консультацией и отзывами владельцев.", features: ["Подписка на корм", "Ветеринарная консультация", "Отзывы владельцев", "Программа лояльности", "Автодоставка"], stack: "Node.js, React, PostgreSQL" },

  { id: "books", title: "BookHub", subtitle: "Книжный магазин", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "BookHub KZ", rating: 5, date: "2023-08-30", desc: "Книжный магазин с 500k+ книг, аудиокнигами, подпиской и персональными рекомендациями.", features: ["500k+ книг", "Аудиокниги", "Подписка", "Персональные рекомендации", "Читалка онлайн"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "gifts", title: "GiftBox", subtitle: "Подарки", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2024, client: "GiftBox Ltd", rating: 4, date: "2024-02-14", desc: "Магазин подарков с подбором по поводу, упаковкой и открыткой. Доставка в день заказа.", features: ["Подбор по поводу", "Упаковка", "Открытка", "Доставка в день заказа", "Подарочные сертификаты"], stack: "Node.js, React, PostgreSQL" },

  { id: "sport-store", title: "SportZone", subtitle: "Спорттовары", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "SportZone KZ", rating: 5, date: "2023-05-08", desc: "Магазин спортивных товаров с подбором по виду спорта, сравнением характеристик и отзывами спортсменов.", features: ["Подбор по виду спорта", "Сравнение", "Отзывы спортсменов", "Программа лояльности", "Быстрая доставка"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "flowers", title: "FlowerShop", subtitle: "Цветы", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "FlowerShop KZ", rating: 5, date: "2023-03-08", desc: "Магазин цветов с доставкой за 2 часа, подписками и напоминаниями о важных датах.", features: ["Доставка за 2 часа", "Подписки", "Напоминания", "Открытки", "Фото доставки"], stack: "Node.js, React, PostgreSQL" },

  { id: "jewelry", title: "JewelryBox", subtitle: "Ювелирные украшения", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "JewelryBox Ltd", rating: 5, date: "2024-01-25", desc: "Магазин ювелирных украшений с 3D-просмотром, подбором по стилю и сертификатами подлинности.", features: ["3D-просмотр", "Подбор по стилю", "Сертификаты подлинности", "Гравировка", "Подарочная упаковка"], stack: "Node.js, Vue, PostgreSQL, Three.js" },

  { id: "wine", title: "WineHouse", subtitle: "Винный магазин", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "WineHouse KZ", rating: 5, date: "2023-12-05", desc: "Винный магазин с сомелье-консультацией, подбором по блюдам и подписками на винные наборы.", features: ["Сомелье-консультация", "Подбор по блюдам", "Винные наборы", "Подписки", "Дегустации"], stack: "Node.js, React, PostgreSQL" },

  { id: "toys", title: "ToyWorld", subtitle: "Игрушки", category: "ecommerce", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "ToyWorld KZ", rating: 4, date: "2023-07-14", desc: "Магазин игрушек с подбором по возрасту, развивающими наборами и отзывами родителей.", features: ["Подбор по возрасту", "Развивающие наборы", "Отзывы родителей", "Программа лояльности", "Подарочные наборы"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "diy", title: "DIYMaster", subtitle: "Товары для ремонта", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2024, client: "DIYMaster Ltd", rating: 5, date: "2024-03-20", desc: "Магазин товаров для ремонта с калькулятором материалов, видео-инструкциями и консультацией мастеров.", features: ["Калькулятор материалов", "Видео-инструкции", "Консультация мастеров", "Аренда инструментов", "Программа лояльности"], stack: "Node.js, React, PostgreSQL" },

  // ===== ФИНТЕХ / БАНКИНГ (30) =====
  { id: "neobank", title: "NeoBank KZ", subtitle: "Необанк", category: "fintech", tags: ["Golang","Flutter","PostgreSQL","Kafka"], year: 2024, client: "NeoBank KZ", rating: 5, date: "2024-02-08", desc: "Мобильный необанк с мультивалютными счетами, картами Visa/Mastercard, крипто-кошельком и P2P-переводами. 500 000+ клиентов.", features: ["Мультивалютные счета", "Карты Visa/Mastercard", "Крипто-кошелек", "P2P-переводы", "500k+ клиентов", "Кэшбэк до 15%"], stack: "Golang, Flutter, PostgreSQL, Kafka" },

  { id: "payment-gateway", title: "PayFlow", subtitle: "Платёжный шлюз", category: "fintech", tags: ["Golang","Kafka","PostgreSQL"], year: 2023, client: "PayFlow Ltd", rating: 5, date: "2023-06-12", desc: "Платёжный шлюз с 30+ методами оплаты (карты, СБП, крипта, кошельки). Обрабатывает $50M в месяц.", features: ["30+ методов оплаты", "$50M/месяц", "Антифрод", "3DS", "Мультивалютность", "API для мерчантов"], stack: "Golang, Kafka, PostgreSQL, Redis" },

  { id: "p2p-lending", title: "P2PLending", subtitle: "P2P-кредитование", category: "fintech", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "P2PLending KZ", rating: 5, date: "2023-09-20", desc: "Платформа P2P-кредитования с автоматическим скорингом, рейтингом заёмщиков и вторичным рынком.", features: ["Автоматический скоринг", "Рейтинг заёмщиков", "Вторичный рынок", "Автоинвестирование", "Диверсификация"], stack: "Node.js, React, PostgreSQL, Redis" },

  { id: "crypto-exchange", title: "CryptoExchange", subtitle: "Крипто-биржа", category: "fintech", tags: ["Golang","React","PostgreSQL","Kafka"], year: 2024, client: "CryptoExchange KZ", rating: 5, date: "2024-01-30", desc: "Крипто-биржа с 200+ парами, спотовой и фьючерсной торговлей, стейкингом и P2P. Задержка матчинга <10мс.", features: ["200+ пар", "Спот + фьючерсы", "Стейкинг", "P2P", "Матчинг <10ms", "API для ботов"], stack: "Golang, React, PostgreSQL, Kafka, Redis" },

  { id: "microfinance", title: "MicroFinance", subtitle: "МФО", category: "fintech", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "MicroFinance KZ", rating: 5, date: "2023-11-14", desc: "Платформа микрокредитования с автоматическим скорингом, онлайн-заявками и интеграцией с КБК.", features: ["Автоматический скоринг", "Онлайн-заявки", "Интеграция КБК", "Автовыдача", "Личный кабинет"], stack: "Node.js, Vue, PostgreSQL, Redis" },

  { id: "smartbudget", title: "SmartBudget", subtitle: "Учёт финансов", category: "fintech", tags: ["Flutter","Node.js","PostgreSQL"], year: 2024, client: "SmartBudget KZ", rating: 5, date: "2024-03-05", desc: "Приложение для учёта личных финансов с автоматической категоризацией, бюджетами и отчётами.", features: ["Авто-категоризация", "Бюджеты", "Отчёты", "Синхронизация банков", "Мультивалютность"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "crypto-wallet", title: "CryptoWallet", subtitle: "Крипто-кошелёк", category: "fintech", tags: ["React Native","Golang","PostgreSQL"], year: 2024, client: "CryptoWallet Ltd", rating: 5, date: "2024-04-18", desc: "Некастодиальный крипто-кошелёк с поддержкой 50+ монет, стейкингом и обменом внутри приложения.", features: ["50+ монет", "Стейкинг", "Встроенный обмен", "Некастодиальный", "Биометрия"], stack: "React Native, Golang, PostgreSQL" },

  { id: "invest-app", title: "InvestApp", subtitle: "Инвестиции", category: "fintech", tags: ["Flutter","Golang","PostgreSQL"], year: 2023, client: "InvestApp KZ", rating: 5, date: "2023-10-08", desc: "Приложение для инвестиций в акции, ETF и облигации с аналитикой и авто-портфелями.", features: ["Акции/ETF/облигации", "Аналитика", "Авто-портфели", "Дивиденды", "Обучение"], stack: "Flutter, Golang, PostgreSQL" },

  { id: "insurance", title: "InsureTech", subtitle: "Страхование", category: "fintech", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "InsureTech KZ", rating: 5, date: "2023-08-22", desc: "Платформа онлайн-страхования с автоматическим расчётом, полисами в PDF и урегулированием убытков.", features: ["Авторасчёт", "Полисы PDF", "Урегулирование", "Личный кабинет", "Онлайн-оплата"], stack: "Node.js, React, PostgreSQL" },

  { id: "accounting", title: "AccountPro", subtitle: "Бухгалтерия", category: "fintech", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "AccountPro KZ", rating: 5, date: "2024-02-28", desc: "Облачная бухгалтерия для малого бизнеса с интеграцией 1С, банков и налоговой.", features: ["Интеграция 1С", "Банки", "Налоговая", "Отчёты", "Мультикомпания"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "taxi-fintech", title: "PayTaxi", subtitle: "Платежи для такси", category: "fintech", tags: ["Golang","PostgreSQL"], year: 2023, client: "PayTaxi KZ", rating: 5, date: "2023-07-18", desc: "Платёжное решение для таксопарков с моментальными выплатами водителям и Split-платежами.", features: ["Моментальные выплаты", "Split-платежи", "Интеграция с таксометрами", "Отчёты", "API"], stack: "Golang, PostgreSQL, Redis" },

  { id: "qr-payment", title: "QRPay", subtitle: "QR-платежи", category: "fintech", tags: ["Node.js","React Native"], year: 2024, client: "QRPay KZ", rating: 5, date: "2024-01-12", desc: "Система QR-платежей для малого бизнеса с интеграцией Kaspi/Halyk/СБП.", features: ["QR-оплата", "Kaspi/Halyk/СБП", "Мобильное приложение", "Отчёты", "Фискализация"], stack: "Node.js, React Native, PostgreSQL" },

  { id: "loyalty", title: "LoyaltyPro", subtitle: "Программа лояльности", category: "fintech", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "LoyaltyPro KZ", rating: 5, date: "2023-11-25", desc: "Программа лояльности для сетей с кэшбэком, бонусами и персональными предложениями.", features: ["Кэшбэк", "Бонусы", "Персональные предложения", "Мобильное приложение", "Аналитика"], stack: "Node.js, Vue, PostgreSQL, Redis" },

  { id: "bnpl", title: "BNPL KZ", subtitle: "Купи сейчас, плати потом", category: "fintech", tags: ["Node.js","React","PostgreSQL"], year: 2024, client: "BNPL KZ", rating: 5, date: "2024-04-25", desc: "Сервис BNPL с разбивкой платежей на 4 части без процентов. Интеграция с 500+ магазинами.", features: ["Разбивка на 4 части", "500+ магазинов", "Без процентов", "Автоматический скоринг", "Мобильное приложение"], stack: "Node.js, React, PostgreSQL" },

  { id: "crypto-payment", title: "CryptoPay", subtitle: "Крипто-платежи для бизнеса", category: "fintech", tags: ["Golang","PostgreSQL"], year: 2024, client: "CryptoPay Ltd", rating: 5, date: "2024-05-14", desc: "Платёжный шлюз для приёма крипто-платежей бизнесом. 15 монет, моментальная конвертация в фиат.", features: ["15 монет", "Моментальная конвертация", "Вебхуки", "API", "Фискализация"], stack: "Golang, PostgreSQL, Redis" },

  { id: "bank-api", title: "OpenBank API", subtitle: "Открытый банкинг", category: "fintech", tags: ["Golang","Kafka","PostgreSQL"], year: 2024, client: "Bank KZ", rating: 5, date: "2024-06-08", desc: "Open Banking API для интеграции банковских сервисов с финтех-приложениями. Соответствует PSD2.", features: ["PSD2-совместимость", "OAuth 2.0", "Webhooks", "Sandbox", "Документация OpenAPI"], stack: "Golang, Kafka, PostgreSQL" },

  { id: "crypto-tax", title: "CryptoTax", subtitle: "Налоги для крипты", category: "fintech", tags: ["Python","React","PostgreSQL"], year: 2024, client: "CryptoTax KZ", rating: 5, date: "2024-03-30", desc: "Сервис расчёта налогов для крипто-трейдеров с интеграцией бирж и генерацией деклараций.", features: ["Интеграция бирж", "Расчёт налогов", "Декларации", "Отчёты", "Мультивалютность"], stack: "Python, React, PostgreSQL" },

  { id: "invoice", title: "InvoicePro", subtitle: "Счета и инвойсы", category: "fintech", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "InvoicePro KZ", rating: 4, date: "2023-09-08", desc: "Сервис выставления счетов и инвойсов для фрилансеров и малого бизнеса с оплатой онлайн.", features: ["Счета/инвойсы", "Оплата онлайн", "Напоминания", "Мультивалютность", "PDF-экспорт"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "pos", title: "POS System", subtitle: "Кассовая система", category: "fintech", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "POS Master", rating: 5, date: "2023-12-20", desc: "Облачная POS-система для ресторанов и магазинов с интеграцией фискальных регистраторов.", features: ["Облачная POS", "Фискализация", "Инвентаризация", "Отчёты", "Интеграция 1С"], stack: "Node.js, React, PostgreSQL" },

  { id: "creditscore", title: "CreditScore", subtitle: "Кредитный скоринг", category: "fintech", tags: ["Python","Golang","PostgreSQL"], year: 2024, client: "CreditScore KZ", rating: 5, date: "2024-02-14", desc: "Система кредитного скоринга на ML для МФО и банков. Точность 92%.", features: ["ML-скоринг", "Точность 92%", "Интеграция КБК", "Отчёты", "API"], stack: "Python, Golang, PostgreSQL, XGBoost" },

  // ===== МЕДИЦИНА (20) =====
  { id: "medbot", title: "MedBot KZ", subtitle: "Медицинский бот", category: "medical", tags: ["Python","aiogram","PostgreSQL"], year: 2023, client: "MedBot KZ", rating: 5, date: "2023-05-14", desc: "Telegram-бот для записи к врачу, напоминаний о приёме лекарств и консультаций с врачом онлайн.", features: ["Запись к врачу", "Напоминания о лекарствах", "Онлайн-консультация", "Медицинская карта", "Интеграция с клиниками"], stack: "Python, aiogram, PostgreSQL" },

  { id: "clinic-crm", title: "ClinicCRM", subtitle: "CRM для клиник", category: "medical", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "ClinicCRM KZ", rating: 5, date: "2023-08-08", desc: "CRM для медицинских клиник с расписанием врачей, электронной медкартой и аналитикой.", features: ["Расписание врачей", "Электронная медкарта", "Аналитика", "СМС-напоминания", "Интеграция с лабораториями"], stack: "Node.js, React, PostgreSQL" },

  { id: "telemedicine", title: "TeleMed", subtitle: "Телемедицина", category: "medical", tags: ["React","Node.js","WebRTC"], year: 2024, client: "TeleMed KZ", rating: 5, date: "2024-01-20", desc: "Платформа телемедицины с видеоконсультациями, электронными рецептами и оплатой онлайн.", features: ["Видеоконсультации", "Электронные рецепты", "Онлайн-оплата", "История приёмов", "Интеграция с аптеками"], stack: "React, Node.js, WebRTC, PostgreSQL" },

  { id: "pharmacy-crm", title: "PharmaCRM", subtitle: "CRM для аптек", category: "medical", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "PharmaCRM KZ", rating: 5, date: "2023-11-08", desc: "CRM для сети аптек с учётом товаров, сроков годности и интеграцией с поставщиками.", features: ["Учёт товаров", "Сроки годности", "Интеграция поставщиков", "Отчёты", "Мультиаптечность"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "dental", title: "DentaSoft", subtitle: "CRM для стоматологий", category: "medical", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "DentaSoft KZ", rating: 5, date: "2023-07-22", desc: "CRM для стоматологических клиник с 3D-снимками, планами лечения и учётом расходников.", features: ["3D-снимки", "Планы лечения", "Учёт расходников", "Расписание", "Финансы"], stack: "Node.js, React, PostgreSQL" },

  { id: "lab-crm", title: "LabCRM", subtitle: "CRM для лабораторий", category: "medical", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "LabCRM KZ", rating: 5, date: "2024-02-05", desc: "CRM для медицинских лабораторий с приёмом анализов, штрих-кодами и онлайн-результатами.", features: ["Приём анализов", "Штрих-коды", "Онлайн-результаты", "Интеграция с клиниками", "Отчёты"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "fitness-med", title: "FitMed", subtitle: "Фитнес и здоровье", category: "medical", tags: ["React Native","Node.js","PostgreSQL"], year: 2024, client: "FitMed KZ", rating: 5, date: "2024-04-10", desc: "Приложение для фитнеса и здоровья с трекингом активности, питания и интеграцией с носимыми устройствами.", features: ["Трекинг активности", "Дневник питания", "Интеграция с Apple Watch/Mi Band", "Программы тренировок", "Сообщество"], stack: "React Native, Node.js, PostgreSQL" },

  { id: "mental-health", title: "MindCare", subtitle: "Психическое здоровье", category: "medical", tags: ["React Native","Node.js","PostgreSQL"], year: 2024, client: "MindCare KZ", rating: 5, date: "2024-05-20", desc: "Приложение для ментального здоровья с медитациями, дневником настроения и связью с психологом.", features: ["Медитации", "Дневник настроения", "Связь с психологом", "Курсы", "Сообщество"], stack: "React Native, Node.js, PostgreSQL" },

  { id: "nutrition", title: "NutriPlan", subtitle: "Питание", category: "medical", tags: ["React Native","Node.js","PostgreSQL"], year: 2023, client: "NutriPlan KZ", rating: 4, date: "2023-10-15", desc: "Приложение для планирования питания с подсчётом КБЖУ, рецептами и списком покупок.", features: ["Подсчёт КБЖУ", "Рецепты", "Список покупок", "Сканер штрих-кодов", "Дневник"], stack: "React Native, Node.js, PostgreSQL" },

  // ===== ОБРАЗОВАНИЕ (20) =====
  { id: "lms", title: "EduFlow LMS", subtitle: "LMS-платформа", category: "education", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "EduFlow KZ", rating: 5, date: "2023-04-10", desc: "LMS-платформа для онлайн-школ с курсами, тестами, вебинарами и аналитикой. 50 000+ студентов.", features: ["50 000+ студентов", "Курсы и уроки", "Тесты и задания", "Вебинары", "Аналитика", "Сертификаты"], stack: "React, Node.js, PostgreSQL, WebRTC" },

  { id: "school-crm", title: "SchoolCRM", subtitle: "CRM для школ", category: "education", tags: ["Node.js","Vue","PostgreSQL"], year: 2023, client: "SchoolCRM KZ", rating: 5, date: "2023-08-18", desc: "CRM для частных школ с расписанием, электронным дневником и связью с родителями.", features: ["Расписание", "Электронный дневник", "Связь с родителями", "Оплата", "Отчёты"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "tutor", title: "TutorHub", subtitle: "Репетиторы онлайн", category: "education", tags: ["React","Node.js","WebRTC"], year: 2024, client: "TutorHub KZ", rating: 5, date: "2024-01-15", desc: "Платформа для онлайн-занятий с репетиторами: поиск, расписание, видеозвонки и оплата.", features: ["Поиск репетиторов", "Расписание", "Видеозвонки", "Оплата", "Отзывы", "Чат"], stack: "React, Node.js, WebRTC, PostgreSQL" },

  { id: "lang-app", title: "LangMaster", subtitle: "Изучение языков", category: "education", tags: ["React Native","Node.js","PostgreSQL"], year: 2024, client: "LangMaster KZ", rating: 5, date: "2024-03-08", desc: "Приложение для изучения языков с геймификацией, карточками и AI-собеседником.", features: ["Геймификация", "Карточки", "AI-собеседник", "Достижения", "Оффлайн-режим"], stack: "React Native, Node.js, PostgreSQL, OpenAI" },

  { id: "coding-school", title: "CodeSchool", subtitle: "Школа программирования", category: "education", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "CodeSchool KZ", rating: 5, date: "2023-11-20", desc: "Платформа для школы программирования с интерактивными заданиями и проверкой кода.", features: ["Интерактивные задания", "Проверка кода", "Менторы", "Проекты", "Трудоустройство"], stack: "React, Node.js, PostgreSQL" },

  { id: "exam-prep", title: "ExamPrep", subtitle: "Подготовка к экзаменам", category: "education", tags: ["React Native","Node.js"], year: 2023, client: "ExamPrep KZ", rating: 5, date: "2023-09-12", desc: "Приложение для подготовки к ЕНТ, SAT, IELTS с тестами и аналитикой прогресса.", features: ["Тесты ЕНТ/SAT/IELTS", "Аналитика прогресса", "Оффлайн-режим", "Тренажёры", "Сообщество"], stack: "React Native, Node.js, PostgreSQL" },

  { id: "kids-education", title: "KidsEdu", subtitle: "Детское образование", category: "education", tags: ["React Native","Node.js"], year: 2023, client: "KidsEdu KZ", rating: 5, date: "2023-06-05", desc: "Приложение для детей 3-8 лет с развивающими играми, сказками и обучением чтению.", features: ["Развивающие игры", "Сказки", "Обучение чтению", "Родительский контроль", "Оффлайн"], stack: "React Native, Node.js, PostgreSQL" },

  { id: "university-crm", title: "UniCRM", subtitle: "CRM для вузов", category: "education", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "UniCRM KZ", rating: 5, date: "2024-02-20", desc: "CRM для университетов с приёмной комиссией, расписанием и успеваемостью студентов.", features: ["Приёмная комиссия", "Расписание", "Успеваемость", "Стипендии", "Отчёты"], stack: "Node.js, Vue, PostgreSQL" },

  // ===== ЛОГИСТИКА / ДОСТАВКА (25) =====
  { id: "cargo", title: "CargoFlow", subtitle: "Грузоперевозки", category: "logistics", tags: ["React","Golang","PostGIS"], year: 2023, client: "CargoFlow KZ", rating: 5, date: "2023-06-20", desc: "Платформа грузоперевозок с подбором машин, расчётом маршрутов и отслеживанием груза.", features: ["Подбор машин", "Расчёт маршрутов", "Отслеживание", "ЭДО", "Страхование"], stack: "React, Golang, PostGIS, Kafka" },

  { id: "last-mile", title: "LastMile Pro", subtitle: "Последняя миля", category: "logistics", tags: ["React Native","Node.js","PostGIS"], year: 2023, client: "LastMile KZ", rating: 5, date: "2023-09-05", desc: "Система управления курьерами и доставкой последней мили с live-трекингом и оптимизацией маршрутов.", features: ["Live-трекинг", "Оптимизация маршрутов", "Мобильное приложение курьера", "Электронная подпись", "Отчёты"], stack: "React Native, Node.js, PostGIS" },

  { id: "warehouse", title: "WarehousePro", subtitle: "Управление складом", category: "logistics", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "WarehousePro KZ", rating: 5, date: "2023-11-15", desc: "WMS-система для управления складом с адресным хранением, штрих-кодами и интеграцией 1С.", features: ["Адресное хранение", "Штрих-коды", "Интеграция 1С", "Инвентаризация", "Отчёты"], stack: "Node.js, React, PostgreSQL" },

  { id: "freight", title: "FreightExchange", subtitle: "Биржа грузов", category: "logistics", tags: ["Golang","React","PostgreSQL"], year: 2024, client: "FreightExchange KZ", rating: 5, date: "2024-01-10", desc: "Биржа грузоперевозок с автоматическим матчингом грузов и машин, рейтингом перевозчиков.", features: ["Авто-матчинг", "Рейтинг перевозчиков", "ЭДО", "Отслеживание", "API"], stack: "Golang, React, PostgreSQL" },

  { id: "courier", title: "CourierPro", subtitle: "Курьерская служба", category: "logistics", tags: ["React Native","Node.js","PostGIS"], year: 2023, client: "CourierPro KZ", rating: 5, date: "2023-08-22", desc: "Платформа курьерской доставки с зонированием, тарифами и мобильным приложением курьера.", features: ["Зонирование", "Тарифы", "Мобильное приложение", "Трекинг", "Отчёты"], stack: "React Native, Node.js, PostGIS" },

  { id: "3pl", title: "3PL System", subtitle: "3PL-оператор", category: "logistics", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "3PL KZ", rating: 5, date: "2024-03-15", desc: "Система для 3PL-оператора с управлением заказами, складом и интеграцией с маркетплейсами.", features: ["Управление заказами", "Склад", "Интеграция маркетплейсов", "Отчёты", "API"], stack: "Node.js, Vue, PostgreSQL" },

  // ===== НЕДВИЖИМОСТЬ (15) =====
  { id: "realestate", title: "RealEstate Pro", subtitle: "Портал недвижимости", category: "realestate", tags: ["Node.js","React","PostGIS"], year: 2023, client: "RealEstate KZ", rating: 5, date: "2023-05-25", desc: "Портал недвижимости с 200 000+ объявлений, картой, ипотечным калькулятором и AI-подбором.", features: ["200 000+ объявлений", "Карта", "Ипотечный калькулятор", "AI-подбор", "Виртуальные туры 3D"], stack: "Node.js, React, PostGIS, Three.js" },

  { id: "rent", title: "RentHub", subtitle: "Аренда жилья", category: "realestate", tags: ["React","Node.js","PostGIS"], year: 2023, client: "RentHub KZ", rating: 5, date: "2023-10-10", desc: "Сервис аренды жилья с онлайн-бронированием, оплатой и договорами.", features: ["Онлайн-бронирование", "Оплата", "Договоры", "Отзывы", "Страхование"], stack: "React, Node.js, PostGIS" },

  { id: "mortgage", title: "MortgagePro", subtitle: "Ипотека", category: "realestate", tags: ["Node.js","React","PostgreSQL"], year: 2024, client: "MortgagePro KZ", rating: 5, date: "2024-02-12", desc: "Сервис подбора ипотеки с онлайн-заявкой, сравнением банков и расчётом платежей.", features: ["Онлайн-заявка", "Сравнение банков", "Расчёт платежей", "Документы онлайн", "Статус заявки"], stack: "Node.js, React, PostgreSQL" },

  { id: "builder", title: "BuilderCRM", subtitle: "CRM для застройщиков", category: "realestate", tags: ["Node.js","Vue","PostgreSQL"], year: 2024, client: "BuilderCRM KZ", rating: 5, date: "2024-04-02", desc: "CRM для застройщиков с шахматкой, бронированием квартир и договорами долевого участия.", features: ["Шахматка", "Бронирование", "ДДУ", "Отчёты", "Интеграция с банками"], stack: "Node.js, Vue, PostgreSQL" },

  // ===== АВТОМАТИЗАЦИЯ / ПАРСЕРЫ (30) =====
  { id: "parser-market", title: "MarketParser", subtitle: "Парсер маркетплейсов", category: "automation", tags: ["Python","Selenium","PostgreSQL"], year: 2023, client: "MarketParser KZ", rating: 5, date: "2023-04-18", desc: "Парсер Kaspi/Wildberries/Ozon с аналитикой цен, отслеживанием конкурентов и алертами.", features: ["Kaspi/WB/Ozon", "Аналитика цен", "Отслеживание конкурентов", "Алерты", "Экспорт Excel"], stack: "Python, Selenium, PostgreSQL, Redis" },

  { id: "parser-realestate", title: "EstateParser", subtitle: "Парсер недвижимости", category: "automation", tags: ["Python","Scrapy","PostGIS"], year: 2023, client: "EstateParser KZ", rating: 5, date: "2023-07-14", desc: "Парсер krisha.kz/olx.kz с аналитикой цен, историей и алертами по новым объектам.", features: ["Krisha/OLX", "Аналитика цен", "История", "Алерты", "Экспорт"], stack: "Python, Scrapy, PostGIS" },

  { id: "parser-auto", title: "AutoParser", subtitle: "Парсер авто", category: "automation", tags: ["Python","Selenium","PostgreSQL"], year: 2023, client: "AutoParser KZ", rating: 5, date: "2023-09-25", desc: "Парсер auto.ru/kolesa.kz с аналитикой цен, проверкой истории и алертами по новым объявлениям.", features: ["Auto.ru/Kolesa", "Аналитика цен", "История авто", "Алерты", "Экспорт"], stack: "Python, Selenium, PostgreSQL" },

  { id: "parser-jobs", title: "JobParser", subtitle: "Парсер вакансий", category: "automation", tags: ["Python","aiohttp","PostgreSQL"], year: 2024, client: "JobParser KZ", rating: 5, date: "2024-01-20", desc: "Агрегатор вакансий с hh.kz/linkedin/enbek с аналитикой зарплат и алертами.", features: ["hh.kz/LinkedIn/Enbek", "Аналитика зарплат", "Алерты", "Экспорт", "API"], stack: "Python, aiohttp, PostgreSQL" },

  { id: "parser-news", title: "NewsParser", subtitle: "Парсер новостей", category: "automation", tags: ["Python","Scrapy","Elasticsearch"], year: 2023, client: "NewsParser KZ", rating: 5, date: "2023-06-08", desc: "Агрегатор новостей с 100+ источников, аналитикой тональности и алертами по ключевым словам.", features: ["100+ источников", "Аналитика тональности", "Алерты", "RSS", "API"], stack: "Python, Scrapy, Elasticsearch" },

  { id: "parser-social", title: "SocialParser", subtitle: "Парсер соцсетей", category: "automation", tags: ["Python","Selenium","MongoDB"], year: 2024, client: "SocialParser KZ", rating: 5, date: "2024-03-08", desc: "Парсер Instagram/TikTok/Telegram с аналитикой аудитории, конкурентов и трендов.", features: ["Instagram/TikTok/Telegram", "Аналитика аудитории", "Мониторинг конкурентов", "Тренды", "Экспорт"], stack: "Python, Selenium, MongoDB" },

  { id: "parser-instagram", title: "InstaParser", subtitle: "Парсер Instagram", category: "automation", tags: ["Python","Selenium"], year: 2023, client: "InstaParser KZ", rating: 4, date: "2023-11-12", desc: "Парсер Instagram с массфолловингом, аналитикой и автопостингом.", features: ["Массфолловинг", "Аналитика", "Автопостинг", "Мульти-аккаунты", "Прокси"], stack: "Python, Selenium, PostgreSQL" },

  { id: "parser-tiktok", title: "TikTokParser", subtitle: "Парсер TikTok", category: "automation", tags: ["Python","aiohttp"], year: 2024, client: "TikTokParser KZ", rating: 5, date: "2024-02-14", desc: "Парсер TikTok с аналитикой видео, трендов и аудитории. Скачивание без водяных знаков.", features: ["Аналитика видео", "Тренды", "Скачивание без водяных знаков", "Мульти-аккаунты", "Прокси"], stack: "Python, aiohttp, MongoDB" },

  { id: "parser-telegram", title: "TelegramParser", subtitle: "Парсер Telegram", category: "automation", tags: ["Python","Telethon"], year: 2024, client: "TelegramParser KZ", rating: 5, date: "2024-04-20", desc: "Парсер Telegram-каналов с аналитикой, экспортом участников и мониторингом ключевых слов.", features: ["Парсинг каналов", "Экспорт участников", "Мониторинг слов", "Мульти-аккаунты", "API"], stack: "Python, Telethon, PostgreSQL" },

  { id: "parser-youtube", title: "YouTubeParser", subtitle: "Парсер YouTube", category: "automation", tags: ["Python","aiohttp"], year: 2023, client: "YouTubeParser KZ", rating: 5, date: "2023-09-15", desc: "Парсер YouTube с аналитикой каналов, видео и комментариев. Скачивание видео и субтитров.", features: ["Аналитика каналов", "Аналитика видео", "Скачивание", "Субтитры", "API"], stack: "Python, aiohttp, yt-dlp" },

  { id: "parser-reviews", title: "ReviewParser", subtitle: "Парсер отзывов", category: "automation", tags: ["Python","Scrapy"], year: 2024, client: "ReviewParser KZ", rating: 5, date: "2024-01-08", desc: "Парсер отзывов с 2GIS/Google/Яндекс с аналитикой тональности и алертами по негативу.", features: ["2GIS/Google/Яндекс", "Аналитика тональности", "Алерты по негативу", "Экспорт", "API"], stack: "Python, Scrapy, PostgreSQL" },

  { id: "parser-suppliers", title: "SupplierParser", subtitle: "Парсер поставщиков", category: "automation", tags: ["Python","Scrapy","PostgreSQL"], year: 2024, client: "SupplierParser KZ", rating: 5, date: "2024-05-10", desc: "Парсер поставщиков с Alibaba/1688 с переводом, расчётом доставки и алертами.", features: ["Alibaba/1688", "Перевод", "Расчёт доставки", "Алерты", "Экспорт"], stack: "Python, Scrapy, PostgreSQL" },

  { id: "automation-sheets", title: "SheetSync", subtitle: "Синхронизация Google Sheets", category: "automation", tags: ["Python","gspread"], year: 2023, client: "SheetSync KZ", rating: 5, date: "2023-08-05", desc: "Сервис автоматической синхронизации данных между Google Sheets и базами данных.", features: ["Синхронизация", "Автообновление", "Формулы", "API", "Уведомления"], stack: "Python, gspread, PostgreSQL" },

  { id: "automation-excel", title: "ExcelBot", subtitle: "Обработка Excel", category: "automation", tags: ["Python","Pandas"], year: 2023, client: "ExcelBot KZ", rating: 5, date: "2023-10-18", desc: "Автоматизация обработки Excel-файлов: слияние, разбивка, сводные таблицы, отчёты.", features: ["Слияние", "Разбивка", "Сводные таблицы", "Отчёты", "API"], stack: "Python, Pandas, openpyxl" },

  { id: "automation-pdf", title: "PDFBot", subtitle: "Обработка PDF", category: "automation", tags: ["Python","PyPDF"], year: 2023, client: "PDFBot KZ", rating: 4, date: "2023-07-08", desc: "Автоматизация обработки PDF: слияние, разбивка, OCR, извлечение данных.", features: ["Слияние", "Разбивка", "OCR", "Извлечение", "API"], stack: "Python, PyPDF2, Tesseract" },

  { id: "automation-email", title: "EmailFlow", subtitle: "Автоматизация email", category: "automation", tags: ["Python","IMAP"], year: 2024, client: "EmailFlow KZ", rating: 5, date: "2024-02-25", desc: "Автоматизация email: парсинг писем, автоответы, рассылки, интеграция с CRM.", features: ["Парсинг писем", "Автоответы", "Рассылки", "CRM-интеграция", "API"], stack: "Python, IMAP, SMTP" },

  { id: "automation-whatsapp", title: "WhatsAppBot", subtitle: "WhatsApp-бот", category: "automation", tags: ["Python","Selenium"], year: 2023, client: "WhatsAppBot KZ", rating: 5, date: "2023-11-20", desc: "WhatsApp-бот для рассылок и автоответов с интеграцией CRM.", features: ["Рассылки", "Автоответы", "CRM", "Мульти-аккаунты", "API"], stack: "Python, Selenium, PostgreSQL" },

  // ===== SAAS / CRM / ERP (25) =====
  { id: "crm-sales", title: "SalesCRM", subtitle: "CRM для продаж", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "SalesCRM KZ", rating: 5, date: "2023-05-10", desc: "CRM для отделов продаж с воронкой, задачами, звонками и аналитикой.", features: ["Воронка продаж", "Задачи", "Интеграция телефонии", "Аналитика", "Скрипты"], stack: "React, Node.js, PostgreSQL" },

  { id: "crm-support", title: "SupportCRM", subtitle: "CRM для поддержки", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "SupportCRM KZ", rating: 5, date: "2023-09-08", desc: "Helpdesk-система с тикетами, SLA, базой знаний и интеграцией с Telegram/WhatsApp.", features: ["Тикеты", "SLA", "База знаний", "Интеграции", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "erp", title: "ERP System", subtitle: "ERP-система", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "ERP KZ", rating: 5, date: "2024-01-25", desc: "ERP-система для среднего бизнеса с модулями продаж, склада, финансов и HR.", features: ["Продажи", "Склад", "Финансы", "HR", "Отчёты", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "hr-system", title: "HR System", subtitle: "HR-система", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "HR System KZ", rating: 5, date: "2023-08-14", desc: "HR-система с учётом сотрудников, отпусков, больничных и расчётом зарплат.", features: ["Учёт сотрудников", "Отпуска", "Больничные", "Зарплаты", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "project-mgmt", title: "ProjectMgmt", subtitle: "Управление проектами", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "ProjectMgmt KZ", rating: 5, date: "2023-11-05", desc: "Система управления проектами с задачами, канбан-досками, диаграммами Ганта и временем.", features: ["Задачи", "Канбан", "Гант", "Учёт времени", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "helpdesk", title: "HelpDesk Pro", subtitle: "Служба поддержки", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "HelpDesk Pro KZ", rating: 5, date: "2023-07-20", desc: "Helpdesk-система с тикетами, SLA, эскалацией и базой знаний.", features: ["Тикеты", "SLA", "Эскалация", "База знаний", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "booking-saas", title: "BookingSaaS", subtitle: "Онлайн-запись", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "BookingSaaS KZ", rating: 5, date: "2024-02-08", desc: "SaaS для онлайн-записи в салоны, клиники, барбершопы с оплатой и напоминаниями.", features: ["Онлайн-запись", "Оплата", "Напоминания", "Мультифилиальность", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "restaurant-saas", title: "RestoSaaS", subtitle: "SaaS для ресторанов", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "RestoSaaS KZ", rating: 5, date: "2023-10-12", desc: "SaaS для ресторанов с меню, заказами, кухней и интеграцией с доставкой.", features: ["Меню", "Заказы", "Кухня", "Доставка", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "fitness-saas", title: "FitSaaS", subtitle: "SaaS для фитнеса", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "FitSaaS KZ", rating: 5, date: "2024-03-15", desc: "SaaS для фитнес-клубов с абонементами, расписанием и учётом посещений.", features: ["Абонементы", "Расписание", "Учёт посещений", "Тренеры", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "hotel-saas", title: "HotelSaaS", subtitle: "SaaS для отелей", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "HotelSaaS KZ", rating: 5, date: "2023-09-20", desc: "SaaS для отелей с бронированием, шахматкой, оплатой и интеграцией с Booking.", features: ["Бронирование", "Шахматка", "Оплата", "Booking-интеграция", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "carwash-saas", title: "CarWash SaaS", subtitle: "SaaS для автомоек", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "CarWash KZ", rating: 5, date: "2024-04-22", desc: "SaaS для автомоек с онлайн-записью, оплатой и учётом расходников.", features: ["Онлайн-запись", "Оплата", "Учёт расходников", "Мультифилиальность", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "barber-saas", title: "Barber SaaS", subtitle: "SaaS для барбершопов", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "Barber SaaS KZ", rating: 5, date: "2023-12-08", desc: "SaaS для барбершопов с онлайн-записью, оплатой, программой лояльности.", features: ["Онлайн-запись", "Оплата", "Лояльность", "Мультимастер", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "beauty-saas", title: "Beauty SaaS", subtitle: "SaaS для салонов красоты", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "Beauty SaaS KZ", rating: 5, date: "2024-01-18", desc: "SaaS для салонов красоты с онлайн-записью, складом, лояльностью и аналитикой.", features: ["Онлайн-запись", "Склад", "Лояльность", "Аналитика", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "school-saas", title: "School SaaS", subtitle: "SaaS для школ", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "School SaaS KZ", rating: 5, date: "2023-06-15", desc: "SaaS для частных школ с расписанием, оплатой, дневником и связью с родителями.", features: ["Расписание", "Оплата", "Дневник", "Связь с родителями", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "clinic-saas", title: "Clinic SaaS", subtitle: "SaaS для клиник", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "Clinic SaaS KZ", rating: 5, date: "2024-05-05", desc: "SaaS для медицинских клиник с расписанием, медкартами и аналитикой.", features: ["Расписание", "Медкарты", "Аналитика", "СМС-напоминания", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "fitness-booking", title: "FitBooking", subtitle: "Запись в фитнес", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "FitBooking KZ", rating: 5, date: "2023-11-25", desc: "SaaS для записи на групповые тренировки с оплатой и напоминаниями.", features: ["Запись", "Оплата", "Напоминания", "Тренеры", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "field-service", title: "FieldService", subtitle: "SaaS для выездных служб", category: "saas", tags: ["React Native","Node.js","PostGIS"], year: 2024, client: "FieldService KZ", rating: 5, date: "2024-03-20", desc: "SaaS для выездных служб с планированием, трекингом и электронной подписью.", features: ["Планирование", "Трекинг", "Электронная подпись", "Фотоотчёты", "API"], stack: "React Native, Node.js, PostGIS" },

  { id: "logistics-saas", title: "LogiSaaS", subtitle: "SaaS для логистики", category: "saas", tags: ["React","Golang","PostGIS"], year: 2023, client: "LogiSaaS KZ", rating: 5, date: "2023-08-30", desc: "SaaS для логистических компаний с управлением заказами, трекингом и аналитикой.", features: ["Управление заказами", "Трекинг", "Аналитика", "ЭДО", "API"], stack: "React, Golang, PostGIS" },

  // ===== МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ (20) =====
  { id: "fitness-app", title: "FitApp", subtitle: "Фитнес-приложение", category: "mobile", tags: ["Flutter","Node.js","PostgreSQL"], year: 2023, client: "FitApp KZ", rating: 5, date: "2023-05-20", desc: "Фитнес-приложение с тренировками, трекингом активности и питанием.", features: ["Тренировки", "Трекинг", "Питание", "Интеграция с часами", "Сообщество"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "recipe-app", title: "RecipeApp", subtitle: "Рецепты", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "RecipeApp KZ", rating: 5, date: "2023-08-12", desc: "Приложение с 50 000+ рецептов, списком покупок и пошаговыми инструкциями.", features: ["50 000+ рецептов", "Список покупок", "Пошаговые инструкции", "Фильтры", "Избранное"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "travel-app", title: "TravelApp", subtitle: "Путешествия", category: "mobile", tags: ["Flutter","Node.js"], year: 2024, client: "TravelApp KZ", rating: 5, date: "2024-02-18", desc: "Приложение для путешествий с гидами, бронированием и оффлайн-картами.", features: ["Гиды", "Бронирование", "Оффлайн-карты", "Отзывы", "Чат"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "meditation", title: "MeditationApp", subtitle: "Медитации", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "Meditation KZ", rating: 5, date: "2023-09-28", desc: "Приложение для медитаций с курсами, трекингом и напоминаниями.", features: ["Курсы", "Трекинг", "Напоминания", "Оффлайн", "Сообщество"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "budget-app", title: "BudgetApp", subtitle: "Учёт финансов", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "BudgetApp KZ", rating: 5, date: "2023-11-18", desc: "Приложение для учёта личных финансов с категориями, бюджетами и отчётами.", features: ["Категории", "Бюджеты", "Отчёты", "Синхронизация", "Мультивалютность"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "habit-app", title: "HabitApp", subtitle: "Трекер привычек", category: "mobile", tags: ["Flutter","Node.js"], year: 2024, client: "HabitApp KZ", rating: 5, date: "2024-01-08", desc: "Приложение для отслеживания привычек с геймификацией и статистикой.", features: ["Привычки", "Геймификация", "Статистика", "Напоминания", "Друзья"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "notes-app", title: "NotesApp", subtitle: "Заметки", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "NotesApp KZ", rating: 4, date: "2023-07-05", desc: "Приложение для заметок с Markdown, тегами и синхронизацией.", features: ["Markdown", "Теги", "Синхронизация", "Экспорт", "Шифрование"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "todo-app", title: "TodoApp", subtitle: "Задачи", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "TodoApp KZ", rating: 4, date: "2023-06-22", desc: "Приложение для задач с проектами, тегами и напоминаниями.", features: ["Проекты", "Теги", "Напоминания", "Синхронизация", "Виджеты"], stack: "Flutter, Node.js, PostgreSQL" },

  { id: "weather-app", title: "WeatherApp", subtitle: "Погода", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "WeatherApp KZ", rating: 4, date: "2023-04-14", desc: "Приложение погоды с прогнозом, радаром и уведомлениями.", features: ["Прогноз", "Радар", "Уведомления", "Виджеты", "Мультигорода"], stack: "Flutter, Node.js, OpenWeather API" },

  { id: "crypto-app", title: "CryptoApp", subtitle: "Крипто-трекер", category: "mobile", tags: ["Flutter","Node.js"], year: 2024, client: "CryptoApp KZ", rating: 5, date: "2024-03-25", desc: "Приложение для отслеживания крипто-портфеля с алертами и аналитикой.", features: ["Портфель", "Алерты", "Аналитика", "Новости", "Мультибиржи"], stack: "Flutter, Node.js, PostgreSQL" },

  // ===== ЛОГИСТИКА (10) =====
  { id: "parcel-track", title: "ParcelTrack", subtitle: "Отслеживание посылок", category: "logistics", tags: ["Node.js","React"], year: 2023, client: "ParcelTrack KZ", rating: 5, date: "2023-07-30", desc: "Сервис отслеживания посылок из 50+ служб доставки в одном месте.", features: ["50+ служб", "Push-уведомления", "История", "API", "Мобильное приложение"], stack: "Node.js, React, PostgreSQL" },

  { id: "delivery-track", title: "DeliveryTrack", subtitle: "Live-трекинг доставки", category: "logistics", tags: ["Node.js","React","WebSocket"], year: 2024, client: "DeliveryTrack KZ", rating: 5, date: "2024-01-05", desc: "Live-трекинг курьеров и доставки с картой и ETA.", features: ["Live-карта", "ETA", "Уведомления", "API", "Виджет"], stack: "Node.js, React, WebSocket, PostGIS" },

  // ===== ДОПОЛНИТЕЛЬНО (30) =====
  { id: "qr-menu", title: "QRMenu", subtitle: "QR-меню для ресторанов", category: "saas", tags: ["Node.js","Vue"], year: 2023, client: "QRMenu KZ", rating: 5, date: "2023-08-10", desc: "QR-меню для ресторанов с заказом со стола и оплатой.", features: ["QR-меню", "Заказ со стола", "Оплата", "Мультиязычность", "Админка"], stack: "Node.js, Vue, PostgreSQL" },

  { id: "loyalty-card", title: "LoyaltyCard", subtitle: "Цифровая карта лояльности", category: "saas", tags: ["React Native","Node.js"], year: 2024, client: "LoyaltyCard KZ", rating: 5, date: "2024-02-28", desc: "Цифровая карта лояльности для сетей с кэшбэком и бонусами.", features: ["Кэшбэк", "Бонусы", "Apple/Google Wallet", "Push", "Аналитика"], stack: "React Native, Node.js, PostgreSQL" },

  { id: "surveys", title: "SurveyPro", subtitle: "Опросы", category: "saas", tags: ["React","Node.js"], year: 2023, client: "SurveyPro KZ", rating: 5, date: "2023-10-25", desc: "Сервис для создания и проведения опросов с аналитикой.", features: ["Конструктор", "Аналитика", "Экспорт", "API", "Мультиязычность"], stack: "React, Node.js, PostgreSQL" },

  { id: "events", title: "EventPro", subtitle: "Управление мероприятиями", category: "saas", tags: ["React","Node.js"], year: 2024, client: "EventPro KZ", rating: 5, date: "2024-03-30", desc: "Сервис для организации мероприятий с регистрацией, оплатой и QR-билетами.", features: ["Регистрация", "Оплата", "QR-билеты", "Расписание", "Аналитика"], stack: "React, Node.js, PostgreSQL" },

  { id: "voting", title: "VotePro", subtitle: "Онлайн-голосование", category: "saas", tags: ["Node.js","React"], year: 2023, client: "VotePro KZ", rating: 5, date: "2023-09-18", desc: "Сервис для онлайн-голосования с защитой от накруток.", features: ["Голосования", "Защита от накруток", "Результаты", "Экспорт", "API"], stack: "Node.js, React, PostgreSQL" },

  { id: "law-crm", title: "LawCRM", subtitle: "CRM для юристов", category: "saas", tags: ["React","Node.js"], year: 2024, client: "LawCRM KZ", rating: 5, date: "2024-01-15", desc: "CRM для юридических фирм с делами, документами и биллингом.", features: ["Дела", "Документы", "Биллинг", "Календарь", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "notary-crm", title: "NotaryCRM", subtitle: "CRM для нотариусов", category: "saas", tags: ["React","Node.js"], year: 2023, client: "NotaryCRM KZ", rating: 5, date: "2023-11-08", desc: "CRM для нотариусов с реестром документов и учётом.", features: ["Реестр", "Документы", "Учёт", "Отчёты", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "accounting-crm", title: "AccCRM", subtitle: "CRM для бухгалтеров", category: "saas", tags: ["React","Node.js"], year: 2024, client: "AccCRM KZ", rating: 5, date: "2024-04-10", desc: "CRM для бухгалтерских фирм с клиентами, отчётностью и сроками.", features: ["Клиенты", "Отчётность", "Сроки", "Документы", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "hr-recruiting", title: "RecruitPro", subtitle: "Рекрутинг", category: "saas", tags: ["React","Node.js"], year: 2023, client: "RecruitPro KZ", rating: 5, date: "2023-10-05", desc: "Система рекрутинга с вакансиями, кандидатами и воронкой найма.", features: ["Вакансии", "Кандидаты", "Воронка", "Интеграция hh", "Отчёты"], stack: "React, Node.js, PostgreSQL" },

  { id: "procurement", title: "ProcurePro", subtitle: "Закупки", category: "saas", tags: ["React","Node.js"], year: 2024, client: "ProcurePro KZ", rating: 5, date: "2024-02-20", desc: "Система закупок с заявками, тендерами и поставщиками.", features: ["Заявки", "Тендеры", "Поставщики", "Договоры", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "legal-docs", title: "LegalDocs", subtitle: "Юридические документы", category: "saas", tags: ["React","Node.js"], year: 2023, client: "LegalDocs KZ", rating: 5, date: "2023-08-25", desc: "Сервис для создания юридических документов по шаблонам.", features: ["Шаблоны", "Автозаполнение", "PDF-экспорт", "Подписи", "API"], stack: "React, Node.js, PostgreSQL" },

  { id: "e-signature", title: "ESign", subtitle: "Электронная подпись", category: "saas", tags: ["Node.js","React"], year: 2024, client: "ESign KZ", rating: 5, date: "2024-03-08", desc: "Сервис электронной подписи документов с юридической силой.", features: ["ЭП", "Аудит", "API", "Интеграция", "Хранение"], stack: "Node.js, React, PostgreSQL" },

  { id: "kyc-service", title: "KYC Service", subtitle: "Верификация личности", category: "fintech", tags: ["Python","Node.js"], year: 2024, client: "KYC Service KZ", rating: 5, date: "2024-04-15", desc: "Сервис KYC с распознаванием документов и проверкой санкций.", features: ["OCR документов", "Face match", "Sanctions/PEP", "API", "Отчёты"], stack: "Python, Node.js, PostgreSQL" },

  { id: "antifraud", title: "AntiFraud", subtitle: "Антифрод-система", category: "fintech", tags: ["Python","Golang","Kafka"], year: 2023, client: "AntiFraud KZ", rating: 5, date: "2023-12-05", desc: "Антифрод-система для e-commerce с ML-скорингом и правилами.", features: ["ML-скоринг", "Правила", "Real-time", "Дашборд", "API"], stack: "Python, Golang, Kafka, PostgreSQL" },

  { id: "support-chat", title: "SupportChat", subtitle: "Онлайн-чат для сайта", category: "saas", tags: ["Node.js","React","WebSocket"], year: 2023, client: "SupportChat KZ", rating: 5, date: "2023-09-30", desc: "Онлайн-чат для сайтов с операторами, ботами и интеграцией с CRM.", features: ["Чат", "Операторы", "Боты", "CRM", "API"], stack: "Node.js, React, WebSocket" },

  { id: "call-center", title: "CallCenter", subtitle: "Колл-центр", category: "saas", tags: ["Node.js","React"], year: 2024, client: "CallCenter KZ", rating: 5, date: "2024-01-30", desc: "Облачный колл-центр с телефонией, очередями и аналитикой.", features: ["Телефония", "Очереди", "Аналитика", "Запись", "API"], stack: "Node.js, React, Asterisk" },

  { id: "sms-gateway", title: "SMS Gateway", subtitle: "SMS-шлюз", category: "saas", tags: ["Node.js","PostgreSQL"], year: 2023, client: "SMS Gateway KZ", rating: 5, date: "2023-07-15", desc: "SMS-шлюз с массовыми рассылками и отчётностью.", features: ["Массовые рассылки", "Отчёты", "Шаблоны", "API", "Мультиоператоры"], stack: "Node.js, PostgreSQL, Redis" },

  { id: "email-marketing", title: "EmailMarketing", subtitle: "Email-маркетинг", category: "saas", tags: ["Node.js","React"], year: 2023, client: "EmailMarketing KZ", rating: 5, date: "2023-10-18", desc: "Платформа email-маркетинга с конструктором писем и аналитикой.", features: ["Конструктор", "Автоматизация", "Аналитика", "A/B тесты", "API"], stack: "Node.js, React, PostgreSQL" },

  { id: "push-service", title: "PushService", subtitle: "Push-уведомления", category: "saas", tags: ["Node.js","Redis"], year: 2024, client: "PushService KZ", rating: 5, date: "2024-02-05", desc: "Сервис push-уведомлений для мобильных приложений и веба.", features: ["iOS/Android/Web", "Сегментация", "Автоматизация", "Аналитика", "API"], stack: "Node.js, Redis, PostgreSQL" },

  { id: "geolocation-service", title: "GeoService", subtitle: "Геолокация", category: "saas", tags: ["Golang","PostGIS"], year: 2023, client: "GeoService KZ", rating: 5, date: "2023-11-12", desc: "Сервис геолокации с построением маршрутов и зонированием.", features: ["Маршруты", "Зоны", "Геокодинг", "API", "Кэширование"], stack: "Golang, PostGIS, Redis" },

  { id: "maps-service", title: "MapService", subtitle: "Карты", category: "saas", tags: ["Node.js","React"], year: 2024, client: "MapService KZ", rating: 5, date: "2024-03-20", desc: "Сервис интерактивных карт с кластеризацией и кастомными слоями.", features: ["Кластеризация", "Слои", "Маркеры", "API", "Мобильное"], stack: "Node.js, React, Mapbox" },

  { id: "analytics-service", title: "AnalyticsService", subtitle: "Аналитика", category: "saas", tags: ["Golang","ClickHouse"], year: 2023, client: "AnalyticsService KZ", rating: 5, date: "2023-08-30", desc: "Сервис продуктовой аналитики с воронками, retention и когортами.", features: ["Воронки", "Retention", "Когорты", "Дашборды", "API"], stack: "Golang, ClickHouse, React" },

  { id: "ab-testing", title: "ABTesting", subtitle: "A/B тесты", category: "saas", tags: ["Node.js","Redis"], year: 2024, client: "ABTesting KZ", rating: 5, date: "2024-01-25", desc: "Сервис A/B-тестирования с сегментацией и статистикой.", features: ["A/B", "Сегментация", "Статистика", "API", "Дашборд"], stack: "Node.js, Redis, PostgreSQL" },

  { id: "feature-flags", title: "FeatureFlags", subtitle: "Фича-флаги", category: "saas", tags: ["Golang","Redis"], year: 2024, client: "FeatureFlags KZ", rating: 5, date: "2024-04-05", desc: "Сервис фича-флагов для canary-релизов и A/B-тестов.", features: ["Флаги", "Canary", "A/B", "API", "Дашборд"], stack: "Golang, Redis, PostgreSQL" },

  { id: "logs-service", title: "LogsService", subtitle: "Логи", category: "saas", tags: ["Golang","Elasticsearch"], year: 2023, client: "LogsService KZ", rating: 5, date: "2023-09-12", desc: "Сервис централизованного сбора и анализа логов.", features: ["Сбор логов", "Поиск", "Алерты", "Дашборд", "API"], stack: "Golang, Elasticsearch, Kibana" },

  { id: "monitoring-service", title: "MonitorService", subtitle: "Мониторинг", category: "saas", tags: ["Golang","Prometheus"], year: 2024, client: "MonitorService KZ", rating: 5, date: "2024-02-15", desc: "Сервис мониторинга инфраструктуры с алертами и дашбордами.", features: ["Метрики", "Алерты", "Дашборды", "API", "Интеграции"], stack: "Golang, Prometheus, Grafana" },

  { id: "backup-service", title: "BackupService", subtitle: "Бэкапы", category: "saas", tags: ["Golang","S3"], year: 2023, client: "BackupService KZ", rating: 5, date: "2023-11-20", desc: "Сервис автоматического резервного копирования с шифрованием.", features: ["Авто-бэкапы", "Шифрование", "S3", "Восстановление", "API"], stack: "Golang, S3, PostgreSQL" },

  { id: "cdn-service", title: "CDN Service", subtitle: "CDN", category: "saas", tags: ["Golang","Nginx"], year: 2024, client: "CDN Service KZ", rating: 5, date: "2024-03-12", desc: "Сервис доставки контента с кэшированием и защитой от DDoS.", features: ["Кэширование", "DDoS-защита", "Мультирегион", "API", "Аналитика"], stack: "Golang, Nginx, Redis" },

  { id: "media-service", title: "MediaService", subtitle: "Медиа-хостинг", category: "saas", tags: ["Golang","S3"], year: 2023, client: "MediaService KZ", rating: 5, date: "2023-10-08", desc: "Сервис хостинга и обработки медиа с транскодингом и CDN.", features: ["Загрузка", "Транскодинг", "CDN", "API", "Thumbnails"], stack: "Golang, S3, FFmpeg" },

  // ===== ДОПОЛНИТЕЛЬНО: ЕЩЁ 20 ПРОЕКТОВ =====
  { id: "chatbot-ai", title: "AIChatBot", subtitle: "AI-чатбот", category: "saas", tags: ["Python","OpenAI","Telegram"], year: 2024, client: "AIChatBot KZ", rating: 5, date: "2024-05-15", desc: "AI-чатбот для бизнеса с интеграцией в Telegram/WhatsApp и базой знаний.", features: ["GPT-4", "База знаний", "Мультиканальность", "Аналитика", "API"], stack: "Python, OpenAI, Telegram, PostgreSQL" },

  { id: "voice-bot", title: "VoiceBot", subtitle: "Голосовой бот", category: "saas", tags: ["Python","Whisper","TTS"], year: 2024, client: "VoiceBot KZ", rating: 5, date: "2024-06-10", desc: "Голосовой бот для колл-центров с распознаванием речи и синтезом.", features: ["ASR", "TTS", "Диалоги", "Аналитика", "API"], stack: "Python, Whisper, TTS, Asterisk" },

  { id: "ocr-service", title: "OCR Service", subtitle: "Распознавание текста", category: "saas", tags: ["Python","Tesseract"], year: 2023, client: "OCR Service KZ", rating: 5, date: "2023-07-20", desc: "Сервис распознавания текста с изображений и PDF.", features: ["OCR", "PDF", "Мультиязычность", "API", "Батч-обработка"], stack: "Python, Tesseract, FastAPI" },

  { id: "face-recognition", title: "FaceRecognition", subtitle: "Распознавание лиц", category: "saas", tags: ["Python","OpenCV"], year: 2024, client: "FaceRecognition KZ", rating: 5, date: "2024-01-20", desc: "Сервис распознавания лиц для СКУД и верификации.", features: ["Face match", "Liveness", "API", "База лиц", "Аналитика"], stack: "Python, OpenCV, PostgreSQL" },

  { id: "vehicle-recognition", title: "VehicleRecognition", subtitle: "Распознавание авто", category: "saas", tags: ["Python","YOLO"], year: 2024, client: "VehicleRecognition KZ", rating: 5, date: "2024-03-05", desc: "Сервис распознавания номеров и марок авто для парковок.", features: ["ANPR", "Марки авто", "API", "Парковки", "Аналитика"], stack: "Python, YOLO, OpenCV" },

  { id: "video-analytics", title: "VideoAnalytics", subtitle: "Видеоаналитика", category: "saas", tags: ["Python","YOLO"], year: 2024, client: "VideoAnalytics KZ", rating: 5, date: "2024-04-18", desc: "Сервис видеоаналитики для магазинов: подсчёт посетителей, тепловые карты.", features: ["Подсчёт людей", "Тепловые карты", "Очереди", "API", "Дашборд"], stack: "Python, YOLO, OpenCV, ClickHouse" },

  { id: "queue-management", title: "QueueManagement", subtitle: "Электронная очередь", category: "saas", tags: ["Node.js","React"], year: 2023, client: "QueueManagement KZ", rating: 5, date: "2023-08-15", desc: "Система электронной очереди для банков и клиник.", features: ["Талонная система", "Экраны", "API", "Аналитика", "Мобильное"], stack: "Node.js, React, PostgreSQL" },

  { id: "self-service", title: "SelfService", subtitle: "Киоски самообслуживания", category: "saas", tags: ["React","Node.js"], year: 2023, client: "SelfService KZ", rating: 5, date: "2023-11-28", desc: "Киоски самообслуживания для ресторанов и магазинов.", features: ["Киоск", "Оплата", "Меню", "API", "Аналитика"], stack: "React, Node.js, PostgreSQL" },

  { id: "access-control", title: "AccessControl", subtitle: "СКУД", category: "saas", tags: ["Node.js","PostgreSQL"], year: 2024, client: "AccessControl KZ", rating: 5, date: "2024-02-25", desc: "Система контроля доступа с картами, биометрией и интеграцией.", features: ["Карты", "Биометрия", "API", "Интеграции", "Отчёты"], stack: "Node.js, PostgreSQL" },

  { id: "smart-home", title: "SmartHome", subtitle: "Умный дом", category: "saas", tags: ["Node.js","MQTT"], year: 2023, client: "SmartHome KZ", rating: 5, date: "2023-09-22", desc: "Платформа умного дома с управлением устройствами через приложение.", features: ["Устройства", "Сценарии", "Голосовое управление", "API", "Мобильное"], stack: "Node.js, MQTT, React Native" },

  { id: "iot-platform", title: "IoT Platform", subtitle: "IoT-платформа", category: "saas", tags: ["Golang","MQTT","InfluxDB"], year: 2024, client: "IoT Platform KZ", rating: 5, date: "2024-04-28", desc: "Платформа для IoT-устройств с MQTT, аналитикой и алертами.", features: ["MQTT", "Устройства", "Алерты", "Аналитика", "API"], stack: "Golang, MQTT, InfluxDB, React" },

  { id: "energy-monitor", title: "EnergyMonitor", subtitle: "Мониторинг энергии", category: "saas", tags: ["Golang","InfluxDB"], year: 2024, client: "EnergyMonitor KZ", rating: 5, date: "2024-05-08", desc: "Система мониторинга энергопотребления для заводов.", features: ["Датчики", "Аналитика", "Алерты", "Дашборд", "API"], stack: "Golang, InfluxDB, React" },

  { id: "water-monitor", title: "WaterMonitor", subtitle: "Мониторинг воды", category: "saas", tags: ["Node.js","InfluxDB"], year: 2023, client: "WaterMonitor KZ", rating: 5, date: "2023-12-15", desc: "Система мониторинга качества воды на предприятиях.", features: ["Датчики", "Аналитика", "Алерты", "Отчёты", "API"], stack: "Node.js, InfluxDB, React" },

  { id: "air-quality", title: "AirQuality", subtitle: "Качество воздуха", category: "saas", tags: ["Node.js","InfluxDB"], year: 2024, client: "AirQuality KZ", rating: 5, date: "2024-02-02", desc: "Система мониторинга качества воздуха в городах.", features: ["Датчики", "Карта", "Алерты", "API", "Мобильное"], stack: "Node.js, InfluxDB, React" },

  { id: "weather-station", title: "WeatherStation", subtitle: "Метеостанции", category: "saas", tags: ["Node.js","InfluxDB"], year: 2023, client: "WeatherStation KZ", rating: 5, date: "2023-10-30", desc: "Сеть метеостанций с публичным API и картой.", features: ["Датчики", "API", "Карта", "Алерты", "Мобильное"], stack: "Node.js, InfluxDB, React" },

  { id: "gis-platform", title: "GIS Platform", subtitle: "ГИС-платформа", category: "saas", tags: ["Python","PostGIS","React"], year: 2024, client: "GIS Platform KZ", rating: 5, date: "2024-03-18", desc: "ГИС-платформа для анализа пространственных данных.", features: ["Слои", "Анализ", "Карты", "API", "Дашборд"], stack: "Python, PostGIS, React" },

  { id: "cad-system", title: "CAD System", subtitle: "САПР", category: "saas", tags: ["C++","Qt"], year: 2023, client: "CAD System KZ", rating: 5, date: "2023-07-25", desc: "САПР для проектирования с 2D/3D и экспортом в DWG.", features: ["2D/3D", "DWG", "API", "Плагины", "Облако"], stack: "C++, Qt, OpenGL" },

  { id: "bim-system", title: "BIM System", subtitle: "BIM-система", category: "saas", tags: ["C++","WebGL"], year: 2024, client: "BIM System KZ", rating: 5, date: "2024-01-28", desc: "BIM-система для строительства с 3D-моделями и коллизиями.", features: ["3D-модели", "Коллизии", "Сметы", "API", "Облако"], stack: "C++, WebGL, PostgreSQL" },

  { id: "blockchain-supply", title: "BlockchainSupply", subtitle: "Блокчейн в поставках", category: "saas", tags: ["Solidity","Node.js"], year: 2024, client: "BlockchainSupply KZ", rating: 5, date: "2024-04-12", desc: "Блокчейн-платформа для отслеживания поставок.", features: ["Трекинг", "Смарт-контракты", "API", "Дашборд", "Интеграции"], stack: "Solidity, Node.js, React" },

  { id: "nft-marketplace", title: "NFT Marketplace", subtitle: "NFT-маркетплейс", category: "saas", tags: ["Solidity","React"], year: 2024, client: "NFT Marketplace KZ", rating: 5, date: "2024-05-22", desc: "NFT-маркетплейс с аукционами, коллекциями и выплатами.", features: ["Аукционы", "Коллекции", "API", "Выплаты", "Мультичейн"], stack: "Solidity, React, IPFS" },
];

// Экспорт для использования в script.js
window.PROJECTS = PROJECTS;