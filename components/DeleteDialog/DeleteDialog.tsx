import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const buttonStyle = {
    mx: 'auto',
    width: '100%'
}

const DeleteDialog: FunctionComponent = () => {
   return(
    <Dialog open>
        <DialogTitle id="alert-dialog-title">
            {"Delete items"}
        </DialogTitle>

        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete selected items?
            </DialogContentText>
        </DialogContent>

        <DialogActions
            disableSpacing
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr 1fr 1fr',
                gridGap: 8
            }}
        >
            <Button sx={buttonStyle} variant='contained' color="success">
                Cancel
            </Button>
            <Button sx={buttonStyle} variant='contained' color="primary">
                Delete selected items
            </Button>
            <Button sx={buttonStyle} variant='contained' color="error">
                Delete all items
            </Button>
        </DialogActions>
     </Dialog>
   )
}

export default DeleteDialog;