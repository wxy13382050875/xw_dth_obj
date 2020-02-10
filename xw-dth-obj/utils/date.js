export const formatterDate = (time, format) => {
	var date = new Date(time);
	var year = date.getFullYear(),
		month = date.getMonth() + 1, //月份是从0开始的
		day = date.getDate(),
		hour = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();
	var preArr = Array.apply(null, Array(10)).map(function(elem, index) {
		return '0' + index;
	}); ////开个长度为10的数组 格式为 00 01 02 03
	var newTime = format.replace(/YY/g, year)
		.replace(/MM/g, preArr[month] || month)
		.replace(/DD/g, preArr[day] || day)
		.replace(/hh/g, preArr[hour] || hour)
		.replace(/mm/g, preArr[min] || min)
		.replace(/ss/g, preArr[sec] || sec);

	return newTime;

};

export const minusDate = (day) => {
	var format = "YY-MM-DD";
	var date1 = new Date(),
		time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate(); //time1表示当前时间
	var date2 = new Date(date1);

	date2.setDate(date1.getDate() + day);

	var year = date2.getFullYear(),
		month = date2.getMonth() + 1, //月份是从0开始的
		day = date2.getDate(),
		hour = date2.getHours(),
		min = date2.getMinutes(),
		sec = date2.getSeconds();

	var preArr = Array.apply(null, Array(10)).map(function(elem, index) {
		return '0' + index;
	}); ////开个长度为10的数组 格式为 00 01 02 03

	var newTime = format.replace(/YY/g, year)
		.replace(/MM/g, preArr[month] || month)
		.replace(/DD/g, preArr[day] || day)
		.replace(/hh/g, preArr[hour] || hour)
		.replace(/mm/g, preArr[min] || min)
		.replace(/ss/g, preArr[sec] || sec);

	return newTime;
};
