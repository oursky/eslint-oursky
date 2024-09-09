var a: 1 = 1;

type A = "a" | "b";

export function testSwitch(a: A) {
  switch (a) {
    case "a":
      break;
  }
}

var b = !!a;

export function thisFunctionIsHardToComprehend(a: number): boolean {
  const condA = a > 1;
  const condB = a > 2;
  const condC = a > 3;
  const condD = a > 4;
  const condE = a > 5;
  if (condA) {
    if (condB && !condC) {
      return condD;
    }
    if (condB) {
      return condC;
    }
    if (condD && !condC) {
      return condD;
    }
  } else if (!condB && condC) {
    if (condD) {
      return !condE;
    }
    if (!condE) {
      return !condD;
    }
  } else if (condD) {
    if (condB && !condC) {
      return condE;
    }
  }
  return condE;
}

// https://github.com/oursky/eslint-oursky/issues/43
export function issue43(a: "A" | "B"): number {
  switch (a) {
    case "A":
      return 1;
    case "B":
      return 2;
  }
}

export function issue53(unused: number): number {
  return 0;
}
