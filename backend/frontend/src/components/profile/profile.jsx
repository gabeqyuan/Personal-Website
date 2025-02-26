import './profile.css'
import ProfilePIC from '../../assets/headshot.png'

function Profile() {
    return (
        <div id="profile">
            <div><img width="250" src={ProfilePIC} /></div>
            <div id="profile-text">
                <p>Hello, I am</p>
                <h2>Gabriel Yuan</h2>
                <p>Boston University Student</p>
                <div class="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/gabrielyuan"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/gabeqyuan"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile
