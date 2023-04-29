import './index.css';

const Footer = () => {
  const footerElm = document.createElement('footer');
  footerElm.innerHTML = `
    <footer>
      <div class="container">
        <div class="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  `;
  return footerElm;
};
