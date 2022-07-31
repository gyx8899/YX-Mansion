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
		embeddable: true,
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
export const SEARCH_SITES = [
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687628081-bilibili.png",
		name: "Bilibili",
		url: "https://www.bilibili.com/",
		type: "bilibili"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/src=http _img3.doubanio.com_lpic_s26866793.jpg&amp;refer=http _img3.doubanio.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg.jpg",
		name: "CSDN",
		url: "https://www.csdn.net/",
		type: "csdn"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo_87_87.png",
		name: "牛客网",
		url: "https://www.nowcoder.com/",
		type: "nowcoder"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1609848636738-IMG_1307(20210105-200954).JPG",
		name: "LeetCode",
		url: "https://leetcode-cn.com/",
		type: "leetcode"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610280843910-510.png",
		name: "51CTO",
		url: "https://www.51cto.com/",
		type: "51cto"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687861229-jianshu.jpg",
		name: "简书",
		url: "https://www.jianshu.com/",
		type: "jianshu"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610688420833-infoq.jpg",
		name: "InfoQ",
		url: "https://www.infoq.cn",
		type: "infoq"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610941467025-juejin(1).png",
		name: "掘金",
		url: "https://juejin.cn/",
		type: "juejin"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/tzbv3-ez9gg.png",
		name: "思否",
		url: "https://segmentfault.com/",
		type: "segmentfault"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610688246707-openchina.png",
		name: "开源中国",
		url: "https://www.oschina.net/",
		type: "oschina"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610940860862-bokeyuan.png",
		name: "博客园",
		url: "https://www.cnblogs.com/",
		type: "cnblogs"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610692355577-icon-192.png",
		name: "V2EX",
		url: "https://www.v2ex.com/",
		type: "v2ex"
	},
	{
		icon: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687108091-favicon_new.png",
		name: "程序员客栈",
		url: "https://www.proginn.com/",
		type: "proginn"
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
