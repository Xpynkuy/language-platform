import { useState } from "react";
import { Tabs, type TabsItem } from "@shared/ui/Tabs/Tabs";
import { HANGUL_DATA, LetterCard } from "@entities/letter";
import styles from "./AlphabetViewer.module.scss";

type AlphabetTab = "consonants" | "vowels";

const TABS: TabsItem<AlphabetTab>[] = [
  { key: "vowels", label: "Гласные" },
  { key: "consonants", label: "Согласные" },
];

export function AlphabetViewer() {
  const [active, setActive] = useState<AlphabetTab>("consonants");

  return (
    <section className={styles.viewer}>
      <h1></h1>
      <Tabs tabs={TABS} active={active} onChange={setActive} />

      {active === "vowels" && (
        <>
          <p className={styles.groupLabel}>Гласные · 기본 모음</p>
          <div className={styles.grid}>
            {HANGUL_DATA.vowels_basic.items.map((l) => (
              <LetterCard key={l.glyph} letter={l} />
            ))}
          </div>

          <p className={styles.groupLabel}>Дифтонги · 이중모음</p>
          <div className={styles.grid}>
            {HANGUL_DATA.vowels_compound.items.map((l) => (
              <LetterCard key={l.glyph} letter={l} />
            ))}
          </div>
        </>
      )}

      {active === "consonants" && (
        <>
          <p className={styles.groupLabel}>Согласные · 자음</p>
          <div className={styles.grid}>
            {HANGUL_DATA.consonants.items.map((l) => (
              <LetterCard key={l.glyph} letter={l} />
            ))}
          </div>

          <p className={styles.groupLabel}>Напряжённые · 쌍자음</p>
          <div className={styles.grid}>
            {HANGUL_DATA.tense.items.map((l) => (
              <LetterCard key={l.glyph} letter={l} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
