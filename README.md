# Example repo for issues with `crx` package

These examples demonstrate current issues with [crx package](https://www.npmjs.com/package/crx).

## Output

```sh
$ node example-missing-key.js
Error Impossible to generate a public key: privateKey option has not been defined or is empty.

$ npm run get-key

> crx-issue@1.0.0 get-key .
> crx keygen .

Key file has been generated at ./key.pem

$ node example-relative-path.js
Error { Error: Cannot find module 'dummy-extension/manifest.json'
   at Function.Module._resolveFilename (module.js:469:15)
   at Function.Module._load (module.js:417:25)
   at Module.require (module.js:497:17)
   at require (internal/module.js:20:19)
   ... }

$ node example-ok.js
OK
```

## LICENSE

Public domain.
