


## FILE STRUCTURE
```

            |-------> node module
            |-------->public
            |-------->src
                        |
                        |------> db 
                                  | ------> conn.js
                        |-------> models
                                   |-------> register.js
                        |--------> router           
                        |---------> template
                                        |------> parials
                                                     |------> header.hbs
                                                     |-------> navBar.hbs
                                                     |--------> script.hbs
                                        |--------> views             
                                                    |------> index.hbs
                                                    |-------> login.hbs
                                                    |-------->register.hbs
             |------>package-lock.json
             |-------> package.json
        

```

<!-- BCRYPT -->
### BCRYPT 



**Bcrypt.js** is a JavaScript library that provides an optimized implementation of the **bcrypt** algorithm in pure JavaScript . It is compatible with the C++ bcrypt binding on node.js and also works in the browser . The library is designed to hash passwords securely and protect against rainbow table attacks . 

The bcrypt algorithm is an adaptive function that can be made slower over time by increasing the iteration count, making it resistant to brute-force search attacks even with increasing computation power . The maximum input length is 72 bytes, and the length of generated hashes is 60 characters . 

The library is compatible with CommonJS and AMD loaders and is exposed globally as `dcodeIO.bcrypt` if neither is available . In node.js, the inbuilt crypto module's randomBytes interface is used to obtain secure random numbers, while in the browser, bcrypt.js relies on Web Crypto API's getRandomValues interface to obtain secure random numbers . 

Here's an example of how to use bcrypt.js to hash a password:

```javascript
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('password', salt);
```

To check a password, you can use the `compareSync` method:

```javascript
const result = bcrypt.compareSync('password', hash); // returns true
```

You can also use the asynchronous versions of these methods (`genSalt`, `hash`, and `compare`) if you prefer .

```javascript
// This is hashPassword code . at Model file register.
schemaRegister.pre("save", async function(next){
    // this.isModified bascially checks that Is a new register password or upadating user password ?
if(this.isModified('password')){
//   console.log(`${this.password}`);
   this.password =await bcrypt.hash(this.password,10);
   this.cpassword =undefined;
//    console.log(`${this.password}`);
}
  next();
})
```
```javascript

const isMatched = await bcrptjs.compare(password,userMail.password)

// is matched returns the true false .

```

[ <u>click here to explore about BCRYPT </u>](https://www.npmjs.com/package/bcryptjs)

## NODE JS AUTHENTICATION AND COOKIES 
```npm
npm i jsonwebtoken
```
JSON Web Token is a standard used to create access tokens for an application.

[ CLICK HERE TOLERN MORE ABOUT JWT AUTHENTICATION  ](https://flaviocopes.com/jwt/)



example:-

```javascript
const jwt = require("jsonwebtoken");

const createToken = async()=>{
const token = await jwt.sign({_id:"6502d1d3d67300f439ee0567"} ,"thisiasecretkeywebtokentoauthenticateuser",{expireIn:"2 seconds"})
console.log(token)

const userVerification = await jwt.verify(token,"thisiasecretkeywebtokentoauthenticateuser");

}

createToken();

```
payload  

***JWT SECRET*** 
JWT secret key is a `cryptographic` string used to sign JSON Web Tokens (JWT). It ensures the `token's integrity`, prevents tampering, and verifies the sender's `authenticity` in secure communications.

secret key length min length 32 character

[ https://github.com/auth0/node-jsonwebtoken  JSON WEB TOKEN ](https://github.com/auth0/node-jsonwebtoken)

[CLICK HERE TO FIND ](https://jwt.io/introduction)


