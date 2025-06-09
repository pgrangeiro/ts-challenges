# Setting absulote imports

## tsconfig.json file

The `tsconfig.json` file specifies the project compilation options and root files.

## Absolute imports

In order to configure absolute imports, add the following line on `tsconfig.json`

```json
{
  "compilerOptions": {
    //...
    "baseUrl": "./"
  }
}
```
