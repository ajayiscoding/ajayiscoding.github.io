import React from 'react';

class UtilitiesItem extends React.Component {
  render () {
    return <div className="Payment-item">
      <h3>Свет</h3>
      <div className="Payment-form">
        <span>(</span>
        <input type="number" className="Payment-light--current" placeholder="Текущий месяц" onKeyUp="Flatbeat.updateTotal()" />
        <span>-</span>
        <input type="number" className="Payment-light--last" placeholder="Прошлый месяц" onKeyUp="Flatbeat.updateTotal()" />
        <span>)</span>
        <span>*</span>
        <span className="Payment-light--tariff">0</span>&nbsp;&#8381;
        <span>=</span>
        <span className="Payment-light--rub">0</span>
        <span>&nbsp;&#8381;</span>
      </div>
    </div>
  }
};

export default UtilitiesItem;

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
