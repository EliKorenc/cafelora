import './index.css';

const Banner = (props) => {
  const bannerElm = document.createElement('section');
  bannerElm.innerHTML = `
    <section class="banner">
      <div class="container">
        <div class="banner__content">
          <h1>Přijď to ochutnat!</h1>
          <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.
          </p>
        </div>
      </div>
    </section>
  `;
  return bannerElm;
};
