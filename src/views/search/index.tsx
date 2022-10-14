// import { useLocation, useParams } from "react-router-dom";
// import { LaptopOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTitle } from "@daybyday/yx-react";
import { Input, Select, InputRef } from "antd";
import { addIcon } from "@/layouts/util";
// import useClipBoard from "@/hooks/useClipboard";
import { SEARCH_LIST, getSearchType } from "./config";
// import Link from "@/views/link";

import "./index.less";

const AggregateSearch = () => {
	// 搜索聚合：集合各大搜索引擎，及重要技术论坛、社区等搜索接口，方便快速搜索结果。
	const selectRef = useRef(SEARCH_LIST[0]);
	const [isLoading, setIsLoading] = useState(false);
	const [iFrameUrl, setIframeUrl] = useState("");
	const inputRef = useRef<InputRef>(null);

	// useTitle("搜索聚合：集合各大搜索引擎，及重要技术论坛、社区等搜索接口，方便快速搜索结果。");
	const openResult = useCallback(() => {
		const searchValue = inputRef?.current?.input?.value;
		let url = "";
		if (searchValue !== "") {
			url = `${selectRef.current.url}${encodeURIComponent(searchValue as string)}`;
			if (!selectRef.current.embeddable) {
				window.open(url, "_blank");
				setIframeUrl("");
			} else {
				setIframeUrl(url);
			}
		} else {
			setIframeUrl("");
		}
	}, []);
	const onSearch = useCallback((value: string, event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("onSearch: ", value, event);
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		// 变更时查看结果
		openResult();
	}, []);

	// 下拉框选择变更
	const onSelect = useCallback((value: string, option: AnyKeyObject) => {
		selectRef.current = getSearchType(value);
		console.log("onSelect: ", value, option);

		// 变更时查看结果
		openResult();
	}, []);

	// 搜索框自动聚焦
	useEffect(() => {
		inputRef.current!.focus({
			cursor: "start"
		});
		if (inputRef.current && inputRef.current.input) {
			inputRef.current.input.onpaste = () => {
				setTimeout(openResult, 200);
			};
		}
	}, []);

	const addOn = (
		<Select defaultValue={SEARCH_LIST[0].type} style={{ width: "140px" }} onSelect={onSelect}>
			{SEARCH_LIST.map(item => (
				<Select.Option value={item.type} key={item.type}>
					{addIcon(item.type, { defaultName: "search" })} {item.name}
				</Select.Option>
			))}
		</Select>
	);
	return (
		<>
			<Input.Search
				ref={inputRef}
				addonBefore={addOn}
				placeholder="请输入关键词等信息"
				// value={search}
				allowClear
				enterButton="搜索一下"
				size="large"
				loading={isLoading}
				// onSearch={onSearch}
				onSearch={(value, e) => onSearch(value, e as React.ChangeEvent<HTMLInputElement>)}
			/>
			{/* {SEARCH_LIST.concat(SEARCH_SITES).map(() => (<></>))} */}
			{iFrameUrl && <iframe className="search-iframe" src={iFrameUrl} width="100%" height="100%" frameBorder="0" scrolling="" />}
		</>
	);
};

export default AggregateSearch;
