


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


### GENERATE TOKEN REGISTER FORM 

***what is token ? 🎟️.***

a token is like a "ticket" or "proof" that represents something specific. Imagine you go to an arcade, and you exchange your money for small tokens or coins. These tokens can be used to play games in that arcade. Similarly, in various digital contexts, tokens can represent access rights, ownership, value, or any other sort of claim. They are like digital versions of those arcade tokens, but with many more uses

***cookie 🍪***

A "cookie" in the context of the web is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies are used to remember information about the user, such as login status, preferences, or items added to a shopping cart.

```js
// app.js file main file
    const token = await storeDataInDataBase.generateToken();

```

```js
// register file

new mongoose.Schema(
// we always need to create token in Schema 
  token:[{token:{type:String,required:true}}]
)

  const token = await jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
  this.token = this.token.concat({token:token});

   await this.save(); // save the token inside Schema .
  return token;

```

login doc

```js
const token = await userMail.generateToken();// userMail return ref of the new collection docs.extracted from same register file register.js because of same token ... file from app.js
```


---