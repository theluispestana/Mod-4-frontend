import React from "react"
import { NavLink } from "react-router-dom"

export default class Groups extends React.Component{ 
    render(){        
        return(
            <div className='Quizz'>
                <h2>Quiz over! We determine that you are part of the {this.props.group.name}!</h2>
                <h3>Now that you have your group, you can finish signing up below</h3>
                <p>{this.props.group.description}</p>
                <img className="groupImage" src={this.props.group.image} alt={this.props.group.name}/>
                    <h1>Hello new User from the {this.props.group.name}!</h1>
                    <div>
                        <h3>Follow along to finalize your sign up</h3>
                    </div>
                <ul className="formCenter">
                    <form onSubmit={this.props.handlerSubmit} className="">
                        <li><input type='text' name="name" placeholder="Enter Your Name"/></li>
                        <li><input type='password' name="password" placeholder="Password"/></li>
                        <li><input type='password' name="confirmation" placeholder="Confirm Password"/></li>
                        <li><input type='number' name="age" placeholder="Your Age"/></li>
                        <li><input type='number' name="zipcode" placeholder="Your Zipcode"/></li>
                        <li><input type='text' name="image" placeholder="Your Picture (optional)"/></li>
                        
                        <li><input type='submit'/></li>
                    </form>
                </ul>
            </div>
        )
    }
}