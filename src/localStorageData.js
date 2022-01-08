const USER_IS_LOGGED = 'User is logged'
const LOCALE = 'locale'
const LANGUAGE = 'language'

let storage = localStorage.getItem('locale')
if (storage === '' || storage === null) {
  localStorage.setItem('locale', 'en-UK')
  localStorage.setItem('language', 'English')
}


export const localStorageData = {
    // LocalStorage for user Login & Logout
    userLogin() {
      localStorage.setItem(USER_IS_LOGGED, 'true')
    },
    userLogout() {
      localStorage.removeItem(USER_IS_LOGGED)
    },
    getUserLogin() {
      return localStorage.getItem(USER_IS_LOGGED)
    },
  
    
    // LocalStorage for Language Translation
    setLocale(locale) {
      localStorage.setItem(LOCALE, locale)
    },
    getLocale() {
      return localStorage.getItem(LOCALE)
    },
    setLanguage(lang) {
      localStorage.setItem(LANGUAGE, lang)
    },
    getLanguage() {
      return localStorage.getItem(LANGUAGE)
    },
  }