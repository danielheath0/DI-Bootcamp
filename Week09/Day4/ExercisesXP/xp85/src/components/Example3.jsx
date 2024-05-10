import data from "../assets/xp2.json"

const Experiences = (props) => {
    return ( 
        <>
        {data.Experiences.map((item,index)=>(
            <div key={index}>
                <img src={item.logo} alt={item.companyName}></img>
                <a href={item.url}>{item.companyName}</a>
                {item.roles.map((role,i)=>(
                    <div key={i}>
                    <h5>{role.title}</h5>
                    <span>{role.startDate} {role.location}</span>
                    <p>{role.description}</p>
                    </div>
                ))}
            </div>
        ))}
        </>
    );
}
 
export default Experiences;
