import React from "react";

const StyleSheet = {
  create: <T extends Record<string, unknown>>(input: T): T => input,
};

const styles = StyleSheet.create({
  used: {
    color: "blue",
  },
  unused: {
    color: "green",
  },
});

function View(_props: { style?: unknown; children?: React.ReactNode }): null {
  return null;
}

function Text(_props: { style?: unknown; children?: React.ReactNode }): null {
  return null;
}

export function Component() {
  return (
    <View style={{ padding: 8 }}>
      <Text style={styles.used}>Hello</Text>
      <Text style={[styles.used]}>World</Text>
    </View>
  );
}
