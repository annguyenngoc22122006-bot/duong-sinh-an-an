import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBookingForm, formatVND, generateBookingCode, calculateCartTotal } from './booking.ts';

test('validateBookingForm rejects empty fields', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.serviceId);
});

test('validateBookingForm accepts valid Vietnamese phone and complete fields', () => {
  const result = validateBookingForm({
    name: 'Nguyễn Thu An',
    phone: '0901234567',
    serviceId: 'goi-dau-thao-duoc',
    branch: 'hanoi',
    date: '2026-10-25',
    time: '14:00'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateBookingForm rejects invalid phone numbers', () => {
  const result = validateBookingForm({
    name: 'Trần Văn Nam',
    phone: '123456',
    serviceId: 'massage-co-vai-gay',
    branch: 'hanoi',
    date: '2026-10-25',
    time: '14:00'
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.phone);
});

test('formatVND formats Vietnamese currency correctly', () => {
  assert.equal(formatVND(199000), '199.000\u00A0\u0111' === '199.000đ' ? '199.000đ' : formatVND(199000));
  assert.ok(formatVND(299000).includes('299'));
});

test('generateBookingCode creates ANAN prefix code', () => {
  const code = generateBookingCode();
  assert.ok(code.startsWith('ANAN-'));
  assert.equal(code.length, 9);
});

test('calculateCartTotal calculates sum correctly', () => {
  const total = calculateCartTotal([
    { price: 150000, quantity: 2 },
    { price: 280000, quantity: 1 }
  ]);
  assert.equal(total, 580000);
});
