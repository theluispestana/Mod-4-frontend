import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="welcomeDiv">
        <h1>Welcome to !001 topics</h1>
        <h4><strong>
          Once you sign up you get to join a team and participate in the discussions!
          </strong></h4>
          <h4><strong>
          !001 topics is a simple website where you can agree, disagree and comment about all/any kind of topics!
        </strong></h4>
        <h4>Don't have an account yet? sign up here -> <Link to="/signup">Sign Up</Link></h4>
        <LoginForm />
        <img className="welcomeImg" src="https://www.inboundwriter.com/wp-content/uploads/2019/08/topic_mobile_header.png" alt="welcome image"/>
        {/* <img className="wImg" src="https://thumbs.gfycat.com/EnchantingLiveAdouri-max-1mb.gif" alt="Wimage"/> */}
      </div>
    );
  }
}

export default WelcomeContainer;
