import React, {Component} from 'react';
import CategoryDiv from '../components/CategoryDiv';
import '../css/Utility.css'
import Carrusel from '../components/Carousel';
const Home = () => (

    <div className="container-fluid p-0 " style={{backgroundColor:'#f9f7f6'}}>
        {/** Carousel */}
        <div className="row" style={{height:'33em '}} >
            <Carrusel/>
        
        </div>

        {/** End Carousel */}
        {/** Section Category */}
        <hr/>
            <div className="row mb-3">
                <h2 style={{color:'gray', margin: 'auto' }}>Categorias</h2>
            </div>
        <hr/>

        <div className="grid-container">
            <CategoryDiv
                title="Salud"
                category="health"
                itemList={["Terapia Psicologica","Consulta Nutricional","Más..."]}
            />
            <CategoryDiv
                title="Leyes"
                category="law"
                itemList={["Apoyo Legal", "Derechos Humanos", "Apoyo Denuncias y Más..."]}
            />
            <CategoryDiv
                title="Tecnologia"
                category="tech"
                itemList={["Paginas web de abastecimiento", "Aplicaciones móviles para la democracia", "Más..."]}
            />
            <CategoryDiv
                title="Aprendizaje"
                category="learning"
                itemList={["Cursos", "Talleres","Seminarios y Más..."]}
            />
            <CategoryDiv
                title="Eventos"
                category="events"
                itemList={["Culturales","Sociales","Más..."]}
            />
            <CategoryDiv
                title="Negocios Locales"
                category="local-market"
                itemList={["Comida","Productos","Servicios Rebajados y más..."]}
            />
            <CategoryDiv
                title="Ofertas y Rebajas"
                category="offers"
                itemList={["Productos"]}
            />
            <CategoryDiv
                title="Otros"
                category="others"
                itemList={["Fotografia","Yoga","Deportes y más ..."]}
            />
        </div>
        
    </div>
    
)

export default Home;