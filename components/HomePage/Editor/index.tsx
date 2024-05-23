import styles from "./index.module.scss";

import { DiscordSection } from "../components/DiscordSection";
import { BoostySection } from "../components/BoostySection";
import { LastSection } from "../components/LastSection";
import HeroSection from "./HeroSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import { DownloadModal } from "./DownloadModal";
import classnames from "classnames";
import Head from "next/head";
import useLocalesMap from "utils/use-locales-map";
import { downText, firstTitle, firstTitleSub, goBtn, goTitle } from "./text";
import { LazyMotion, domAnimation } from "framer-motion";
import FeaturesSection from "./FeaturesSection";
import { XraySection } from "./XraySection";

const featuresContent = {
  techTitle: {
    en: "Harness the incredible power of Unreal Engine 5",
    uk: "Використай всю неймовірну міць Unreal Engine 5",
    ru: "Используй всю невероятную мощь Unreal Engine 5",
  },
  features: [
    // First feature
    {
      title: {
        en: "Incredible graphics",
        uk: "Неймовірна графіка",
        ru: "Невероятная графика",
      },
      paragraph: {
        en: "Unreal Engine 5 ensures an incredibly high level of detail and realism in visual effects.",
        uk: "Unreal Engine 5 забезпечує неймовірно високий рівень деталізації та реалізму візуальних ефектів.",
        ru: "Unreal Engine 5 обеспечивает невероятно высокий уровень детализации и реализма визуальных эффектов.",
      },
    },
    // Second feature
    {
      title: {
        en: "Nanite",
        uk: "Nanite",
        ru: "Nanite",
      },
      paragraph: {
        en: "This technology allows the use of scalable geometry, simplifying work with highly detailed objects.",
        uk: "Ця технологія дозволяє використовувати масштабовану геометрію, спрощуючи роботу з високодеталізованими об'єктами.",
        ru: "Технология позволяет использовать масштабируемую геометрию, что облегчает работу с высокодетализированными объектами.",
      },
    },
    // Third feature
    {
      title: {
        en: "Realistic lighting",
        uk: "Реалістичне освітлення",
        ru: "Lumen",
      },
      paragraph: {
        en: "Lumen's global illumination system creates realistic and dynamic lighting effects in real time.",
        uk: "Система глобального освітлення Lumen створює реалістичні та динамічні ефекти освітлення в реальному часі.",
        ru: "Система глобального освещения Lumen создает реалистичные и динамичные эффекты освещения в реальном времени.",
      },
    },
    // Fourth feature
    {
      title: {
        en: "Powerful tools",
        uk: "Потужні інструменти",
        ru: "Мощные инструменты",
      },
      paragraph: {
        en: "Unreal Engine 5 offers a wide range of tools for creating, editing, and optimizing game worlds and content.",
        uk: "Unreal Engine 5 пропонує широкий спектр інструментів для створення, редагування та оптимізації ігрових світів та контенту.",
        ru: "Unreal Engine 5 предоставляет широкий спектр инструментов для создания, редактирования и оптимизации игровых миров и контента.",
      },
    },
    // Fifth feature
    {
      title: {
        en: "MetaHuman",
        uk: "MetaHuman",
        ru: "MetaHuman",
      },
      paragraph: {
        en: "This tool allows the creation of realistic and expressive characters using advanced animation technology.",
        uk: "Цей інструмент дозволяє створювати реалістичних та виразних персонажів за допомогою передових технологій анімації.",
        ru: "Инструмент позволяет создавать реалистичные и выразительные персонажи с помощью передовой технологии анимации.",
      },
    },
    // Sixth feature
    {
      title: {
        en: "Easy to start and user-friendly",
        uk: "Легкий вхід і зручність роботи",
        ru: "Легкий вход и удобство работы",
      },
      paragraph: {
        en: "Unreal Engine 5 provides a more intuitive user interface and improved tools for content handling.",
        uk: "Unreal Engine 5 забезпечує більш інтуїтивний користувацький інтерфейс та вдосконалені інструменти для роботи з контентом.",
        ru: "Unreal Engine 5 предоставляет более интуитивный пользовательский интерфейс и улучшенные средства работы с контентом.",
      },
    },
    // Seventh feature
    {
      title: {
        en: "Cross-platform capabilities",
        uk: "Мультиплатформенні можливості",
        ru: "Мультиплатформенность",
      },
      paragraph: {
        en: "Unreal Engine 5 supports various platforms including PC, consoles, mobile devices, and virtual reality.",
        uk: "Unreal Engine 5 підтримує різні платформи, включаючи ПК, консолі, мобільні пристрої та віртуальну реальність.",
        ru: "Unreal Engine 5 поддерживает различные платформы, включая ПК, консоли, мобильные устройства и виртуальную реальность.",
      },
      label: "Soon",
    },
    // Eighth feature
    {
      title: {
        en: "Advanced sound capabilities",
        uk: "Розширені звукові можливості",
        ru: "Звуковые возможности",
      },
      paragraph: {
        en: "Unreal Engine 5 offers enhanced sound implementation capabilities with support for three-dimensional sound.",
        uk: "Unreal Engine 5 пропонує розширені можливості звукової реалізації з підтримкою тривимірного звучання.",
        ru: "Unreal Engine 5 предоставляет улучшенные возможности звуковой реализации с поддержкой трехмерного звучания.",
      },
      label: "Soon",
    },
    // Ninth feature
    {
      title: {
        en: "World Partitioning",
        uk: "Поділ світу на частини",
        ru: "World Partitioning",
      },
      paragraph: {
        en: "This feature allows splitting the game world into smaller parts for performance optimization and level loading.",
        uk: "Ця функція дозволяє розділити ігровий світ на менші частини для оптимізації продуктивності та завантаження рівнів.",
        ru: "Эта функция позволяет разделять игровой мир на более мелкие части для оптимизации производительности и загрузки уровней.",
      },
      label: "Soon",
    },
  ],
};

