import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import StaticsTable from "./StatisticsTable";



export default function UrlForm() {
    const [createUrl, setCreateUrl] = useState(true)
    const [statics, setStatiscs] = useState(false)

    return <Box

        component="form"
        sx={{
            marginTop: '10px',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
        }}
        noValidate
        autoComplete="off"
    >
        <Box
            sx={{ width: "40%", justifyContent: 'center', margin: '10px', padding: '15px' }}
        >
            <Typography variant="h3" component="h2" sx={{ textAlign: 'center', margin: '15px' }}>
                Admin Panel
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ margin: '3px', width: '50%', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" sx={{ width: '80%' }} onClick={() => {
                        setCreateUrl(true)
                        setStatiscs(false)
                    }}
                    >Create URL</Button>
                </Box>
                <Box sx={{ margin: '3px', width: '50%', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" sx={{ width: '80%' }} onClick={() => {
                        setStatiscs(true)
                        setCreateUrl(false)
                    }}>Statistics</Button>
                </Box>
            </Box>
            {createUrl ? <Box>
                <Box sx={{ margin: '3px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TextField id="standard-basic" label="url" variant="standard" sx={{ width: '90%' }} />
                </Box>
                <Box sx={{ margin: '3px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TextField id="standard-basic" type="phone" label="phone number" variant="standard" sx={{ width: '90%' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', margin: '3px', padding: '15px', marginLeft: '2px' }}>
                    <Box sx={{ margin: '3px', width: '50%', display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" sx={{ width: '24%', marginRight: '8px' }}>Check</Button>
                        <Button variant="contained" sx={{ width: '24%' }}>Create</Button>
                    </Box>
                </Box>
            </Box> : null
            }

            {
                statics ?
                    <Box sx={{ margin: '10px', height: '80vh', alignItems: 'center' }}>
                        <StaticsTable />
                    </Box> : null
            }


        </Box>
    </Box>
}
