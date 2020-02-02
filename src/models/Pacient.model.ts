enum Sex {
  'Male' = 0,
  'Female' = 1
}

interface HumanInfo {
  // ФИО
  fio: string
  medicalHistoryNum: string // Номер истории болезни
  researchDate: Date
  slice: number // Срез (месяцы) до ,1,3,6,9,12
  contacts: string // address or phone
  diagnosis: string
  sex: Sex // Пол: муж. - 0; жен – 1
  age: number
  height: number // Рост (см)
  weight: number // Вес (кг)
  imt: number // ИМТ (кг/м²)
  ot: number // ОТ(см)
  ob: number // ОБ(см)
  oIndex: number // oIndex = ОТ/ОБ
}

// HUMAN INFORMATION

export class Human {
  data: HumanInfo | undefined
  // fio: string
  // medicalHistoryNum: string
  // // Дата исследования
  // researchDate: Date
  // slice: number // Срез (месяцы) до ,1,3,6,9,12
  // contacts: string // address or phone
  // diagnosis: string
  // sex: Sex // Пол: муж. - 0; жен – 1
  // age: number
  // height: number // Рост (см)
  // weight: number // Вес (кг)
  // imt: number // ИМТ (кг/м²)
  // ot: number // ОТ(см)
  // ob: number // ОБ(см)

  constructor(options?: HumanInfo) {
    this.data = options
  }
  // {
  // this.fio = options.fio ? options.fio : ''
  // this.medicalHistoryNum = options.medicalHistoryNum
  //   ? options.medicalHistoryNum
  //   : ''
  // this.researchDate = options.researchDate ? options.researchDate : new Date()
  // this.slice = options.slice ? options.slice : 0 // Срез (месяцы) до ,1,3,6,9,12
  // this.contacts = options.contacts ? options.contacts : '' // address or phone
  // this.diagnosis = options.diagnosis ? options.diagnosis : ''
  // this.sex = options.sex ? options.sex : 0 // Пол: муж. - 0; жен – 1
  // this.age = options.age ? options.age : 0
  // this.height = options.height ? options.height : 0 // Рост (см)
  // this.weight = options.weight ? options.weight : 0 // Вес (кг)
  // this.imt = options.imt ? options.imt : 0 // ИМТ (кг/м²)
  // this.ot = options.ot ? options.ot : 0 // ОТ(см)
  // this.ob = options.ob ? options.ob : 0 // ОБ(см)
  // }

  // oIndex = ОТ/ОБ
  get oIndex(): number | undefined {
    if (this.data) {
      if (this.data.ot !== 0 && this.data.ob !== 0) {
        return this.data.ot / this.data.ob
      } else {
        return undefined
      }
    }
    return undefined
  }
  clean() {
    this.data = {
      fio: '',
      medicalHistoryNum: '',
      researchDate: new Date(),
      slice: 0, // Срез (месяцы) до ,1,3,6,9,12
      contacts: '', // address or phone
      diagnosis: '',
      sex: 0, // Пол: муж. - 0; жен – 1
      age: 0,
      height: 0, // Рост (см)
      weight: 0, // Вес (кг)
      imt: 0, // ИМТ (кг/м²)
      ot: 0, // ОТ(см)
      ob: 0, // ОБ(см)
      oIndex: 0
    }
  }
}

// 1 - COMPLAINTS AND ANAMNESIS

