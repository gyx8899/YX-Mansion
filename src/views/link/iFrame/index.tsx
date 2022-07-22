import { useLocation } from "react-router-dom";
import "./index.less";

const Link = () => {
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search);
	return (
		<div className="content-box">
			{searchParams.has("url") && (
				<iframe src={decodeURIComponent(searchParams.get("url"))} width="100%" height="100%" frameBorder="0" scrolling="" />
			)}
		</div>
	);
};

export default Link;
