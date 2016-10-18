// Relative paths should work:
// - https://github.com/oncletom/crx/blob/dd4a712d4531f699d1d74e0fa3991d399aac87be/README.md#module-api

const fs = require('fs');
const ChromeExtension = require('crx');

const crx = new ChromeExtension();

crx.load('./dummy-extension')
  .then(crx => crx.pack())
  .then(crxBuffer => {
    console.log('OK');
    fs.writeFileSync('dummy-extension.crx', crxBuffer);
  })
  .catch(err => {
    console.log('Error', err);
  });
