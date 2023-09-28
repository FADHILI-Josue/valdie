## Valdie
[![CI](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml/badge.svg)](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml)
![npm](https://img.shields.io/npm/v/valdie.svg?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/valdie?style=flat-square)


A TypeScript and JavaScript Validation Library that  works

 - 🎉 It doesn't have any dependancy  
 - 💪 Simple api 
 - 📦 It works with TypeScript


You probably never knew you needed it but here you go.


### Getting started

```bash
npm i valdie
```
or 

```bash
yarn add valdie
```

using deno

```bash
import valdie from 'https://cdn.skypack.dev/valdie'
```


### Documentation

1. <a href="#isemail">`isEmail`</a>
2. <a href="#isInteger">`isInteger`</a>
3. <a href="#isString">`isString`</a>
4. <a href="#isURL">`isURL`</a>
5. <a href="#isDistinct">`isDistinct`</a>
6. <a href="#isIPv4">`isIPv4`</a>
7. <a href="#isUuid">`isUuid`</a>


### They are two ways of consuming our api

```javascript

import { isEmail } from "valdie"

console.log(isEmail("test@test.com")) // true
let { message,success } = isEmail("test@gmail.com")
```

### isInteger

```javascript
console.log(isInteger(34)) // true
```

### isDistinct

```js

import { isDistinct } from "valdie"

console.log(isDistinct(["true", "false", "yes", "no"]));  // true
let { message,success } = isDistinct([1, 2, 3, 4, 5]);

```
### isIPv4
Version 4 IP addresses (IPv4) validator 
```ts
import { isIPv4 } from "valdie"

// sample
console.log( isIPv4('192.168.0.3') ) // { success : true }
console.log( isIPv4('rrtr3345') )  // { message : "rrtr3345 is not a valid IPv4" , success : false } 

// usage 
const myIp : string = "192.168.1.1"
const  { message , success } =  isIPv4(myIp)

if(success) 
    console.log("myIp is an IPv4 address")
else 
    console.log("It's not an IPv4 address")
```

### isUuid

```ts
import { isUuid } from "valdie"

// sample

console.log(isUuid('34483ae5-8a6b-4965-9384-cd0ce0191e84')) // { success : true }
console.log( isUuid('helloworld') )  // { message : "helloworld is not a valid uuid" , success : false } 

// usage 

function generateRandomUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8); // 
        return v.toString(16);
    });
}
const  { message , success } =  isUuid(generateRandomUuid())

if(success) 
    console.log("this is a valid uuid")
else 
    console.log("It's not a valid uuid")

// or 
import valdie from "valdie"

const result = valdie('String to test').isString().isUuid();

```

## Maintainers

- [@veritem](https://github.com/veritem)
- [@PatrickNiyogitare28](https://github.com/PatrickNiyogitare28)

#### Licence

The project is under [MIT](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/LICENSE) Licence 2021
