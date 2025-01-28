import React from 'react';
import { Alert } from 'react-bootstrap';

const NotificationBanner = () => {
    return (
        <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>
        <Alert variant='danger'>
            To donate now for Officer Gillick that was recently injured on duty, use this {' '}
            <Alert.Link href="https://www.paypal.com/donate/?hosted_button_id=W37M2CD6UA62Y">link</Alert.Link>. 
        </Alert>
        </div>
    );
};

export default NotificationBanner;