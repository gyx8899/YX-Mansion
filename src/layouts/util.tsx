import React from "react";
import { capitalizedString } from "@/utils/index";
import * as Icons from "@ant-design/icons";

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons;

// type: Outlined / Filled / TwoTone
export const ICON_TYPE = {
	Outlined: "Outlined",
	Filled: "Filled",
	TwoTone: "TwoTone"
};

const iconOptions: AnyKeyObject = { type: ICON_TYPE.Outlined, defaultName: "Question" };

export const addIcon = (name: string, options: AnyKeyObject = iconOptions) => {
	const _name = capitalizedString(name);
	const _options = { ...iconOptions, ...options };
	const icon =
		customIcons[_name] ||
		customIcons[`${_name}${_options.type}`] ||
		customIcons[`${capitalizedString(_options.defaultName)}${_options.type}`];
	return React.createElement(icon);
};
