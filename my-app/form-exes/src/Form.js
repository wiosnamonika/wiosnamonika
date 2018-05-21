import React, { Component } from 'react';
import { Errors } from './Errors';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            agree: false,
            errors: {
                email: '',
                password: '',
                agree: false,
            },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }

        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const agree = e.target.checked;
        this.setState({[name]: value}, () => { this.validation(name, value) });
    }

    handleChangeCheckbox(e) {
        if (e.target.type === 'checkbox') {
            return this.setState({ [e.target.name]: e.target.checked });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    validation(fieldName, value) {
        let validationErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

    switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            validationErrors.email = emailValid ? '' : ' is invalid';
        break;
        case 'password':
            passwordValid = value.length >= 6;
            validationErrors.password = passwordValid ? '': ' is invalid';
        break;
        default:
        break;
    }
    this.setState({
        errors: validationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
    },
    this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.formValid) {
            return;
        }
        // const data = new FormData();
        // data.append('password', password.substring(0, 50));
        // data.append('email', email.substring(0, 100));
        // data.append('agree', agree);

      // this.axios.post(`https://jsonplaceholder.typicode.com/users`, { formValid })
      //   .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // })
      //this.axiosPromise = axios.post('/web-service-url/', { data: clientMessage });
    }

    render() {
        // console.log('test');
        return (
            <form
                method="post"
                action=""
                acceptCharset="utf-8"
                className="contact-form"
            >
                <h2>Sign up</h2>
                <div className="panel panel-default">
                    <Errors errors={ this.state.errors } />
                </div>
                <div className={ `input-row ${this.errorClass(this.state.errors.email) }`}>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleUserInput}  />
                </div>
                <div className={ `input-row ${this.errorClass(this.state.errors.password) }`}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={ this.state.password }
                      onChange={ this.handleUserInput }
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"

                />
                </div>
                <div className="checkbox-input input-row">
                    <label htmlFor="email">Remember me</label>
                    <input
                      type="checkbox"
                      name="agree"
                      id="form-agree"
                      className="checkbox-input"
                      onChange={ this.handleCheckbox }
                    />
                </div>
                <div className="login-button input-row">
                    <button
                      type="submit"
                      value="login"
                      className="login-button "
                      disabled={ !this.state.formValid }
                    >
                    {
                        this.state.formValid ? (
                            <span className="login-button-text">Log in</span>
                        ) && "login" : "login"
                    }
                    </button>
                </div>

            </form>
        )
                {
                    if (this.state.formValid) {
                        return "success!";
                    }
                }
    }
}

export default Form;