interface Anamnesis {
  anam_1: number // Длительность ГБ (лет): _____;
  anam_2: number // Давность ИБС (лет): _____;
  anam_3: number // Давность СН (лет): _____;
  anam_4_1: number // АД (рабочее): _____/_____;
  anam_4_2: number // АД (рабочее): _____/_____;
  anam_5_1: number // АД (макс. за болезнь): _____/_____.
  anam_5_2: number // АД (макс. за болезнь): _____/_____.
  anam_6: number // Отягощенная наследст: нет - 0; по одн. из родит - 1; по обоим родит - 2; кто-либо из родит умер от осложн. ССЗ - 3.
  anam_7: number // Анамнез приема кардиотоксичных препаратов: нет - 0; да – 1
  anam_8: number // Анамнез ревматизма: нет - 0; да – 1.
  anam_9: number // Сидячий образ жизни: нет – 0; да - 1.
  anam_10: number // Стресс-коронарный характер: нет – 0; да-1
  anam_11: number // Употребление воды: обычное – 0; повышенное – 1; чрезмерное – 2
  anam_12: number // Употр.специй/соли: обычное - 0; повышенное - 1; чрезмерное - 2.
  anam_13: number // Вредные привычки: нет – 0; курение – 1; алкоголь – 2; курение и алкоголь – 3
  anam_14: number // Аллергологический анамнез: не отягощён – 0; лекарств. аллергия – 1; пищев. аллергия – 2; смешанная - 3
  anam_15: number // Аллергологический фон: нет – 0; есть – 1.
  anam_16: number // ФК - СН: нет-0; ФК I – 1; ФК II – 2; ФК III – 3; ФК IV - 4
  anam_17: number // Стадия по АСС/АНА: А - 1; В - 2; С - 3; D - 4
  anam_18: number // НК: нет – 0; НК-I – 1; НК-IIа – 2, НК IIb  – 3; НК-III - 4.
  anam_19: number // Сопутствующие: СД: нет - 0;есть-1
  anam_20: number // ИБС: нет-0; фк-I – 1; фк-II – 2; фк-III – 3; фк-IV - 4
  anam_21: number // ХПНФ: нет - 0; есть - 1.
  anam_22: number // Число ИМ в анамнезе: нет – 0; один – 1; два – 2; три и более – 3
  anam_23: number // Были ли гипертонические кризы: нет - 0; редко - 1; часто - 2.
  anam_24: number // Кардиоваскулярные вмешательства в анамнезе: нет-0, стентирование-1, шунтирование -2, стентирование + шунтирование -3, операции на клапанном аппарате-4.
  anam_25: number // ОРВИ: редко – 0; до 2-х раз в год – 2; от 3 до 5 раз в год – 3
  anam_26: number // Урогенитальная инфекция в анамнезе: нет – 0; есть – 1.
  anam_27: number // Хронические очаги инфекции: (кариес; тонзиллит; синусит;  герпес; отит; микоз; аднексит; холецистит; парадонтоз; Helikobakter Pylori;  Хламидиоз).
  anam_28: number // Боль в грудной клетке: нет – 0; при физич. нагрузке – 1; после психической нагрузки – 2; в покое – 3; при повышении АД – 4.
  anam_29: number // ЭКГ в анамнезе: норма – 0; ишемия – 1; рубцовые изменения – 2; рубцовые изменения и ишемия – 3.
  anam_30: number // ХМЭКГ в анамнезе: норма - 0; симпатикотония – 2; парасимпатикотония – 3.
  anam_31: number // Приём лекарств: постоянно – А; по «требованию» - Б; не принимает – В; нитраты - 1; БАБ - 2; а-Са – 3; ИАПФ - 4; мочегонные – 5; антагонисты A-II – 6; центрального действия – 7; антиагреганты – 8; антикоагулянты – 9; гиполипидэмические – 10; Серд.Гликоз - 11
  anam_32: number // Одышка: нет – 0; при небольшой физической нагрузке – 1; при обычной физической нагрузке – 2; в покое - 3 // Кашель: нет – 0; есть - 1.
  anam_33: number // Периферические отеки: нет – 0; пастозность – 1; 1-я ст. – 2; 2-я ст. – 3; 3-я ст. – 4.
  anam_34: number // Сердцебиения: нет – 0; при физ. нагрузке – 1; в покое - 2
  anam_35: number // Утомляемость: нет – 0; при физической нагрузке – 1; в покое - 2
}

