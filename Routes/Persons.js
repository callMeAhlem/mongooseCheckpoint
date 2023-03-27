const express=require('express')
const router=express.Router()
const Person =require('../Models/Person')

//add person to db

router.post('/add',async (req,res)=>{
    try{
        let newPerson= new Person(req.body)
    let savedPerson= await newPerson.save()
    res.send({savedPerson,msg:"person added successefully"})
    } catch (error){
console.log(error)
    }
})


//get all persons

router.get('/all',async (req,res)=>{
    try{
    let allPersons= await Person.find()
    res.json({allPersons})
    } catch (error){
console.log(error)
    }
})

//get person by name or food

router.get('/:id',async (req,res)=>{
    try{
    let persons= await Person.find({$or:[{name:req.params.id},{favoriteFood:req.params.id},{_id:req.params.id}]})
    res.json({persons})
    } catch (error){
console.log(error)
    }
})

//delete by id
router.delete('/:id',async (req,res)=>{
    try{
    let persons= await Person.findByIdAndDelete(req.params.id)
    res.json({persons,msg:"person deleted"})
    } catch (error){
console.log(error)
    }
})

//update by id
router.put('/:id',async (req,res)=>{
    try{
    let persons= await Person.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
    res.json({msg:"person updated"})
    } catch (error){
console.log(error)
    }
})








module.exports=router


