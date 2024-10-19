import { PlayButtonIcon, PauseButtonIcon } from "../../public/FuncIcons";
import FuncButton from "./FuncButton";
import { FuncIconPropTypes } from "../../interfaces/interface";

function PlayPauseBtn({
  isActive,
  isDark = false,
  status,
  className = "",
}: { isActive: boolean } & FuncIconPropTypes) {
  return (
    <FuncButton className={className}>
      {isActive ? (
        <PlayButtonIcon isDark={isDark} status={status} />
      ) : (
        <PauseButtonIcon isDark={isDark} status={status} />
      )}
    </FuncButton>
  );
}

export default PlayPauseBtn;
