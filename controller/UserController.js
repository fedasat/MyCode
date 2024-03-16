const Users = require('../model/UserModel');

exports.CreateUser=async function (req, res) {
 
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const phone = req.body.phone;
    const location = req.body.location;
    const image = req.body.image;
    const jobTitle = req.body.jobTitle;
    const specialization = req.body.specialization;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    await Users.create({
        firstName: firstName,
        secondName: secondName,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        phone: phone,
        location: location,
        image: image,
        jobTitle: jobTitle,
        specialization: specialization,
        password: password,
        confirmPassword: confirmPassword
    }).then((Users) => {
        console.log(Users);
        res.json({
            msg: "User Created ",
            state: 1,
            data: Users
        });
    }).catch((err => {

        res.json({
            msg: "Server Error",
            state: 0
        });
    }));
}



exports.SignUpUser=async function (req, res) {
 
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const phone = req.body.phone;
    const location = req.body.location;
    const image = req.body.image;
    const jobTitle = req.body.jobTitle;
    const specialization = req.body.specialization;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    await Users.create({
        firstName: firstName,
        secondName: secondName,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        phone: phone,
        location: location,
        image: image,
        jobTitle: jobTitle,
        specialization: specialization,
        password: password,
        confirmPassword: confirmPassword
    }).then((Users) => {
        console.log(Users);
        res.json({
            msg: "User Created ",
            state: 1,
            data: Users
        });
    }).catch((err => {

        res.json({
            msg: "Server Error",
            state: 0
        });
    }));
}


exports.LoginUser = (req,res) => {
    const email= req.body.email;
    const password= req.body.password;

    // عملية التحقق من البيانات المبعوثة من المستخدم في حالة انه يكونو فاضيات
    if(email.trim() ==""|| password.trim() =="" ){
        return res.json({
            msg:"الرجاء تعبئة البيانات ",
            state:0  
        })
    } 
//التحقق من البيانات بأنه يكون الحقول الزوز مكتوب فيهم الي مكتوب بين قوسين 
if(email =="eda" && password =="12345678" ){
        return res.json({
            msg:"أهلا وسهلا بك ",
            state:1 
        })
    } 
    res.json({
        msg:'كلمة المرور أو اسم المستخدم التي ادخلته غير صحيح ',
        state:0
    })   
}

exports.getall = async (req, res) => {
    try {
        const User = await Users.find();
        if (Users) {
            return res.json({
                msg: "can't find ",
                state: 1,
                data: User
            })
        }
        res.json({
            msg: "can't find any task and something  not work",
            state: 0,
            data: User
        })
    }
    catch (error) {
   
        res.json({
            msg: "Internal Server Error",
            state: 1,
            data: []
        })
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        await Users.findOneAndUpdate({ _id: req.params.id }, {
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

exports.DeleteUser = async (req, res) => {
    await Users.deleteOne({ _id: req.params.id })
        return res.json({
                msg: "user deleted ",
                state: 1,
                data:[]
            })
        }
    