// 2 - INSPECTION AND PHYSICAL EXAMINATION
interface Examination {
  exam_1: number // Общее состояние больного: удовлетворит. – 0; легкой ст. тяжести - 1; средней тяжести – 2; тяжелое – 3; крайне тяжелое – 4.
  exam_2: number // Периферические отеки: нет – 0; пастозность – 1; 1-я ст. – 2; 2-я ст. – 3; 3-я ст. – 4.
  exam_3: number // Цвет кожи: обычный – 0; акроцианоз – 1; бледность – 2; диффузный цианоз – 3; бледность и цианоз – 4.
  exam_4: number // Границы сердца: норма – 0; смещены влево – 1; вверх – 2; вправо – 3; в поперечнике - 4; вверх и влево –5; все три границы смещены – 6.
  exam_5: number // Аускультация сердца: тоны обычные – 0; ослаблен I тон – 1;+ акцент над аортой – 2; + акцент над легочной артерией – 3; патологич. ритмы – 4.
  exam_6: number // Шумы сердца: нет – 0; систол. над верхушкой – 1; систол. над аортой –2; систол.  над ТСК –3; сочетание 2-х левых- 4; над всеми точками – 5.
  exam_7: number // Аускультация сосудов: шумов нет – 0; есть – 1
  exam_8: number // Признаки перикардита: нет – 0; прекордиальная пульсация – 1; шум трения перикарда – 2.
  exam_9_1: number // АДс, мм рт.ст.: _______
  exam_9_2: number // АДд, мм рт.ст.: _______.
  exam_9_3: number // Гидроторакс: нет- 0; есть- 1.
  exam_10: number // ЧДД в минуту: _______
  exam_11: number // Аускультация легких: застойных хрипов нет – 0; сухие – 1; влажные региональные – 2; влажные по всем полям – 3.
  exam_12: number // Размеры печени при УЗИ: пр.доля: 1-й _____; 2-й _____; 3 _____; лев.доля: 1-й _____; 2-й _____; Печень по Курлову: 1-й _____; 2-й _____; 3-й _____.
  exam_13: number // Наличие ангиопатии (по данным окулиста): нет-0; есть-1
  exam_14: number // Наличие АС любой локализации при УЗИ или Рентгене: нет-0; есть-1.
  exam_15: number // Наличие ХНМК (по данным невропатолога): нет – 0; есть - 1
  exam_16: number // Наличие ОНМК в анамнезе: нет – 0; 1 раз – 1; более 1 раза - 2.
  exam_17: number // Субъективная манифестация  АГ: нет-0; да –1; атипич-2; в днамике-3; смешанная - 4
  exam_18: number // Субъективная манифестация  ИБС: нет-0; да –1; атипич-2; в днамике-3; смешанная - 4
  exam_19: number // Субъективная манифестация  НСР: нет-0; да –1; атипич-2; в днамике-3; смешанная - 4
}

// 3 - LABORATORY METHODS
interface LaboratoryMethods {
  labMetods_1: number // Эритроциты, *1012 л: _______(3,8-5,8)
  labMetods_2: number //	Гемоглобин, г/л: _______(117-174)
  labMetods_3: number //	Лейкоциты, *109 л : _______(4-10)
  labMetods_4: number //	Гематокрит, ________ % (37-51)
  labMetods_5: number //	СОЭ, мм/час: _______(2-30)
  labMetods_6: number //	Глюкоза, ммоль/л _______(3,7-6,1)
  labMetods_7: number //	ХС, ммоль\л: _______(0-5,2)
  labMetods_8: number //	ТГ, ммоль\л: _______(0-2,25)
  labMetods_9: number //	ЛПНП, ммоль\л: _______(0-3,3)
  labMetods_10: number //	ЛПОНП, ммоль\л: _______(0,13-1,63)
  labMetods_11: number //	ЛПВП, ммоль\л: _______(1,03-1,55)
  labMetods_12: number //	Коэфф. атероген. _______(2,2-3,5)
  labMetods_13: number //	Фибриноген г/л _______(1,8-3,5)	3.14	ПИ, % _______
  labMetods_15: number //	АСТ, ЕД/л: _______(9-40)
  labMetods_16: number //	АЛТ, ЕД/л: _______(<41)
  labMetods_17: number //	КФК, ЕД/л: _______(<190)
  labMetods_18: number //	ЛДГ, ЕД/л: _______(135-225)
  labMetods_19: number //	Na+ ,ммоль/л: _______(136-145)
  labMetods_20: number //	K+, ммоль/л: _______(3,5 - 5,1)
  labMetods_21: number // Cа++ ,ммоль/л: _______(2,15-2,55)
  labMetods_22: number //	Mg++, ммоль/л: _______(0,66-1,07)
  labMetods_23: number //	Общий белок, g/l: _______(0-100)
  labMetods_24: number //	СРБ, мг/л: _______(0-100)
  labMetods_25: number //	Креатинин, (мкмоль/л): _______(44-106)
  labMetods_26: number //	Мочевая кисл., мкмоль/л: _____(142,8-416,2)
  labMetods_27: number //	Трансферрин г/л,_______(2-3,6)
  labMetods_28: number //	NT-pro-BNP пг/мл,_______(0-145)
  labMetods_29: number //	Hs-cТропонин, нг/мл________(0,01-10)
  labMetods_30: number //	КФК-МВ,ед/л______________(0-25)
  labMetods_31: number //	Эстрадиол мкг/сут ____________(0-23)
  labMetods_32: number //	Тестостерон пг/мл_________(0-40)
  labMetods_33: number //	DHEA мкг/дл____________(12-500)
  labMetods_34: number //	SHBG нмоль/л__________(20-128)
}

