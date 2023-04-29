import '../../style.css';

const HeaderElm = document.createElement('header');
const appHeaderElm = document.querySelector('#appHeader');
appHeaderElm.append(HeaderElm);

HeaderElm.innerHTML = `
  <header>
      <div class="header__content container">
        <div class="site-logo"></div>

        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>

      </div>
  </header>
  `;
