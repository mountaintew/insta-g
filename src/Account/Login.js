import React, { useState } from 'react'
import Lottie from 'react-lottie'
import hero from './Lottie/space-hero.json'
import './Login.css'
import { TextField, OutlinedInput, FormControl, Grid, IconButton, InputAdornment } from '@material-ui/core';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: hero,
    };

    const handleClickShowPassword = () => {
        setShowPassword(showPassword ? false : true);
    }


    return (
        <div className="login">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={4} sm={4} md={5} lg={5} className="login__body__hero">

                    <Lottie
                        options={defaultOptions}
                    />

                </Grid>
                <Grid item xs={12} sm={6} md={6} className="login__body__form">
                    <div className="login__logo" >
                        <img src="logo.png" />
                    </div>


                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="login__field">
                            <TextField
                                placeholder="Username"
                                variant="outlined"
                                size="small"
                                fullWidth
                                inputProps={{ style: { fontFamily: 'NBSB', color: 'white'} }}
                            />
                        </div>
                        <div className="login__field">
                            <FormControl variant="outlined" size="small">
                                <OutlinedInput
                                    placeholder="Password"
                                    inputProps={{ style: { fontFamily: 'NBSB', color: 'white'} }}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                >
                                </OutlinedInput>
                            </FormControl>



                            {/* 
                            <label>Password:</label>
                            <div className="login__fieldBorder">
                                <input type={showPassword ? "text" : "password"} required />
                                {!showPassword ?
                                    <IconButton
                                        onClick={() => show()}
                                        size="small"
                                    >
                                        <VisibilityOffRoundedIcon />
                                    </IconButton>
                                    :
                                    <IconButton
                                        onClick={() => hide()}
                                        size="small"
                                    >
                                        <VisibilityRoundedIcon />
                                    </IconButton>

                                }

                            </div> */}
                        </div>
                        <div className="login__button">
                            <button type="submit">Login</button>
                        </div>
                    </form>


                </Grid>
            </Grid>
        </div>
    )
}

export default Login
