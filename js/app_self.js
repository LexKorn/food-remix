require('es6-promise').polyfill();
require ('es7-object-polyfill');
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs_self';
import calc from './modules/calc_self';
import modal from './modules/modal_self';
import slider from './modules/slider_self';
import timer from './modules/timer_self';
import cards from './modules/cards_self';
import forms from './modules/forms_self';

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    calc();
    modal();
    slider();
    timer();
    cards();
    forms();
});