export default function Home() {
  const title = useLocalesMap(firstTitle);
  const titleSub = useLocalesMap(firstTitleSub);
  const subtitle = useLocalesMap(downText);
  const buttonText = useLocalesMap(goBtn);

  const jsonldData = {
    "@context": "http://schema.org",
    "@type": "VideoGame",
    name: process.env.NEXT_PUBLIC_SITE_NAME,
    description: titleSub,
    operatingSystem: "Windows",
    gamePlatform: "PC",
    applicationCategory: "Game",
    genre: "Action, First-Person Shooter",
    image: "/favicon/apple-touch-icon.png",
    url: "/",
    publisher: {
      "@type": "Organization",
      name: "Red Projects",
    },
  };

  return (
    <>
      <Head>
        <style>
          {`
            footer {
              background-color: white !important;
            }

            .dark footer {
              background-color: black !important;
              --tw-border-opacity: 1;
              border-top: 1px solid rgba(38,38,38,var(--tw-border-opacity));
            }

            .dark body {
              background-color: black !important;
              --tw-border-opacity: 1;
            }

            .dark .nextra-nav-container .nextra-nav-container-blur  {
              background-color: rgba(0,0,0,.5) !important;
            }

            html:not([class~="dark"]) {
              .hero{
                border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08) !important;
              }
            }
          `}
        </style>
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonldData) }}
        />
      </Head>
      <main
        className={classnames(styles.game) + " relative place-content-center"}
        id="game-index"
      >
        <h1 className="hidden">{title}</h1>
        <LazyMotion features={domAnimation}>
          <HeroSection />
          <FeaturesSection
            techTitle={featuresContent.techTitle}
            features={featuresContent.features}
          />
          <XraySection />
          <DiscordSection />
          {/* <BoostySection /> */}
          <LastSection
            title={useLocalesMap(goTitle)}
            subTitle={subtitle}
            button={<DownloadModal buttonText={buttonText} limit={false} />}
          />
        </LazyMotion>
      </main>
    </>
  );
}
