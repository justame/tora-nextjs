import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import tora from "../../consts/tora.json";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: "inline"
    }
}));

export default function AlignItemsList({ parasha, stage = 0 }) {
    const classes = useStyles();
    if (!parasha) {
        return null;
    }
    console.log(stage)
    const pasuks = tora.parasha[parasha].stages[stage];

    return (
        <List className={classes.root} a>
            {pasuks.map((pasuk, index) => {
                const parashaPath = tora.parasha[parasha].parashaLink.replace(
                    "parasha.htm",
                    ""
                );
                return (
                    <div key={index}>
                        <div key={index}>
                            <div key={index + "image"}>
                                <img
                                    style={{ maxWidth: "100%" }}
                                    alt=""
                                    src={`https://tora613.net/tora/${parashaPath}/${pasuk.image}`}
                                />
                            </div>
                            <div key={index + "audio"}>
                                <audio controls hidden="" style={{ width: "300px" }}>
                                    <source
                                        src={`https://tora613.net/tora/${parashaPath}${pasuk.audio}`}
                                        type="audio/mpeg"
                                    />
                                </audio>
                            </div>
                        </div>
                        <Divider variant="inset" component="li" />
                    </div>
                );
            })}
        </List>
    );
}
