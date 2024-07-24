import { type FC } from "react";

import { useTranslation } from "react-i18next";

import { SectionHeaderStyled } from "./styled.ts";

type sectionHeaderProps = { translation: string };

const SectionHeader: FC<sectionHeaderProps> = ({ translation }) => {
  const { t } = useTranslation();

  return (
    <SectionHeaderStyled>
      <h1>{t(translation)}</h1>
    </SectionHeaderStyled>
  );
};

export default SectionHeader;
