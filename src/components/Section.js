// import data from "../img.json";

const Section = (props) => {
    return (
        <div className="section">
            <h2>{props.title}</h2>
            <div className="carrousel">
                {props.tabImg.map((elem, index) => {
                    // console.log(index);
                    return <img className="img" src={elem} alt="" />;
                })}
            </div>
        </div>
    );
};

export default Section;
