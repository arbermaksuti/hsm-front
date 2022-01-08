import React, { useState } from 'react'
import './SelectLanguage.scss'
import SingleLanguage from './SingleLanguage'
import ukFlag from '../../../assets/icons/uk.svg'
import deFlag from '../../../assets/icons/de.svg'
import albFlag from '../../../assets/icons/alb.svg'
import { localStorageData } from '../../../localStorageData'
import { FormattedMessage } from 'react-intl'

const SelectLanguage = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const languages = [
    {
      value: 'en-UK',
      lang: 'English',
      flag: ukFlag,
    },
    {
      value: 'de-DE',
      lang: 'German',
      flag: deFlag,
    },
    {
      value: 'sq-AL',
      lang: 'Albanian',
      flag: albFlag,
    },
  ]

  let flag = null
  switch (language) {
    case 'en-UK':
      flag = ukFlag
      break
    case 'de-DE':
      flag = deFlag
      break
    case 'sq-AL':
      flag = albFlag
      break
    default:
      flag = ukFlag
  }

  const changeLanguage = (language, locale) => {
    setLanguage(locale)
    localStorageData.setLanguage(language)
    localStorageData.setLocale(locale)
  }
  return (
    <div
      className={`selectLanguage p-relative ${dropdownOpen && 'openDropdown'}`}
    >
      <SingleLanguage
        flag={flag}
        text={
          <FormattedMessage
            id={localStorageData.getLanguage() || 'English'}
            defaultMessage={localStorageData.getLanguage() || 'English'}
          />
        }
        svg
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />

      {languages
        .sort(function (a, b) {
          var lang1 = a.lang
          var lang2 = b.lang
          if (lang1 < lang2) {
            return -1
          }
          if (lang1 > lang2) {
            return 1
          }
          return 0
        })
        .map((thisLang, i) => {
          if (localStorageData.getLanguage() !== thisLang.lang) {
            return (
              <SingleLanguage
                key={i}
                onClick={() => {
                  changeLanguage(thisLang.lang, thisLang.value)
                  setDropdownOpen(false)
                }}
                flag={thisLang.flag}
                text={
                  <FormattedMessage
                    id={thisLang.lang}
                    defaultMessage={thisLang.lang}
                  />
                }
              />
            )
          } else {
            return null
          }
        })}
    </div>
  )
}

export default SelectLanguage
