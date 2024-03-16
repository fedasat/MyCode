const Ricetta = require('../model/RicettaModel')

exports.createRicetta=async(req,res) => {
    const patientName=req.body.patientName;
    const  patientAge=req.body.patientAge;
    const  patientSex=req.body.patientSex;
    const drug=req.body.drug;
    const usageTime=req.body.usageTime;
    const  usage=req.body.usage;
    const  usePeriod=req.body.usePeriod;
    const note=req.body.note;
    const  date=req.body.date;
    const  doctor=req.body.doctor;
       
   await Ricetta.create({
    patientName:patientName,
    patientAge:patientAge,
    patientSex:patientSex,
    drug:drug,
    usageTime:usageTime,
    usage:usage,
    usePeriod:usePeriod,
    note:note,
    date:date,
    doctor:doctor,
   }).then((Ricetta)=>{
       res.json({
           msg:"User Created ",
           state:1,
           data:Ricetta
       })
   }).catch((err=>{
       res.json({
           msg:"Server Error",
           state:0
       })
   }))
}

exports.UpdateRicetta = async (req, res) => {
    try {
        await Ricetta.findOneAndUpdate({ _id: req.params.id }, {
            state: true
        }).then(() => {
            res.json({
                msg: "User update ",
                state: 1,
                data: []
            })
        }).catch(error => {
            console.log(error)
            res.json({
                msg: "Internal server error",
                state: 0,
                data: []
            })
        })
    }
    catch (error) {
        console.log(error)
        res.json({
            msg: "Internal server error",
            state: 0,
            data: []
        })
    }
}

exports.DeleteRicetta = async (req, res) => {
    await Ricetta.deleteOne({ _id: req.params.id })
        return res.json({
                msg: "Ricetta deleted ",
                state: 1,
                data:[]
            })
        }
    

