import "./NewUser.css"

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="john smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@fuckme.in" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="email" placeholder="9650324051" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Apma Ghar" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male"  value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female"  value="male"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other"  value="male"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
