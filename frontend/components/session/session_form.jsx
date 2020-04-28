import React from "react";
import { Route } from "react-router-dom";
import Logo from "../headers/logo";
import EmailForm from "./email_form";
import SignupStepTwo from "./signup_step_two";
import LoginStepTwo from "./login_step_two";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fullName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit() {
    debugger
    this.props.action(this.state);
  }

  showErrors() {
    //debugger
    return this.props.errors.map((error, idx) => <li key={`${idx}e`}>{error}</li>)
  }


  render() {
    return (
      <div>
        <Logo />
        <div>
          <Route exact path={`/${this.props.path}`} render={
            (props) => 
            <EmailForm {...props} 
              update={this.update} 
              email={this.state.email} 
            />
          }/>

          <Route path="/signup/2" render={
              (props) =>
                <SignupStepTwo {...props} 
                  update={this.update} 
                  password={this.state.password} 
                  fullName={this.state.fullName}
                  handleSubmit={this.handleSubmit} 
                />
          }/>
          <Route path="/login/2" render={
            (props) => 
              <LoginStepTwo {...props} 
                handleSubmit={this.handleSubmit}
                update={this.update} 
                password={this.state.password} 
              />
          }/>
        </div>
        <ul>
          {
            this.showErrors()
          }
        </ul>
      </div>
    )
  }

}

export default SessionForm;