const upper = (s: string) => s.toUpperCase();

function test(
  fooooooooo = 'lorem',
  baaaaaaaar = 'ipsum',
  baaaaaaaaaaaz = 'dolor',
) {
  console.log(fooooooooo, baaaaaaaar, baaaaaaaaaaaz);
  return 123;
}

try {
  JSON.parse('');
} catch {}

const fileReader = new FileReader();

const ok = () => true;

const obj = {
  foo: 1,
  bar: 2,
  baz: 'hello',

  qux: ok()
    ? 'yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees'
    : 'nooooooooooooooooooooooooooooooo',
};

console.log(upper('sdfg'));
console.log(test());
console.log(fileReader);
console.log(obj);
