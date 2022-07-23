import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 外部链接模块
const linkRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "外部链接"
		},
		children: [
			{
				path: "/link/:id",
				icon: "PaperClip",
				element: lazyLoad(React.lazy(() => import("@/views/link/index"))),
				meta: {
					requiresAuth: true,
					title: "Link 页面",
					key: "linkPage"
				}
			}
		]
	}
];

export default linkRouter;
