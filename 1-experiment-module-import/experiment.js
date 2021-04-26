let {a, modify_a, write_a} = require('./experiment-module');

(async () => {

  modify_a();
  write_a();
  console.log(`The value of the imported variable remains - ${a}`);

  a = 'This is outside';
  console.log(a);
  write_a();
  
})();
