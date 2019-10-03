var program = require('commander');

program.version('0.0.2')
    .option('-s, --source [web site]', 'Source website')
    .option('-f, --file [file name]', 'File name')
    .parse(process.argv);

console.log(program.source);
console.log(program.file);
