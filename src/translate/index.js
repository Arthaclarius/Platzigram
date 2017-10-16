/**
 * Format Js
 */
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

if (!window.Intl) {
    window.Intl = require('intl')
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

import es from './es'
import en from './en'

var MESSAGES = {}
MESSAGES.es = es
MESSAGES.en = en
export default class Translate{
    constructor(defaultlocale = 'es'){
        this.locale = defaultlocale
    }

    translate(message, options = {}) {
        var msg = new IntlMessageFormat(MESSAGES[this.locale][message], this.locale, null)
        return msg.format(options)
    }

    date(date = new Date()) {
        var msg = new IntlRelativeFormat(this.locale)
        return msg.format(date)
    }
}