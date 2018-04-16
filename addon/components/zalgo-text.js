import Component from '@ember/component';
import layout from '../templates/components/zalgo-text';

export default Component.extend({
  layout,
  classNames: ['ember-zalgo-text'],

  didReceiveAttrs(...args) {
    this._super(...args);

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
        let combiningCharacter = Math.floor(Math.random() * (upperCombiningCharacterBoundary - lowerCombiningCharacterBoundary)) + lowerCombiningCharacterBoundary;
        combiningCharacter = `0${combiningCharacter.toString(16)}`;
        combiningCharacter = String.fromCodePoint(parseInt(combiningCharacter, 16));
        outputString += combiningCharacter;
      }
    });

    this.set('outputString', outputString);
  },
});
