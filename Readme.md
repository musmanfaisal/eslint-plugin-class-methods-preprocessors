## <p align="center">eslint-plugin-class-methods-preprocessors</p>

This rule enforces you to add a preprocessor to class methods. It is inspired from object oriented programming patterns to enforce the use of preprocessors specially for methods

Examples for incorrect code

``` ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
// ---^ Pre processor missing for the class method
        return 'Hello World!';
    }
}
```

Correction

``` ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public getHello(): string {
        return 'Hello World!';
    }
}
```

### Installation instructions

Install the package as a dev dependancy
`npm i -D eslint-plugin-class-methods-preprocessors`

Add `eslint-plugin-class-methods-preprocessors` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

``` js
{
    "plugins": [
        ...
        "class-methods-preprocessors"
    ]
}
```

``` js
{
    "rules": {
        ...
        "class-methods-preprocessors/enforce-methods-preprocessors": "warn"
    }

```