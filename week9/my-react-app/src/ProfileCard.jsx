import './App.css'

function ProfileCard({ name, role, bio, isOnline, skills }) {
    return (
    <div className="user-profile">
        <h1>Welcome, {name}</h1>
        <p>Role: {role}</p>
        <p>Bio: {bio}</p>
        <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
        <p>Skills:
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </p>
    </div>
    );
}

export default ProfileCard