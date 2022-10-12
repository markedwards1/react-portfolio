import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

export default function HeroIntroduction() {
  return (
    <Container
      maxWidth="1g"

    
    >
      <Card 
      
      
      sx={{ minWidth: 350 }}>
        {/* this is the container for box */}
        <Box display="flex" flexDirect="row-reverse">
          <CardActionArea>
            <CardMedia
              component="img"
              height="380"
              image="/images/self-portrait.jpeg"
              alt="Self Portrait"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hi i'm Mark
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bootcamp Survior and Full Stack Web Developer.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Box>
      </Card>
    </Container>
  );
}
