 // According to README, providing a key should be optional:
 // - https://github.com/oncletom/crx/blob/dd4a712d4531f699d1d74e0fa3991d399aac87be/README.md#crx--new-chromeextensionattrs
 // - https://github.com/oncletom/crx/blob/dd4a712d4531f699d1d74e0fa3991d399aac87be/README.md#crx-keygen-directory

const fs = require('fs');
const path = require('path');
const ChromeExtension = require('crx');

const crx = new ChromeExtension();

crx.load(path.join(process.cwd(), 'dummy-extension'))
  .then(crx => crx.pack())
  .then(crxBuffer => {
    console.log('OK');
    fs.writeFileSync('dummy-extension.crx', crxBuffer);
  })
  .catch(err => {
    console.log('Error', err);
  });
