import { Alert, AlertTitle } from "@mui/material";

const AlertMessage = ({ title, content, severity, onClose }) => {

    return (
        <div className="alert-container">
            <Alert severity={severity} onClose={onClose}>
                <AlertTitle>{title}</AlertTitle>
                {content}
            </Alert>
        </div>
    );
};

export default AlertMessage;
