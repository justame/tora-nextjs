/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import tora from "../../consts/tora.json";

export default function Search({ onChange }) {
    return (
        <div style={{ width: 300 }} dir="rtl">
            <Autocomplete
                dir="rtl"
                id="free-solo-2-demo"
                disableClearable
                onChange={onChange}
                options={Object.keys(tora.parasha).map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        dir="rtl"
                        {...params}
                        label="חפש פרשה"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: "search" }}
                    />
                )}
            />
        </div>
    );
}
