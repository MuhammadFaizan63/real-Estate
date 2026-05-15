import { useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/chat'
import List from '../../components/list/list'
import apiRequest from '../lib/apiRequest'
import './profilePage.scss'

export default function ProfilePage() {
    const navigate = useNavigate()
    const handleLogout = async ()=>{
        try {
            const res = apiRequest.post("auth/logout")
            localStorage.removeItem("user")
            navigate("/")
        } catch (err) {
            console.log(err)
            
        }
    }
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
                        <span>UserName: <b>John Doe</b></span>
                        <span>E-mail: <b>john@gmail.com</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}