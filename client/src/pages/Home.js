import React, {Component} from 'react';
import CategoryDiv from '../components/CategoryDiv';
import '../css/Utility.css'

const Home = () => (

    <div className="container-fluid p-0">
        {/** Carousel */}
        <div className="row" >

        </div>
        {/** End Carousel */}
        {/** Section Category */}
        <div className="row">
            <div className="container p-0" style={{backgroundColor:'#f9f7f6'}}>
                <div className="row">
                    <div className={"col-3 p-0"}>
                        <CategoryDiv
                            title="Salud"
                            category="health"
                            itemList={["Terapia Psicologica","Consulta Nutricional","Más..."]}

                        />
                    </div>
                    <div className="col-3 p-0">
                        <CategoryDiv
                            title="Leyes"
                            category="law"
                            itemList={["Apoyo Legal", "Derechos Humanos", "Apoyo Denuncias y Más..."]}
                        />
                    </div>
                    <div className="col-3 p-0">
                        <CategoryDiv
                            title="Tecnologia"
                            category="tech"
                            itemList={["Paginas web de abastecimiento", "Aplicaciones móviles para la democracia", "Más..."]}
                        />
                    </div>
                    <div className="col-3 p-0">
                    <CategoryDiv
                        title="Aprendizaje"
                        category="learning"
                        itemList={["Cursos", "Talleres","Seminarios y Más..."]}
                    />
                    </div>

                </div>
                <div className="row">
                    <div className="col-3 p-0">
                    <CategoryDiv
                        title="Eventos"
                        category="events"
                        itemList={["Culturales","Sociales","Más..."]}
                    />
                    </div>
                    <div className="col-3 p-0">
                    <CategoryDiv
                        title="Negocios Locales"
                        category="local-market"
                        itemList={["Comida","Productos","Servicios Rebajados y más..."]}
                    />
                    </div>
                    <div className="col-3 p-0">
                    <CategoryDiv
                        title="Ofertas y Rebajas"
                        category="offers"
                        itemList={["Productos"]}
                    />
                    </div>
                    <div className="col-3 p-0">
                    <CategoryDiv
                        title="Otros"
                        category="others"
                        itemList={["Fotografia","Yoga","Deportes y más ..."]}
                    />
                    </div>

                </div>

            </div>
        </div>
        

        
        {/** End Section Category */}
    </div>


)

export default Home;