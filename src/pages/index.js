import React from "react";
import Classes from './how.module.scss';
import Grid from '@material-ui/core/Grid';


const How = ()=>{

    return(
<div>
    <div className={Classes.secMainDiv}>



<Grid container justify="center">
<Grid  >
<h2 style={{color:"white",borderBottom:"2px solid #00b990"  ,marginTop:"10px" }}>How It Works 
</h2>
</Grid>

</Grid>


<div>
<Grid container justify="center" >

<Grid item xs={4} lg={1}>
    <div>
<h2 style={{backgroundColor:"#00cf9e",color:"white",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"15px",
paddingBottom:"20px",
paddingTop:"25px"
}}>1</h2>
</div>
</Grid>

<Grid item xs={10} lg={8}>
<p style={{color:"white",paddingTop:"15px"}}>PIAIC will launch classes in the following locations, one city at a time, in the following order</p>
</Grid>

</Grid>
</div>
<br/><br/><br/>
<Grid container justify="center">
<Grid item lg={6}>
    <img     width="275px" height="250px"  src="https://www.piaic.org/static/media/pakMap.920e8f6a.png" style={{
    verticalAlign:"middle",
    marginTop:"30px"
    }} />
</Grid>

<Grid item lg={6} xl={10}>
<p style={{color:"white", textAlign:"center"}}>City by City Roadmap</p>


<table>
    <tr>
        <td className={Classes.Numbers}>1</td>
        <td >

<span    style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>
        <td><input type="text"   className={Classes.citiesNames} outline={true} value="Karachi"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>




    <tr>
        <td className={Classes.Numbers}>2</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>

        <td><input type="text"   className={Classes.citiesNames}  value="Islamabad"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>



    <tr>
        <td className={Classes.Numbers}>3</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>
        <td><input type="text"     className={Classes.citiesNames} value="Faislabad"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>




    <tr>
        <td className={Classes.Numbers}>4</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%",backgroundColor:" rgb(0, 207, 158)"}}></span>
        </td>
        <td><input type="text"    className={Classes.citiesNames2} value="Sialkot"/></td>
        <td className={Classes.Started} >Accepting applications in Sialkot</td>

    </tr>



    <tr>
        <td className={Classes.Numbers}>5</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>
        <td><input type="text"     className={Classes.citiesNames} value="Lahore"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>



    <tr>
        <td className={Classes.Numbers}>6</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>
        <td><input type="text"   className={Classes.citiesNames}  value="Peshwar"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>




    <tr>
        <td className={Classes.Numbers}>7</td>
        <td> 
<span style={{display:"inline-block",padding:"8px",border:"2px solid rgb(0, 207, 158)", borderRadius:"100%"}}></span>
        </td>
        <td><input  className={Classes.citiesNames}  type="text" value="Quetta"/></td>
        <td className={Classes.Started} >Class Started</td>

    </tr>

</table>


</Grid>

</Grid>

</div>




<div  className={Classes.secondDiv}  >

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"#00cf9e",color:"white",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"15px",
paddingBottom:"20px",
paddingTop:"25px"
}}>2</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<p className={Classes.secondparagh} >To participate in the program and become eligible for the most prestigious credentials for AI, Cloud, and Blockchain technologies in the world, students must complete the following process</p>
   <hr/>
    <p className={Classes.secondivpar}>1- Signup at PIAIC Portal. <a style={{textDecoration:"none" ,color:"#268b7e"}} href="https://portal.piaic.org/signup"> Click Here </a></p>
    <p className={Classes.secondivpar}> 2- Submit the online application.</p>
    <p className={Classes.secondivpar}> 3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</p>
    <p className={Classes.secondivpar}> 4- Pass all PIAIC exams with an average score of at least 70%.</p>

</Grid>

    </Grid>
</div>











<div  className={Classes.thirddiv}>

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"#00cf9e",color:"white",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"30px",
paddingBottom:"20px",
paddingTop:"25px"
}}>3</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<h6 className={Classes.thirddivPara}  >All programs are one year long in duration. Each program is divided into four quarters (10 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 3 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, and Blockchain. Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.</h6>

</Grid>

    </Grid>
</div>










<div  className={Classes.forthDiv}>

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"white",color:"#0ace93",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"70px",
paddingBottom:"20px",
paddingTop:"25px"
}}>4</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<h6 className={Classes.forthdivPara}  >Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.</h6>
<h6 className={Classes.forthdivPara}  >The fee structure for onsite students is PKR 1,000 per month for 10 months, payable in 4 installments of PKR 3,000, before the start of each quarter.</h6>
<h6 className={Classes.forthdivPara}  >The fee structure for distance learning students is PKR 500 per month for 10 months, payable in 4 installments of PKR 1,500, before the start of each quarter.

</h6>


</Grid>

    </Grid>
</div>










<div  className={Classes.fifthDiv}>

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"#0ace93",color:"white",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"30px",
paddingBottom:"20px",
paddingTop:"25px"
}}>5</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<h6 className={Classes.fifthdivPara}  >Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.</h6>



</Grid>

    </Grid>
</div>




<div  className={Classes.sixthDiv}>

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"white",color:"#0ace93",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"30px",
paddingBottom:"20px",
paddingTop:"25px"
}}>6</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<h6 className={Classes.sixthdivPara}  >Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.</h6>



</Grid>

    </Grid>
</div>





<div  className={Classes.sevenththDiv}>

    <Grid  container justify="center">

    <Grid item xs={4} lg={1}>
<h2 style={{backgroundColor:"#0ace93",color:"white",borderRadius:"100%",width:"70%"
,textAlign:"center",
marginTop:"30px",
paddingBottom:"20px",
paddingTop:"25px"
}}>7</h2>
</Grid>

<Grid   item xs={10} lg={8} >
<h6 className={Classes.seventhdivPara}  >For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
Please note we are closed on Fridays.</h6>

<h6  className={Classes.seventhtwodivPara} >For technical questions related to coursework, you may contact us via email at education@piaic.org.</h6>

</Grid>

    </Grid>
</div>















</div>
    )

}



export default How;