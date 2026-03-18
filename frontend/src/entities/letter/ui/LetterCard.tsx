import type { HangulLetter } from "../model/types";
import styles from './LetterCard.module.scss'

interface Props {
  letter: HangulLetter;
}

export function LetterCard({ letter }: Props) {
  return (
    <div className={styles.card}>
      <span className={styles.glyph}>{letter.glyph}</span>
      <div className={styles.meta}>
        <span className={styles.name}>{letter.name}</span>
        <span className={styles.nameRu}>{letter.nameRu}</span>
      </div>
      <span className={styles.romanization}>[ {letter.romanization} ]</span>
      <span className={styles.russian}>{letter.russian}</span>
    </div>
  );
}
