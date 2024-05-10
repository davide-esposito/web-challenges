import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllLightsOff,
  onAllLightsOn,
  lights,
}) {
  const allOn = lights.every((light) => light.isOn);
  const allOff = lights.every((light) => !light.isOn);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={allOff}
        onClick={() => {
          onAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={allOn}
        type="button"
        onClick={() => {
          onAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
