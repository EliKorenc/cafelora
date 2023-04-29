import './index.css';

import { Drink } from './components/Drink';

export const Menu = (props) => {
  const menuElm = document.createElement('section');
  menuElm.classList.add('menu');
  menuElm.id = 'menu';
  menuElm.innerHTML = `
    <div class="container">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list">
      </div>

      <div class="order-detail">
        <a href="/objednavka">Detail objednávky</a>
      </div>
    </div>
    `;

  const drinksListElm = menuElm.querySelector('.drinks-list');
  drinksListElm.append(
    Drink({
      name: 'Espresso',
      image: 'https://cafelora.kodim.app/assets/cups/espresso.png',
    }),
    Drink({
      name: 'Doppio',
      image: 'https://cafelora.kodim.app/assets/cups/doppio.png',
    }),
    Drink({
      name: 'Lungo',
      image: 'https://cafelora.kodim.app/assets/cups/lungo.png',
    }),
  );

  return menuElm;
};
