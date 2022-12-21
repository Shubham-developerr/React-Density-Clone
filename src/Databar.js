import {Box,Toolbar, Typography,IconButton, Divider } from '@mui/material';
import React from 'react';
import ethereum from '../src/images/ethereum.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function Databar(){

  const[data,setData] = useState([]);
  setTimeout(()=>{
    const wb = new WebSocket("wss://fstream.binance.com/ws/!markPrice@arr@1s");
    wb.onopen = () => {
      console.log("Connection open")
    }
    wb.onmessage = (event) => {
      try {
        setData(JSON.parse(event.data)[1]["p"]);
        wb.close();
        console.log(data)
      }
      catch (e) {
        console.log(e);
      }
    }
  },1000)
  
  
    return(
         <Box sx={{ml:1,mr:1}}>
            <Toolbar sx={{mt:8,backgroundColor:"#2C2C34",height:"83px"}}>
              <img src={ethereum} alt="ethereum-logo" height="48px" width="48px" style={{marginLeft:"20px",marginTop:"20px"}}></img>
              <Typography variant="h6" component="big" sx={{width:"90px",height:"25px",fontWeight:"600",color:"#FCFCFC",marginLeft:"10px",position:"relative"}}>ETHUSDT</Typography>
              <Typography variant='subtitle1' sx={{position:"absolute",top:"53px",left:"102px",fontSize:"12px",color:"#A9A9A9",fontWeight:"550"}}>Perpetual</Typography>
              <button style={{width:22,height:20,backgroundColor:"#56565D",borderRadius:50,position:"absolute",left:"210px",top:"42px",border:"0"}}><IconButton sx={{width:10,height:6,color:"#E2FF6F"}}><KeyboardArrowDownIcon/></IconButton></button>
              <Typography sx={{color:"#00BD84",position:"absolute",left:"300px",top:"40px",size:"20px",weight:600,lineHeight:"25.32px"}}>$40,988</Typography>
              <Typography variant='caption' sx={{position:"absolute",left:"450px",color:"#A9A9A9",top:"35px"}}>Mark</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"450px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>{data}</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"600px",color:"#A9A9A9",top:"35px"}}>Index</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"600px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>40,564.60</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"700px",color:"#A9A9A9",top:"35px"}}>24 High</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"700px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>40,564.60</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"800px",color:"#A9A9A9",top:"35px"}}>24 Low</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"800px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>40,564.60</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"900px",color:"#A9A9A9",top:"35px"}}>24h change</Typography>
              <Typography variant='caption' sx={{color:"#00BD84",position:"absolute",left:"900px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}> +564.60(4.01%)</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"1050px",color:"#A9A9A9",top:"35px"}}>24h Volume(USDT)</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"1050px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>123,240,564.60</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"1200px",color:"#A9A9A9",top:"35px"}}>Funding/Countdown</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"1200px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>-0.004% hh:mm:ss</Typography>

              <Typography variant='caption' sx={{position:"absolute",left:"1400px",color:"#A9A9A9",top:"35px"}}>Open Interest</Typography>
              <Typography variant='caption' sx={{color:'#FCFCFC',position:"absolute",left:"1400px",top:"50px",fontFamily:'Overpass',fontWeight:500,fontSize:"12px"}}>123,240,564.60 </Typography>
            </Toolbar>
          </Box>
        )
}