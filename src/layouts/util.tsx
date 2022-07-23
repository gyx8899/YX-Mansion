import React from "react";
import * as Icons from "@ant-design/icons";

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons;

// type: Outlined / Filled / TwoTone
export const ICON_TYPE = {
	Outlined: "Outlined",
	Filled: "Filled",
	TwoTone: "TwoTone"
};

export const addIcon = (name: string, type: string = ICON_TYPE.Outlined) => {
	const _name = name.replace(/^\w/, c => c.toUpperCase());
	const icon = customIcons[_name] || customIcons[`${_name}${type}`] || customIcons[`Question${type}`];
	return React.createElement(icon);
};
