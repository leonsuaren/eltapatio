import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { MoreButtonStyled } from './styled.ts';

type MoreButtonProps = {
  moreText: string
}

const MoreButton: FC<MoreButtonProps> = ({ moreText }) => {
  const { t } = useTranslation();

  return(
    <MoreButtonStyled><span>{t(moreText)}</span></MoreButtonStyled>
  )
}

export default MoreButton