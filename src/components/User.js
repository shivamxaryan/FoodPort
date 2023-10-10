const User=({name}) => {
    return(
        <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Role: MERN Stack Developer</h3>
        <h3>Location: Bangluru</h3>
        </div>
    );
}

export default User;