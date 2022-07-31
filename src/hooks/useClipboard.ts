import { useEffect, useState } from "react";

// TODO: onVisibilitychange chrome 测试未触发

const useClipBoard = () => {
	const [data, setData] = useState("");
	const readClipBoard = async () => {
		try {
			const text = await navigator.clipboard.readText();
			console.log(text);
			if (text && text.trim().length > 0) {
				setData(text);
			}
		} catch (e) {
			console.log("方法：navigator.clipboard.readText()，执行异常 -", e);
		}
	};
	useEffect(() => {
		const onVisibilitychange = async (e: Event) => {
			console.log("onVisibilitychange: ", document.visibilityState, e);
			if (document.visibilityState == "hidden") {
				//切离该页面时执行
			} else if (document.visibilityState == "visible") {
				//切换到该页面时执行
				readClipBoard();
			}
		};
		if (navigator && navigator.clipboard) {
			document.body.addEventListener("visibilitychange", onVisibilitychange);
		}
		if (document.visibilityState === "visible") {
			readClipBoard();
		}
		return () => {
			if (navigator && navigator.clipboard) {
				document.removeEventListener("visibilitychange", onVisibilitychange);
			}
		};
	}, []);

	return [data, readClipBoard];
};

export default useClipBoard;
