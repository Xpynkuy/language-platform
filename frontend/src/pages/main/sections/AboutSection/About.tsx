import { BookOpenText, BrainCircuit, MessageCircle, Trophy } from "lucide-react";
import styles from "./About.module.scss";

const aboutItems = [
  {
    number: "01",
    tag: "hangul",
    title: "Учимся читать корейский без хаоса",
    description:
      "Разбираем хангыль по шагам: звук, форма, слоги и живые примеры, чтобы буквы быстро стали понятной системой.",
    icon: <BookOpenText />,
  },
  {
    number: "02",
    tag: "practice",
    title: "Закрепляем знания через короткие задания",
    description:
      "Мини-квизы, повторение слов и быстрые проверки помогают не просто пройти тему, а действительно запомнить ее.",
    icon: <BrainCircuit />,
  },
  {
    number: "03",
    tag: "dialogues",
    title: "Тренируем фразы из реальных диалогов",
    description:
      "Практикуй повседневные ситуации: знакомство, кафе, переписка, поездки и простые разговоры без учебниковой сухости.",
    icon: <MessageCircle />,
  },
  {
    number: "04",
    tag: "progress",
    title: "Видим прогресс и готовимся к цели",
    description:
      "Отслеживай сильные темы, возвращайся к слабым местам и двигайся к чтению, разговору или подготовке к TOPIK.",
    icon: <Trophy />,
  },
];

export const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.intro}>
        <div className={styles.kicker}>
          <span
            className={styles.loadingText}
            data-text="> ИНФОРМАЦИЯ_О_ПЛАТФОРМЕ..."
          >
            &gt; ИНФОРМАЦИЯ_О_ПЛАТФОРМЕ...
          </span>
          <span className={styles.kickerLine} />
        </div>
        <h2 className={styles.heading}>Платформа для твоего роста</h2>
        <p className={styles.lead}>
          Korean Booster помогает спокойно войти в корейский язык: читать
          хангыль, запоминать слова, тренировать фразы и видеть свой прогресс
          без лишней сложности.
        </p>
      </div>
      <div className={styles.about}>
        {aboutItems.map((item) => (
          <article className={styles.card} key={item.number}>
            <div className={styles.meta}>
              <span className={styles.number}>[{item.number}]</span>
              <span className={styles.tag}>&lt;{item.tag}/&gt;</span>
            </div>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <span className={styles.bgNumber}>{Number(item.number)}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
