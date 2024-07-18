import StudentModel from "../models/studentSchema.js";

const readController = async (req, res) => {
  try {
    const results = await StudentModel.find({});
    if (results) {
      res.render("read", { results });
    } else {
      res.render("read");
    }
  } catch (error) {
    console.log(error);
  }
};

export { readController };
