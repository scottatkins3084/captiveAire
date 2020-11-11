import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTypeService {

  constructor() { }

  static GetCardType(numb): string
  {
    // visa
    let re = new RegExp('^4');
    if (numb.match(re) != null) {
      return 'Visa';
    }

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(numb)) {
      return 'Mastercard';
    }

    // AMEX
    re = new RegExp('^3[47]');
    if (numb.match(re) != null) {
      return 'AMEX';
    }

    // Discover
    re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
    if (numb.match(re) != null) {
      return 'Discover';
    }

    // Diners
    re = new RegExp('^36');
    if (numb.match(re) != null) {
      return 'Diners';
    }

    // Diners - Carte Blanche
    re = new RegExp('^30[0-5]');
    if (numb.match(re) != null) {
      return 'Diners - Carte Blanche';
    }

    // JCB
    re = new RegExp('^35(2[89]|[3-8][0-9])');
    if (numb.match(re) != null) {
      return 'JCB';
    }

    // Visa Electron
    re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
    if (numb.match(re) != null) {
      return 'Visa Electron';
    }

    return '';
  }
}
