export default function Card({
    description,
    href,
    id,
    src,
    width = 200,
}) {

    return <div className="uk-card uk-card-default uk-box-shadow-hover-large" tabIndex="0">
            <a href={href} data-caption={description} target="blank">
                <div id={id} className="uk-text-center uk-transition-toggle">
                    <img width={width} src={src} />
                    <div class="uk-transition-slide-bottom-small uk-overlay uk-overlay-primary uk-light uk-position-bottom">
                        <p>{description}</p>
                    </div>
                </div>
            </a>
    </div>
}
