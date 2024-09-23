import {Paper} from "@mui/material/";
import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {AccessTime} from "@mui/icons-material";
import Rating from '@mui/material/Rating'


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img
                    src="https://yandex-images.clstorage.net/cst4T7284/0c7efdDW/CHrdWBpK_rPWoj6-ElLMMoA5D-UTsT15NhdpOqzXm6kkE5DvAcQNvmMMR9vx-XTeNT3PJUlSUWQC-Fk0tEQVBi0u6Dw_Duqj5uKvmoOT6AOA6dvV0tQZbHbyyoyLldyqs8DnePZziRt2eQffAFhFuPaJm5BaNnYlEn9_UQeGdGCZe55ZeppM5iZTHvhAk_7CABrIFJHAmToBxqrtu9Xv-xNj9crnodgqZemk_HUbVds2TsuSeYamhHPvDoCnBmSx2PuOaRpoTrS3cBzo4_GOs5KpqHbTEdspIpcKbYi2XfggMZaYd8Ia2ZaIVL_lyCfrxlyqU1jlRwZRrk7hNsYnMqg7nhnYeazFBDKMifMDn0GDaAlHI2LbmRCma87r1t2oUbOHuDeSWLumOcavxyoHeRdfCTIL9pU1UI-MkJaGVwIbev9ZuMqsJaQyzwmS4v9BUPr5dLHQ2LvA15vPWvT-WVNh90rGomqZhlnnnkXoBqs236rQWzaXFqHsLzF05TVDyLvP-irrbXeGsgwLU_GsUNB6qYXjASsJcZXYHQlWv4gQEXS55UA66XfqJIy3-OVr1m-J0woV1lSDjI6y9NfGk8t7jkub-azVlIKtSMNyP8AD-FglITD5m8NlKF4ptGxoQiOl2YejSCt0ufacpCsHixX_ScFY9-WUUr1so6a1pPOo2t0qa2sfJ4XyXongwpxwABhrtUFR6Zrwl-pe-xUvuyPwVdrkEGoKR_jXTZUb5oonDfmzScVXlKDf3oB25XdgSni8Wwqaz_UnMT_Kg7OeUtEqejfDA2mbkVSpjNiFvwnT8ZcL5nNZ6dR7Ba32aaRqRf1ZIVslJKQzvA3xtYakoJibL1mYyr2mVLNMqqFAvnBC-LmVcfH5myNlORz5ZZx7AVCVihTwKZsVGffOZYlGu9ZOqZELhea3UCwPQ5UXlUI4CIw7CtkeJRdC_XoBcD-TgJraFHHzSctwpMsvSqesk"
                    alt=""
                    className={'img'}/>
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 3,
                        }}
                    >
                        <Rating
                            name='read-only' value={4.75} readOnly precision={0.01} size='small'
                        />
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            4.75
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={0.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h3' marginTop={0}>
                            From C $147
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>

    )
}

export default TourCard;