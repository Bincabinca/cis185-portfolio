import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile1() {
{/* Profile details */}

const name = "John Doe";
const role = "Software Engineer";
const bio = "Experienced developer specializing in web applications.";
const skills = ["JavaScript", "React", "Node.js"];

}

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
            {/* Method 1: Ternary operator */}
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please log in.</p>
            )}

            {/* Method 2: Logical AND */}
            {isLoggedIn && <button>Logout</button>}
        </div>
    );
}

