// 	百度搜索
// 	谷歌搜索
// 	知乎搜索
// 	极客时间搜索: https://time.geekbang.org/search?q=
//  q=卖桃者说428 https://time.geekbang.org/search?q=%E5%8D%96%E6%A1%83%E8%80%85%E8%AF%B4%20428
//  category=product //课程
//  category=article //课程内容
//  category=daily //每日一课

export const SEARCH_LIST = [
	{
		type: "bing",
		name: "必应",
		url: "https://cn.bing.com/search?q=",
		embeddable: true
	},
	{
		type: "baidu",
		name: "百度",
		url: "https://www.baidu.com/s?wd="
	},
	{
		type: "google",
		name: "谷歌",
		url: "https://www.google.com/search?q="
	},
	{
		type: "zhihu",
		name: "知乎",
		url: "https://www.zhihu.com/search?type=content&q=",
		subTypes: [
			{
				param: "type",
				type: "content",
				name: "综合"
			},
			{
				param: "type",
				type: "topic",
				name: "话题"
			},
			{
				param: "type",
				type: "km_general",
				name: "盐选内容"
			}
		]
	},
	{
		type: "jikeshijian",
		name: "极客时间",
		url: "https://time.geekbang.org/search?q=",
		subTypes: [
			{
				param: "category",
				type: "product",
				name: "课程"
			},
			{
				param: "category",
				type: "article",
				name: "课程内容"
			},
			{
				param: "category",
				type: "daily",
				name: "每日一课"
			}
		]
	}
];
export const getSearchType = (type: string) => {
	let result: any = {};
	for (let i = 0, l = SEARCH_LIST.length; i < l; ++i) {
		if (SEARCH_LIST[i].type === type) {
			result = SEARCH_LIST[i];
			break;
		}
	}
	return result;
};
export const getSearchUrl = (type: string) => {
	return getSearchType(type)?.url || "";
};
