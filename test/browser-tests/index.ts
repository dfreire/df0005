import add from '../../src/sample';
import TranslationSheets from '../../src/index.ts';
import { expect } from 'chai';

describe('TranslationSheets', () => {

    it('should run a simple TypeScript test', () => {
        expect(true).to.be.true;
    });

    it('should be an object', () => {
        expect(TranslationSheets).to.eql({});
    });

    it('should return sum', () => {
        const sum: number = add(1, 1);
        expect(sum).to.eql(2);
    });
});
