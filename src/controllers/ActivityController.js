const Activity = require("../models/Activity");

class ActivityController {
  // [GET]
  index(req, res) {
    Activity.find({}, (error, activity) => {
      if (!error)
        res.json({
          statusCode: 10201,
          message: "Create activity successfully",
          data: activity,
        });
      else
        res.json({
          statusCode: 10401,
          message: "Get activity failure",
          data: null,
        });
    });
  }
  // [POST]
  async store(req, res) {
    if (Object.keys(req.body).length > 0) {
      const activity = new Activity(req.body);
      try {
        const response = await activity.save();
        res.json({
          statusCode: 10202,
          message: "Create activity successfully",
          data: response,
        });
      } catch (err) {
        res.json({
          statusCode: 10402,
          message: "Create activity failure",
          data: null,
        });
      }
    }
  }
  // [GET]
  async edit(req, res) {
    const { id } = req.params;
    try {
      const response = await Activity.findOne({ _id: id }).exec();
      res.json({
        statusCode: 10203,
        message: "Get detail activity successfully",
        data: response,
      });
    } catch (e) {
      res.json({
        statusCode: 10403,
        message: "Get detail activity failure",
      });
    }
  }
  // [PUT]
  async update(req, res) {
    const { id } = req.params;
    try {
      const response = await Activity.updateOne({ _id: id }, req.body).exec();
      res.json({
        statusCode: 10204,
        message: "Update activity successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 10404,
        message: "Update activity failure",
      });
    }
  }
  // [DELETE]
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Activity.delete({ _id: id }, req.body).exec();
      await res.json({
        statusCode: 10204,
        message: "Delete activity successfully",
      });
    } catch (err) {
      res.json({
        statusCode: 10404,
        message: "Delete activity failure",
      });
    }
  }
}

module.exports = new ActivityController();
