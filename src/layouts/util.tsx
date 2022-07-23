import React from "react";
import * as Icons from "@ant-design/icons";

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons;
export const addIcon = (name: string) => {
	const _name = name.replace(/^\w/, c => c.toUpperCase());
	const icon = customIcons[_name] || customIcons[`${_name}Outlined`] || customIcons["QuestionOutlined"];
	return React.createElement(icon);
};