// 4 - DRUG THERAPY
interface DrugTherapy {
  drag: string
  dayCount: number
  begin: Date
  end: Date
  comment: string
}

// 5 - ECG
interface ECG {
  egg_1: number //	ЧСС в мин: _____;
  egg_2: number //	СВ-EX: нет – 0; одиночная – 1; множеств. – 2; групповая, ранняя – 3.
  egg_3: number //	ПЖ EX: нет – 0; одиночная – 1; множеств. – 2; групповая, ранняя – 3.
  egg_4: number //	ЛЖ EX: нет – 0; одиночная – 1; множеств.- 2; групповая, ранняя – 3.
  egg_5: number //	АВБ: нет – 0; I ст. – 1; II ст. – 2; III ст. – 3.
  egg_6: number //	Блокады ПНПГ: нет – 0; неполные – 1; полные – 2.
  egg_7: number //	Блокады ЛНПГ: нет – 0; неполные – 1; полные – 2.
  egg_8: number //	Рубцовые изменения: нет- 0; есть –1.
  egg_9: number //	Площадь ИМ (мелкоочаговый – 0; крупноочаговый – 1).
  egg_10: number //	ИМ (отведения) ______________________________.
  egg_11: number //	Изменения PQ: нет - 0, есть – 1,¬¬¬¬¬-_________________________________;
  egg_12: number //	Изменения QT: нет - 0, есть – 1,_________________________________;
  egg_13: number //	Альтернация T: нет - 0, есть – 1,________________________________;
  egg_14: number //	Другие изменения: ______________________________.
}

