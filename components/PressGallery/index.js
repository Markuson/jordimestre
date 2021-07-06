import AliceCarousel from 'react-alice-carousel';

import PressImage from '../PressImage'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <PressImage onDragStart={handleDragStart} description="Monocreators blog" href="https://blog.monocreators.com/soul-mountain-music-at-the-mountain-peak/" id="Monoblog" src="pressImages\mono.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Guitar Magazine" href="https://guitar.com/features/interviews/meet-the-man-who-scaled-a-3000m-mountain-with-his-guitar-just-to-record-a-song/" id="guitarmagazine" src="pressImages\guitardotcom.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Nacio Muntanya" href="https://www.naciodigital.cat/naciomuntanya/noticia/6336/jordi-mestre-convertim-cim-mes-3000-metres-estudi-gravacio" id="NacioMuntanya" src="pressImages\nacioMuntanya.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Federacio de entitats escursionistes" href="https://www.feec.cat/actualitat/noticies/musica-i-muntanya-es-fusionen-a-soul-mountain/" id="Feec" src="pressImages\feec.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Enderrock" href="http://www.enderrock.cat/noticies/etiqueta/Jordi+Mestre" id="Enderrock" src="pressImages\enderrock.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Temps de Neu TV3" href="modal-tdn" id="tempsdeneu" src="pressImages\tempsdeneu.png" width="280px" height="280px" video />,
    <PressImage onDragStart={handleDragStart} description="Televisió de Catalunya" href="modal-tv3" id="tv3" src="pressImages\tv3.png" width="280px" height="280px" video />,
    <PressImage onDragStart={handleDragStart} description="La Sexta" href="modal-sexta" id="Sexta" src="pressImages\lasexta.png" width="280px" height="280px" video />,
    <PressImage onDragStart={handleDragStart} description="Catalunya Radio" href="https://www.google.com/amp/s/www.ccma.cat/catradio/alacarta/eth-maitin-daran/jordi-mestre-encete-eth-projecte-musicau-soul-mountain-enregistrant-a-3-010-metres-de-nautada/audio-amp/1077636/" id="CatRadio" src="pressImages\catalunyaRadio.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\lamanana.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Lectura (diari Segre)" href="documents\SegreLectura.jpg" id="Segre" src="pressImages\segre.png" width="280px" height="280px" />,
    <PressImage onDragStart={handleDragStart} description="Territoris.cat" href="https://www.territoris.cat/articulo/la-panoramica/jordi-mestre/20200807093609066749.html" id="TerritorisCat" src="pressImages\territoris.png" width="280px" height="280px" />,

];

const itemsMobile = [
    <PressImage onDragStart={handleDragStart} description="Monocreators blog" href="https://blog.monocreators.com/soul-mountain-music-at-the-mountain-peak/" id="Monoblog" src="pressImages\mono.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Guitar Magazine" href="https://guitar.com/features/interviews/meet-the-man-who-scaled-a-3000m-mountain-with-his-guitar-just-to-record-a-song/" id="guitarmagazine" src="pressImages\guitardotcom.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Nacio Muntanya" href="https://www.naciodigital.cat/naciomuntanya/noticia/6336/jordi-mestre-convertim-cim-mes-3000-metres-estudi-gravacio" id="NacioMuntanya" src="pressImages\nacioMuntanya.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Federacio de entitats escursionistes" href="https://www.feec.cat/actualitat/noticies/musica-i-muntanya-es-fusionen-a-soul-mountain/" id="Feec" src="pressImages\feec.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Enderrock" href="http://www.enderrock.cat/noticies/etiqueta/Jordi+Mestre" id="Enderrock" src="pressImages\enderrock.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Temps de Neu TV3" href="modal-tdn" id="tempsdeneu" src="pressImages\tempsdeneu.png" width="135px" height="135px" video />,
    <PressImage onDragStart={handleDragStart} description="Televisió de Catalunya" href="modal-tv3" id="tv3" src="pressImages\tv3.png" width="135px" height="135px" video />,
    <PressImage onDragStart={handleDragStart} description="La Sexta" href="modal-sexta" id="Sexta" src="pressImages\lasexta.png" width="135px" height="135px" video />,
    <PressImage onDragStart={handleDragStart} description="Catalunya Radio" href="https://www.google.com/amp/s/www.ccma.cat/catradio/alacarta/eth-maitin-daran/jordi-mestre-encete-eth-projecte-musicau-soul-mountain-enregistrant-a-3-010-metres-de-nautada/audio-amp/1077636/" id="CatRadio" src="pressImages\catalunyaRadio.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="La Mañana" href="documents\LaManyana.pdf" id="laManyana" src="pressImages\lamanana.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Lectura (diari Segre)" href="documents\SegreLectura.jpg" id="Segre" src="pressImages\segre.png" width="135px" height="135px" />,
    <PressImage onDragStart={handleDragStart} description="Territoris.cat" href="https://www.territoris.cat/articulo/la-panoramica/jordi-mestre/20200807093609066749.html" id="TerritorisCat" src="pressImages\territoris.png" width="135px" height="135px" />,

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
        <div id="modal-sexta" className="uk-flex-top" data-uk-modal>
            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube-nocookie.com/embed/KM0OT3nUirU?rel=0&modestbranding=1&fs=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-uk-video
                    data-uk-responsive
                />
            </div>
        </div>
        <div id="modal-tv3" className="uk-flex-top" data-uk-modal>
            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube-nocookie.com/embed/5F6fqTHCTdw?rel=0&modestbranding=1&fs=0&controls=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-uk-video
                    data-uk-responsive />
            </div>
        </div>
        <div id="modal-tdn" className="uk-flex-top" data-uk-modal>
            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube-nocookie.com/embed/SjkgexbH1rM?rel=0&modestbranding=1&fs=0&controls=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    data-uk-video
                    data-uk-responsive
                />
            </div>
        </div>
    </div>
}