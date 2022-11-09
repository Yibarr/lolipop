import { FormEventHandler, Fragment, useState } from "react";
import SearchBarViewModel from "./SearchBarViewModel";
import {
  Paper,
  InputBase,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css"

export default function SearchBar() {
    const { getSummoners, summoners, error } = SearchBarViewModel();

    const [userQuery, setUserQuery] = useState('');

    const searchUserQuery: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        getSummoners(userQuery);
};

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
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Pokémon por id o nombre"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    />
                <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {error
                ?
                    <Paper>
                        Error
                    </Paper>
                :
                    summoners.map((summoner, i) => {
                        return (
                            <Paper key={summoner.id}>
                                {summoner.summonername}
                            </Paper>
                        );
                    })
            }
        </div>
    </Fragment>
  );
}