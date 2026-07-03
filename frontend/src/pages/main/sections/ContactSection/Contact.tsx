import { ExternalLink, GitPullRequest, Send } from "lucide-react";
import styles from "./Contact.module.scss";

const contacts = [
  {
    label: "Telegram",
    value: "@xpynkuy",
    href: "https://t.me/xpynkuy",
    icon: <Send />,
  },
  {
    label: "GitHub",
    value: "Xpynkuy",
    href: "https://github.com/Xpynkuy",
    icon: <GitPullRequest />,
  },
];

export const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.intro}>
        <div className={styles.kicker}>
          <span
            className={styles.loadingText}
            data-text="> КОНТАКТНЫЕ_КАНАЛЫ..."
          >
            &gt; КОНТАКТНЫЕ_КАНАЛЫ...
          </span>
          <span className={styles.kickerLine} />
        </div>
        <h2 className={styles.heading}>Связаться с проектом</h2>
        <p className={styles.lead}>
          Есть идея, вопрос или предложение по Korean Booster? Напиши напрямую
          или загляни в репозиторий.
        </p>
      </div>

      <div className={styles.contacts}>
        {contacts.map((contact, index) => (
          <a
            className={styles.card}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            key={contact.label}
          >
            <span className={styles.number}>
              [{String(index + 1).padStart(2, "0")}]
            </span>
            <span className={styles.icon}>{contact.icon}</span>
            <span className={styles.content}>
              <span className={styles.label}>{contact.label}</span>
              <span className={styles.value}>{contact.value}</span>
            </span>
            <ExternalLink className={styles.arrow} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
};
