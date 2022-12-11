const express = require('express')
const mongoose  = require('mongoose');
const app = express();
app.use(express.urlencoded({extended : false}))
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/Sample').then(()=>{
    console.log("Connected mongodb");
}).catch((err)=>{ console.log(err)})


//creating schema
const productSchema = mongoose.Schema({
    name : String,
    description :String,
    price:Number
})

//creating model
const Product = new mongoose.model('Product',productSchema);

//creating api to create product
app.post("/api/v1/product/new",async(req,res)=>{
   const product  = await Product.create(req.body);
   res.status(201).json({
    success :true,
    product
   })
})

//Read product 
app.get("/api/v1/products",async(req,res)=>{
    const products = await Product.find();
    res.status(200).json({
       success : true,
       products
    })
})

//update products 
app.put("/api/v1/product/:id",async (req,res)=>{
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success :false,
            message :"Product not found"

        })
    }
    
    product = await Product.findByIdAndUpdate( req.params.id,req.body,{
      new :true,
      useFindAndModify:true,
      runValidators :true
    })
    
    res.status(200).json({
        success :true,
        product
    })
})

//delete products
app.delete('/api/v1/product/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success :false,
            message :"Product not found"

        })
    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"Product is deleted succcessfully"
    })
})



app.listen(8000, '127.0.0.1',()=>{
    console.log("listening")
})