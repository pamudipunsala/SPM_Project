const express = require('express');
const Dteam = require('../models/Dteam');

const router = express.Router();

//add delivery team
router.post('/dteam/add', (req,res) => {
    let newTeam = new Dteam(req.body);

    newTeam.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Team added successfully!"
        });
    });
});

//retrive all delivery teams details
router.get('/dteams', (req,res) => {
    Dteam.find().exec((err, teams) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDteam:teams
        });
    });
});

//get specific delivery team details
router.get("/dteam/:id", (req,res) => {
    let teamcode = req.params.id;

    Dteam.findById(teamcode, (err,teams) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            teams
        });
    });
});

//update team details
router.put('/dteam/update/:id',(req,res)=>{
    Dteam.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
}); 

//delete specific team details
router.delete('/dteam/delete/:id',(req,res)=>{
    Dteam.findByIdAndRemove(req.params.id).exec((err,deleteTeam)=>{
        if(err) return res.status(400).json({
            message:"Couldn't Delete Team",err
        });
        return res.json({
            message:"Team Deleted successfully", deleteTeam
        });
    });
});

module.exports = router;
