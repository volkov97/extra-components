# Extra UI

UI components and tools based on React.

## Stand

[Here](https://extra-ui.now.sh/) you can get a stand with all components.

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
          libraryName: 'extra-ui',
          libraryDirectory: name => `components/${name}`,
          camel2DashComponentName: false,
          transformToDefaultImport: false,
        }),
      ],
    }),
  },
},
```
