import AliceCarousel from 'react-alice-carousel';

import PressImage from '../PressImage'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <PressImage onDragStart={handleDragStart} description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\lamanana.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Lectura (diari Segre)" href="documents\SegreLectura.jpg" id="Segre" src="pressImages\segre.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="La Sexta" href="videos\sexta.mp4 " id="Sexta" src="pressImages\lasexta.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Televisió de Catalunya" href="videos\tv3.mp4" id="tv3" src="pressImages\tv3.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Catalunya Radio" href="https://www.google.com/amp/s/www.ccma.cat/catradio/alacarta/eth-maitin-daran/jordi-mestre-encete-eth-projecte-musicau-soul-mountain-enregistrant-a-3-010-metres-de-nautada/audio-amp/1077636/" id="CatRadio" src="pressImages\catalunyaRadio.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Enderrock" href="http://www.enderrock.cat/noticies/etiqueta/Jordi+Mestre" id="Enderrock" src="pressImages\enderrock.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Territoris.cat" href="https://www.territoris.cat/articulo/la-panoramica/jordi-mestre/20200807093609066749.html" id="TerritorisCat" src="pressImages\territoris.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Nacio Muntanya" href="https://www.naciodigital.cat/naciomuntanya/noticia/6336/jordi-mestre-convertim-cim-mes-3000-metres-estudi-gravacio" id="NacioMuntanya" src="pressImages\nacioMuntanya.png" width="280px" height="280px" />,
];

const itemsMobile = [
    <PressImage onDragStart={handleDragStart} description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\lamanana.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Lectura (diari Segre)" href="documents\SegreLectura.jpg" id="Segre" src="pressImages\segre.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="La Sexta" href="videos\sexta.mp4" id="Sexta" src="pressImages\lasexta.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Televisió de Catalunya" href="videos\tv3.mp4" id="Segre" src="pressImages\tv3.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Catalunya Radio" href="https://www.google.com/amp/s/www.ccma.cat/catradio/alacarta/eth-maitin-daran/jordi-mestre-encete-eth-projecte-musicau-soul-mountain-enregistrant-a-3-010-metres-de-nautada/audio-amp/1077636/" id="CatRadio" src="pressImages\catalunyaRadio.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Enderrock" href="http://www.enderrock.cat/noticies/etiqueta/Jordi+Mestre" id="Enderrock" src="pressImages\enderrock.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Territoris.cat" href="https://www.territoris.cat/articulo/la-panoramica/jordi-mestre/20200807093609066749.html" id="TerritorisCat" src="pressImages\territoris.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Nacio Muntanya" href="https://www.naciodigital.cat/naciomuntanya/noticia/6336/jordi-mestre-convertim-cim-mes-3000-metres-estudi-gravacio" id="NacioMuntanya" src="pressImages\nacioMuntanya.png" width="135px" height="135px" />,
];

export default function PressGallery() {


    return <div>
        <div className="uk-visible@l">
            <AliceCarousel
                responsive
                autoWidth
                autoPlay
                autoPlayInterval='2000'
                autoPlayStrategy='all'
                controlsStrategy={'responsive'}
                disableDotsControls
                mouseTracking
                infinite
                items={items}
            />
        </div>
        <div className="uk-hidden@l">
            <AliceCarousel
                responsive
                autoWidth
                autoPlay
                autoPlayInterval='2000'
                autoPlayStrategy='all'
                controlsStrategy={'responsive'}
                disableDotsControls
                disableButtonsControls
                mouseTracking
                infinite
                items={itemsMobile}
            />
        </div>

    </div>
}