export interface StatusIconPropTypes {
  isDark?: boolean;
  className?: string;
}

export interface FuncIconPropTypes {
  isDark?: boolean;
  className?: string;
  status: "focused" | "short-break" | "long-break";
}
