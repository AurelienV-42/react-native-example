const fs = require('fs');

const directories = ['images/logo', 'images/UI'];
const imageFileNames = (dir) => {
  const array = [];
  fs.readdirSync(dir).map((file) => {
    if (file.endsWith('.png')) {
      file = file.replace('.png', '');
      array.push(file);
    }
  });
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = '';
  directories.forEach((directory) => {
    properties += '// ' + directory + '\n  ';
    properties += imageFileNames('assets/' + directory)
      .map((name) => {
        return `${name}: require('./${directory}/${name}.png')`;
      })
      .join(',\n  ');
    properties += ',\n\n  ';
  });

  const string = `const images = {
  ${properties.substring(0, properties.length - 4)}
};

export default images;
`;

  fs.writeFileSync('assets/index.js', string, 'utf8');
};

generate();
