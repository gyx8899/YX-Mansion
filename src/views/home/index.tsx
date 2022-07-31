import Search from "@/views/search";
import welcome from "@/assets/images/welcome.png";
import "./index.less";

const Home = () => {
	return (
		<div className="home" style={{ backgroundImage: `url(${welcome})` }}>
			<section>
				<Search />
			</section>
		</div>
	);
};

export default Home;
