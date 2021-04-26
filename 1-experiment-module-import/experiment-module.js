console.log('The module is being loaded only once');

let a = 'This is assigned in the module';

const modify_a = (s) => {
  a = s;
};

const write_a = () => {
  console.log(a);
};

exports.modify_a = modify_a;
exports.write_a = write_a;
exports.a = a;
