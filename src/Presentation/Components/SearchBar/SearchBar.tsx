import { FormEventHandler, Fragment, useState, ComponentType } from "react";
import {
  Paper,
  InputBase,
  IconButton
} from "@mui/material";
import "./SearchBar.css";

interface ButtonProps {
    Icon: ComponentType,
    onSearch: (query: string) => void,
    disabled: boolean,
    placeholder: string
};

export function SearchBar({ Icon, onSearch, disabled, placeholder }: ButtonProps) {

    const [userQuery, setUserQuery] = useState("");

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSearch(userQuery);
      };

    return (
        <Fragment>
            <Paper
                component="form"
                onSubmit={onSubmit}
                className="form-container"
            >
                <InputBase
                    type='text'
                    placeholder={placeholder}
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                />
                <IconButton type="submit" aria-label="search" disabled={disabled}>
                    <Icon/>
                </IconButton>
            </Paper>
        </Fragment>
  );
};