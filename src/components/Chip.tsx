import {
  FocusIcon,
  ShortBreakIcon,
  LongBreakIcon,
} from "../../public/StatusIcons";

function chipIcon(status: string, isDark: boolean) {
  switch (status) {
    case "focused":
      return <FocusIcon isDark={isDark} />;
    case "short-break":
      return <ShortBreakIcon isDark={isDark} />;
    case "long-break":
      return <LongBreakIcon isDark={isDark} />;
  }
}

function Chip() {
  const status = "short-break";
  const isDark = false;
  const color = `${isDark ? "dark" : "light"}-${status.split("-")[0]}`;

  return (
    <h2
      className={`flex items-center justify-center gap-4 rounded-3xl max-w-fit py-2 px-4 border-2 border-solid border-${color}`}
    >
      {chipIcon(status, isDark)}
      <p className={`text-${color} font-bold`}>{status.split("-").join(" ")}</p>
    </h2>
  );
}

export default Chip;
