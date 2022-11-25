const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-sequence")(mongoose);
const mongooseDelete = require("mongoose-delete");

const Activity = new Schema(
  {
    _id: { type: Number },
    activityName: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    _id: false,
    timestamps: true,
  }
);

// add plugin
Activity.plugin(autoIncrement);
Activity.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

// Activity.pre("save", function (next) {
//   let record = this;
//   mongoose
//     .model("activities", Activity)
//     .countDocuments(function (error, counter) {
//       if (error) return next(error);
//       record.id = counter + 1;
//       next();
//     });
// });

module.exports = mongoose.model("Activity", Activity);
