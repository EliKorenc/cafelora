import './index.css';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
     <div class="drink__cup">
      <img src="${image}">
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
        <div class="layer">
        <div class="layer__color" style="background-color: #613916"></div>
        <div class="layer__label">espresso</div>
      </div>
    </div>

    </div>
      <div class="drink__controls">
        <button class="order-btn">
         Objednat
        </button>
      </div>
    </div>
  `;

  return drinkElm;
};
