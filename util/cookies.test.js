import {
  deleteCookie,
  getParsedCookie,
  setParsedCookie,
  stringifyCookieValue,
} from './cookies';

test('stringify a cookie value', () => {
  expect(stringifyCookieValue({ 1: 10, 2: 15 })).toBe('{"1":10,"2":15}');
});

test('set, gets', () => {
  const cookie = {
    key: 'night',
    value: [{ id: '1', eatCounter: 2 }],
  };
  // First, make sure that the return value of the function is undefined
  // Use .toBe to compare primitive values or to check referential identity of object instances
  expect(getParsedCookie(cookie.key)).toBe(undefined);

  expect(() => setParsedCookie(cookie.key, cookie.value)).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
