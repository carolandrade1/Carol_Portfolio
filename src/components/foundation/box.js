import styled from 'styled-components';
import propToStyle from '../../theme/util/propToStyle/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexBasis')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('height')}
  ${propToStyle('overflowY')}
  ${propToStyle('placeItems')}
  ${propToStyle('minHeight')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('zIndex')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('bottom')}
  ${propToStyle('boxShadow')}
  ${propToStyle('alignItems')}
  ${propToStyle('textAlign')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('borderRadius')}
`;

export default Box;
