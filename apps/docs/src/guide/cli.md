# Command Line Interface

Install the package globally:

::: code-group

```bash [npm]
npm install -g TARBOO DEOBFUSCATE JS
```

```bash [yarn]
yarn global add TARBOO DEOBFUSCATE JS
```

```bash [pnpm]
pnpm add -g TARBOO DEOBFUSCATE JS --allow-build=isolated-vm
```

:::

```txt
Usage: TARBOO DEOBFUSCATE JS [options] [file]

Arguments:
  file                 input file, defaults to stdin

Options:
  -V, --version        output the version number
  -o, --output <path>  output directory for bundled files
  -f, --force          overwrite output directory
  -m, --mangle         mangle variable names
  --no-jsx             do not decompile JSX
  --no-unpack          do not extract modules from the bundle
  --no-deobfuscate     do not deobfuscate the code
  --no-unminify        do not unminify the code
  -h, --help           display help for command
```

The code can be passed as a file or via stdin:

```bash
TARBOO DEOBFUSCATE JS input.js
# or download/pipe a script from a website
curl https://pastebin.com/raw/ye3usFvH | TARBOO DEOBFUSCATE JS
```

By default it outputs debug logs and the deobfuscated/unminified code to the terminal.
To write the code to a file, you can do:

```bash
TARBOO DEOBFUSCATE JS input.js > output.js
```

## Unpack Bundles

Use the `-o` option to unpack a bundle into a directory:

```bash
TARBOO DEOBFUSCATE JS bundle.js -o output
```

The output directory will contain the following files:

- `deobfuscated.js` - deobfuscated/unminified code
- `bundle.json` - bundle type and module ids/paths
- `index.js` - entry point
- all remaining modules (`1.js`, `2.js`, etc.)

## Invoke from other programming languages

If the package is installed locally instead of globally, the path of the CLI would look like `node_modules/.bin/TARBOO DEOBFUSCATE JS`.

Spawn a new process where the code is piped to stdin.
The logs will be written to stderr and the output code will be written to stdout.

Example in Python:

```py
import subprocess

code = "1+1"
result = subprocess.run(
    ["TARBOO DEOBFUSCATE JS"], input=code, capture_output=True, text=True
)
print(result.stdout)
```
