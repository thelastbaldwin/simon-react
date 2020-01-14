import React, {useCallback} from "react";
import classnames from "classnames";
import styles from "./SimonButton.module.css";

const SimonButton = ({color, onClick, activeColor, key}) => {
    const handleClick = useCallback(() => onClick(color), [onClick, color]);

    return (
        <button
            className={classnames(
                styles.simonButton,
                styles[color],
                {[styles.active]: activeColor === color}
            )}
            onClick={handleClick}
            key={key}
        />
    );
}

export default SimonButton;