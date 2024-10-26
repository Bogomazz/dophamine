import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function TasksTable() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  return <Box>
    {tasks.map(task => (
      <Box key={task.id}>{task.description}</Box>
    ))}
  </Box>
}

export default TasksTable;