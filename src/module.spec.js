import { describe, it } from 'mocha';
import assert from 'assert';
import { name, version, description } from '../package.json';
import { moduleName, moduleVersion, moduleDescription } from './module';

describe(name, () => {
  describe('moduleVersion', () => {
    it('is correct', () => {
      assert.equal(moduleVersion, version);
    });
  });
  describe('moduleName', () => {
    it('is correct', () => {
      assert.equal(moduleName, name);
    });
  });
  describe('moduleDescription', () => {
    it('is correct', () => {
      assert.equal(moduleDescription, description);
    });
  });
});
