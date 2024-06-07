import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostData } from '../utils/PostData';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function ResetPassword() {

    const navigate = useNavigate();
    const { uid } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");

        if (!password || !confirmPassword) {
            setError('Please enter password');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!uid) {
            setError('Invalid URL');
            return;
        }

        PostData('reset_password.php', { uid: uid, password: password })
            .then((result) => {
                if (result.status === 'success') {
                    navigate('/login/Password_reset_successfully');
                    return;
                } else {
                    setError(result.message);
                    return;
                }
            })
            .catch((error) => {
                setError(error.message);
                return;
            });
    }

    return (
        <main>
            <center>
                <h1>Reset Password</h1>
                <hr />
                <Form className="w-50">

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onInput={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onInput={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </Form>
            </center>
        </main>
    )
}

export default ResetPassword;