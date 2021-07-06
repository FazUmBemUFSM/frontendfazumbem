import React , {useState} from 'react'
import { Paper } from '@material-ui/core';
import { CenterContainer, TabLogin } from './login-styles';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Tab, Tabs, Typography, Box} from '@material-ui/core';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

import LoginInst from './login-instituicao'
import LoginCurad from './login-curadoria';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height: "15%",
      maxWidth: "100%",
    },
    tabs: {
        height: "100%",
    },
    tab: {
        height: 120
        
    }
    
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        style={{height:"85%"}}
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (<>{children}</>)}
      </div>
    );
  }

const Login : React.FC = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <CenterContainer>
            <Paper style={{width: "80vw", margin:30, height: "80vh", backgroundColor: "#FEFEFE"}}>
                <Paper square className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                        className={classes.tabs}
                    >
                        <Tab className={classes.tab} icon={<ChromeReaderModeIcon />} label="Instituição" />
                        <Tab className={classes.tab} icon={<CardMembershipIcon />} label="Curadoria" />
                        
                    </Tabs>
                </Paper>

                <TabPanel value={value} index={0}>
                    <LoginInst/>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <LoginCurad/>
                </TabPanel>
                
            </Paper>
        </CenterContainer>
    )


}
export default Login;