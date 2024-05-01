import { type FC } from 'react';

import { EnvelopeStyled, PaperStyled } from './styled.ts';

const Envelope: FC = () => {
  return (
    <EnvelopeStyled>
      <PaperStyled />
    </EnvelopeStyled>
  )
}

export default Envelope;