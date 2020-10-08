const upper = s => s.toUpperCase();

function test(
  fooooooooo = 'lorem',
  baaaaaaaar = 'ipsum',
  baaaaaaaaaaaz = 'dolor',
) {
  console.log(fooooooooo, baaaaaaaar, baaaaaaaaaaaz);
  return 123;
}

try {
  window.xxx();
} catch {}

const ok = () => true;

const obj = {
  foo: 1,
  bar: 2,
  baz: 'hello',

  qux: ok
    ? 'yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees'
    : 'nooooooooooooooooooooooooooooooo',
};

console.log(upper('sdfg'));
console.log(test());
console.log(obj);
