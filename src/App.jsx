import './App.css'
import TourCard from "./components/TourCard.jsx";
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid2';

function App() {

  return (
    <>
      <div className='App'>
          <Container>
              <Grid container spacing={5}>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>
              </Grid>
          </Container>
      </div>

    </>
  )
}

export default App
