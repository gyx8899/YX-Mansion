import React, { Suspense } from "react";
import { Spin } from "antd";
import { AnyProps } from "../interface/index";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>, props: AnyProps = {}): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Comp {...props} />
		</Suspense>
	);
};

export default lazyLoad;
