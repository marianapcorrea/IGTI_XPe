import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Icon, IconButton, makeStyles } from '@material-ui/core';

//Criação de Hook useStyles
const useStyles = makeStyles({
    //Classe table:
    table: {
        borderTop: "1px solid rgb(244, 244, 244)",
        minHeight: "100%",
        //Inclusão de mais um seletor dentro da classe
        "& td, & th ": {
            borderRight: "1px solid rgb(244, 244, 244)",
        },
    }
})

const DaysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const MapDaysOfWeek = DaysOfWeek.map(day => <TableCell align="center" key={day}>{day}</TableCell>)

const MapForBody = DaysOfWeek.map(day => <TableCell align="center" key={day}>x</TableCell>)


export function CalendarScreen() {
    //A constante 'classes' é usada para chamar o Hook useStyles, evitando conflito de seletor.
    const classes = useStyles();
    return (
        <Box display="flex" height="100%" alignItems="stretch">
            <Box borderRight="1px solid rgb(224, 224, 224)" width="16em" padding="8px 16px">
                <h2>Agenda React</h2>
                <Button variant="contained" color="primary">Novo Evento</Button>
                <Box margin="64px">
                    <h3>Agendas</h3>
                    <FormControlLabel control={<Checkbox />} label="Pessoal" ></FormControlLabel>
                    <FormControlLabel control={<Checkbox />} label="Trabalho" ></FormControlLabel>
                </Box>
            </Box>
            <Box flex="1" display="flex" flexDirection="column" >
                <TableContainer style={{ height: "100%", }} component={"div"}>
                    <Box display="flex" alignItems="center" padding="8px 16px">
                        <Box>
                            <IconButton aria-label="Mês Anterior">
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <IconButton aria-label="Próximo mês">
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </Box>
                        <Box flex="1" marginLeft="16px" component="h3">Junho de 2022</Box>
                        <IconButton aria-label="Usuário">
                            <Avatar>
                                <Icon>person</Icon>
                            </Avatar>
                        </IconButton>
                    </Box>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>{MapDaysOfWeek}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>{MapForBody}</TableRow>
                            <TableRow>{MapForBody}</TableRow>
                            <TableRow>{MapForBody}</TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}
