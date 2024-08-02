import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Draggable from 'react-draggable';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

function DraggablePaperComponent(props) {
  return (
    <Draggable handle=".draggable-dialog-title">
      <Paper {...props} />
    </Draggable>
  );
}

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  handleClick,
}) {
  const [open, setOpen] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null); 
  };

  const handleEdit = () => {
    setEditOpen(true);
    setOpen(null); // Close the menu
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleDelete = () => {
    setDeleteOpen(true);
    setOpen(null); // Close the menu
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  const handleConfirmDelete = () => {
    // Handle the delete action here
    alert('User deleted');
    setDeleteOpen(false);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{company}</TableCell>

        <TableCell>{role}</TableCell>

        <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

        <TableCell>
          <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem> 

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      <Dialog
        open={editOpen}
        onClose={handleCloseEdit}
        PaperComponent={DraggablePaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} className="draggable-dialog-title" id="draggable-dialog-title">
          Edit User
        </DialogTitle>
        <DialogContent>
          <Typography>This is a draggable popup for editing user details.</Typography>
          {/* Add your form or other content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={() => alert('Save changes')}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onClose={handleCloseDelete}
        PaperComponent={DraggablePaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} className="draggable-dialog-title" id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this user?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 


UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
