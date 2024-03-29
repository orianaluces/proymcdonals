import bigmac from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import mequinosofa from "../../assets/mequinosofa.png";
import restaurantes from "../../assets/restaurantes.png";
import trabajador from "../../assets/trabajador.png";

import * as S from "./Main_style";

import Card from "./Card";

function Main (){
    return(
        <Main>

            <S.Section>

                <div>
                    <img src="../../assets/bigmac.svg" alt="Bigmac"/>
                    <h1>BATEU AQUELA #FOME DE MÉQUI?</h1>
                </div>

                <figure>
                    <img className="bigmac" src={bigmac} alt="Bigmac" />
                    <img className="bigmac" src={batata} alt="Batata Frita" />
                    <img className="bigmac" src={sorvete} alt="Sorvete" />
                </figure>

            </S.Section>

            <section>
                <h2>Promoção</h2>
                    <div>
                        <Card imagem={mequinosofa} texto={"Que tal um #MéquiNoSofá?"}/>
                        <Card imagem={restaurantes} texto={"venha conhecer nossa nova loja"}/>
                        <Card imagem={trabajador} texto={"Confira as medidas que o Méqui adotou!"}/>
                    </div>
            </section>
        </Main>
    )
}