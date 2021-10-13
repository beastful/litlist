import Head from "next/head";
import { useEffect, useState } from "react";
import getLitList from "../lib/litlist";

export default function Home() {
  const [list, setList] = useState(null);
  const [selectValue, setSelectValue] = useState("avtomatizacdelop1");
  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      <Head>
        <title>Генератор списка литературы</title>
        <meta
          name="description"
          content="Генератор списка литературы для проектов и диссертаций"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-semibold text-xl text-center mt-6 mb-2">
        Простой генератор списка литературы
      </h1>
      <div className="font-semibold text-sm text-gray-500 text-center mb-10">Выберете категорию работы и нажмите "Создать список"</div>
      <div className="flex">
        <select
          className="w-full px-4 py-2 border-2 border-gray-300 rounded mr-4"
          value={selectValue}
          onChange={({ target }) => {
            setSelectValue(target.value);
          }}
        >
          <option value="aviac1">Авиация 1</option>
          <option value="aviac2">Авиация 2</option>
          <option value="avtomatizac">Автоматизация 1</option>
          <option value="avtomatizacdelop1">
            Автоматизация делопроизводства 1
          </option>
          <option value="avtomatizacdelop2">
            Автоматизация делопроизводства 2
          </option>
          <option value="avtomatproiz">Автоматизация производства 1</option>
          <option value="avtomazproizvodproc">
            Автоматизация производственных процессов 1
          </option>
          <option value="avtomatizinfsistem1">
            Автоматизированные информационные системы 1
          </option>
          <option value="avtomatizinfsistem2">
            Автоматизированные информационные системы 2
          </option>
          <option value="avtomatizsisobinf1">
            Автоматизированные системы обработки информации 1
          </option>
          <option value="avtomatizsisobinf2">
            Автоматизированные системы обработки информации 2
          </option>
          <option value="avtomatizsisobinf3">
            Автоматизированные системы обработки информации 3
          </option>
          <option value="avtomatizsistemypr1">
            Автоматизированные системы управления 1
          </option>
          <option value="avtomatizsistemypr2">
            Автоматизированные системы управления 2
          </option>
          <option value="avtomatizsistemypr3">
            Автоматизированные системы управления 3
          </option>
          <option value="avtomazekonomproc">
            Автоматизация экономических процессов 1
          </option>
          <option value="avtomatizacproc">Автоматизация процессов 1</option>
          <option value="avtompriapa">
            Автоматизация процессов и аппаратов 1
          </option>
          <option value="avtomatika">Автоматика 1</option>
          <option value="avtorpravo1">Авторское право 1</option>
          <option value="avtorpravo2">Авторское право 2</option>
          <option value="agrarpravo1">Аграрное право 1</option>
          <option value="agrarpravo2">Аграрное право 2</option>
          <option value="advokatyra1">Адвокатура 1</option>
          <option value="advokatyra2">Адвокатура 2</option>
          <option value="adminpavo1">Административное право 1</option>
          <option value="adminpavo2">Административное право 2</option>
          <option value="akmeolog">Акмеология 1</option>
          <option value="algebra1">Алгебра 1</option>
          <option value="algebra2">Алгебра 2</option>
          <option value="algigeometr">Алгебра и геометрия 1</option>
          <option value="algebrageometr">Алгебраическая геометрия 1</option>
          <option value="algoritmimodel">Алгоритмы и модели 1</option>
          <option value="algoristrycdan1">
            Алгоритмы и структуры данных 1
          </option>
          <option value="algoristrycdan2">
            Алгоритмы и структуры данных 2
          </option>
          <option value="algoritmiobrabot">Алгоритмы обработки 1</option>
          <option value="analizbankrot">Анализ банкротства 1</option>
          <option value="analdan">Анализ данных 1</option>
          <option value="analiaudit">Анализ и аудит 1</option>
          <option value="analidiagdp">
            Анализ и диагностика деятельности предприятия 1
          </option>
          <option value="analimarket">Анализ и маркетинг 1</option>
          <option value="analisiocenk">Анализ и оценка 1</option>
          <option value="analisiprognoz">Анализ и прогнозирование 1</option>
          <option value="analisiproektir">Анализ и проектирование 1</option>
          <option value="analispredpri">Анализ предприятия 1</option>
          <option value="analisintez">Анализ и синтез 1</option>
          <option value="analistexta">Анализ текста 1</option>
          <option value="analtrydres">Анализ трудовых ресурсов 1</option>
          <option value="analfinxozde1">
            Анализ финансово-хозяйственной деятельности предприятия 1
          </option>
          <option value="analfinxozde2">
            Анализ финансово-хозяйственной деятельности предприятия 2
          </option>
          <option value="analfinsostpr1">
            Анализ финансового состояния предприятия 1
          </option>
          <option value="analfinsostpr2">
            Анализ финансового состояния предприятия 2
          </option>
          <option value="analisfinancotch">
            Анализ финансовой отчетности 1
          </option>
          <option value="analhozde">Анализ хозяйственной деятельности 1</option>
          <option value="analisxozdeyatpr1">
            Анализ хозяйственной деятельности предприятия 1
          </option>
          <option value="analisxozdeyatpr2">
            Анализ хозяйственной деятельности предприятия 2
          </option>
          <option value="analithim1">Аналитическая химия 1</option>
          <option value="analithim2">Аналитическая химия 2</option>
          <option value="anatomifiz">Анатомия и физиология 1</option>
          <option value="anatomsistem">Анатомия системы 1</option>
          <option value="anatche">Анатомия человека 1</option>
          <option value="anglfilosof1">Английская филология 1</option>
          <option value="anglfilosof2">Английская филология 2</option>
          <option value="anglyaz1">Английский язык 1</option>
          <option value="anglyaz2">Английский язык 2</option>
          <option value="anglyaz3">Английский язык 3</option>
          <option value="antikrizypr1">Антикризисное управление 1</option>
          <option value="antikrizypr2">Антикризисное управление 2</option>
          <option value="antropolog1">Антропология 1</option>
          <option value="antropolog1">Антропология 2</option>
          <option value="apparatsredstv">Аппаратные средства 1</option>
          <option value="apparatyra">Аппаратура 1</option>
          <option value="arbitajprocpravo1">
            Арбитражно-процессуальное право 1
          </option>
          <option value="arbitajprocpravo2">
            Арбитражно-процессуальное право 2
          </option>
          <option value="arbitajproc1">Арбитражный процесс 1</option>
          <option value="arbitajproc2">Арбитражный процесс 2</option>
          <option value="arheolog1">Археология 1</option>
          <option value="arheolog2">Археология 2</option>
          <option value="arhivoved1">Архивоведение 1</option>
          <option value="arhivoved2">Архивоведение 2</option>
          <option value="arhitec1">Архитектура 1</option>
          <option value="arhitec2">Архитектура 2</option>
          <option value="arhitecproect1">Архитектурное проектирование 1</option>
          <option value="arhitecproect2">Архитектурное проектирование 2</option>
          <option value="arhiteksistem">Архитектура систем 1</option>
          <option value="arhitekevm">Архитектура ЭВМ 1</option>
          <option value="astronom1">Астрономия 1</option>
          <option value="astronom2">Астрономия 2</option>
          <option value="astronom3">Астрономия 3</option>
          <option value="astronomaviackosmon1">
            Астрономия, авиация, космонавтика 1
          </option>
          <option value="astronomaviackosmon1">
            Астрономия, авиация, космонавтика 2
          </option>
          <option value="audit">Аудит 1</option>
          <option value="auditdeyat">Аудит деятельности 1</option>
          <option value="bankibirjdelo1">Банки и биржевое дело 1</option>
          <option value="bankibirjdelo2">Банки и биржевое дело 2</option>
          <option value="bankibirjdelo3">Банки и биржевое дело 3</option>
          <option value="bankdelo1">Банковская деятельность 1</option>
          <option value="bankdelo2">Банковская деятельность 2</option>
          <option value="bankstat1">Банковская статистика 1</option>
          <option value="bankstat2">Банковская статистика 2</option>
          <option value="bankmened1">Банковский менеджмент 1</option>
          <option value="bankmened2">Банковский менеджмент 2</option>
          <option value="bankdelo">Банковское дело 1</option>
          <option value="bankoperac">Банковские операции 1</option>
          <option value="bankpravo1">Банковское право 1</option>
          <option value="bankpravo2">Банковское право 2</option>
          <option value="bdd">Безопасность дорожного движения 1</option>
          <option value="bezjiz">Безопасность жизнедеятельности 1</option>
          <option value="bjiot">
            Безопасность жизнедеятельности и охрана труда 1
          </option>
          <option value="bezopiohrantrud">Безопасность и охрана труда 1</option>
          <option value="bezikach">Безопасность и качество 1</option>
          <option value="bezpred">Безопасность предприятия 1</option>
          <option value="bezpriekspl">Безопасность при эксплуатации 1</option>
          <option value="bezproiz">Безопасность производств 1</option>
          <option value="bezsistem">Безопасность систем 1</option>
          <option value="beztruda">Безопасность труда 1</option>
          <option value="bepim">
            Безопасность эксплуатации приборов и материалов 1
          </option>
          <option value="bibliograf1">Библиография 1</option>
          <option value="bibliograf2">Библиография 2</option>
          <option value="bibliograf3">Библиография 3</option>
          <option value="bibliotekved">Библиотековедение 1</option>
          <option value="bizanal">Бизнес-анализ 1</option>
          <option value="biznesinj">Бизнес-инжиниринг 1</option>
          <option value="bizneskyrs">Бизнес-курс 1</option>
          <option value="biznesmodel">Бизнес-модели 1</option>
          <option value="biznesplan">Бизнес-план 1</option>
          <option value="biznesproc">Бизнес-процесс 1</option>
          <option value="biznesplanir">Бизнес-планирование 1</option>
          <option value="biologfizic1">Биологическая физика 1</option>
          <option value="biologfizic2">Биологическая физика 2</option>
          <option value="biologfizic3">Биологическая физика 3</option>
          <option value="biologiya1">Биология 1</option>
          <option value="biologiya2">Биология 2</option>
          <option value="biologiya3">Биология 3</option>
          <option value="biohim1">Биохимия 1</option>
          <option value="biohim2">Биохимия 2</option>
          <option value="biohim3">Биохимия 3</option>
          <option value="boleznsedrc">Болезни сердца 1</option>
          <option value="botanic1">Ботаника 1</option>
          <option value="botanic2">Ботаника 2</option>
          <option value="botanic3">Ботаника 3</option>
          <option value="bygalteriya">Бухгалтерия 1</option>
          <option value="byhanaliz">Бухгалтерский анализ 1</option>
          <option value="byhotchet">Бухгалтерская отчетность 1</option>
          <option value="byhaudit">Бухгалтерский аудит 1</option>
          <option value="byhainalogychet">
            Бухгалтерский и налоговый учет 1
          </option>
          <option value="byhaiyprychet">
            Бухгалтерский управленческий учет 1
          </option>
          <option value="byhychet1">Бухгалтерский учет 1</option>
          <option value="byhychet2">Бухгалтерский учет 2</option>
          <option value="byhychet3">Бухгалтерский учет 3</option>
          <option value="byhychet4">Бухгалтерский учет 4</option>
          <option value="byhychet5">Бухгалтерский учет 5</option>
          <option value="byhychet6">Бухгалтерский учет 6</option>
          <option value="byhychet7">Бухгалтерский учет 7</option>
          <option value="byhychianalis1">Бухгалтерский учет и анализ 1</option>
          <option value="byhychianalis2">Бухгалтерский учет и анализ 2</option>
          <option value="byhychianalis3">Бухгалтерский учет и анализ 3</option>
          <option value="byia">Бухгалтерский учет и аудит 1</option>
          <option value="byhfinansych">Бухгалтерский финансовый учет 1</option>
          <option value="budjetir">Бюджетирование 1</option>
          <option value="budjetibydjetsistem1">
            Бюджет и бюджетные системы 1
          </option>
          <option value="budjetibydjetsistem2">
            Бюджет и бюджетные системы 2
          </option>
          <option value="budjetibydjetsistem3">
            Бюджет и бюджетные системы 3
          </option>
          <option value="budjetpravo1">Бюджетное право 1</option>
          <option value="budjetpravo2">Бюджетное право 2</option>
          <option value="budjetpravo3">Бюджетное право 3</option>
          <option value="budjetprocess1">Бюджетный процесс 1</option>
          <option value="budjetprocess2">Бюджетный процесс 2</option>
          <option value="budjetprocess3">Бюджетный процесс 3</option>
          <option value="valeologiya">Валеология 1</option>
          <option value="vvedenvanal">Введение в анализ 1</option>
          <option value="vvedenvanal2">Введение в анализ 2</option>
          <option value="vvedenvistor">Введение в историю 1</option>
          <option value="vvedenvmatem">Введение в математику 1</option>
          <option value="vvedenvmetod">Введение в методы 1</option>
          <option value="vvedenvprofes">Введение в профессию 1</option>
          <option value="vvedenvpsixol">Введение в психологию 1</option>
          <option value="vvedenvfizik">Введение в физику 1</option>
          <option value="vvedenvailolog">Введение в филологию 1</option>
          <option value="vvedenvfilosof">Введение в философию 1</option>
          <option value="vvedenvyazik">Введение в языкознание 1</option>
          <option value="voenpsix1">Военная психология 1</option>
          <option value="voenpsix2">Военная психология 2</option>
          <option value="voendelo1">Военное дело 1</option>
          <option value="voendelo2">Военное дело 2</option>
          <option value="vozrastpsix1">Возрастная психология 1</option>
          <option value="vozrastpsix2">Возрастная психология 2</option>
          <option value="vysokmoleksoed1">
            Высокомолекулярные соединения 1
          </option>
          <option value="vysokmoleksoed2">
            Высокомолекулярные соединения 2
          </option>
          <option value="vyshmat1">Высшая математика 1</option>
          <option value="vyshmat2">Высшая математика 2</option>
          <option value="vyshmat3">Высшая математика 3</option>
          <option value="vnytrbolezn">Внутренние болезни 1</option>
          <option value="vozaif">Возрастная анатомия и физиология 1</option>
          <option value="genderpsix1">Гендерная психология 1</option>
          <option value="genderpsix2">Гендерная психология 2</option>
          <option value="genetika1">Генетика 1</option>
          <option value="genetika2">Генетика 2</option>
          <option value="geograf1">География 1</option>
          <option value="geograf2">География 2</option>
          <option value="geograf3">География 3</option>
          <option value="geologiya1">Геология 1</option>
          <option value="geologiya2">Геология 2</option>
          <option value="geologiya3">Геология 3</option>
          <option value="geometr1">Геометрия 1</option>
          <option value="geometr2">Геометрия 2</option>
          <option value="geometr3">Геометрия 3</option>
          <option value="geopolitika1">Геополитика 1</option>
          <option value="geopolitika2">Геополитика 2</option>
          <option value="geopolitika3">Геополитика 3</option>
          <option value="gigienapit1">Гигиена питания 1</option>
          <option value="gigienapit2">Гигиена питания 2</option>
          <option value="gigienapit3">Гигиена питания 3</option>
          <option value="gigienatryda1">Гигиена труда 1</option>
          <option value="gigienatryda2">Гигиена труда 2</option>
          <option value="gigienatryda3">Гигиена труда 3</option>
          <option value="globalilocalseti1">
            Глобальные и локальные сети 1
          </option>
          <option value="globalilocalseti2">
            Глобальные и локальные сети 2
          </option>
          <option value="gostdelo1">Гостиничное дело 1</option>
          <option value="gostdelo2">Гостиничное дело 2</option>
          <option value="gosekonomika1">Государственная экономика 1</option>
          <option value="gosekonomika2">Государственная экономика 2</option>
          <option value="gosekonomika3">Государственная экономика 3</option>
          <option value="gosimyniypr1">
            Государственное и муниципальное управление 1
          </option>
          <option value="gosimyniypr2">
            Государственное и муниципальное управление 2
          </option>
          <option value="gosimyniypr3">
            Государственное и муниципальное управление 3
          </option>
          <option value="gospravo1">Государственное право 1</option>
          <option value="gospravo2">Государственное право 2</option>
          <option value="gospravo3">Государственное право 3</option>
          <option value="gosregulir1">Государственное регулирование 1</option>
          <option value="gosregulir2">Государственное регулирование 2</option>
          <option value="gosregulir3">Государственное регулирование 3</option>
          <option value="gosypr1">Государственное управление 1</option>
          <option value="gosypr2">Государственное управление 2</option>
          <option value="gosypr3">Государственное управление 3</option>
          <option value="gosfinance1">Государственные финансы 1</option>
          <option value="gosfinance2">Государственные финансы 2</option>
          <option value="gosfinance3">Государственные финансы 3</option>
          <option value="gosoborona1">Гражданская оборона 1</option>
          <option value="gosoborona2">Гражданская оборона 2</option>
          <option value="gosoborona3">Гражданская оборона 3</option>
          <option value="grajdanprocess1">Гражданский процесс 1</option>
          <option value="grajdanprocess2">Гражданский процесс 2</option>
          <option value="grajdanprocess3">Гражданский процесс 3</option>
          <option value="grajdanpravo1">Гражданское право 1</option>
          <option value="grajdanpravo2">Гражданское право 2</option>
          <option value="grajdanpravo3">Гражданское право 3</option>
          <option value="grammatika1">Грамматика 1</option>
          <option value="grammatika2">Грамматика 2</option>
          <option value="grammatika3">Грамматика 3</option>
          <option value="gramanglyaz">Грамматика английского языка 1</option>
          <option value="gramnemyaz">Грамматика немецкого языка 1</option>
          <option value="gramrusyaz">Грамматика русского языка 1</option>
          <option value="gymanitarekolog1">Гуманитарная экология 1</option>
          <option value="gymanitarekolog2">Гуманитарная экология 2</option>
          <option value="delovoyanglyaz">Деловой английский язык 1</option>
          <option value="delobshen1">Деловое общение 1</option>
          <option value="delobshen2">Деловое общение 2</option>
          <option value="delobshen3">Деловое общение 3</option>
          <option value="deloproizvod1">Делопроизводство 1</option>
          <option value="deloproizvod2">Делопроизводство 2</option>
          <option value="deloproizvod3">Делопроизводство 3</option>
          <option value="dengkreditbank">Деньги, кредит, банки 1</option>
          <option value="dinamprog1">Динамическое программирование 1</option>
          <option value="dinamprog2">Динамическое программирование 2</option>
          <option value="dinamprog3">Динамическое программирование 3</option>
          <option value="discretmatem1">Дискретная математика 1</option>
          <option value="discretmatem2">Дискретная математика 2</option>
          <option value="discretmatem3">Дискретная математика 3</option>
          <option value="dogovorpravo1">Договорное право 1</option>
          <option value="dogovorpravo2">Договорное право 2</option>
          <option value="dogovorpravo3">Договорное право 3</option>
          <option value="docoborot1">Документооборот 1</option>
          <option value="docoborot2">Документооборот 2</option>
          <option value="docoborot3">Документооборот 3</option>
          <option value="doshcolpedog1">Дошкольная педагогика 1</option>
          <option value="doshcolpedog2">Дошкольная педагогика 2</option>
          <option value="doshcolpedog3">Дошкольная педагогика 3</option>
          <option value="evroppravo1">Европейское право 1</option>
          <option value="evroppravo2">Европейское право 2</option>
          <option value="evroppravo3">Европейское право 3</option>
          <option value="estestvnauk1">Естественные науки 1</option>
          <option value="estestvnauk2">Естественные науки 2</option>
          <option value="estestvnauk3">Естественные науки 3</option>
          <option value="estestvoz1">Естествознание 1</option>
          <option value="estestvoz2">Естествознание 2</option>
          <option value="estestvoz3">Естествознание 3</option>
          <option value="jelezdorog1">Железная дорога 1</option>
          <option value="jelezdorog2">Железная дорога 2</option>
          <option value="jelezdorog3">Железная дорога 3</option>
          <option value="jivotnovod1">Животноводство 1</option>
          <option value="jivotnovod2">Животноводство 2</option>
          <option value="jivotnovod3">Животноводство 3</option>
          <option value="jilishpravo1">Жилищное право 1</option>
          <option value="jilishpravo2">Жилищное право 2</option>
          <option value="jilishpravo3">Жилищное право 3</option>
          <option value="jkh1">ЖКХ 1</option>
          <option value="jkh2">ЖКХ 2</option>
          <option value="jkh3">ЖКХ 3</option>
          <option value="jyrnalistika1">Журналистика 1</option>
          <option value="jyrnalistika2">Журналистика 2</option>
          <option value="jyrnalistika3">Журналистика 3</option>
          <option value="zashitainfvset1">Защита информации в сетях 1</option>
          <option value="zashitainfvset2">Защита информации в сетях 2</option>
          <option value="zashitainfvset3">Защита информации в сетях 3</option>
          <option value="zemeldelo1">Земельное дело 1</option>
          <option value="zemeldelo2">Земельное дело 2</option>
          <option value="zemelpravo1">Земельное право 1</option>
          <option value="zemelpravo2">Земельное право 2</option>
          <option value="zemelpravo3">Земельное право 3</option>
          <option value="zemleystr1">Землеустройство 1</option>
          <option value="zemleystr2">Землеустройство 2</option>
          <option value="zemleystr3">Землеустройство 3</option>
          <option value="imitacmodel1">Имитационное моделирование 1</option>
          <option value="imitacmodel2">Имитационное моделирование 2</option>
          <option value="imitacmodel3">Имитационное моделирование 3</option>
          <option value="investic1">Инвестиции 1</option>
          <option value="investic2">Инвестиции 2</option>
          <option value="investic3">Инвестиции 3</option>
          <option value="investicpravo1">Инвестиционное право 1</option>
          <option value="investicpravo2">Инвестиционное право 2</option>
          <option value="investicpravo3">Инвестиционное право 3</option>
          <option value="investanal">Инвестиционный анализ 1</option>
          <option value="inovacbiznes">Инновационный бизнес 1</option>
          <option value="investicmenedjment1">
            Инвестиционный менеджмент 1
          </option>
          <option value="investicmenedjment2">
            Инвестиционный менеджмент 2
          </option>
          <option value="investicmenedjment3">
            Инвестиционный менеджмент 3
          </option>
          <option value="injzashokrsred1">
            Инженерная защита окружающей среды 1
          </option>
          <option value="injzashokrsred2">
            Инженерная защита окружающей среды 2
          </option>
          <option value="injzashokrsred3">
            Инженерная защита окружающей среды 3
          </option>
          <option value="injekolog1">Инженерная экология 1</option>
          <option value="injekolog2">Инженерная экология 2</option>
          <option value="injekolog3">Инженерная экология 3</option>
          <option value="inovacmenej">Инновационный менеджмент 1</option>
          <option value="inostryaz1">Иностранный язык 1</option>
          <option value="inostryaz2">Иностранный язык 2</option>
          <option value="inostryaz3">Иностранный язык 3</option>
          <option value="institucekonom">Институциональная экономика 1</option>
          <option value="infecbolezn">Инфекционные болезни 1</option>
          <option value="informat1">Информатика 1</option>
          <option value="informat2">Информатика 2</option>
          <option value="informat3">Информатика 3</option>
          <option value="infivischtex1">
            Информатика и вычислительная техника 1
          </option>
          <option value="infivischtex2">
            Информатика и вычислительная техника 2
          </option>
          <option value="infivischtex3">
            Информатика и вычислительная техника 3
          </option>
          <option value="iip">Информатика и программирование 1</option>
          <option value="infb">Информационная безопасность 1</option>
          <option value="infpravo1">Информационное право 1</option>
          <option value="infpravo2">Информационное право 2</option>
          <option value="infpravo3">Информационное право 3</option>
          <option value="infsistem1">Информационные системы 1</option>
          <option value="infsistem2">Информационные системы 2</option>
          <option value="infsistem3">Информационные системы 3</option>
          <option value="inftehnolog1">Информационные технологии 1</option>
          <option value="inftehnolog2">Информационные технологии 2</option>
          <option value="inftehnolog3">Информационные технологии 3</option>
          <option value="iskystvoved1">Искусствоведение 1</option>
          <option value="iskystvoved2">Искусствоведение 2</option>
          <option value="iskystvoved3">Искусствоведение 3</option>
          <option value="istor1">История 1</option>
          <option value="istor2">История 2</option>
          <option value="istor3">История 3</option>
          <option value="istorvov1">
            История Великой отечественной войны 1
          </option>
          <option value="istorvov2">
            История Великой отечественной войны 2
          </option>
          <option value="istorvov3">
            История Великой отечественной войны 3
          </option>
          <option value="istorvtormir1">История Второй мировой войны 1</option>
          <option value="istorvtormir2">История Второй мировой войны 2</option>
          <option value="istorvtormir3">История Второй мировой войны 3</option>
          <option value="istorgos1">История государства 1</option>
          <option value="istorgos2">История государства 2</option>
          <option value="istorgos3">История государства 3</option>
          <option value="istorgosiprava1">История государства и права 1</option>
          <option value="istorgosiprava2">История государства и права 2</option>
          <option value="istorgosiprava3">История государства и права 3</option>
          <option value="istordrevnmira1">История Древнего мира 1</option>
          <option value="istordrevnmira2">История Древнего мира 2</option>
          <option value="istordrevnmira3">История Древнего мира 3</option>
          <option value="istorzarybstran1">История зарубежных стран 1</option>
          <option value="istorzarybstran2">История зарубежных стран 2</option>
          <option value="istorzarybstran3">История зарубежных стран 3</option>
          <option value="istoriskystv1">История искусства 1</option>
          <option value="istoriskystv2">История искусства 2</option>
          <option value="istoriskystv3">История искусства 3</option>
          <option value="istorkyltyr1">История культуры 1</option>
          <option value="istorkyltyr2">История культуры 2</option>
          <option value="istorkyltyr3">История культуры 3</option>
          <option value="istorliter1">История литературы 1</option>
          <option value="istorliter2">История литературы 2</option>
          <option value="istorliter3">История литературы 3</option>
          <option value="istormedicin1">История медицины 1</option>
          <option value="istormedicin2">История медицины 2</option>
          <option value="istormedicin3">История медицины 3</option>
          <option value="istornayk1">История науки 1</option>
          <option value="istornayk2">История науки 2</option>
          <option value="istornayk3">История науки 3</option>
          <option value="istornovesh1">История новейшая 1</option>
          <option value="istornovesh2">История новейшая 2</option>
          <option value="istornovesh3">История новейшая 3</option>
          <option value="istorotech1">История Отечества 1</option>
          <option value="istorotech2">История Отечества 2</option>
          <option value="istorotech3">История Отечества 3</option>
          <option value="istorprava1">История права 1</option>
          <option value="istorrazvt1">
            История развития вычислительной техники 1
          </option>
          <option value="istorrossi1">История России 1</option>
          <option value="istorrossi2">История России 2</option>
          <option value="istorrossi3">История России 3</option>
          <option value="istorrusliter1">История русской литературы 1</option>
          <option value="istorfilosof1">История философии 1</option>
          <option value="istorekonom1">История экономики 1</option>
          <option value="ispanskyaz">Испанский язык 1</option>
          <option value="italyaz">Итальянский язык 1</option>
          <option value="kibernetik1">Кибернетика 1</option>
          <option value="kibernetik2">Кибернетика 2</option>
          <option value="kibernetik3">Кибернетика 3</option>
          <option value="kombinat1">Комбинаторика 1</option>
          <option value="kombinat2">Комбинаторика 2</option>
          <option value="kombinat3">Комбинаторика 3</option>
          <option value="komercdeyat1">Коммерческая деятельность 1</option>
          <option value="komplexanal">Комплексный анализ 1</option>
          <option value="komplexekonomanal">
            Комплексный экономический анализ 1
          </option>
          <option value="kompseti1">Компьютерные сети 1</option>
          <option value="kompseti2">Компьютерные сети 2</option>
          <option value="kompseti3">Компьютерные сети 3</option>
          <option value="konctitycpravo1">Конституционное право 1</option>
          <option value="konflictolog1">Конфликтология 1</option>
          <option value="koncsovrest1">
            Концепции современного естествознания (КСЕ) 1
          </option>
          <option value="korecped1">Коррекционная педагогика 1</option>
          <option value="kosmonavtika1">Космонавтика 1</option>
          <option value="kosmonavtika2">Космонавтика 2</option>
          <option value="kosmonavtika3">Космонавтика 3</option>
          <option value="kraeved1">Краеведение 1</option>
          <option value="kraeved2">Краеведение 2</option>
          <option value="kraeved3">Краеведение 3</option>
          <option value="kriminalist1">Криминалистика 1</option>
          <option value="kriminalist2">Криминалистика 2</option>
          <option value="kriminalist3">Криминалистика 3</option>
          <option value="kriminalog1">Криминология 1</option>
          <option value="kriminalog2">Криминология 2</option>
          <option value="kriminalog3">Криминология 3</option>
          <option value="kyltyrrech1">Культура речи 1</option>
          <option value="kyltyrrech2">Культура речи 2</option>
          <option value="kyltyrrech3">Культура речи 3</option>
          <option value="kyltyrlog1">Культурология 1</option>
          <option value="kyltyrlog2">Культурология 2</option>
          <option value="kyltyrlog3">Культурология 3</option>
          <option value="kursmatemanal">Курс математического анализа 1</option>
          <option value="latyaz">Латинский язык 1</option>
          <option value="leccicolog1">Лексикология 1</option>
          <option value="lechfiz1">Лечебная физкультура 1</option>
          <option value="lizing">Лизинг 1</option>
          <option value="lingvistika1">Лингвистика 1</option>
          <option value="linalgebra">Линейная алгебра 1</option>
          <option value="linprogr1">Линейное программирование 1</option>
          <option value="liter1">Литература 1</option>
          <option value="liter2">Литература 2</option>
          <option value="liter3">Литература 3</option>
          <option value="literatur1">Литературоведение 1</option>
          <option value="literatur2">Литературоведение 2</option>
          <option value="literatur3">Литературоведение 3</option>
          <option value="logika1">Логика 1</option>
          <option value="logika2">Логика 2</option>
          <option value="logika3">Логика 3</option>
          <option value="logistic">Логистика 1</option>
          <option value="logoped1">Логопедия 1</option>
          <option value="makroekonom">Макроэкономика 1</option>
          <option value="marketing">Маркетинг 1</option>
          <option value="marketisled">Маркетинговые исследования 1</option>
          <option value="mathematic1">Математика 1</option>
          <option value="mathematic2">Математика 2</option>
          <option value="mathematic3">Математика 3</option>
          <option value="matemanal">Математический анализ 1</option>
          <option value="matemmetodvekonom1">
            Математические методы в экономике 1
          </option>
          <option value="matemmodel1">Математическое моделирование 1</option>
          <option value="materialved1">Материаловедение 1</option>
          <option value="masshinstroen1">Машиностроение 1</option>
          <option value="masshinstroen2">Машиностроение 2</option>
          <option value="masshinstroen3">Машиностроение 3</option>
          <option value="medicin1">Медицина 1</option>
          <option value="medicin2">Медицина 2</option>
          <option value="medicin3">Медицина 3</option>
          <option value="medicinizdravo1">Медицина и здравоохранение 1</option>
          <option value="medicinizdravo2">Медицина и здравоохранение 2</option>
          <option value="medicinizdravo3">Медицина и здравоохранение 3</option>
          <option value="mejdynarodekonom1">Международная экономика 1</option>
          <option value="mejdynarodpravo1">Международное право 1</option>
          <option value="mejdynarodekonom1">
            Международное таможенное право 1
          </option>
          <option value="mejdynarodotnosh1">Международные отношения 1</option>
          <option value="mejdunarodstaudit">
            Международные стандарты аудита 1
          </option>
          <option value="mejekonomotnosh1">
            Международные экономические отношения 1
          </option>
          <option value="mejnarodmenej1">Международный менеджмент 1</option>
          <option value="mejkyltyrkom1">Межкультурная коммуникация 1</option>
          <option value="menejipr1">Менеджер и PR 1</option>
          <option value="menedjment1">Менеджмент 1</option>
          <option value="menedjment2">Менеджмент 2</option>
          <option value="menedjment3">Менеджмент 3</option>
          <option value="menejinovac1">Менеджмент инновационный 1</option>
          <option value="menejkache">Менеджмент качества 1</option>
          <option value="menejmentorgan">Менеджмент организации 1</option>
          <option value="menejstrateg1">Менеджмент стратегический 1</option>
          <option value="metodprepod1">Методика преподавания 1</option>
          <option value="metodanal">Методы анализа 1</option>
          <option value="metodialgor">Методы и алгоритмы 1</option>
          <option value="metodmia">Методы, модели и алгоритмы 1</option>
          <option value="metodoptim1">Методы оптимизации 1</option>
          <option value="metodprinresh1">Методы принятия решений 1</option>
          <option value="microbiolog">Микробиология 1</option>
          <option value="microproc1">Микропроцессоры 1</option>
          <option value="microekonom1">Микроэкономика 1</option>
          <option value="mirovekonom">Мировая экономика 1</option>
          <option value="morfologiya1">Морфология 1</option>
          <option value="morfologiya2">Морфология 2</option>
          <option value="morfologiya3">Морфология 3</option>
          <option value="moscoved1">Москвоведение 1</option>
          <option value="nalogi1">Налоги 1</option>
          <option value="nalogi2">Налоги 2</option>
          <option value="nalogi3">Налоги 3</option>
          <option value="nalogikredit1">Налоги и кредит 1</option>
          <option value="nin">Налоги и налогообложение 1</option>
          <option value="nalogoobloj1">Налогообложение 1</option>
          <option value="nacionalekonom">Национальная экономика 1</option>
          <option value="nachanal">Начала анализа 1</option>
          <option value="nachgeometr1">Начертательная геометрия 1</option>
          <option value="neironset1">Нейронные сети 1</option>
          <option value="neiropsix1">Нейропсихология 1</option>
          <option value="nemecyaz">Немецкий язык 1</option>
          <option value="neorganichim1">Неорганическая химия 1</option>
          <option value="nechetlogic1">Нечеткая логика 1</option>
          <option value="notariat1">Нотариат 1</option>
          <option value="obj1">ОБЖ 1</option>
          <option value="obj2">ОБЖ 2</option>
          <option value="obj3">ОБЖ 3</option>
          <option value="obchbiolog">Общая биология 1</option>
          <option value="obf">Общая физика 1</option>
          <option value="obshhim1">Общая химия 1</option>
          <option value="obshhim2">Общая химия 2</option>
          <option value="obshhim3">Общая химия 3</option>
          <option value="obshyaz">Общее языкознание 1</option>
          <option value="operkalendarplan1">
            Оперативно-календарное планирование 1
          </option>
          <option value="operacsistem1">Операционные системы 1</option>
          <option value="osnovavtomatiz">Основы автоматизации 1</option>
          <option value="osnovbiznes">Основы бизнеса 1</option>
          <option value="osnovbyhychet">Основы бухгалтерского учета 1</option>
          <option value="osnovma">Основы математического анализа 1</option>
          <option value="osnovmenej">Основы менеджмента 1</option>
          <option value="osnovprav1">Основы права 1</option>
          <option value="osnovprav2">Основы права 2</option>
          <option value="osnovprav3">Основы права 3</option>
          <option value="osnovsertistandart1">
            Основы сертификации и стандартизации 1
          </option>
          <option value="oxrantryda1">Охрана труда 1</option>
          <option value="ocenkabiznes">Оценка бизнеса 1</option>
          <option value="ocenkastoimbiznes">Оценка стоимости бизнеса 1</option>
          <option value="pedogog1">Педагогика 1</option>
          <option value="pedogog2">Педагогика 2</option>
          <option value="pedogog3">Педагогика 3</option>
          <option value="pedagoginovac1">Педагогические инновации 1</option>
          <option value="planir1">Планирование 1</option>
          <option value="pojbez">Пожарная безопасность 1</option>
          <option value="politolog1">Политология 1</option>
          <option value="politolog2">Политология 2</option>
          <option value="pravoved1">Правоведение 1</option>
          <option value="pravoved2">Правоведение 2</option>
          <option value="pravoved3">Правоведение 3</option>
          <option value="praktaydit">Практический аудит 1</option>
          <option value="predprinim1">Предпринимательство 1</option>
          <option value="prikladmatem1">Прикладная математика 1</option>
          <option value="programmirovan1">Программирование 1</option>
          <option value="programmirovan2">Программирование 2</option>
          <option value="programmirovan3">Программирование 3</option>
          <option value="programobecpech1">Программное обеспечение 1</option>
          <option value="programobecpech2">Программное обеспечение 2</option>
          <option value="programobecpech3">Программное обеспечение 3</option>
          <option value="pipb">
            Производственная и промышленная безопасность 1
          </option>
          <option value="pieb">
            Производственная и экологическая безопасность 1
          </option>
          <option value="prociaparat">Процессы и аппараты 1</option>
          <option value="psixoanal">Психоанализ 1</option>
          <option value="psiholog1">Психология 1</option>
          <option value="psiholog2">Психология 2</option>
          <option value="psiholog3">Психология 3</option>
          <option value="rachapparat">Расчет аппаратов 1</option>
          <option value="regionekonom">Региональная экономика 1</option>
          <option value="regresanal">Регрессионный анализ 1</option>
          <option value="reklama1">Реклама 1</option>
          <option value="reklama2">Реклама 2</option>
          <option value="reklamipr1">Реклама и PR 1</option>
          <option value="reklamipr2">Реклама и PR 2</option>
          <option value="reklamipr3">Реклама и PR 3</option>
          <option value="regauditde">
            Регулирование аудиторской деятельности 1
          </option>
          <option value="riskmenej">Риск-менеджмент 1</option>
          <option value="ritorika1">Риторика 1</option>
          <option value="rusyaz1">Русский язык 1</option>
          <option value="rusyaz2">Русский язык 2</option>
          <option value="rusyaz3">Русский язык 3</option>
          <option value="celekciya1">Селекция 1</option>
          <option value="celekciya2">Селекция 2</option>
          <option value="celekciya3">Селекция 3</option>
          <option value="sistemanal">Системный анализ 1</option>
          <option value="sistemyprbazdan1">
            Системы управления базами данных 1
          </option>
          <option value="sovremsistobinf1">
            Современные системы обработки информации 1
          </option>
          <option value="sovremenanglyaz">Современный английский язык 1</option>
          <option value="socialog1">Социология 1</option>
          <option value="socialog2">Социология 2</option>
          <option value="socialog3">Социология 3</option>
          <option value="socantropolog">Социальная антропология 1</option>
          <option value="statistic1">Статистика 1</option>
          <option value="statistic2">Статистика 2</option>
          <option value="statistic3">Статистика 3</option>
          <option value="staticanal">Статистический анализ 1</option>
          <option value="stilistik1">Стилистика 1</option>
          <option value="stranoved1">Страноведение 1</option>
          <option value="strategmenej">Стратегический менеджмент 1</option>
          <option value="strategypr1">Стратегическое управление 1</option>
          <option value="straxovan1">Страхование 1</option>
          <option value="stroit1">Строительство 1</option>
          <option value="sybd1">СУБД 1</option>
          <option value="sybd2">СУБД 2</option>
          <option value="sybd3">СУБД 3</option>
          <option value="teoravtypr">
            Теория автоматического управления 1
          </option>
          <option value="teoralgor">Теория алгоритмов 1</option>
          <option value="teorbyhych">Теория бухгалтерского учета 1</option>
          <option value="teorgraf1">Теория графов 1</option>
          <option value="teorgraf2">Теория графов 2</option>
          <option value="teorgraf3">Теория графов 3</option>
          <option value="teorsisisisanalis">
            Теория систем и системный анализ 1
          </option>
          <option value="tsisa">Теория экономического анализа 1</option>
          <option value="teplosnab1">Теплоснабжение 1</option>
          <option value="texnologvbiznes">Технологии в бизнесе 1</option>
          <option value="texnologwebprog1">
            Технология WEB-программирования 1
          </option>
          <option value="texnologwebprog2">
            Технология WEB-программирования 2
          </option>
          <option value="texnologwebprog3">
            Технология WEB-программирования 3
          </option>
          <option value="texnologpishprom1">
            Технология пищевой промышленности 1
          </option>
          <option value="tiept">
            Товароведение и экспертиза продовольственных товаров 1
          </option>
          <option value="torgovla1">Торговля 1</option>
          <option value="torgovla2">Торговля 2</option>
          <option value="torgovla3">Торговля 3</option>
          <option value="trydpravo1">Трудовое право 1</option>
          <option value="tyrizm1">Туризм 1</option>
          <option value="tyrizm2">Туризм 2</option>
          <option value="tyrizm3">Туризм 3</option>
          <option value="turcyaz">Турецкий язык 1</option>
          <option value="yglisppravo1">Уголовно-исполнительное право 1</option>
          <option value="yglprecpravo1">Уголовно-процессуальное право 1</option>
          <option value="yglpravo1">Уголовное право 1</option>
          <option value="ygolproc1">Уголовный процесс 1</option>
          <option value="ypravlen1">Управление 1</option>
          <option value="ypravlen2">Управление 2</option>
          <option value="ypravlen3">Управление 3</option>
          <option value="ypravbez">Управление безопасностью 1</option>
          <option value="yprkach1">Управление качеством 1</option>
          <option value="yprpers1">Управление персоналом 1</option>
          <option value="yprchelres1">
            Управление человеческими ресурсами 1
          </option>
          <option value="ypravanal">Управленческий анализ 1</option>
          <option value="yprychet1">Управленческий учет 1</option>
          <option value="yaarik">
            Учет, анализ, аудит, ревизия и контроль 1
          </option>
          <option value="ychetcenbym1">Учет ценных бумаг 1</option>
          <option value="fizika1">Физика 1</option>
          <option value="fizika2">Физика 2</option>
          <option value="fizika3">Физика 3</option>
          <option value="fiziologche1">Физиология человека 1</option>
          <option value="fizkyltyra1">Физическая культура 1</option>
          <option value="fizkyltyra2">Физическая культура 2</option>
          <option value="fizkyltyra3">Физическая культура 3</option>
          <option value="fizichxim1">Физическая химия 1</option>
          <option value="fizisport1">Физкультура и спорт 1</option>
          <option value="fizisport1">Физкультура и спорт 1</option>
          <option value="filosofiya1">Философия 1</option>
          <option value="filosofiya2">Философия 2</option>
          <option value="filosofiya3">Философия 3</option>
          <option value="filosnaykitexnik1">Философия науки и техники 1</option>
          <option value="filosantropolog">Философская антропология 1</option>
          <option value="financematem1">Финансовая математика 1</option>
          <option value="financeotchet1">Финансовая отчетность 1</option>
          <option value="financepravo1">Финансовое право 1</option>
          <option value="financanal">Финансовый анализ 1</option>
          <option value="financmenej">Финансовый менеджмент 1</option>
          <option value="finance1">Финансы 1</option>
          <option value="finance2">Финансы 2</option>
          <option value="finance3">Финансы 3</option>
          <option value="francyaz"> Французский язык 1</option>
          <option value="funcanal">Функциональный анализ 1</option>
          <option value="himiya1">Химия 1</option>
          <option value="himiya2">Химия 2</option>
          <option value="himiya3">Химия 3</option>
          <option value="cenoobraz1">Ценообразование 1</option>
          <option value="ecologmenej">Экологический менеджмент 1</option>
          <option value="ekologia1">Экология 1</option>
          <option value="ekologia2">Экология 2</option>
          <option value="ekologia3">Экология 3</option>
          <option value="ekonomika1">Экономика 1</option>
          <option value="ekonomika2">Экономика 2</option>
          <option value="ekonomika3">Экономика 3</option>
          <option value="ekonomgos">Экономика государства 1</option>
          <option value="economzarubstran1">
            Экономика зарубежных стран 1
          </option>
          <option value="ekonomnedvij">Экономика недвижимости 1</option>
          <option value="economorgan">Экономика организации 1</option>
          <option value="ekonomotrasl">Экономика отрасли 1</option>
          <option value="econompred1">Экономика предприятия 1</option>
          <option value="ekonomprirodpolz">
            Экономика природопользования 1
          </option>
          <option value="ekonomreg">Экономика региона 1</option>
          <option value="ekonomstrireg">Экономика стран и регионов 1</option>
          <option value="ekonomtryda">Экономика труда 1</option>
          <option value="econombez">Экономическая безопасность 1</option>
          <option value="ekonomgeograf1">Экономическая география 1</option>
          <option value="economanal">Экономический анализ 1</option>
          <option value="elektrosnab1">Электроснабжение 1</option>
          <option value="electroteh1">Электротехника 1</option>
          <option value="electroteh2">Электротехника 2</option>
          <option value="electroteh3">Электротехника 3</option>
          <option value="electienergsistem1">
            Электроэнергетические системы и сети 1
          </option>
          <option value="energetica1">Энергетика 1</option>
          <option value="energetica2">Энергетика 2</option>
          <option value="energetica3">Энергетика 3</option>
          <option value="estetika1">Эстетика 1</option>
          <option value="estetika2">Эстетика 2</option>
          <option value="estetika3">Эстетика 3</option>
          <option value="etika1">Этика 1</option>
          <option value="etika2">Этика 2</option>
          <option value="etika3">Этика 3</option>
          <option value="etiket1">Этикет 1</option>
          <option value="etiket2">Этикет 2</option>
          <option value="etnograf1">Этнография 1</option>
          <option value="etnograf2">Этнография 2</option>
          <option value="entolog1">Этнология 1</option>
          <option value="entolog2">Этнология 2</option>
          <option value="yurpsix1">Юридическая психология 1</option>
          <option value="yurpsix2">Юридическая психология 2</option>
          <option value="yurispryd1">Юриспруденция 1</option>
          <option value="yurispryd2">Юриспруденция 2</option>
          <option value="yapr">Языки программирования 1</option>
          <option value="yazkoznan">Языкознание 1</option>
        </select>
        <button
          className="whitespace-nowrap px-4 py-2 bg-blue-500 text-white rounded shadow font-medium"
          onClick={() => {
            getLitList(selectValue).then((arr) => {
              setList(arr);
            });
          }}
        >
          Создать список
        </button>
      </div>
      {list !== null ? (
        <div className="mt-4">
          {list.map((s) => (
            <div className="mb-4 pb-4 font-medium border-b-2 border-fuchsia-600" key={Math.random()}>{s}</div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 font-medium text-base text-center my-6">
          ( Список литературы появится здесь )
        </div>
      )}
    </div>
  );
}
