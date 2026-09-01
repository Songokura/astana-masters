/* ASTANA MASTERS - интерактив: язык, меню, анимации, манометры, форма */
(function () {
  'use strict';

  /* ================= СЛОВАРИ ================= */
  var I18N = {
    ru: {
      meta_title: 'Инженерная сантехника в Астане - отопление, котельные, водоснабжение | ASTANA MASTERS',
      meta_desc: 'Отопление, котельные и тепловые пункты, ХВС и ГВС, водоподготовка, насосы в Астане. Гидравлический и теплотехнический расчёт до монтажа, гарантия от 24 месяцев. WhatsApp +7 705 299 0300.',
      brand_sub: 'инженерная сантехника',
      nav_podhod: 'Подход', nav_uslugi: 'Услуги', nav_raboty: 'Работы', nav_garantiya: 'Гарантия', nav_kontakty: 'Контакты',
      hero_kicker: 'АСТАНА И ПРИГОРОД · ИНЖЕНЕРНАЯ САНТЕХНИКА · 10+ ЛЕТ',
      hero_h1a: 'ОТОПЛЕНИЕ', hero_h1b: 'И ВОДОСНАБЖЕНИЕ', hero_h1c: 'по расчёту, а не на глаз',
      hero_lead: 'Котельные и тепловые пункты, ХВС и ГВС, водоподготовка, насосы. Считаем гидравлику и теплотехнику до монтажа, отвечаем за материал и работу.',
      hero_b1: 'Написать в WhatsApp', hero_b2: 'Смотреть услуги', hero_scroll: 'листайте вниз',
      flow_supply: 'ПОДАЧА', flow_return: 'ОБРАТКА',
      t1: 'лет в инженерной сантехнике', t2pre: 'от', t2: 'месяцев гарантии на услуги',
      t3t: 'Расчёт до монтажа', t3: 'гидравлика и теплотехника объекта',
      t4t: 'Материал - на нас', t4: 'сами закупаем и привозим на объект',
      mq_words: ['ОТОПЛЕНИЕ', 'КОТЕЛЬНЫЕ', 'ТЕПЛОВЫЕ ПУНКТЫ', 'ХВС И ГВС', 'ВОДОПОДГОТОВКА', 'НАСОСЫ', 'БОЙЛЕРЫ', 'ЧИСТОВАЯ САНТЕХНИКА'],
      podhod_kick: 'ИНЖЕНЕРНЫЙ ПОДХОД',
      podhod_h2: 'Сначала расчёт - потом монтаж',
      podhod_lead: 'Не ставим оборудование на глаз. Считаем систему под ваш объект - и только потом собираем её.',
      sch_kotel: 'КОТЁЛ', sch_nasos: 'НАСОС', sch_radiator: 'РАДИАТОРЫ', sch_pol: 'ТЁПЛЫЙ ПОЛ',
      flow_supply2: 'ПОДАЧА', flow_return2: 'ОБРАТКА',
      sch_hint: 'схему можно листать вбок',
      c1tag: 'ГИДРАВЛИКА', c1t: 'Гидравлический расчёт',
      c1d: 'Диаметры труб, напор насосов, балансировка веток - система работает ровно, без шума и холодных зон.',
      c2tag: 'ТЕПЛОТЕХНИКА', c2t: 'Теплотехнический расчёт',
      c2d: 'Теплопотери дома, мощность котла и радиаторов - оборудование берём по цифрам, а не с запасом наугад.',
      c3tag: 'ОБОРУДОВАНИЕ', c3t: 'Подбор оборудования',
      c3d: 'Работаем с проверенными поставщиками. Материал закупаем и привозим сами - и отвечаем за него.',
      uslugi_kick: 'УСЛУГИ', uslugi_h2: 'Монтаж и ремонт инженерных систем',
      uslugi_lead: 'Каждую задачу считаем и собираем под ключ - от котельной до смесителя.',
      s1t: 'Отопление', s1d: 'Радиаторы, тёплый пол, коллекторная разводка - монтаж и ремонт.',
      s2t: 'Котельные и тепловые пункты', s2d: 'Обвязка, автоматика, балансировка - под ключ.',
      s3t: 'Газовые и электрокотлы', s3d: 'Подбор по мощности, монтаж, обвязка, запуск.',
      s4t: 'ХВС и ГВС', s4d: 'Разводка холодной и горячей воды в доме и на участке.',
      s5t: 'Водоподготовка и фильтрация', s5d: 'Фильтрация ХВС, умягчение - чистая вода без накипи.',
      s6t: 'Насосы и насосные станции', s6d: 'Циркуляционные, частотные, станции водоснабжения.',
      s7t: 'Водонагреватели и БКН', s7d: 'Бойлеры и бойлеры косвенного нагрева: подбор и обвязка.',
      s8t: 'Бытовая техника', s8d: 'Подключение стиральных и посудомоечных машин, техники.',
      s9t: 'Чистовая сантехника', s9d: 'Смесители, инсталляции, душевые системы - аккуратный монтаж.',
      s10t: 'Не нашли свою задачу?', s10d: 'Напишите, что нужно сделать - посчитаем и предложим решение.',
      s10b: 'Написать в WhatsApp',
      svc_cta: 'Обсудить задачу',
      process_kick: 'КАК РАБОТАЕМ', process_h2: 'От заявки до тепла в доме',
      st1t: 'Заявка и осмотр', st1d: 'Пишете в WhatsApp - выезжаем на объект и смотрим задачу.',
      st2t: 'Расчёт и смета', st2d: 'Считаем гидравлику и теплотехнику, подбираем оборудование.',
      st3t: 'Материал', st3d: 'Закупаем у проверенных поставщиков и привозим сами.',
      st4t: 'Монтаж и сдача', st4d: 'Монтируем, опрессовываем, запускаем. Гарантия от 24 месяцев.',
      raboty_kick: 'НАШИ РАБОТЫ', raboty_h2: 'Живые объекты, а не стоковые картинки',
      raboty_lead: 'Фото с наших монтажей в Астане и пригороде.',
      g1: 'Гребёнка и насосные группы', g2: 'Котельная частного дома', g3: 'Сборка теплового пункта',
      g4: 'Коллектор водоснабжения', g5: 'Насосная группа', g6: 'Расширительный бак',
      g7: 'Гидроаккумулятор', g8: 'Насос и фильтрация', g9: 'Промышленный объект',
      g10: 'Обвязка оборудования', g11: 'Опрессовка фитинга', g12: 'Встроенный смеситель',
      ig_cta: 'Больше работ - в Instagram',
      gar_kick: 'ГАРАНТИЯ', gar_h2: 'Отвечаем за материал и за работу',
      garb1: 'от 24 месяцев', garl1: 'гарантии на выполненные услуги',
      garb2: 'Свой материал', garl2: 'закупаем и доставляем на объект сами',
      garb3: 'Поставщики', garl3: 'работаем только с проверенными',
      gar_cta: 'Обсудить мой объект',
      kont_kick: 'КОНТАКТЫ', kont_h2: 'Напишите - посчитаем вашу систему',
      k_phone: 'Телефон', k_zone: 'Зона работы', k_zone_v: 'Астана и пригород',
      f_name: 'Ваше имя', f_name_ph: 'Как к вам обращаться',
      f_phone: 'Телефон', f_phone_ph: '+7 ___ ___ __ __',
      f_task: 'Что нужно сделать', f_task_ph: 'Например: котельная в частном доме, 200 м2',
      f_send: 'Отправить в WhatsApp',
      f_done: 'Спасибо! Открываем WhatsApp - сообщение уже собрано.',
      f_note: 'Нажимая кнопку, вы откроете чат WhatsApp с готовым сообщением.',
      wa_hello: 'Здравствуйте! Пишу с сайта Astana Masters.',
      wa_name: 'Меня зовут', wa_phone: 'Телефон', wa_task: 'Задача',
      foot_slogan: 'Тепло по расчёту, а не на глаз',
      foot_copy: 'ИП ASTANA MASTERS · Астана',
      sticky_call: 'Позвонить'
    },
    kk: {
      meta_title: 'Астанадағы инженерлік сантехника - жылыту, қазандықтар, сумен жабдықтау | ASTANA MASTERS',
      meta_desc: 'Астанада жылыту, қазандықтар мен жылу пункттері, суық-ыстық су, су дайындау, сорғылар. Монтаждан бұрын гидравликалық және жылу техникалық есеп, кепілдік 24 айдан бастап. WhatsApp +7 705 299 0300.',
      brand_sub: 'инженерлік сантехника',
      nav_podhod: 'Тәсіл', nav_uslugi: 'Қызметтер', nav_raboty: 'Жұмыстар', nav_garantiya: 'Кепілдік', nav_kontakty: 'Байланыс',
      hero_kicker: 'АСТАНА ЖӘНЕ МАҢЫ · ИНЖЕНЕРЛІК САНТЕХНИКА · 10+ ЖЫЛ',
      hero_h1a: 'ЖЫЛЫТУ', hero_h1b: 'ЖӘНЕ СУМЕН ЖАБДЫҚТАУ', hero_h1c: 'көз мөлшерімен емес, есеппен',
      hero_lead: 'Қазандықтар мен жылу пункттері, суық және ыстық су, су дайындау, сорғылар. Монтаждан бұрын гидравлика мен жылу техникасын есептейміз, материал мен жұмысқа жауап береміз.',
      hero_b1: 'WhatsApp-қа жазу', hero_b2: 'Қызметтерді көру', hero_scroll: 'төмен жылжытыңыз',
      flow_supply: 'БЕРУ', flow_return: 'ҚАЙТАРУ',
      t1: 'жыл инженерлік сантехникада', t2pre: '', t2: 'айдан бастап қызметке кепілдік',
      t3t: 'Монтаждан бұрын есеп', t3: 'нысанның гидравликасы мен жылу техникасы',
      t4t: 'Материал - бізден', t4: 'өзіміз сатып алып, нысанға жеткіземіз',
      mq_words: ['ЖЫЛЫТУ', 'ҚАЗАНДЫҚТАР', 'ЖЫЛУ ПУНКТТЕРІ', 'СУЫҚ ЖӘНЕ ЫСТЫҚ СУ', 'СУ ДАЙЫНДАУ', 'СОРҒЫЛАР', 'БОЙЛЕРЛЕР', 'САНТЕХНИКА'],
      podhod_kick: 'ИНЖЕНЕРЛІК ТӘСІЛ',
      podhod_h2: 'Алдымен есеп - содан кейін монтаж',
      podhod_lead: 'Жабдықты көз мөлшерімен қоймаймыз. Жүйені нысаныңызға есептейміз - содан кейін ғана құрастырамыз.',
      sch_kotel: 'ҚАЗАН', sch_nasos: 'СОРҒЫ', sch_radiator: 'РАДИАТОРЛАР', sch_pol: 'ЖЫЛЫ ЕДЕН',
      flow_supply2: 'БЕРУ', flow_return2: 'ҚАЙТАРУ',
      sch_hint: 'сызбаны бүйірге жылжытуға болады',
      c1tag: 'ГИДРАВЛИКА', c1t: 'Гидравликалық есеп',
      c1d: 'Құбыр диаметрлері, сорғы қысымы, тармақтарды теңгеру - жүйе шусыз, суық аймақсыз жұмыс істейді.',
      c2tag: 'ЖЫЛУ ТЕХНИКАСЫ', c2t: 'Жылу техникалық есеп',
      c2d: 'Үйдің жылу шығыны, қазан мен радиаторлардың қуаты - жабдықты болжаммен емес, нақты сандармен таңдаймыз.',
      c3tag: 'ЖАБДЫҚ', c3t: 'Жабдықты іріктеу',
      c3d: 'Сенімді жеткізушілермен жұмыс істейміз. Материалды өзіміз сатып алып, жеткіземіз - және оған жауап береміз.',
      uslugi_kick: 'ҚЫЗМЕТТЕР', uslugi_h2: 'Инженерлік жүйелердің монтажы мен жөндеуі',
      uslugi_lead: 'Әр тапсырманы есептеп, кілт тапсыру шартымен жинаймыз - қазандықтан смесительге дейін.',
      s1t: 'Жылыту', s1d: 'Радиаторлар, жылы еден, коллекторлық тарату - монтаж бен жөндеу.',
      s2t: 'Қазандықтар мен жылу пункттері', s2d: 'Жабдықты байлау, автоматика, теңгеру - кілт тапсыру шартымен.',
      s3t: 'Газ және электр қазандары', s3d: 'Қуат бойынша іріктеу, монтаж, іске қосу.',
      s4t: 'Суық және ыстық су', s4d: 'Үйде және учаскеде суық-ыстық су тарату.',
      s5t: 'Су дайындау және сүзгілеу', s5d: 'Суық суды сүзгілеу, жұмсарту - қақсыз таза су.',
      s6t: 'Сорғылар мен сорғы станциялары', s6d: 'Циркуляциялық, жиілікті сорғылар, сумен жабдықтау станциялары.',
      s7t: 'Су жылытқыштар мен бойлерлер', s7d: 'Бойлерлер мен жанама қыздыру бойлерлері: іріктеу және монтаж.',
      s8t: 'Тұрмыстық техника', s8d: 'Кір және ыдыс жуғыш машиналарды, техниканы қосу.',
      s9t: 'Смесительдер мен инсталляциялар', s9d: 'Душ жүйелері, смесительдер - ұқыпты монтаж.',
      s10t: 'Өз тапсырмаңызды таппадыңыз ба?', s10d: 'Не істеу керегін жазыңыз - есептеп, шешім ұсынамыз.',
      s10b: 'WhatsApp-қа жазу',
      svc_cta: 'Тапсырманы талқылау',
      process_kick: 'ЖҰМЫС РЕТІ', process_h2: 'Өтінімнен үйдегі жылуға дейін',
      st1t: 'Өтінім және қарау', st1d: 'WhatsApp-қа жазасыз - нысанға барып, тапсырманы қараймыз.',
      st2t: 'Есеп және смета', st2d: 'Гидравлика мен жылу техникасын есептеп, жабдық іріктейміз.',
      st3t: 'Материал', st3d: 'Сенімді жеткізушілерден сатып алып, өзіміз жеткіземіз.',
      st4t: 'Монтаж және тапсыру', st4d: 'Құрастырамыз, қысыммен сынаймыз, іске қосамыз. Кепілдік - 24 айдан бастап.',
      raboty_kick: 'БІЗДІҢ ЖҰМЫСТАР', raboty_h2: 'Сток суреттер емес, нақты нысандар',
      raboty_lead: 'Астана мен маңындағы монтаждарымыздың фотолары.',
      g1: 'Коллектор және сорғы топтары', g2: 'Жеке үйдің қазандығы', g3: 'Жылу пунктін құрастыру',
      g4: 'Сумен жабдықтау коллекторы', g5: 'Сорғы тобы', g6: 'Кеңейту багы',
      g7: 'Гидроаккумулятор', g8: 'Сорғы және сүзгілеу', g9: 'Өнеркәсіптік нысан',
      g10: 'Жабдықты байлау', g11: 'Фитингті престеу', g12: 'Ішке орнатылған смеситель',
      ig_cta: 'Басқа жұмыстар - Instagram-да',
      gar_kick: 'КЕПІЛДІК', gar_h2: 'Материалға да, жұмысқа да жауап береміз',
      garb1: '24 айдан бастап', garl1: 'орындалған қызметтерге кепілдік',
      garb2: 'Материал бізден', garl2: 'өзіміз сатып алып, нысанға жеткіземіз',
      garb3: 'Жеткізушілер', garl3: 'тек сенімділермен жұмыс істейміз',
      gar_cta: 'Нысанымды талқылау',
      kont_kick: 'БАЙЛАНЫС', kont_h2: 'Жазыңыз - жүйеңізді есептеп берейік',
      k_phone: 'Телефон', k_zone: 'Жұмыс аймағы', k_zone_v: 'Астана және маңы',
      f_name: 'Атыңыз', f_name_ph: 'Сізге қалай жүгінейік',
      f_phone: 'Телефон', f_phone_ph: '+7 ___ ___ __ __',
      f_task: 'Не істеу керек', f_task_ph: 'Мысалы: жеке үйдегі қазандық, 200 м2',
      f_send: 'WhatsApp-қа жіберу',
      f_done: 'Рақмет! WhatsApp ашылады - хабарлама дайын.',
      f_note: 'Түймені бассаңыз, дайын хабарламамен WhatsApp чаты ашылады.',
      wa_hello: 'Сәлеметсіз бе! Astana Masters сайтынан жазып отырмын.',
      wa_name: 'Менің атым', wa_phone: 'Телефон', wa_task: 'Тапсырма',
      foot_slogan: 'Жылу - көз мөлшерімен емес, есеппен',
      foot_copy: 'ЖК ASTANA MASTERS · Астана',
      sticky_call: 'Қоңырау шалу'
    }
  };

  var LANG_KEY = 'am_lang';
  var current = 'ru';

  function buildMarquee(lang) {
    var track = document.getElementById('mqTrack');
    if (!track) return;
    var words = I18N[lang].mq_words;
    var html = '';
    for (var s = 0; s < 2; s++) {
      html += '<span class="mq-seg">';
      for (var i = 0; i < words.length; i++) {
        html += words[i] + ' <i class="' + (i % 2 === 0 ? 'dot-r' : 'dot-b') + '"></i> ';
      }
      html += '</span>';
    }
    track.innerHTML = html;
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ru';
    current = lang;
    var dict = I18N[lang];
    document.documentElement.lang = (lang === 'kk') ? 'kk' : 'ru';
    document.title = dict.meta_title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict.meta_desc);

    var nodes = document.querySelectorAll('[data-i18n], [data-i18n-svg]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-svg');
      if (dict[key] !== undefined) el.textContent = dict[key];
    }
    var phs = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) {
      var k = phs[j].getAttribute('data-i18n-ph');
      if (dict[k] !== undefined) phs[j].setAttribute('placeholder', dict[k]);
    }
    var btns = document.querySelectorAll('.lang button');
    for (var b = 0; b < btns.length; b++) {
      var active = btns[b].getAttribute('data-lang') === lang;
      btns[b].classList.toggle('is-active', active);
      btns[b].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    buildMarquee(lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var lb = e.target.closest('.lang button');
    if (lb) applyLang(lb.getAttribute('data-lang'));
  });

  /* язык: ?lang= в URL важнее сохранённого (для рекламных ссылок) */
  var urlLang = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  var startLang = urlLang || saved || 'ru';
  if (startLang !== 'ru') applyLang(startLang); else buildMarquee('ru');

  /* ================= МЕНЮ ================= */
  var burger = document.getElementById('burger');
  function closeMenu() {
    document.body.classList.remove('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ================= ПОЯВЛЕНИЯ ================= */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  /* герой: стрелка манометра после загрузки */
  var hero = document.getElementById('hero');
  window.addEventListener('load', function () {
    setTimeout(function () { if (hero) hero.classList.add('on'); }, 350);
  });
  setTimeout(function () { if (hero) hero.classList.add('on'); }, 1600);

  /* ================= СЧЁТЧИКИ ================= */
  var cntIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      cntIo.unobserve(en.target);
      var el = en.target, to = parseInt(el.getAttribute('data-to'), 10) || 0;
      var t0 = null;
      function tick(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1300, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.cnt').forEach(function (el) { cntIo.observe(el); });

  /* ================= СХЕМА: прорисовка ================= */
  var sch = document.getElementById('sch');
  if (sch) {
    var schIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        schIo.unobserve(sch);
        sch.classList.add('drawn');
        setTimeout(function () { sch.classList.add('flow'); }, 1500);
      });
    }, { threshold: 0.35 });
    schIo.observe(sch);
  }

  /* ================= МАНОМЕТРЫ: деления ================= */
  function makeTicks(group, cx, cy, r1, r2, r1min, r2min) {
    if (!group) return;
    var svgNS = 'http://www.w3.org/2000/svg';
    for (var i = 0; i <= 24; i++) {
      var a = (-118 + i * (236 / 24)) * Math.PI / 180;
      var major = i % 4 === 0;
      var ra = major ? r1 : r1min, rb = major ? r2 : r2min;
      var line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', cx + ra * Math.sin(a)); line.setAttribute('y1', cy - ra * Math.cos(a));
      line.setAttribute('x2', cx + rb * Math.sin(a)); line.setAttribute('y2', cy - rb * Math.cos(a));
      if (!major) line.setAttribute('class', 'min');
      group.appendChild(line);
    }
  }
  makeTicks(document.querySelector('.g-ticks'), 100, 100, 84, 70, 84, 77);
  makeTicks(document.querySelector('.sg-ticks'), 40, 40, 31, 25, 31, 28);

  /* ================= МАНОМЕТР-ПРОГРЕСС СКРОЛЛА ================= */
  var sg = document.getElementById('scrollGauge');
  var sgNeedle = document.getElementById('sgNeedle');
  var rafPending = false;
  function onScroll() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () {
      rafPending = false;
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? h.scrollTop / max : 0;
      if (sgNeedle) sgNeedle.style.transform = 'rotate(' + (-118 + p * 236) + 'deg)';
      if (sg) sg.classList.toggle('show', h.scrollTop > 420);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ================= ГАЛЕРЕЯ: стрелки ================= */
  var rail = document.getElementById('rail');
  var prev = document.getElementById('rabPrev');
  var next = document.getElementById('rabNext');
  function railStep(dir) {
    if (!rail) return;
    rail.scrollBy({ left: dir * 560, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', function () { railStep(-1); });
  if (next) next.addEventListener('click', function () { railStep(1); });

  /* ================= ФОРМА -> WHATSAPP ================= */
  var form = document.getElementById('waForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = I18N[current];
      var name = (form.name.value || '').trim();
      var phone = (form.phone.value || '').trim();
      var task = (form.task.value || '').trim();
      var msg = d.wa_hello;
      if (name) msg += '\n' + d.wa_name + ': ' + name;
      if (phone) msg += '\n' + d.wa_phone + ': ' + phone;
      if (task) msg += '\n' + d.wa_task + ': ' + task;
      var done = document.getElementById('formDone');
      if (done) done.hidden = false;
      window.open('https://wa.me/77052990300?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  /* ================= КЛИКИ TEL / WHATSAPP (для будущих конверсий) ================= */
  document.addEventListener('click', function (e) {
    var act = e.target.closest('[data-act]');
    if (!act) return;
    /* сюда Opus повесит gtag-события: act.getAttribute('data-act') = 'tel' | 'wa' */
  });
})();
