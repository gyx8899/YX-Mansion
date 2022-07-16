import logo from "@/assets/images/logo.png";
import { connect } from "react-redux";

const Logo = (props: any) => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!props.isCollapse ? <h2 className="logo-text">YX Mansion</h2> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(Logo);
