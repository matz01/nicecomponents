import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './chip.module.scss'

export type ChipProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * is the chip selected.
   */
   selected?: boolean;
   /**
   * the function called on click (it return selected value)
   */
  callback?: (x: boolean) => any
};

export function Chip({ text, selected=false, callback }: ChipProps) {
  return (
    <div
      className={`${styles.chip} ${selected ? styles.selected : ''}`}
      onClick={() => callback(selected)}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={faPlus}/>
    </div>
  );
}
