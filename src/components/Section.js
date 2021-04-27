// import data f<rom "../img.json";

const Section = (props) => {
    return (
        <div className="section">
            <h2>{props.title}</h2>
            <div>
                {props.tabImg.map((elem, index) => {
                    return (
                        <img className="img" src={elem[index]} alt={index} />
                    );
                })}
            </div>
        </div>
    );
};

export default Section;
