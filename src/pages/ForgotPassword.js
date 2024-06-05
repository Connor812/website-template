import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import { PostData } from "../utils/PostData";

function ForgotPassword() {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        PostData('forgot_password.php', { "email": email })
            .then((result) => {
                if (result.status === 'error') {
                    setError(result.message);
                    return;
                }

                setSuccess('Password reset instructions sent to your email.');
            })
            .catch((error) => {
                setError(error);
            });
    }
    return (
        <main>
            <center>
                <h1>Forgot Password</h1>
                <hr />
                <Form className="w-50">

                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We Will Email You Instructions On How To Reset Your Password.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e) => handleSubmit(e)} >
                        Submit
                    </Button>
                </Form>
            </center>


        </main >
    );
}

export default ForgotPassword;
