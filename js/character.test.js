import { determineCharacterStatus } from './character';

describe('determineCharacterStatus', () => {
  test('should return "healthy" when health is more than 50', () => {
    const character = { name: 'маг', health: 90 };
    expect(determineCharacterStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is between 50 and 15', () => {
    const character = { name: 'маг', health: 30 };
    expect(determineCharacterStatus(character)).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'маг', health: 10 };
    expect(determineCharacterStatus(character)).toBe('critical');
  });
});
