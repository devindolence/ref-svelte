import { describe, it, expect } from 'vitest';
import { Game } from '../src/routes/sverdle/game.js';

describe('game test', () => {
	it('returns true when a valid word is entered', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(true);
	});
});
