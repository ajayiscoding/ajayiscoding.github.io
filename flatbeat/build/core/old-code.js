// let Flatbeat = (() => {
//   const getEl = selector => document.querySelector(selector);
//
//   // тарифы
//   const LIGHT = 5.38; // свет
//   const COLD_WATER = 33.03; // холодная вода
//   const HOT_WATER = 163.24; // горячая вода
//   const WATER_FALL = 23.43; // водоотвод
//
//   const $lightTariff = getEl('.Payment-light--tariff');
//   const $coldWaterTariff = getEl('.Payment-coldWater--tariff');
//   const $hotWaterTariff = getEl('.Payment-hotWater--tariff');
//   const $waterfallTariff = getEl('.Payment-waterfall--tariff');
//
//   // Показываем тарифы
//   $lightTariff.innerText = LIGHT;
//   $coldWaterTariff.innerText = COLD_WATER;
//   $hotWaterTariff.innerText = HOT_WATER;
//   $waterfallTariff.innerText = WATER_FALL;
//
//
//   // DOM Элементы
//   const $rentField = getEl('.Payment-rent'); // плата за квартиру
//   const $summary = getEl('.Payment-summaryValue'); // общая сумма
//
//   const $coldWaterCurrentField = getEl('.Payment-coldWater--current'); // холодная вода текущий месяц
//   const $coldWaterLastField = getEl('.Payment-coldWater--last'); // холодная вода прошлый месяц
//   const $coldWaterTotalRub = getEl('.Payment-coldWater--rub'); //
//
//   const $hotWaterCurrentField = getEl('.Payment-hotWater--current'); // горячая вода текущий месяц
//   const $hotWaterLastField = getEl('.Payment-hotWater--last'); // горячая вода прошлый месяц
//   const $hotWaterTotalRub = getEl('.Payment-hotWater--rub');
//
//   const $waterfall = getEl('.Payment-waterfall');
//   const $waterfallTotalRub = getEl('.Payment-waterfall--rub');
//
//   const $lightCurrentField = getEl('.Payment-light--current'); // свет текущий месяц
//   const $lightLastField = getEl('.Payment-light--last'); // свет прошлый месяц
//   const $lightTotalRub = getEl('.Payment-light--rub'); //
//
//   const $commissionField = getEl('.Payment-commission'); // коммиссия при оплате жкх через банк
//   const $commissionRub = getEl('.Payment-commission--rub'); // коммиссия в рублях
//
//   const $personsField = getEl('.Payment-rentPersons'); // человек снимает квартиру (по умолчанию 1)
//   const $summaryPerPerson = getEl('.Payment-summaryPerPerson'); // сумма с человека
//
//   const $utilitiesRub = getEl('.Payment-utilities--rub');
//
//   // кварплата в рублях
//   const getRent = () => parseFloat($rentField.value || 0);
//
//   // Сколько холодной воды потратили в этом месяце
//   const getColdWater = () => {
//     let coldWaterCurrent = $coldWaterCurrentField.value || 0;
//     let coldWaterLast = $coldWaterLastField.value || 0;
//
//     return coldWaterCurrent - coldWaterLast;
//   };
//
//   const getHotWater = () => {
//     let hotWaterCurrent = $hotWaterCurrentField.value || 0;
//     let hotWaterLast = $hotWaterLastField.value || 0;
//
//     return hotWaterCurrent - hotWaterLast;
//   };
//
//   // холодная вода в рублях
//   const getColdWaterRub = () => {
//     let coldWater = getColdWater();
//
//     return parseFloat(coldWater) * COLD_WATER;
//   };
//
//   // горячая вода в рублях
//   const getHotWaterRub = () => {
//     let hotWater = getHotWater();
//
//     return parseFloat(hotWater) * HOT_WATER;
//   };
//
//   const getWaterfall = () => {
//     return getColdWater() + getHotWater();
//   };
//
//   // водоотвод в рублях = (горячая вода за месяц + холодная за месяц) * коэф. водоотв.
//   const getWaterfallRub = () => {
//     return getWaterfall() * WATER_FALL;
//   };
//
//   // свет в рублях
//   const getLightRub = () => {
//     let current = $lightCurrentField && $lightCurrentField.value || 0;
//     let last = $lightLastField && $lightLastField.value || 0;
//
//     return (parseFloat(current - last) * LIGHT);
//   };
//
//   // % комиссия банка, если есть
//   const getCommission = (summ) => {
//     let commission = parseInt($commissionField.value) || 0;
//
//     return commission * summ / 100;
//   };
//
//   // Услуги жкх = горячая + холодная + свет + водоотвод
//   const getUtilitiesRub = () => getColdWaterRub() + getHotWaterRub() + getWaterfallRub() + getLightRub();
//
//   const getTotal = () => {
//     let utilities = getUtilitiesRub();
//
//     return getRent() + utilities + getCommission(utilities);
//   };
//
//   const getTotalPerPerson = () => {
//     let persons = parseInt($personsField.value) || 1;
//
//     return parseFloat(getTotal() / persons);
//   };
//
//   return {
//     updateTotal: () => {
//       $lightTotalRub.innerText = getLightRub().toFixed(2);
//       $coldWaterTotalRub.innerText = getColdWaterRub().toFixed(2);
//       $hotWaterTotalRub.innerText = getHotWaterRub().toFixed(2);
//       $waterfall.innerText = getWaterfall();
//       $waterfallTotalRub.innerText = getWaterfallRub().toFixed(2);
//       $commissionRub.innerText = getCommission(getUtilitiesRub()).toFixed(2);
//       $utilitiesRub.innerText = getUtilitiesRub().toFixed(2);
//
//       $summary.innerText = getTotal().toFixed(2);
//       $summaryPerPerson.innerText = getTotalPerPerson().toFixed(2);
//     }
//   }
// })();
