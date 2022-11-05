var Menudb =require('../model/menu.model');

//create and save new Menu 
exports.create = (req, res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //new menu
    const menu = new Menudb({
        nomPlat: req.body.nomPlat,
        ingredient: req.body.ingredient,
        prixPlat: req.body.prixPlat
    })

    //save
    menu 
    .save(menu)
    .then(data=>{
        res.redirect('/add-menu');
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

        Menudb.findById(id)
        .then(data =>{
            if(!data) {
                res.status(400).send({message: "Not Found Menu xith id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving menu with id"+id})
        })
    }else{
        Menudb.find()
        .then(menu=>{
            res.send(menu)
        })
        .catch(err=>{
            res.status(500).send({ message: err.message|| "Error Occured while retriving menu information"})
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
    Menudb.findByIdAndUpdate(id, req.body, {menuFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message: `cannot update menu with ${id}. Maybe menu not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update Menu information"})
    })
}

//delete menu
exports.delete = (req, res) =>{
    const id = req.params.id;

    Menudb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message: "Menu delete successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete Menu with id"+id
        });
    });
}