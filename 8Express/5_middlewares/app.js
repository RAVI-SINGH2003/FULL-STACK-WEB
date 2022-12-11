// const express =require('express');
// const app = express();
// const logger =require('./logger') //importing logger

//req => middleware =>res

//for this route looger will not work because placed before app.use(logger)
// app.get('/',(req,res)=>{
  
    // res.send('Home');
// })
// app.use(logger); //add logger to all routes


// app.get('/about',(req,res)=>{
//     res.send('About');
// });
// app.get('/api',(req,res)=>{
//     res.send('Products');
// });
// app.get('/api',(req,res)=>{
//     res.send('products');
// });

// app.listen(5000,()=>{
//     console.log('server is listening on port 5000')

// })
//--------------------------------------------------------
// const express =require('express');
// const app = express();
// const logger =require('./logger') /*importing logger*/

// req => middleware =>res
// app.use('/api',logger); 

// /*now type localhost/api/anything here
// //it will be displayed by logger*/

// app.get('/',(req,res)=>{
  
//     res.send('Home');
// })
// app.get('/about',(req,res)=>{
//     res.send('About');
// });
// app.get('/api',(req,res)=>{
//     res.send('Products');
// });
// app.get('/api',(req,res)=>{
//     res.send('products');
// });

// app.listen(5000,()=>{
//     console.log('server is listening on port 5000')

// })

//-----------------------multiple middleware functions-------------
// const express =require('express');
// const app = express();
// const logger =require('./logger') 
// const authorize = require('./authorize')

// req => middleware =>res


// app.use([logger,authorize]);

// app.get('/',(req,res)=>{
  
//     res.send('Home');
// })

// app.get('/about',(req,res)=>{
//     res.send('About');
// });
// app.get('/api',(req,res)=>{
//     res.send('Products');
// });
// app.get('/api',(req,res)=>{
//     res.send('products');
// });

// app.listen(5000,()=>{
//     console.log('server is listening on port 5000')

// })

//----------------------------------------------------
// middle wares = our own(logger,authorize) express(app.use(express.static(./)))  thirdparty(morgan)