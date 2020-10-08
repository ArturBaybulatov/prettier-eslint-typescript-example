const upper = s => s.toUpperCase();

function test(
  foo = 'lorem',
  bar = 'ipsum',
  baz = 'dolor',
  qux = 'sit',
  quux = 'amet',
) {
  return 123;
}

const ok = () => true;

const obj = {
  foo: 1,
  bar: 2,
  baz: 'hello',
  qux: ok ? 'yes' : 'no',
};
