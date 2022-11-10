import { FormEventHandler, Fragment, useState } from "react";
import SearchBarViewModel from "./SearchBarViewModel";
import {
  Paper,
  InputBase,
  IconButton,
  CircularProgress
} from "@mui/material";
import {
    Search,
    CancelOutlined,
    ErrorOutline
} from "@mui/icons-material";
import "./SearchBar.css"

export default function SearchBar() {
    const { getSummoner, summoner, error, loading } = SearchBarViewModel();

    const [userQuery, setUserQuery] = useState('');

    const searchUserQuery: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        getSummoner(userQuery);
    };

    const searchOutput = () => {
        if(error) {
            return <div>
                <ErrorOutline/>
                <p>Hubo un error al buscar el pokémon</p>
            </div>
        } else if (summoner !== undefined) {
            if (summoner.sprite !== null) {
                return <div>
                    {summoner.summonername}
                    <img src={summoner.sprite} alt="Pokemon sprite"></img>
                </div>
            } else {
                return <div>
                    {summoner.summonername}
                    <CancelOutlined/>
                </div>
            }
        }
    };

    const dynamicSearchIcon = () => {
        if(loading) {
            return <CircularProgress />
        } else {
            return <IconButton type="submit" aria-label="search">
                <Search/>
            </IconButton>
        }
    }

    return (
        <Fragment>
            <div className="search-container">
                <Paper
                    component="form"
                    onSubmit={searchUserQuery}
                    className="form-container"
                >
                    <InputBase
                        type='text'
                        placeholder="Pokémon por id o nombre"
                        value={userQuery}
                        onChange={(e) => setUserQuery(e.target.value)}
                        />
                    {dynamicSearchIcon()}
                </Paper>
                <Paper>
                    {searchOutput()}
                </Paper>
            </div>
        </Fragment>
  );
}