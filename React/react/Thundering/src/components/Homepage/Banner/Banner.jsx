import "/Banner.css";

function BannerHome() {
  return (
    <div className="container-home flex-wrapper">
      <div className="element">
        <div className="content">
          <h1>
            Descubra o Poder dos Gamers <br />
            Equipe-se para a Vitória
          </h1>
          <div>
            <p>
              Desperte o Gamer que há em Você <br />
              Potencialize sua experiência com periféricos de alta performance
              <br />e desfrute da emoção dos jogos em um outro nível
            </p>
          </div>
        </div>
        <div className="buttons">
          <div className="wrapper">
            <a className="cta" href="#">
              <span className="main-btn">
                <i>Despertar Agora</i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
