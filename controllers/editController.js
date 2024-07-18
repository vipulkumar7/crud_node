import StudentModel from "../models/studentSchema.js";

const editController = async (req, res) => {
  try {
    const result = await StudentModel.findById(req.params.id);
    if (result) {
      res.render("edit", { result });
    } else {
      res.render("edit");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateController = async (req, res) => {
  try {
    const updatedRecord = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedRecord) {
      res.redirect("/read");
    } else {
      res.redirect("/read");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteController = async (req, res) => {
  try {
    const deletedItem = await StudentModel.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      res.redirect("/read");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export { editController, updateController, deleteController };
