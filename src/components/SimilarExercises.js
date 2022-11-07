import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = (
    { targetMuscleExercises,
        eqipmentExercises }
) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb={5}>exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises.length ? (
                    <HorizontalScrollbar isBodyParts={false} data={targetMuscleExercises} />
                ) : (<Loader />)}

            </Stack>
            <Typography variant="h3" mb={5}>exercises that target the same eqipmentExercises</Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {eqipmentExercises.length ? (
                    <HorizontalScrollbar isBodyParts={false} data={eqipmentExercises} />
                ) : (<Loader />)}

            </Stack>
        </Box>
    )
}

export default SimilarExercises