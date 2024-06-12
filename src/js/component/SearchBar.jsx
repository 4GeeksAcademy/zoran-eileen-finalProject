import React, { useState, useContext } from 'react';
import { Context } from './appContext';
import { Link } from 'react-router-dom';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    borderRadius: 10,
}));

const FormField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1, 0),
}));

const Results = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: theme.spacing(3),
}));

const Listing = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const ListingDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
});

const ListingImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const SearchBar = () => {
    const { store, actions } = useContext(Context);
    const [location, setLocation] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const handleSearch = (e) => {
        e.preventDefault();
        actions.fetchData(location, checkin, checkout, adults, children, infants, pets);
    };

    return (
        <div className="NameofAirbnb">
            <Container>
                <Typography variant="h5" gutterBottom>Find Places to Stay</Typography>
                <form onSubmit={handleSearch}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormField
                                label="Location"
                                variant="outlined"
                                fullWidth
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <FormField
                                label="Check-in"
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={checkin}
                                onChange={(e) => setCheckin(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <FormField
                                label="Check-out"
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={checkout}
                                onChange={(e) => setCheckout(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <FormField
                                label="Adults"
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={adults}
                                onChange={(e) => setAdults(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <FormField
                                label="Children"
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={children}
                                onChange={(e) => setChildren(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <FormField
                                label="Infants"
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={infants}
                                onChange={(e) => setInfants(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <FormField
                                label="Pets"
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={pets}
                                onChange={(e) => setPets(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" color="primary" variant="contained" fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>

            {store.items && store.items.length > 0 && (
                <Results>
                    {store.items.map(item => (
                        <Listing key={item.id}>
                            <ListingImage src={item.images[0]} alt="Thumbnail" />
                            <ListingDetails>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2">Price: ${item.price.rate} {item.price.currency} per night</Typography>
                                <Button
                                    component={Link}
                                    to={`/details/${item.id}`}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    style={{ marginTop: 10 }}
                                >
                                    View Details
                                </Button>
                            </ListingDetails>
                        </Listing>
                    ))}
                </Results>
            )}
        </div>
    );
};

export default SearchBar;
