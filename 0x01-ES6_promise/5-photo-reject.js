const fs = require('fs');

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filename)) resolve(); else reject(Error(`${filename} cannot be processed`));
  });
}
