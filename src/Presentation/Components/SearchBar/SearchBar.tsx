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
    disabled: boolean
};

export function SearchBar({ Icon, onSearch, disabled }: ButtonProps) {

    const [userQuery, setUserQuery] = useState('');

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSearch(userQuery)
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
                    placeholder="Pokémon por id o nombre"
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