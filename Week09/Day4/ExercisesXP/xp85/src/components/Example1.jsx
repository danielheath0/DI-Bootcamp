import data from "../assets/xp2.json"

const SocialMedias = (props) => {
    return (
        <><ul>
            {data.SocialMedias.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
        </>
    )
}

export default SocialMedias;