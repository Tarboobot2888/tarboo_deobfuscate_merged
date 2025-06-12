export function deobfuscate(input: string): string {
  try {
    return Buffer.from(input, 'base64').toString('utf8');
  } catch {
    return input;
  }
}
