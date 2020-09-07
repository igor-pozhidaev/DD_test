const { I } = inject();

const moment = require('moment');
moment.locale('ru');

Given('Открыта страница сайта {string}', (page) => {
  I.amOnPage(page);
});

Then('Отображаются {int} карточек врачей на странице', (number) => {
  I.waitNumberOfVisibleElements('div[data-test-id="doctor-card-search__doctor-name"]', number);
});

Then('Отображается кнопка {string}', (buttonName) => {
  switch(buttonName) {
    case 'Расписание (фильтр)':
      I.waitForVisible(`button[data-test-id="calendar-button"]`);
      break;
    default:
      break;
  }
});

Then('Заголовок кнопки {string} содержит текст {string}', (buttonName, buttonTitle ) => {
  switch(buttonName) {
    case 'Расписание (фильтр)':
      switch(buttonTitle) {
        case 'Расписание на все дни':
          I.waitForVisible(`//button[@data-test-id="calendar-button"]//span[.="${buttonTitle}"]`);
          break;
        case 'Расписание на завтра':
          I.waitForVisible(`//button[@data-test-id="calendar-button"]//span[.="${buttonTitle}"]`);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});

Then('Нажимаем на кнопку {string}', (buttonName) => {
  switch(buttonName) {
    case 'Расписание (фильтр)':
      I.click(`button[data-test-id="calendar-button"]`);
      break;
    default:
      break;
  }
});

Then('Отображается элемент {string}', (elementName) => {
  switch(elementName) {
    case 'Список значений для выбора даты':
      I.waitForVisible(`div[data-test-id="date_select_items"]`);
      break;
    default:
      break;
  }
});

Then('Помечен галочкой пункт {string} в выпадающем списке {string}', (item, list) => {
  switch(list) {
    case 'Список значений для выбора даты':
      switch(item) {
        case 'Все дни':
          I.waitForVisible(`//div[@data-test-id="date_select_items"]//button[contains(@class, 'active')]//span[.="${item}"]`);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});

When('Нажимаем на пункт {string} в выпадающем списке {string}', (item, list) => {
  switch(list) {
    case 'Список значений для выбора даты':
      switch(item) {
        case 'Завтра':
          I.click(`//div[@data-test-id="date_select_items"]//button[span[contains(text(),"${item}")]]`);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});

Then('Отображаются врачи, работающие в выбранный день {string}', (day) => {
  switch(day) {
    case 'Завтра':
      const now = moment().add(1, 'days');
      const selectedDay = now.format('LL').slice(0, -8);
      console.log(selectedDay);
      I.waitNumberOfVisibleElements(`//div[@data-test-id="doctor-card-clinic"]//div[@class="clinic-slots__caption" and contains(text(),"Онлайн-расписание на ${selectedDay}")]`, 10);
      break;
    default:
      break;
  }
});
