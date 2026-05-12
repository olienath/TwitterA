// tests/twitterapiv2.test.js
/**
 * Tests for TwitterAPIv2 module
 */

const { TwitterAPIv2 } = require('../src/twitterapiv2');

describe('TwitterAPIv2', () => {
    let instance;

    beforeEach(() => {
        instance = new TwitterAPIv2({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
