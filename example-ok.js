const fs = require('fs');
const path = require('path');
const ChromeExtension = require('crx');

const crx = new ChromeExtension({
  privateKey: fs.readFileSync('key.pem')
});

crx.load(path.join(process.cwd(), 'dummy-extension'))
  .then(crx => crx.pack())
  .then(crxBuffer => {
    console.log('OK');
    fs.writeFileSync('dummy-extension.crx', crxBuffer);
  })
  .catch(err => {
    console.log('Error', err);
  });
