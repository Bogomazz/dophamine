import { Add } from "@mui/icons-material";
import { Box, Fab, Modal } from "@mui/material";
import TasksTable from "./TasksTable";
import './MainPage.css'
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from '../store/reducers/modalSlice';
import CreateTask from "./CreateTask";
import { RootState } from "../store/store";

function MainPage() {

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);



  return (
    <Box className="mainPageContainer">
      <TasksTable></TasksTable>
      <Box className="bottomRightButton">
        <Fab onClick={() => dispatch(showModal())} color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={() => dispatch(hideModal())}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <CreateTask />
      </Modal>
    </Box>
  )
}

export default MainPage