// 6 - DAILY ECG MONITORING
interface DailyEcgMonitoring {
  dailyEcg_1_1: number //	Всего эпизодов ишемии _____;
  dailyEcg_1_2: number //  Длит. эпизодов ишемии (мин) _____;
  dailyEcg_2: number //	Максимальная депрессия ST,мм __________.
  dailyEcg_3: number //	Время возвр STна изолинию после депресс (в сек, точно)____________
  dailyEcg_4: number //	Хар-р депрессии: нет – 0; косовосх. – 1; косонисх. – 2; горизонт. – 3.
  dailyEcg_5_1: number // ЧСС до max нагр: _____;
  dailyEcg_5_2: number // ЧСС max _____;
  dailyEcg_5_3: number // ЧСС через 5 мин max: _____
  dailyEcg_6_1: number // ЧСС ср\сут. _______ ;
  dailyEcg_6_2: number // ЧСС ср\дн._______;
  dailyEcg_6_3: number // ЧСС ср\ночн ______;
  dailyEcg_7: number //	Пороговая.ЧСС ишемии ______
  dailyEcg_8: number //	Связь депрессии: не опред. – 0; физ. нагруз. – 1; стенокардия – 2; (1+2) – 3; во время сна – 4.
  dailyEcg_9: number //	В каких отведениях признаки ишемии __________________________.
  dailyEcg_10: number //	Изменения Т: нет – 0; позиционные – 1; инверсия на фоне нагрузки – 2; инверсия при болях в области сердца – 3; (2+3) – 4; неопределенно – 5.
  dailyEcg_11: number //	Нарушения сердечного ритма: нет – 0; редкие НЖ ЕХ – 1; редкие желудочк. – 2; частые НЖ – 3; частые желуд. – 4; пароксизмы МА – 5.
  dailyEcg_12: number //	Основной ритм: Синус. – 0; МА – 1; предсердн. – 2; идиовентрикул. – 3; (СР+МА) - 4.
  dailyEcg_13: number //	НЖ ЕХ: всего _______; днем: _______; ночью: _______.
  dailyEcg_14: number //	НЖ ЕХ: нет – 0; более 30 в час – 1; парные – 2; групповые – 3.
  dailyEcg_15: number //	Жел. ЕХ: всего: _______; днем: _______, ночью: _______.
  dailyEcg_16: number //	Жел. ЕХ нет – 0; >30 в час – 1; парн. – 2; групп. – 3; R на Т – 4; ЖТ - 5, аллоритм – 6.
  dailyEcg_17: number //	ПМА: нет – 0; днем – 1; ночью – 2; (1+2) – 3; на фоне физ. нагрузки – 4; связанные с приемом пищи – 5.
  dailyEcg_18: number //	Нарушение проводимости: нет – 0; СА блокада – 1; AV блокада 1 ст .- 2; AV блок. 2 ст. Мобитц 1 – 3; AV блок. 2 ст. Мобитц 2 – 4; AV блок. 3 ст. – 5.
  dailyEcg_19: number //	Блокада НПГ: нет – 0; бл. ПНПГ – 1; бл. ЛНПГ – 2; (ПНПГ+ЛНПГ) – 3.
  dailyEcg_20_1: number //	Паузы > 2,5 сек.: нет – 0; да - 1
  dailyEcg_20_2: number // Всего пауз: днем: ____,ночью: ____.
  dailyEcg_21: number //	Макс. пауза (сек) _______.
  dailyEcg_22: number //	Преобладание симпатикотонии: нет - 0, днем - 1, ночью – 2, не зависимо от времени суток – 3;
  dailyEcg_23: number //	Преобладание ваготонии: нет - 0, днем - 1, ночью – 2, не зависимо от времени суток – 3;
}

// 7 - ECHOCARDIOGRAPHY
interface Echocardiography {
  // Морфометрия
  echocard_1: number //	HR (уд/мин): ______
  echocard_2: number // КДО лж (см): ______
  echocard_3: number //	КСО лж (см): ______
  echocard_4: number //	SV (мл): ______
  echocard_5: number //	CO (л/с): ______
  echocard_6: number //	EF Simpson(%): ______
  echocard_7: number //	EF Tei (%)_____
  echocard_8: number //	МЖП-д (см): ______
  echocard_9: number //	ЗСлж (cm): _______
  echocard_10: number //	ИММЛЖ (г/м²): _______
  echocard_11: number //	Ао (см): ______
  echocard_12: number //	ЛП-диаст (см): _______
  echocard_13: number //	Vлп (см²)__________
  echocard_14: number // Индекс объема ЛП________
  echocard_15: number //	ПЖ (см): _______
  echocard_16: number //	Аневризма: ________
  echocard_17: number //	Фиброз: _______
  // ТМК
  echocard_18: number // VE: _______
  echocard_19: number //	VA: _______
  echocard_20: number //	E/A (%): _______
  echocard_21: number //	TE-dec: _______
  echocard_22: number //	IVRT: _______
  echocard_23: number //	IVRT/Te|e’________
  echocard_24: number // IVCT: _______
  echocard_25: number // Pла________
  echocard_26: number // Степень диастолической дисфункции______
}

