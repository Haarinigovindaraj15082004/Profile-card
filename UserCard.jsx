import PropTypes from "prop-types";

const userData = [
    {
        name:"Trisha",
        city: "Chennai",
        description: "Front-end Developer",
        skills: ["UI/UX", "JavaScript", "Python", "Node", "React"],
        online: false,
        profile: "images/1.jpeg",
    },
    {
        name:"Vijay",
        city: "Pune",
        description: "Full stack web Developer",
        skills: ["Angular", "JavaScript", "Python", "Web development", "React"],
        online: false,
        profile: "images/2.jpg",
    },
    {
        name:"Surya",
        city: "Hyderabad",
        description: "Senior Software Developer",
        skills: ["MongoDB", "C#", "Java", "Python", "MySQL"],
        online: true,
        profile: "images/3.jpeg",
    }
]

function User (props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>
            {props.online?"ONLINE":"OFFLINE"}
        </span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
}
export const UserCard = () => {
  return (
        <>
        {
            userData.map((user,index)=>(
                <User key={index} 
                name={user.name}
                city={user.city}
                description={user.description}
                online={user.online}
                profile={user.profile}
                skills={user.skills}
                />
            ))
        }
        </>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired 
}

