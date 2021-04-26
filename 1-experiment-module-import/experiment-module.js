let a = 'This is assigned in the module';

const modify_a = () => {
  a = 'Modifyed in the module';
};

const write_a = () => {
  console.log(a);
};

exports.modify_a = modify_a;
exports.write_a = write_a;
exports.a = a;
