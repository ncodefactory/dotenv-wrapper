import { describe, it } from 'mocha';
import assert from 'assert';
import Wrapper from './wrapper';

describe('wrapper', () => {
  const wrapper = new Wrapper();
  describe('sanity check', () => {
    it('the wrapper was created correctly', () => {
      assert.notEqual(wrapper, null);
    });
  });
  describe('add values existing in .env file', () => {
    describe('addBoolean', () => {
      wrapper.addBoolean('EXISTING_BOOL_VALUE');
      it('property added correctly', () => {
        assert.equal(wrapper.EXISTING_BOOL_VALUE, true);
      });
    });
    describe('addString', () => {
      wrapper.addString('EXISTING_STRING_VALUE');
      it('property added correctly', () => {
        assert.equal(wrapper.EXISTING_STRING_VALUE, 'strval');
      });
    });
    describe('addNumber', () => {
      wrapper.addNumber('EXISTING_NUMBER_VALUE');
      it('property added correctly', () => {
        assert.equal(wrapper.EXISTING_NUMBER_VALUE, 5.25);
      });
    });
    describe('add values not existing in .env file', () => {
      describe('addBoolean', () => {
        wrapper.addBoolean('BOOL_VALUE', true);
        it('property added with default value', () => {
          assert.equal(wrapper.BOOL_VALUE, true);
        });
      });
      describe('addString', () => {
        wrapper.addString('STRING_VALUE', 'strval');
        it('property added with default value', () => {
          assert.equal(wrapper.STRING_VALUE, 'strval');
        });
      });
      describe('addNumber', () => {
        wrapper.addNumber('NUMBER_VALUE', 5.25);
        it('property added with default value', () => {
          assert.equal(wrapper.NUMBER_VALUE, 5.25);
        });
      });
    });
  });
});
