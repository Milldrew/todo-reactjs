import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
/**
 * The character counter needs to have
 *    - length value
 *    - MAX Chars
 *    - onKeyDown eventhandler
 *    - onChange eventHandler
 */
export default function TodoCharacterCounter(props) {
  const MAX_CHARS = 10;
  const [characterCountDown, setCharacterCountDown] = useState(MAX_CHARS);
  return (
    <Fragment>
      <Typography varaint="p">{props.characterCountDown}</Typography>
    </Fragment>
  );
}
