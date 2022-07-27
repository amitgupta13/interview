const obj = {
  a: "abc",
  b: "def",
  c: function () {
    console.log(`${this.a}${this.b}`);
  },
};

obj.c();

function test() {
  return this.c();
}

test.bind(obj)();
