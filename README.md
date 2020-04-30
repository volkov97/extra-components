# Tech Notes UI Components

UI components library.

## Stand

[Here](#) you can get a stand with all components.

**Are you using ts-loader?**

You should install ts-import-plugin. Then you need to add ts-loader options in webpack.

```
const tsImportPluginFactory = require('ts-import-plugin');
...
{
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryName: 'slim-components',
          libraryDirectory: name => `components/${name}`,
          camel2DashComponentName: false,
          transformToDefaultImport: false,
        }),
      ],
    }),
  },
},
```
