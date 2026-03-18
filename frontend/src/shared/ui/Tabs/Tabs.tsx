import { Button } from "../Button/Button";
import styles from "./Tabs.module.scss";
export interface TabsItem<T extends string = string> {
  key: T;
  label: string;
}

interface TabsProps<T extends string> {
  tabs: TabsItem<T>[];
  active: T;
  onChange: (key: T) => void;
}
export function Tabs<T extends string>(props: TabsProps<T>) {
  const { tabs, active, onChange } = props;
  return (
    <div className={styles.tabs}>
      {tabs.map(({ key, label }) => (
        <Button
          variant="gray"
          key={key}
          className={`${styles.tab} ${key === active ? styles.tabActive : ""}`}
          onClick={() => onChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
