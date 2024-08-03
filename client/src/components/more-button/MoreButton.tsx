import { type FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalContext } from '../../context/modal-context/ModalContext.tsx';
import { MoreButtonStyled } from './styled.ts';

type MoreButtonProps = {
  moreText: string
}

const MoreButton: FC<MoreButtonProps> = ({ moreText }) => {
  const modalContext = useContext(ModalContext);
  const { t } = useTranslation();

  return(
    <MoreButtonStyled onClick={() => modalContext.closeOpenModal()}><span>{t(moreText)}</span></MoreButtonStyled>
  )
}

export default MoreButton