import data from "../assets/xp2.json"

const Skills = (props) => {
    return (
        <>
            {data.Skills.map((item, index) => (
                <div key={index}>
                    <h4>{item.Area}</h4>
                    <ul>
                        {item.SkillSet.map((skill, i) => (
                            <li key={i}>{skill.Name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

export default Skills;
