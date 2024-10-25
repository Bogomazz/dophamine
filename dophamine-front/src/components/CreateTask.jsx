import React from 'react'
import { Box } from "@mui/material";
import "./CreateTask.css"

function CreateTask() {
  return <Box className="modalContainer">
    Here should be create task modal window 
  </Box>
}

export default React.forwardRef((props, ref) => <CreateTask {...props} forwardedRef={ref} />)