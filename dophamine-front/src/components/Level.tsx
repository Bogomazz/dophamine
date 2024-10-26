import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const LEVEL_TRESHHOLD = 200;

function LevelView({
  userPoints,
  levelTreshhold
}: {
  userPoints: number,
  levelTreshhold: number
}) {
  const userLevel = Math.floor(userPoints / levelTreshhold) + 1;
  const currentLevelPoints = userPoints % levelTreshhold;
  const levelProgressPercentage = Math.round((currentLevelPoints / levelTreshhold) * 100)

  useEffect(() => {
    console.log(`${userLevel} = ${userPoints} / ${levelTreshhold}`)
  })
  return  (
    <Box sx={{ width: '100%' }}>
      <Box component={'span'}>Level {userLevel}</Box>
      <LinearProgress variant="determinate" value={levelProgressPercentage} />
    </Box>
  )
}

function Level() {

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const userPoints = tasks
    .filter(task => task.completed)
    .reduce((points, task) => points + task.points, 0);

  useEffect(() => {
    console.log(tasks)
  })

  return <LevelView 
    levelTreshhold={LEVEL_TRESHHOLD}
    userPoints={userPoints}
  />
}

export default Level