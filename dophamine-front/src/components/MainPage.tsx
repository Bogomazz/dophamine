import { Add } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import TasksTable from "./TasksTable";
import './MainPage.css'

function MainPage() {
  return (
    <Box className="mainPageContainer">
      <TasksTable></TasksTable>
      <Box className="bottomRightButton">
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </Box>
  )
}

export default MainPage