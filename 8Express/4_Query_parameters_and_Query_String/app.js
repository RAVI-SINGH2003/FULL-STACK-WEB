// const express = require('express');
// const app = express();
// const {products} = require('./data.js');

// app.get('/',(req,res)=>{
//     res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products',(req,res)=>{
//    const newProducts = products.map((product)=>{
//     const {id,name,image} = product;
//     return {id,name,image};
//    })
//    res.json(newProducts);
// });
// app.get('/api/products/1',(req,res)=>{
//     const singleproduct = products.find((product)=> product.id===1);
//     res.json(singleproduct);
// })

// app.listen(8000);

//--------------- instead of using '/api/products/1' for each item we use params -----------------
const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/',(req,res)=>{
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
   const newProducts = products.map((product)=>{
    const {id,name,image} = product;
    return {id,name,image};
   })
   res.json(newProducts);
});

//query parameters 
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(typeof req.params ,req.params);
    const {productID} = req.params; 
    const singleproduct = products.find((product) => product.id ===Number(productID));
    if(!singleproduct){
        return res.status(404).send('product does not exist');
    }
    res.json(singleproduct);
});

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    // console.log(req.params);
    const {productID ,reviewID}  = req.params;
    console.log(productID,reviewID);
    res.send('hello world');
});

//query string : http://localhost:8000/api/v1/query?search=a&limit=2
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query); /* { search: 'a', limit: '2' } */
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts =sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
       return res.status(200).send('no products matched your search');
        // or
        // return res.status(200).json({success:'true',data:[]});
    }

    res.status(200).json(sortedProducts)
})
app.listen(8000);