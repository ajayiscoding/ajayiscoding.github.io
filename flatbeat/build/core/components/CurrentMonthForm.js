import React from 'react';

class CurrentMonthForm extends React.Component {
  render () {
    return <div className="FlatBeat-currentMonth">
      <h4>Показатели счетчиков за текущий месяц</h4>
      <div className="FlatBeat-form">
        <div className="FlatBeat-item">
          <label for="cold-water">
            <span>Холодная вода</span><br />
            <input type="text" class="Input" id="cold-water" />
          </label>
        </div>
        <div className="FlatBeat-item">
          <label for="hot-water">
            <span>Горячая вода</span><br />
            <input type="text" className="Input" id="hot-water" />
          </label>
        </div>
        <div className="FlatBeat-item">
          <label for="electricity">
            <span>Электричество</span><br />
            <input type="text" className="Input" id="electricity" />
          </label>
        </div>
        <div className="FlatBeat-item">
          {/* todo: сохранить/изменить */}
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  }
};

export default CurrentMonthForm;

/*   return (<div class="Payment-item">
 //     <h3>Свет</h3>
 //     <div class="Payment-form">
 //       <span>(</span>
 //       <input type="number" class="Payment-light--current" placeholder="Текущий месяц" onkeyup="Flatbeat.updateTotal()">
 //         <span>-</span>
 //         <input type="number" class="Payment-light--last" placeholder="Прошлый месяц" onkeyup="Flatbeat.updateTotal()">
 //           <span>)</span>
 //           *
 //           <span class="Payment-light--tariff">0</span>&nbsp;&#8381;
 //           =
 //           <span class="Payment-light--rub"></span><span>&nbsp;&#8381;</span>
 //     </div>
 //   </div>);
 // }
 */
