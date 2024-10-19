import FuncButton from "./FuncButton";
import { OptionsButtonIcon, NextButtonIcon } from "../../public/FuncIcons";
import PlayPauseBtn from "./PlayPauseBtn";

function TimerControl() {
  // TODO: add context later
  const status = "focused";
  const isDark = false;
  const isActive = false;

  return (
    <div className="flex items-center justify-between">
      <FuncButton className={`bg-btn-${status}`}>
        <OptionsButtonIcon isDark={isDark} status={status} />
      </FuncButton>
      <PlayPauseBtn
        isActive={isActive}
        isDark={isDark}
        status={status}
        className="bg-btn-focused p-7"
      />
      <FuncButton className={`bg-btn-${status}`}>
        <NextButtonIcon isDark={isDark} status={status} />
      </FuncButton>
    </div>
  );
}

export default TimerControl;
