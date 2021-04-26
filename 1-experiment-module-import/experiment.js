let {a, modify_a, write_a} = require('./experiment-module');

(async () => {

  modify_a('This is modified in the module');
  write_a();
  console.log(`The value of the imported variable remains - ${a}`);

  a = 'This is from the outside';
  console.log(a);
  write_a();

})();
