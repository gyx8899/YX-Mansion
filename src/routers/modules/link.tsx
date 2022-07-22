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
				path: "/link/default",
				element: lazyLoad(React.lazy(() => import("@/views/link/default/index"))),
				meta: {
					requiresAuth: true,
					title: "内嵌页面",
					key: "iframe"
				}
			}
		]
	}
];

export default linkRouter;
