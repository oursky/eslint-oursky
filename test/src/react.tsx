import React, { FC, FunctionComponent, forwardRef } from "react";

export const Component1: React.FC = function () {
  return null;
};

export const Component2: React.FunctionComponent = function () {
  return null;
};

export const Component3: FC = function () {
  return null;
};

export const Component4: FunctionComponent = function () {
  return null;
};

export function Component5() {
  const props = {};
  return <div {...props} {...props} />;
}

export const Component6 = forwardRef((props) => {
  return null;
});
