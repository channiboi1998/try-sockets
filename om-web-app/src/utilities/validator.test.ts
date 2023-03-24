import { describe, expect, it } from "vitest";
import { FieldFormatValidator } from './validator';

describe('FieldFormatValidator', () => {
  it('should validate valid email format', () => {
    expect(FieldFormatValidator.email.test('test@example.com')).toBe(true);
  });

  it('should reject invalid email format', () => {
    expect(FieldFormatValidator.email.test('invalid-email')).toBe(false);
  });

  it('should validate valid password format', () => {
    expect(FieldFormatValidator.password.test('ValidP@ssw0rd')).toBe(true);
  });

  it('should reject invalid password format', () => {
    expect(FieldFormatValidator.password.test('weakpassword')).toBe(false);
  });
});
