import StudentModel from "../models/studentSchema.js";

const homeController = async (req, res) => {
  res.render("index");
};

const createController = async (req, res) => {
  const { name, email, city, contact } = req.body;
  const result = await StudentModel({ name, email, city, contact });
  if (result) {
    await result.save();
    console.log("Data saved in DB");
  } else {
    console.log("Data not saved in DB");
  }
  res.render("index");
};

export { homeController, createController };
