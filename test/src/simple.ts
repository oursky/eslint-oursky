var a: 1 = 1;

type A = "a" | "b";

export function testSwitch(a: A) {
  switch (a) {
    case "a":
      break;
  }
}

var b = !!a;
