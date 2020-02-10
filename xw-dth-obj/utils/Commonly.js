//根据region 获取对应的label
export const getRegionText = (region) => {
	let regionTxt = "";
	regionData.forEach(items => {
		items.children.forEach(chil => {
			if (region == chil.value) {
				regionTxt = chil.label;
			}
		});
	});
	return regionTxt;
}

//将查询到的商品归组
const goodsGroup = (arr) => {
	var map = {},
		dest = [];
	for (var i = 0; i < arr.length; i++) {
		var ai = arr[i];
		if (!map[ai.declareNo]) {
			dest.push({
				declareNo: ai.declareNo,
				name: ai.name,
				data: [ai]
			});
			map[ai.declareNo] = ai;
		} else {
			for (var j = 0; j < dest.length; j++) {
				var dj = dest[j];
				if (dj.declareNo == ai.declareNo) {
					dj.data.push(ai);
					break;
				}
			}
		}
	}
	return dest;
}

//计算商品的总价
export const total = (data) => {
	if (data == null) {
		return [];
	}
	let rs = goodsGroup(data);
	rs.forEach(items => {
		var totalWeight = 0;
		var amount = 0;
		var count = 0;
		var region = "";
		var datetime = "";
		var vehicleNo = "";
		items.data.forEach(item => {
			amount += item.amount;
			totalWeight += item.weight;
			count++;
			datetime = item.datetime;
			vehicleNo = item.vehicleNo;
		});
		items.totalWeight = totalWeight;
		items.totalAmount = amount;
		items.count = count;
		items.status = "已申报";
		items.region = region;
		items.vehicleNo = vehicleNo;
		items.datetime = datetime;
	});
	return rs;
};


