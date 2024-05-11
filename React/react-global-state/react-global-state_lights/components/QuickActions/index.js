import styled from "styled-components";
import Button from "../Button";
import useLightControlStore from "@/globalStore";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  onAllLightsOff,
  onAllLightsOn,
}) {
  const { checkAllOn, checkAllOff } = useLightControlStore();

  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={checkAllOff(lights)}
        onClick={() => {
          onAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={checkAllOn(lights)}
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
