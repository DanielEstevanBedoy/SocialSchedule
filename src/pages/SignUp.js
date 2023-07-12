// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { ThemeProvider } from '@mui/material/styles';

// import firebase from "firebase/app"
// import "firebase/auth"

// export default function SignUp() {
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const data = new FormData(event.currentTarget);
//       const email = data.get('email');
//       const password = data.get('password');
      
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           // Signed up
//           var user = userCredential.user;
//           console.log("User signed up: ", user);
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.error("Error signing up: ", errorCode, errorMessage);
//         });
//     };
  
//     return (
//       <ThemeProvider theme={defaultTheme}>
//         <Grid container component="main" sx={{ height: '100vh' }}>
//           {/* Your form layout and fields here */}
//           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Sign Up
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign Up
//                 </Button>
//                 <Grid container>
//                   <Grid item>

//                     <Link href="#" variant="body2">
//                       {"Have an account? Sign In"}
//                     </Link>

//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     );
//   }
  