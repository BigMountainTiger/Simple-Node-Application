let {a, modify_a, write_a} = require('./experiment-module');
const obj = require('./experiment-module');


const direct_import = () => {

  modify_a('This is modified in the module');
  write_a();
  console.log(`The value of the imported variable remains - ${a}`);

  a = 'This is from the outside';
  console.log(a);
  write_a();
};

const object_import = () => {

  obj.modify_a('This is modified in the module');
  obj.write_a();
  console.log(`The value of the imported variable remains - ${obj.a}`);

  obj.a = 'This is from the outside';
  console.log(obj.a);
  obj.write_a();

};

(async () => {

  console.log('direct_import()');
  direct_import();

  console.log();
  
  console.log('object_import()');
  object_import();

})();
