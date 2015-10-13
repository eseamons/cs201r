var argv = process.argv.slice(2);
var result = 0;

for(i = 0; i < argv.length;i++) {
    result += Number(argv[i]);
}

console.log(result);