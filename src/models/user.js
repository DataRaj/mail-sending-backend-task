import db from "mongoose";

const listSchema = new db.Schema({
	title: String,
	customProperties: [
		{
			title: String,
			fallbackValue: String,
		},
	],
	timestamp: { type: Date, default: Date.now },
});

const List = mongoose.model("list", listSchema);
export default List;