// 8 - Deformation at rest
interface DeformationAtRest {
  dar_1: number // EF 2D (%)_____
  dar_2: number // EF 5D (%)_____
  dar_3: number // EF 4D (%)_____
  dar_4: number // SRs (Strain Rate systolic)___ c-1
  dar_5: number // SRed (Strain Rate early dyastolic)___ c-1
  dar_6: number // SRd (Strain Rate late dyastolic)___ c-1
  dar_7: number // PSS (postsystolic shortering)____%
  dar_8: number // A4C GLS_______ c-1
  dar_9: number // A2C GLS________ c-1
  dar_10: number // Global Longitudinal Strain (%)______
  dar_11: number // E________
  dar_12: number // E' lateral¬_______
  dar_13: number // E'septal________
  dar_14: number // E' (average)_______
  dar_15: number // E/E'______
  dar_16: number // A'________
  dar_17: number // E/A'_______
  dar_18: number // PWs_____
  dar_19: number // PWd______
  dar_20: number // DWS ___
  dar_21: number // MPI_____
  // 8.21 !!! Bull’s eye image
}

// 9 - Dynamometer recovery
interface DynamometerRecovery {
  dr_1: number // EF 2D (%)_____ (аналогичная первому столбцу нумерация переменных)
  dr_2: number // EF 5D (%)_____
  dr_3: number // EF 4D (%)_____
  dr_4: number // SRs (Strain Rate systolic)___ c-1
  dr_5: number // SRed (Strain Rate early dyastolic)___ c-1
  dr_6: number // SRd (Strain Rate late dyastolic)___ c-1
  dr_7: number // PSS (postsystolic shortering)____%
  dr_8: number // A4C GLS_______ c-1
  dr_9: number // A2C GLS________ c-1
  dr_10: number // GLS (%)______
  dr_11: number // E________
  dr_12: number // E'l ateral¬_______
  dr_13: number // E' septal________
  dr_14: number // E' (average)_______
  dr_15: number // E/E'______
  dr_16: number // A'________
  dr_17: number // E/A'_______
  dr_18: number // PWs_____
  dr_19: number // PWd______
  dr_20: number // DWS ___
  dr_21: number // MPI_____
  // 9.22 !!!Bull’s eye
}

// 10 - Valsalva Restoration
interface ValsalvaRestoration {
  vr_1: number // EF 2D (%)_____
  vr_2: number // EF 5D (%)_____
  vr_3: number // EF 4D (%)_____
  vr_4: number // SRs ___ c-1
  vr_5: number // SRed ___ c-1
  vr_6: number // SRd ___ c-1
  vr_7: number // PSS ____%
  vr_8: number // A4C GLS_______ c-1
  vr_9: number // A2C GLS________ c-1
  vr_10: number // GLS (%)______
  vr_11: number // E________
  vr_12: number // E'l ateral¬_______
  vr_13: number // E' septal________
  vr_14: number // E' (average)_______
  vr_15: number // E/E'______
  vr_16: number // A'________
  vr_17: number // E/A'_______
  vr_18: number // PWs_____
  vr_19: number // PWd______
  vr_20: number // DWS ___
  vr_21: number // MPI_____
  // 10.22 !!!Bull’s eye
}

// 11 - Bendopnea recovery
interface BendopneaRecovery {
  br_1: number // EF 2D (%)_____
  br_2: number // EF 5D (%)_____
  br_3: number // EF 4D (%)_____
  br_4: number // SRs ___ c-1
  br_5: number // SRed ___ c-1
  br_6: number // SRd ______c-1
  br_7: number // PSS____%
  br_8: number // A4C GLS_______ c-1
  br_9: number // A2C GLS________ c-1
  br_10: number // GLS (%)______
  br_11: number // E________
  br_12: number // E'l ateral¬_______
  br_13: number // E' septal________
  br_14: number // E' (average)_______
  br_15: number // E/E'______
  br_16: number // A'________
  br_17: number // E/A'_______
  br_18: number // PWs_____
  br_19: number // PWd______
  br_20: number // DWS ___
  br_21: number // MPI_____
  // 11.22 Bull’s eye
}

