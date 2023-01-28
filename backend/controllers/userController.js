import { User } from "../models/user.js";

export const addUser = async (req, res) => {
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const img = req.body.img;

  let newUser = new User({
    fullName,
    userName,
    email,
    password,
    img,
  });

  await newUser
    .save()
    .then((resu) => {
      res.json({
        isSuccess: true,
        result: resu,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        isSuccess: false,
        result: err,
      });
    });
};


export const updateUser = async (req, res) => {
    try {
        
        const user = await User.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                fullName: req.body.fullName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                img: req.body.img
            },
            {
                new:true
            }
            );

        if (user) {
            res.send({
                status: true,
                details: user  
            });
        } else {
            res.send({
                status: false,
            });
        }

    } catch (error) {
        console.log(error.messaga)
    }
}


export const deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete({ _id: req.body.id });
    res.send(user);
}


export const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.body.id });
    res.send(user);
}
export const getAllUsers = async (req, res) => {
    const user = await User.find({});
    res.send(user);
}