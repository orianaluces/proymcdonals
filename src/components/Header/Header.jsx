import React from 'react'


import mmcdonals from "../../assets/mmcdonals.png";
import cel_app from "../../assets/cel_app.svg";
import cel_rojo from "../../assets/cel_rojo.svg";

import * as S from "./Header_style.jsx";

export default function Header() {
  return (
    <S.Header>
        <section>
            <img src= {mmcdonals}alt= "Logo Mcdonals"/>
        
        </section>
        <section>
            <div>
                <img src={cel_app} alt= "Celular app" />
                <h3>Baixe o App</h3>
            </div>
            <div className="mequi">
                <h3>Peça seu Méqui</h3>
                <img src={cel_rojo} alt="Celular rojo" />
            </div>
        </section>
    
    </S.Header>
  )
}