// 12 - End points
interface EndPoints {
  endPoint_1_1: number // Жив?: нет – 0; да - 1.
  endPoint_1_2: number // Общая  смертность? нет – 0; да - 1.
  endPoint_1_3: number // Коронарная смертность? нет – 0; да - 1.
  endPoint_1_4: number // ОНМК смертность? нет – 0; да - 1.
  endPoint_2: number // Были ли за период наблюдения любые госпитализации? нет – 0; да - 1.; Количество любых госпитализаций за период: _____;
  endPoint_3: number // Были ли за период наблюдения госпитализации по ССЗ? нет – 0; да - 1.; Количество госпитализаций по ССЗ за период: _____;
  endPoint_4: number // Были ли за период наблюдения осложнения от ССЗ? нет – 0; да - 1.; (ИМ, ОНМК\ПНМК, ОЛЖН, Синкопы, Декомпенсация ХСН.)
  endPoint_5: number // Количество осложнений от ССЗ за период: _____;
  endPoint_6: number // Были ли за период наблюдения сосудистые осложнения? нет – 0; да - 1.; (ИМ, ОНМК\ПНМК, Окклюзии периферич. артерий)
  endPoint_7: number // Количество сосудистых осложнений за период: _____;
  endPoint_8: number // Были ли за период наблюдения реваскуляризации (вообще)? нет – 0; да - 1.; Количество реваскуляризаций за период: _____;
  endPoint_9: number // Были ли за период наблюдения коронарные  реваскуляризации? нет – 0; да - 1.; Количество коронарн. реваскуляризаций за период: _____;
  endPoint_10: number // Были ли за период наблюдения стентирования КА? нет – 0; да - 1.; Количество стентирований за период: _____;
  endPoint_11: number // Были ли за период наблюдения БКА? нет – 0; да - 1.; Количество БКА за период: _____;
  endPoint_12: number // Были ли за период наблюдения АКШ? нет – 0; да - 1.; Количество АКШ за период: _____;
  endPoint_13: number // Были ли за период наблюдения сосудистые реваскуляризации? нет – 0; да - 1.; Количество сосудист. реваскуляризаций за период: _____;
  endPoint_14: number // Было ли за период наблюдения прогрессирование симптомов артериальной гипертензии? нет – 0; да - 1.;
  endPoint_15: number // Было ли за период наблюдения прогрессирование симптомов ИБС? нет – 0; да - 1.;
  endPoint_16: number // Было ли за период наблюдения прогрессирование симптомов ХСН? нет – 0; да - 1.;
  endPoint_17: number // Было ли за период наблюдения прогрессирование других заболеваний? нет – 0; да - 1.; Каких? __________________________________
}

// Pacient
export default class Pacient {
  // 1 - COMPLAINTS AND ANAMNESIS
  // 2 - INSPECTION AND PHYSICAL EXAMINATION
  // 3 - LABORATORY METHODS

  info: HumanInfo
  anamnesis: Anamnesis
  examination: Examination
  laboratoryMethods: LaboratoryMethods
  drugTherapy: DrugTherapy
  ecg: ECG
  dailyEcgMonitoring: DailyEcgMonitoring
  echocardiography: Echocardiography
  deformationAtRest: DeformationAtRest
  dynamometerRecovery: DynamometerRecovery
  valsalvaRestoration: ValsalvaRestoration
  bendopneaRecovery: BendopneaRecovery
  endPoints: EndPoints

  constructor(options: any) {
    this.info = options.info
    this.anamnesis = options.anamnesis
    this.examination = options.examination
    this.laboratoryMethods = options.laboratoryMethods
    this.drugTherapy = options.drugTherapy
    this.ecg = options.ecg
    this.dailyEcgMonitoring = options.dailyEcgMonitoring
    this.echocardiography = options.echocardiography
    this.deformationAtRest = options.deformationAtRest
    this.dynamometerRecovery = options.dynamometerRecovery
    this.valsalvaRestoration = options.valsalvaRestoration
    this.bendopneaRecovery = options.bendopneaRecovery
    this.endPoints = options.endPoints
  }

  toString() {
    console.log(this.info.fio)
  }
}
