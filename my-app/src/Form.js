import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cx from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

const ERROR_TYPE_SERVER = 'server_error';
const ERROR_TYPE_DOMAIN = 'domain_error'; // eslint-disable-line no-unused-vars
const ERROR_TYPE_GENERAL = 'general_error';

const RESPONSE_TYPE_ERROR = 'error';
const RESPONSE_TYPE_SUCCESS = 'success';

class CareersForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            password: '',
            email: '',
            error: {
                password: false,
                email: false,
            },
            sending: false,
            responseType: null,
            errorType: null
        };

        this.state = { ...this.initialState };

        this.handleChange = this.handleChange.bind(this);
        this.fileClear = this.fileClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fileClear(field) {
        return () => {
            const elem = document.getElementById(`careers-form-${ field }`);
            if (elem) {
                elem.value = null;
            }
            this.setState({ [field]: null });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.sending) {
            return;
        }

        const {
            password, email
        } = this.state;

        const error = {
            password: false,
            email: false,
        };

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        // error.password = (password === '');
        error.password = !passwordRegExp.test(password);
        const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; // eslint-disable-line max-len
        error.email = !emailRegExp.test(email);

        const errorAny = Object.keys(error).reduce((acc, key) => error[key] || acc, false);
        if (errorAny === false) {
            this.setState({ error, sending: true });

            const data = new FormData();
            data.append('password', name.substring(0, 50));
            data.append('email', email.substring(0, 100));

            axios({
                method: 'post',
                url: `${ process.env.PUBLIC_URL }/code/form-careers.php`,
                data,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then((response) => {
                    if (response.data && response.data.success) {
                        this.setState({
                            ...this.initialState,
                            responseType: 'success'
                        });
                        setTimeout(() => {
                            this.setState({ responseType: null });
                        }, 5000);
                    } else {
                        this.setState({
                            error: {
                                password: !!response.data.error_name,
                                email: !!response.data.error_email
                            },
                            sending: false,
                            responseType: RESPONSE_TYPE_ERROR,
                            errorType: response.data.error
                        });
                    }
                })
                .catch(() => {
                    this.setState({ sending: false, responseType: RESPONSE_TYPE_ERROR, errorType: ERROR_TYPE_SERVER });
                });
        } else {
            this.setState({ error, responseType: RESPONSE_TYPE_ERROR, errorType: ERROR_TYPE_GENERAL });
        }
    }

    render() {
        const {
            password, email, error, responseType, errorType, sending
        } = this.state;

        return (
            <div className="careers-list-contact-box">
                <h3 className="careers-list-contact-title">
                    title
                </h3>
                <form
                  method="post"
                  action=""
                  acceptCharset="utf-8"
                  className="careers-list-contact-form"
                  onSubmit={ this.handleSubmit }
                  noValidate
                >
                    <div className="input-row">
                        <div className="input-box input-box-50">
                            <input
                              type="password"
                              name="password"
                              id="careers-form-name"
                              value={ password }
                              maxLength={ 20 }
                              className={ cx('text-input', { 'not-empty': (password !== ''), error: error.password }) }
                              onChange={ this.handleChange }
                            />
                            <label className="text-label" htmlFor="careers-form-name">
                                name
                            </label>
                        </div>
                    </div>
                    <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          id="careers-form-email"
                          value={ email }
                          maxLength={ 50 }
                          className={ cx('text-input', { 'not-empty': (email !== ''), error: error.email }) }
                          onChange={ this.handleChange }
                        />
                        <label className="text-label" htmlFor="careers-form-email">
                            email
                        </label>
                    </div>

                    {
                        responseType !== RESPONSE_TYPE_SUCCESS &&
                            <div className="button-box">
                                <button type="submit" className="button" disabled={ sending }>
                                    {
                                        sending
                                            ? 'issending'
                                            : 'not sending'
                                    }
                                </button>
                            </div>
                    }
                    {
                        responseType === RESPONSE_TYPE_SUCCESS &&
                            <div className={ cx('form-message', responseType) }>
                                <span>'sukces'</span>
                            </div>
                    }
                    {
                        responseType === RESPONSE_TYPE_ERROR &&
                            <div className={ cx('form-message', 'error') }>
                                <span>'nie wyslano'${ errorType }</span>
                            </div>
                    }
                </form>
            </div>
        );
    }
}

CareersForm.propTypes = {
    router: PropTypes.shape().isRequired,
    t: PropTypes.func.isRequired
};

export default CareersForm;
