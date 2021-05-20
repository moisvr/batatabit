import React from 'react';

import './Home.css';
import './tablet.css';

class Home extends React.Component {

    //* Cards
    moveCards = (e) => {
        let plans_cards_container = document.getElementsByClassName("plans-container--slider");
        let plans_card = document.getElementsByClassName("plans-container--card");
        let cards_size = plans_card[1].clientWidth;

        if(e.target.id === "toleft"){
            plans_cards_container[0].scrollLeft -= cards_size;
        }else
        if(e.target.id === "toright"){
            plans_cards_container[0].scrollLeft += cards_size;
        }        
    }
    //* move tables
    moveTable = (e) => {
        let tables_container = document.getElementsByClassName("tables-slider");
        let tables_cards = document.getElementsByClassName("table-card");
        let card_size = tables_cards[0].clientWidth;

        if(e.target.id === "toright-tables"){
            tables_container[0].scrollLeft += card_size;
        }else
        if(e.target.id === "toleft-tables"){
            tables_container[0].scrollLeft -= card_size;
        }        
    }

    componentDidMount() {
        let plans_cards_container = document.getElementsByClassName("plans-container--slider");
        let plans_card = document.getElementsByClassName("plans-container--card");
        let cards_size = plans_card[1].clientWidth;

        plans_cards_container[0].scrollLeft = cards_size;
    }
    
    render() {        
        return (
            <main>
                <section className="main-exchange-container">
                    <div className="backgroundImg"></div>
                    <div className="main-exchange-container--title">
                        <h2>Visibilizamos todas las tasas de cambio</h2>
                        <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
                    </div>
                    <section className="main-tables-container">
                        <div className="tables-slider--container">
                            <div className="tables-slider--arrows">
                                <span onClick={this.moveTable} id="toleft-tables"></span>
                                <span onClick={this.moveTable} id="toright-tables"></span>
                            </div>
                            <div className="tables-slider">
                                <div className="main-currency-table table-card">
                                    <p className="currency-table--title">Monedas</p>
                                    <div className="currency-table--container">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="table__top-left">Bitcoin</td>
                                                    <td className="table__top-right table__right">$1.96 <span className="down"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Etherenum</td>
                                                    <td className="table__right">$0.07 <span className="up"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Ripple</td>
                                                    <td className="table__right">$2.15 <span className="down"></span></td>
                                                </tr>
                                                <tr>
                                                    <td className="table__bottom-left">Stellar</td>
                                                    <td className="table__bottom-right table__right">$4.96 <span className="down"></span></td>
                                                </tr>
                                            </tbody>                                    
                                        </table>
                                    </div>  
                                    <div className="currency-table--date">
                                        <p><b>Actualizado:</b> 19 de Julio 23:45</p>
                                    </div>
                                </div>
                                <div className="main-commission-table table-card">
                                    <p className="commission-table-title">Comisiones</p>
                                    <div className="commission-table--container">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="table__top-left">Bitrade</td>
                                                    <td className="table__top-right table__right">$12.96</td>
                                                </tr>
                                                <tr>
                                                    <td>Bitpreco</td>
                                                    <td className="table__right">$13.07</td>
                                                </tr>
                                                <tr>
                                                    <td>Novadax</td>
                                                    <td className="table__right">$13.15</td>
                                                </tr>
                                                <tr>
                                                    <td className="table__bottom-left">Coinext</td>
                                                    <td className="table__bottom-right table__right">$14.96</td>
                                                </tr>
                                            </tbody>                                    
                                        </table>
                                    </div>
                                    <div className="commission-table--date">
                                        <p><b>Actualizado: </b>19 de Julio 23:48</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="main-product-detail">
                    <span className="product-detail--batata-logo"></span>
                    <div className="product-detail--title">
                        <h2>Creamos un producto sin comparación</h2>
                        <p>Confiable y diseñado para su uso diario</p>
                    </div>
                    <section className="products-cards--container">
                        <article className="product-detail--card">
                            <span className="clock"></span>
                            <p className="product--card-title">Tiempo real</p>
                            <p className="product--card-body">
                                Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.
                            </p>
                        </article>
                        <article className="product-detail--card">
                            <span className="eye"></span>
                            <p className="product--card-title">No hay tasas de interés</p>
                            <p className="product--card-body">
                                Ni en la compra o al momento de exit, Batatabit siempre te muestra el costo real de lo que estás adquiriendo.
                            </p>
                        </article>
                        <article className="product-detail--card">
                            <span className="money"></span>
                            <p className="product--card-title">Compara monedas</p>
                            <p className="product--card-body">
                                No hay más rumores, con Batatabit sabrás el valor real de cada moneda en el mercado actual.
                            </p>
                        </article>
                        <article className="product-detail--card">
                            <span className="check"></span>
                            <p className="product--card-title">Información confiable</p>
                            <p className="product--card-body">
                                Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan
                            </p>
                        </article>
                    </section>
                </section>
                <section className="bitcoin-img-container">
                    <h2>Conócelo hoy.</h2>
                </section>
                <section id="plans" className="main-plans-container">
                    <div className="plans--title">
                        <h2>Escoge el plan que mejor se ajuste a ti</h2>
                        <p>Cualquier plan te da acceso completo a nuestra plataforma</p>
                    </div>
                    <section className="plans-container--slider-container">
                        <div className="plans-container--arrows">
                            <span onClick={this.moveCards} id="toleft"></span>
                            <span onClick={this.moveCards} id="toright"></span>
                        </div>
                        <section className="plans-container--slider">
                            <article className="plans-container--card">
                                <p className="plans-container-text plans-container-text__basic">Básico</p>
                                <div className="plan-info-container">
                                    <h3 className="plan-card--title">Pago mensual</h3>
                                    <p className="plan-card--price"><span>$</span> 19</p>
                                    <p className="plan-card--saving">* Accesibilidad limitada sin beneficios</p>
                                    <button className="plan-card--ca plan-card--ca__basic">Escoger este<span></span></button>
                                </div>
                            </article>
                            <article className="plans-container--card">
                                <p className="plans-container-text plans-container-text__recommended">Recomendado</p>
                                <div className="plan-info-container">
                                    <h3 className="plan-card--title">Pago anual</h3>
                                    <p className="plan-card--price"><span>$</span> 99</p>
                                    <p className="plan-card--saving">* Ahorras $129 comparado al plan mensual.</p>
                                    <button className="plan-card--ca plan-card--ca__recommended">Escoger este<span></span></button>
                                </div>
                            </article>
                            <article className="plans-container--card">
                                <p className="plans-container-text plans-container-text__expert">Expert + VIP</p>
                                <div className="plan-info-container">
                                    <h3 className="plan-card--title">Pago anual</h3>
                                    <p className="plan-card--price"><span className="dollar-expert">$</span> 199</p>
                                    <p className="plan-card--saving">* Ahorras $28 comparado al plan mensual y con exclusividad.</p>
                                    <button className="plan-card--ca plan-card--ca__expert">Escoger este<span></span></button>
                                </div>
                            </article>                        
                        </section>                
                    </section>    
                </section>
            </main>
        );
    }

}

export default Home;