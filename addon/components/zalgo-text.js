import Component from '@ember/component';
import layout from '../templates/components/zalgo-text';

export default Component.extend({
  layout,
  classNames: ['ember-zalgo-text'],

  didInsertElement() {
    this._super(...arguments);

    const lowerCombiningCharacterBoundary = 768;
    const upperCombiningCharacterBoundary = 879;

    let outputString = '';

    this.get('string').split('').forEach((character) => {
      outputString += character;

      if (character === ' ') {
        return;
      }

      let numberOfCombiningCharacters = Math.floor(Math.random() * 10) + 10;

      for (let i = 0; i < numberOfCombiningCharacters; i++) {
        outputString += '&#' + Math.floor(Math.random() * (upperCombiningCharacterBoundary - lowerCombiningCharacterBoundary)) + lowerCombiningCharacterBoundary + ';';
      }
    });

    this.set('outputString', outputString);
  },
});
