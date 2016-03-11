var Flatbeat = (function() {
  var getEl = function (selector) {
    return document.querySelector(selector);
  };

  // тарифы
  var LIGHT = 5.03; // свет
  var COLD_WATER = 30.87; // холодная вода
  var HOT_WATER = 151.36; // горячая вода
  var WATER_FALL = 21.90; // водоотвод

  var $lightTariff = getEl('.Payment-light--tariff');
  var $coldWaterTariff = getEl('.Payment-coldWater--tariff');
  var $hotWaterTariff = getEl('.Payment-hotWater--tariff');
  var $waterfallTariff = getEl('.Payment-waterfall--tariff');

  // Показываем тарифы
  $lightTariff.innerText = LIGHT;
  $coldWaterTariff.innerText = COLD_WATER;
  $hotWaterTariff.innerText = HOT_WATER;
  $waterfallTariff.innerText = WATER_FALL;


  // DOM Элементы
  var $rentField = getEl('.Payment-rent'); // плата за квартиру
  var $summary = getEl('.Payment-summaryValue'); // общая сумма

  var $coldWaterCurrentField = getEl('.Payment-coldWater--current'); // холодная вода текущий месяц
  var $coldWaterLastField = getEl('.Payment-coldWater--last'); // холодная вода прошлый месяц
  var $coldWaterTotalRub = getEl('.Payment-coldWater--rub'); //

  var $hotWaterCurrentField = getEl('.Payment-hotWater--current'); // горячая вода текущий месяц
  var $hotWaterLastField = getEl('.Payment-hotWater--last'); // горячая вода прошлый месяц
  var $hotWaterTotalRub = getEl('.Payment-hotWater--rub');

  var $waterfall = getEl('.Payment-waterfall');
  var $waterfallTotalRub = getEl('.Payment-waterfall--rub');

  var $lightCurrentField = getEl('.Payment-light--current'); // свет текущий месяц
  var $lightLastField = getEl('.Payment-light--last'); // свет прошлый месяц
  var $lightTotalRub = getEl('.Payment-light--rub'); //

  var $commissionField = getEl('.Payment-commission'); // коммиссия при оплате жкх через банк
  var $commissionRub = getEl('.Payment-commission--rub'); // коммиссия в рублях

  var $personsField = getEl('.Payment-rentPersons'); // человек снимает квартиру (по умолчанию 1)
  var $summaryPerPerson = getEl('.Payment-summaryPerPerson'); // сумма с человека

  var $utilitiesRub = getEl('.Payment-utilities--rub');

  // кварплата в рублях
  var getRent = function () {
    return parseFloat($rentField.value || 0);
  };

  // Сколько холодной воды потратили в этом месяце
  var getColdWater = function () {
    var coldWaterCurrent = $coldWaterCurrentField.value || 0;
    var coldWaterLast = $coldWaterLastField.value || 0;

    return coldWaterCurrent - coldWaterLast;
  };

  var getHotWater = function () {
    var hotWaterCurrent = $hotWaterCurrentField.value || 0;
    var hotWaterLast = $hotWaterLastField.value || 0;

    return hotWaterCurrent - hotWaterLast;
  };

  // холодная вода в рублях
  var getColdWaterRub = function () {
    var coldWater = getColdWater();

    return parseFloat(coldWater) * COLD_WATER;
  };

  // горячая вода в рублях
  var getHotWaterRub = function () {
    var hotWater = getHotWater();

    return parseFloat(hotWater) * HOT_WATER;
  };

  var getWaterfall = function () {
    return getColdWater() + getHotWater();
  };

  // водоотвод в рублях = (горячая вода за месяц + холодная за месяц) * коэф. водоотв.
  var getWaterfallRub = function () {
    return getWaterfall() * WATER_FALL;
  };


  // свет в рублях
  var getLightRub = function () {
    var lightCurrent = $lightCurrentField.value || 0;
    var lightLast = $lightLastField.value || 0;

    return (parseFloat(lightCurrent - lightLast) * LIGHT);
  };

  // % комиссия банка, если есть
  var getCommission = function (summ) {
    var commission = parseInt($commissionField.value) || 0;

    return commission * summ / 100;
  };

  // Услуги жкх = горячая + холодная + свет + водоотвод
  var getUtilitiesRub = function () {
    return getColdWaterRub() + getHotWaterRub() + getWaterfallRub() + getLightRub();
  };

  var getTotal = function () {
    var utilities = getUtilitiesRub();

    return getRent() + utilities + getCommission(utilities);
  };

  var getTotalPerPerson = function () {
    var persons = parseInt($personsField.value) || 1;

    return parseFloat(getTotal() / persons);
  };

  return {
    updateTotal: function () {
      $lightTotalRub.innerText = getLightRub().toFixed(2);
      $coldWaterTotalRub.innerText = getColdWaterRub().toFixed(2);
      $hotWaterTotalRub.innerText = getHotWaterRub().toFixed(2);
      $waterfall.innerText = getWaterfall();
      $waterfallTotalRub.innerText = getWaterfallRub().toFixed(2);
      $commissionRub.innerText = getCommission(getUtilitiesRub()).toFixed(2);
      $utilitiesRub.innerText = getUtilitiesRub().toFixed(2);

      $summary.innerText = getTotal().toFixed(2);
      $summaryPerPerson.innerText = getTotalPerPerson().toFixed(2);
    }
  }
})();


