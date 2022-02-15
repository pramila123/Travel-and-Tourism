import { Typography,Grid, Button } from '@mui/material'
import TextFieldForm from '../Forms/TextFieldForm'
import React from 'react'
import styled from 'styled-components';
const BookTripContainer=styled.div``;
const BookTrip = () => {
  return (
    <div>

        <BookTripContainer>
            <Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Book the Tour</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldForm label="Name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldForm label="Email Address"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldForm label="Phone no"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldForm type="date" label="date"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color="success">Book now</Button>
                    </Grid>
                </Grid>
            </Grid>
        </BookTripContainer>
    </div>
  )
}

export default BookTrip