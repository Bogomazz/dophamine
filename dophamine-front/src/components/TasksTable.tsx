import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import "./TasksTable.css"
import { Task } from "../models/Task";
import { markComplete, markIncomplete } from "../store/reducers/tasksSlice";

function TasksTable() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const urgentNeededTasks = tasks.filter(
    task => (task.need === 'must' && task.priority ==='urgent')
  )
  const urgentWantedTasks = tasks.filter(
    task => (task.need === 'want' && task.priority ==='urgent')
  )
  const canWaitNeededTasks = tasks.filter(
    task => (task.need === 'must' && task.priority ==='can-wait')
  )
  const canWaitWantedTasks = tasks.filter(
    task => (task.need === 'want' && task.priority ==='can-wait')
  )

  const handleTaskCheck = (taskId: number, checked: boolean) => {
    const action = checked ? markComplete : markIncomplete; 
    dispatch(action(taskId))
  }

  function renderTasks(tasks: Task[]) {
    return tasks.map(task => (<Box key={task.id}>
      <FormControlLabel 
        label={task.description}
        control={
          <Checkbox 
            checked={task.completed} 
            onChange={(event) => handleTaskCheck(task.id, event.target.checked)}
          />
        } 
      />
    </Box>
    )) 
  }

  return <Box className="columnsContainer">
    <Box className="firstColumn">
      <Box className="rowsContainer">
        <Box className="firstRow">
          <Box className="firstColumnText"></Box>
        </Box>
        <Box className="rowHeader">
          <Box className="firstColumnText">Urgent</Box>
        </Box>
        <Box className="rowHeader">
          <Box className="firstColumnText">Can wait</Box>
        </Box>
      </Box>
    </Box>

    <Box className="column">
      <Box className="rowsContainer">
        <Box className="firstRow">
          <Box className="columnHeader">Need</Box>
        </Box>
        <Box className="row">
          <Box className="tasksContainer">
            {renderTasks(urgentNeededTasks)}
          </Box>
        </Box>
        <Box className="row">
          <Box className="tasksContainer">
            {renderTasks(canWaitNeededTasks)}
          </Box>
        </Box>
      </Box>
    </Box>
    
    <Box className="column">
      <Box className="rowsContainer">
        <Box className="firstRow">
          <Box className="columnHeader">Want</Box>
        </Box>
        <Box className="row">
          <Box className="tasksContainer">
            
            {renderTasks(urgentWantedTasks)}
          </Box>
        </Box>
        <Box className="row">
          <Box className="tasksContainer">
            {renderTasks(canWaitWantedTasks)}
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
}

export default TasksTable;