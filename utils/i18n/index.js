const i18n = {
    set language(lang) {
        sessionStorage.lang = lang
    },

    get language() {
        return sessionStorage.lang || 'en'
    }
}