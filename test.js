import test from 'ava';
import backspace from './index';

test('Backspace with no length', t => {
  t.deepEqual(backspace('Lorem ipsum'), 'Lorem ipsu');
});

test('Backspace 3 characteres', t => {
  t.deepEqual(backspace('Lorem ipsum', 6), 'Lorem');
});

test('Backspace 5 characteres', t => {
  t.deepEqual(backspace('Lorem ipsum', 5), 'Lorem ');
});
