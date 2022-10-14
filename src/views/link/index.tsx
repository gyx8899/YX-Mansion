import { useLocation, useParams } from "react-router-dom";
import { LaptopOutlined } from "@ant-design/icons";
import "./index.less";

const Link = () => {
	const { search } = useLocation();
	const { id } = useParams();
	const searchParams = new URLSearchParams(search);
	return (
		<div className="content-box">
			<div className="link-container">
				<LaptopOutlined style={{ fontSize: "48px" }} />
				<span> {id}</span>
			</div>
			{searchParams.has("url") && (
				<iframe
					className="link-iframe"
					src={decodeURIComponent(searchParams.get("url") as string)}
					width="100%"
					height="100%"
					frameBorder="0"
					scrolling=""
				/>
			)}
		</div>
	);
};

export default Link;
