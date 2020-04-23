var a: 1 = 1;

type A = "a" | "b";

export function testSwitch(a: A) {
  switch (a) {
    case "a":
      break;
  }
}

export function unsafeReturn(): number {
  const a: any = 1;
  return a;
}

export function unsafeAssignment(): number {
  const a: any = 1;
  const b: number = a;
  return b;
}

export function unsafeMemberAccessAndCall(): number {
  const a: any = 1;
  a.foobar;
  a.foobar();
  return 1;
}
