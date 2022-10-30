import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
const BodyPart = (
    item,
    bodyParts,
    setBodyParts,

) => {
    console.log(item)
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyParts === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }
            }
            onClick={() => {
                setBodyParts(item)
                window.scrollTop({ top: 1800, left: 100 })
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                color='#3a1212'
                textTransform="capitalize"
            >{item?.item}</Typography>
        </Stack >
    )
}

export default BodyPart
