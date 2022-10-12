import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function PortfolioImg() {
  return (
    <ImageList sx={{ width: 900, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Portfolio</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            link={item.link}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.link}`}
                href={item.link}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    
    img: '/images/jfom.jpeg',
    title: 'Joondalup Festival of Motorsport',
    link: "https://jfom.com.au/",
    rows: 2,
    cols: 2,
    featured: true,
        
  },
  {
    img: '/images/jate.gif',
    title: 'Just Another Text Editor',
    link: "https://nameless-sierra-41954.herokuapp.com/",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/movie.jpeg',
    title: 'Movie and Snack Generator',
    link: "https://markedwards1.github.io/movieNight/assets/comboResult.html",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/tech.jpeg',
    title: 'Tech Blog',
    link: "https://markedwards1.github.io/movieNight/assets/comboResult.html",
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];

