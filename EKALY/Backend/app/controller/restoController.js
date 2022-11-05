var Restodb = require('../model/resto.model');

//create and save new resto
exports.create = (req, res)=>{
    //validate request
    if(!req.body) {
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    }

    //new resto
    const resto = new Restodb({
        nomResto: req.body.nomResto,
        adResto: req.body.adResto,
        numResto: req.body.numResto
    })

    //save
    resto
    .save(resto)
    .then(data=>{
        res.redirect('/add-resto');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured while creating a create operation"
        });

    });
    
}

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        
        Restodb.findById(id)
        .then(data => {
            if(!data) {
                res.status(400).send({message: "Not found Restaurant with id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving restaurant with id"+id})
        })

    }else{
        Restodb.find()
        .then(resto=>{
            res.send(resto)
        })
        .catch(err=>{
            res.status(500).send({ message:err.message || "Error Occured while retriving restaurant information"})

        })
    }
}

//update
exports.update = (req, res) =>{
    if (!req.body) {
        return res
        .status(400)
        .send({ message: "Data to update can not be empty"})
    }

    const id = req.params.id;
    Restodb.findByIdAndUpdate(id, req.body, {restoFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message: `cannot update restaurant with ${id}. Maybe restaurant not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update Restaurant information"})
    })
}

//delete 
exports.delete = (req, res) =>{
    const id = req.params.id;

    Restodb.findByIdAndDelete(id)
    .then(data=>{
        if (!data) {
            res.status(400).send({message: `Cannot Delete with id ${id}. Maybe id is Wrong`})
        }else{
            res.send({
                message: "Restaurant delete successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete Restaurant with id="+id
        });
    });
}