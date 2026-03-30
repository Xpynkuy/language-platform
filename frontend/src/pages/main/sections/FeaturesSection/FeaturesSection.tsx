import {
  BookA,
  BookMarked,
  BrainCircuit,
  ClipboardCheck,
  MessageSquareText,
  SquareUserRound,
} from "lucide-react";
import { FeaturesCard } from "./FeaturesCard";
import styles from "./FeaturesSection.module.scss";

const features = [
  {
    title: "Алфавит",
    description: "Освой хангыль с нуля — быстро и понятно",
    to: "/alphabet",
    icon: <BookA />,
  },
  {
    title: "Словарь",
    description: "Изучай слова и пополняй свой словарный запас каждый день",
    to: "/dictionary",
    icon: <BookMarked />,
  },

  {
    title: "Онлайн чат",
    description: "Общайся с другими и практикуй корейский в реальном времени",
    to: "/chat",
    icon: <MessageSquareText />,
  },
  {
    title: "Квиз",
    description:
      "Проверяй знания и закрепляй материал через интерактивные задания",
    to: "/quiz",
    icon: <BrainCircuit />,
  },
  {
    title: "Экзамен TOPIK",
    description: "Подготовься к экзамену TOPIK и проверь свой уровень",
    to: "/exam",
    icon: <ClipboardCheck />,
  },

  {
    title: "Личный профиль",
    description: "Отслеживай прогресс и управляй своим обучением",
    to: "/profile",
    icon: <SquareUserRound />,
  },
];
export const FeaturesSection = () => {
  return (
    <section className={styles.container}>
      {features.map((item) => (
        <FeaturesCard
          key={item.to}
          title={item.title}
          descriptions={item.description}
          to={item.to}
          icon={item.icon}
        />
      ))}
    </section>
  );
};
