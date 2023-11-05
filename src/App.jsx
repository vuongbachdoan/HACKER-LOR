import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { uploadFile } from "./api";
import React from "react";

export const App = () => {
    const [file, setFile] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [message, setMessage] = React.useState('');

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        uploadFile(formData,file.name)
            .then(() => {
                setMessage('Dume ghê z m được nè 🤡...');
                handleClickOpen();
            })
            .catch(() => {
                setMessage('Lêu lêu ko được nhe mày 💩');
                handleClickOpen();
            })
    }
    return (
        <Stack
            width='100%'
            height='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <Typography>Đố mày hack được ☠️!</Typography>
            {
                !file &&
                <Button style={{
                    borderRadius: '10px'
                }} variant="contained" component="label" color="error">
                    Upload File
                    <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
                </Button>
            }

            {
                file &&
                <>
                    <Typography marginTop={3} fontSize='small'>{file.name}</Typography>
                    <Typography marginBottom={3}>Mày chắc chưa</Typography>
                    <Stack
                        flexDirection='row'
                        columnGap={3}
                    >
                        <Button style={{ borderRadius: '10px' }} onClick={handleUpload} variant="contained" component="label" color="warning">
                            Chắc
                        </Button>
                        <Button style={{ borderRadius: '10px' }} onClick={() => setFile(null)} variant="contained" component="label" color="primary">
                            Chưa
                        </Button>
                    </Stack>
                </>
            }

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        borderRadius: '15px',
                        width: '300px'
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title" fontWeight='bold' fontSize={14}>
                    Message
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" fontSize='small'>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ borderRadius: '10px' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
}