import { useState, useEffect } from 'react'
import './App.css'

{/*
    function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        role: "",
        bio: "",
        skills: []
    });

return (
    <ProfileCard
        name={user.name}
        role={user.role}
        bio={user.bio}
        isOnline={true}
        skills={user.skills}
        onChange={(newInfo) => setUser(newInfo)}
        />
    );

} */}

const UserProfile = [
    {
        name: "Zak Hussain",
        role: "Professor and Robotics Engineer",
        bio: "Passionate about teaching and building innovative robotic systems. And giving me a good grade.",
        isOnline: true,
        skills: ["HTML", "CSS", "JavaScript", "React", "Robotics", "AI", "Generous Grading"],
    },
    {
        name: "Bianca Powers",
        role: "Software Engineer",
        bio: "Passionate about creating interactive user experiences and getting good grades.",
        isOnline: false,
        skills: ["HTML", "CSS", "JavaScript", "React"],
    }
]

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

function LoginStatus() {
    const isLoggedIn = true;

    return (
        <div>
            {/* Method 2: Logical AND */}
            {isLoggedIn && <button>Logout</button>}
        </div>
    );
}

