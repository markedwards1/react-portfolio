import React from 'react'
import Box from '@mui/material/Box';
import css from './ImageBio.module.css';

export default function ImageBio() {
  return (
    // <div>ImageBio</div>
    <div className={css.pancake} >
        <div>
    <Box  className='css.box'
      sx={{
        width: 300,
        height: 300,
       
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        
      }}
    />
</div>

<div >
<Box  className='css.box'
      sx={{
        width: 300,
        height: 300,
       
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        
      }}
    />

</div>
    </div>
    
  )
}
