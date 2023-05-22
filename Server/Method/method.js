import user from "../Modules/studentschema.js";

export const createstudent = async (req, res) => {
  
  const nuser = new user({
    name: req.body.name,
    course: req.body.course,
    age: req.body.age,
    contact: req.body.contact,
    email: req.body.email,
    fees: req.body.fees,
  });
  await nuser.save();
  console.log(nuser);
  res.json("Student created successfully!");
};

export const getstudent = async (req, res) => {
  console.log(req.body);
  const getall = await user.find();
  res.json(getall);
};

export const updatestudent = async (req, res) => {
  console.log(req.body);
  const updated = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const deletestudent = async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.json("Student deleted successfully!");
};
