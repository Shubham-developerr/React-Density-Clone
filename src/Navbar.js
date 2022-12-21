import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import App from "./App";
import {Stack} from '@mui/material';
import { Icon } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Height } from "@mui/icons-material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LogoutIcon from '@mui/icons-material/Logout';
import navbrand from "../src/images/navbrand.jpeg";
import "./App.css"

export default function Navbar()
{
    return(
        <AppBar sx={{backgroundColor:'#1F1F24'}}>
            <Toolbar>
                <img alt="logo" src={navbrand} style={{width:20,height:20}}></img>
                <Typography variant="h4" sx={{ml:0.5}}>density</Typography>
                <Typography sx={{ml:6,fontSize:15}}><u>Onboarding</u></Typography>
                <Typography sx={{ml:6,fontSize:13,color:'#D9D9D9'}}>Deposit</Typography>
                <Typography sx={{ml:6,fontSize:13,color:'#D9D9D9'}}>Withdraw</Typography>
                <Typography sx={{ml:6,fontSize:13,color:'#D9D9D9',width:"90px"}}>Adjust Margin</Typography>
                <button style={{borderRadius:50,backgroundColor:'#56565D',height:35,width:35,marginLeft:650}}><IconButton sx={{color:'#D9D9D9',width:25,height:25}}><ContentCopyRoundedIcon/></IconButton></button>
                <button style={{borderRadius:50,backgroundColor:'#56565D',height:35,width:35,marginLeft:15}}><IconButton sx={{color:'#D9D9D9',width:25,height:25}}><AccountBalanceWalletIcon/></IconButton></button>
                <button style={{borderRadius:50,backgroundColor:'#56565D',height:35,width:35,marginLeft:15}}><Badge variant='dot' color="error"><PersonIcon sx={{color:'#D9D9D9',width:25,height:25}}/></Badge></button>
                <button style={{borderRadius:50,backgroundColor:'#56565D',height:35,width:35,marginLeft:15}}><IconButton sx={{color:'#D9D9D9',width:30,height:30}}><CircleNotificationsIcon/></IconButton></button>
                <button style={{border:0,height:35,width:35,marginLeft:15,backgroundColor:'#1F1F24'}}><IconButton sx={{color:'#D9D9D9',width:25,height:25}}><LogoutIcon/></IconButton></button>
            </Toolbar>
        </AppBar>
       )
}
