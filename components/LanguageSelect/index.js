export default function LanguageSelect({language, onLanguageChange}) {

    const setLangText = (language) => {
        switch (language) {
            case 'ca': return "CAT "
            case 'es': return "ESP "
            case 'en': return "ENG "
            default: return language
        }
    }

    const isActive = (selection) => {
        if (selection == language) return "uk-active uk-padding-remove-horizontal"
        else return "uk-padding-remove-horizontal"
    }

    const isLinkBlack = () => {
        return {
            color: "black",
            textDecoration: "none",
            fontSize:"1.2rem"
        }
    }

    return <div className="uk-inline">
        <a style={isLinkBlack()} className="uk-link-text uk-text-bold" href="#">{setLangText(language)}<img src='icons/downArrow.png' alt="down" width="30px" height="30px" /> </a>
        <div id="dropdown" data-uk-dropdown="pos: bottom-justify; mode: click">
            <ul className="uk-nav uk-dropdown-nav">
                <li className={isActive('ca')}><a onClick={() => onLanguageChange('ca')} data-uk-toggle="#dropdown">CAT</a></li>
                <li className={isActive('es')}><a onClick={ () => onLanguageChange('es')} data-uk-toggle="#dropdown">ESP</a></li>
                <li className={isActive('en')}><a onClick={ () => onLanguageChange('en')} data-uk-toggle="#dropdown">ENG</a></li>
            </ul>
        </div>
    </div>
}
