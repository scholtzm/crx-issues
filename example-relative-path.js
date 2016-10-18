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
