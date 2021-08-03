import React , {useState} from 'react'
import { Paper } from '@material-ui/core';
import { CenterContainer, TabLogin } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Tab, Tabs, Typography, Box} from '@material-ui/core';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import PerfilInst from './perfil/perfil'

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

const BaseInst : React.FC = () => {

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
                        style={{width: "100%"}}
                    >
                        <Tab className={classes.tab} style={{minWidth: "95%"}}icon={<ChromeReaderModeIcon />}  label="Instituição" />
                        <Tab className={classes.tab} style={{minWidth: "5%"}}icon={<ExitToAppIcon />}  label="Sair" />
                    </Tabs>
                        
                </Paper>

                <TabPanel value={value} index={0}>
                    <PerfilInst/>

                </TabPanel>
                
            </Paper>
        </CenterContainer>
    )


}
export default BaseInst;