import data from "../img.json";

import Section from "./Section";

const Sections = () => {
    return (
        <div>
            {data.map((elem, index) => {
                // console.log(elem.images);
                return <Section title={elem.category} tabImg={elem.images} />;
            })}
        </div>
    );
};

export default Sections;
