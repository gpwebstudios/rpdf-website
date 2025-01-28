import React from 'react';
import { Alert } from 'react-bootstrap';

const NotificationBanner = () => {
    return (
        <div style={{ textAlign: 'center', fontSize: '1.25rem' }}>
        <Alert variant='danger'>
            Donate to support Officer Gillick, recently injured in the line of duty {' '}
            <Alert.Link href="https://www.paypal.com/donate/?hosted_button_id=W37M2CD6UA62Y">here</Alert.Link>. 
        </Alert>
        </div>
    );
};

export default NotificationBanner;