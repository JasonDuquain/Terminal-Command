const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (filename) => {
 
    fs.writeFile(`${filename}.txt`, `Hello I am ${filename}`, (err) => {
      if (err) {
        console.log(`there was an error: ${err}`)  
      } else {
          console.log(`File: ${filename} saved`);
      };
        
    });
    
};

module.exports.mkdir = (dirname) => {
  fs.mkdir(`./${dirname}`, (err) => {
      (err) ? console.log(`there was an error: ${err}`) : console.log(`Directory: ${dirname} saved`);
  });
};


           
           
           
           