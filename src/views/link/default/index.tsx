import { useLocation } from "react-router-dom";
import "./index.less";

const Link = () => {
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search);
	const isIframe = searchParams.get("isIframe") === "true" && searchParams.has("url");
	return (
		<div className="content-box">
			{isIframe && (
				<iframe src={decodeURIComponent(searchParams.get("url"))} width="100%" height="100%" frameBorder="0" scrolling="" />
			)}
		</div>
	);
};

export default Link;
