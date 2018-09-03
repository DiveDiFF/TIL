import { unlink } from 'fs';

setInterval(() => {
  unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
