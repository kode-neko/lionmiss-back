import { enumType } from "nexus";

const LMColor = enumType({
  name: 'LMColor',
  members: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Aqua',
    'Blue',
    'Purple',
    'Pink',
    'White',
    'Black'
  ]
});

const LMSize = enumType({
  name: 'LMSize',
  members: [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ]
});

export {
  LMColor,
  LMSize
}