module.exports = {
  project: {
    ios: {sourceDir: './ios'}, // To avoid a warning. https://stackoverflow.com/questions/74137001/error-installing-cocoapods-dependencies-when-initiating-new-react-native-project
    android: {},
  },
  assets: ['./assets/fonts/'],
};
