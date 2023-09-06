import styled from 'styled-components';

export const StyledLetterButton = styled.button<{ accuracy: AccuracyEnum }>`
  margin: 2px;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  background: ${(props) => accuracyColorMap.get(props.accuracy)};
`;

export enum AccuracyEnum {
  correct = 'correct',
  wrongPosition = 'wrongPosition',
  None = 'None',
  doesNotExist = 'doesNotExist',
}

export const accuracyColorMap = new Map<AccuracyEnum, string>([
  [AccuracyEnum.correct, '#6CA965'],
  [AccuracyEnum.wrongPosition, '#C8B653'],
  [AccuracyEnum.None, 'black'],
  [AccuracyEnum.doesNotExist, '#787C7F'],
]);
