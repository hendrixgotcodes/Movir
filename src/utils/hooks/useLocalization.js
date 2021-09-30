import { useEffect } from "react";
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import locale from "../../../locales";

export default function useLocalization(path){

    i18n.translations = locale
    i18n.locale = Localization.locale
    i18n.fallbacks = true

    return i18n.t(`${path}`)

}