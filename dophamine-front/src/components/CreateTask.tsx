import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import "./CreateTask.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import { TaskPriority, TaskNeed } from '../models/Task';
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux";
import { hideModal } from '../store/reducers/modalSlice';
import { addTask } from '../store/reducers/tasksSlice';

const pointsOptions = [10, 20, 50, 100, 200, 500].map(value => ({value, label: value}));

type TaskFormInput = {
  description: string;
  priority: TaskPriority;
  need: TaskNeed;
  points: number;
}

function CreateTask() {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<TaskFormInput>()

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<TaskFormInput> = (data: TaskFormInput) => {
    const normalizedTaskData = {
      ...data,
      points: Number(data.points) || 0,
    }
    dispatch(addTask(normalizedTaskData))
    dispatch(hideModal())
  }

  const {min, max, ...pointsParams} = register('points')

  return <Box className="modalContainer">
    <form onSubmit={handleSubmit(onSubmit)}>

      <Box>
        <FormControl>
          <FormLabel id="task-descriptoin-label">Task</FormLabel>
          <TextField 
            error={!!errors.description} 
            helperText={!!errors.description ? "Can't be empty" : ""} 
            {...register('description', {required: true})} 
          />
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="priority-radio-buttons-label">Priority</FormLabel>
          <RadioGroup
            row
            aria-labelledby="priority-radio-buttons-group-label"
            defaultValue={'urgent'}
          >
            <FormControlLabel value="urgent" control={<Radio {...register('priority')} />} label="Urgent" />
            <FormControlLabel value="can-wait" control={<Radio {...register('priority')}/>} label="Can wait" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="need-radio-buttons-group-label">Want or must</FormLabel>
            <RadioGroup
              row
              aria-labelledby="need-radio-buttons-group-label"
              defaultValue={'want'}
            >
              <FormControlLabel value="want" control={<Radio {...register('need')}/>} label="Want" />
              <FormControlLabel value="must" control={<Radio {...register('need')}/>} label="Must" />
            </RadioGroup>

        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Points</FormLabel>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={20}
              step={null}
              valueLabelDisplay="auto"
              marks={pointsOptions}
              {...pointsParams}
            />
          </Box>
        </FormControl>
      </Box>

      <Box>
        <Button type='submit'>Save</Button>
      </Box>
    </form>
  </Box>
}

export default React.forwardRef((props, ref) => <CreateTask {...props} />)