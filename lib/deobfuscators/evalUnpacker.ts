export function deobfuscate(input: string): string {
  try {
    // Evaluate the string safely using Function constructor
    return Function(`"use strict"; return (${input});`)();
  } catch {
    return input;
  }
}
