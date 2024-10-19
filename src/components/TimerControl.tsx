import FuncButton from "./FuncButton";
import {
  OptionsButtonIcon,
  PlayButtonIcon,
  PauseButtonIcon,
  NextButtonIcon,
} from "../../public/FuncIcons";

function TimerControl() {
  const status = "focused";
  const isDark = false;
  const isActive = false;

  return (
    <div className="flex items-center justify-between">
      <FuncButton className={`bg-btn-${status}`}>
        <OptionsButtonIcon isDark={isDark} status={status} />
      </FuncButton>
      {isActive ? (
        <FuncButton>
          <PauseButtonIcon isDark={isDark} status={status} />
        </FuncButton>
      ) : (
        <FuncButton>
          <PlayButtonIcon isDark={isDark} status={status} />
        </FuncButton>
      )}
      <FuncButton className={`bg-btn-${status}`}>
        <NextButtonIcon isDark={isDark} status={status} />
      </FuncButton>
    </div>
  );
}

export default TimerControl;
