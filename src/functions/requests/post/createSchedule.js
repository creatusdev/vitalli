import axios from "axios";

export default function createSchedule(callback, data = undefined) {
	axios({
		method: "post",
		url: "/schedule/create",
		data: data,
	})
		.then(async (response) => {
			callback(response);
		})
		.catch(function (error) {
			callback(error);
		});
}
