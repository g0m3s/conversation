import { TextField, TextFieldProps } from '@mui/material'

export const Input: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      required
      variant='outlined'
      sx={{
        width: '80%',
        marginTop: '0px !important',
        '& .MuiOutlinedInput-root': {
          bgcolor: 'white',
          '& fieldset': {
            border: 'none !important',
            boxShadow: (theme) => theme.shadows[0],
          },
        },
      }}
    />
  )
}
