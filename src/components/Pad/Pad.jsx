import React, {useCallback} from "react";
import classnames from "classnames";
import styles from "./Pad.module.css";

const Pad = ({color, onClick, active, key, value}) => {
    const handleClick = useCallback(() => onClick(value), [onClick, value]);

    return (
        <button
            className={classnames(
                styles.pad,
                styles[color],
                {[styles.active]: active}
            )}
            onClick={handleClick}
            key={key}
        />
    );
}

export default Pad;