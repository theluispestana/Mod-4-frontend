import React from "react"

export default class SignUp extends React.Component{
    state = {
        name: "",
        age: 0,
        zipcode: 0,
        image: ""
    }

    mySubmitHandler = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.name.value,
            age: e.target.age.value,
            zipcode: e.target.zipcode.value,
            image: e.target.image.value
        })
        if(e.target.age.value < 21){
            alert('You must be an adult to continue')
        }
        setInterval(() => {
            console.log(this.state)
        }, 3000);
    }

    render(){
        return(
            <form onSubmit={this.mySubmitHandler} className="userForm">
                <h1>Hello new User!</h1>
                <h3>Follow along to sign up</h3>
                <ul>
                    <li><input type='text' name="name" placeholder="Your Name"/> </li>
                    <li><input type='number' name="age" placeholder="Your Age"/></li>
                    <li><input type='number' name="zipcode" placeholder="Your Zipcode"/></li>
                    <li><input type='text' name="image" placeholder="Your Picture (optional)"/></li>
                    <input type='submit'/>
                </ul>
            </form>
        )
    }
}