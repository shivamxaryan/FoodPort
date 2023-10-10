import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return(
        <div>
            <h1>About Us Page</h1>
            {/* <User name={"Shivam Function"}/> */}
            <UserClass name={"Shivam Class"}/>
        </div>
    )
};

export default About;