import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function Header(props) {
    const content = {
        'badge': 'לימוד תורה',
        'header': 'לימוד פרשה בנוסח תימן',
        ...props.content
    };

    return (
        <section>
            <Container>
                <Box py={8} textAlign="center">
                    <Typography variant="overline" component="span">{content['badge']}</Typography>
                    <Typography variant="h3" component="h2">{content['header']}</Typography>
                </Box>
            </Container>

        </section>
    );
}