const mongoose = require("mongoose");
const professionSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    categories: [
        {
            _id: Number,
            name: String,
            questions: [
                {
                    _id: Number,
                    question: String,
                    questionType: String,
                    questionTitle: String,
                    pushedQuestion: String,
                    isSkipAble: false,
                    choices: [
                        {
                            _id: Number,
                            option: String,
                            createdAt: { type: Date, default: Date.now },
                            updatedAt: { type: Date, default: Date.now },
                        },
                    ],
                    createdAt: { type: Date, default: Date.now },
                    updatedAt: { type: Date, default: Date.now },
                },
            ],
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const profession = mongoose.model("Profession", professionSchema);
module.exports = profession;

