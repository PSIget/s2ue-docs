import styles from "./index.module.scss";

import { FadeIn } from "../FadeIn";
import { SectionHeader } from "../Headings";
import { CTAButton } from "../CTAButton";
import Link from "next/link";

interface BaseProps {
  title: string;
  subTitle: string;
}

interface ButtonProps extends BaseProps {
  button: JSX.Element;
}

interface LinkProps extends BaseProps {
  url: string;
  buttonText: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function LastSection(props: ButtonProps | LinkProps) {
  const { title, subTitle } = props;

  return (
    <FadeIn
      delay={0.3}
      className={
        `font-sans w-auto py-20 flex justify-between items-center flex-col relative px-6 gap-6 ` + styles.lastSection
      }
      section
    >
      <SectionHeader>{title}</SectionHeader>
      <div className="flex flex-col w-full md:w-min md:!flex-row">
        {"button" in props ? (
          props.button
        ) : (
          <Link
            href={props.url}
            onClick={props.onClick}
            className="block whitespace-nowrap"
          >
            <CTAButton>{props.buttonText}</CTAButton>
          </Link>
        )}
      </div>
      <p className="text-sm text-[#666666] text-center">{subTitle}</p>
    </FadeIn>
  );
}
