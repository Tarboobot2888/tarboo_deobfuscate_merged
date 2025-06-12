export function deobfuscate(input: string): string {
  return input.replace(/;/g, ';\n');
}
