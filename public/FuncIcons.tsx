import { FuncIconPropTypes } from "../interfaces/interface";

function setFill(isDark: boolean, status: string) {
  switch (status) {
    case "focused":
      return isDark ? "rgb(255, 242, 242)" : "rgb(71, 21, 21)";

    case "shortBreak":
      return isDark ? "rgb(242, 255, 245)" : "rgb(20, 64, 29)";

    case "longBreak":
      return isDark ? "rgb(242, 249, 255)" : "rgb(21, 48, 71)";
  }
}

export function PlayButtonIcon({
  isDark = false,
  className = "",
  status,
}: FuncIconPropTypes) {
  const fill = setFill(isDark, status);

  return (
    <svg
      width="22.000015"
      height="26.001953"
      viewBox="0 0 22 26.002"
      fill="none"
      className={className}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M22 13C21.99 13.34 21.91 13.68 21.74 13.98C21.57 14.28 21.33 14.53 21.03 14.71L3.03 25.7C2.73 25.89 2.39 25.99 2.03 26C1.68 26 1.33 25.91 1.02 25.73C0.71 25.56 0.45 25.31 0.27 25.01C0.09 24.7 -0.01 24.35 1.52e-5 24L1.52e-5 2C-0.01 1.64 0.09 1.29 0.27 0.99C0.45 0.68 0.71 0.43 1.02 0.26C1.33 0.08 1.68 -0.01 2.03 0C2.39 0 2.73 0.11 3.03 0.3L21.03 11.28C21.33 11.46 21.57 11.71 21.74 12.01C21.91 12.31 21.99 12.65 22 13Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function PauseButtonIcon({
  isDark = false,
  className = "",
  status,
}: FuncIconPropTypes) {
  const fill = setFill(isDark, status);

  return (
    <svg
      width="22.000000"
      height="24.000000"
      viewBox="0 0 22 24"
      fill="none"
      className={className}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M22 2L22 22C22 22.53 21.78 23.03 21.41 23.41C21.03 23.78 20.53 24 20 24L15.5 24C14.96 24 14.46 23.78 14.08 23.41C13.71 23.03 13.5 22.53 13.5 22L13.5 2C13.5 1.46 13.71 0.96 14.08 0.58C14.46 0.21 14.96 0 15.5 0L20 0C20.53 0 21.03 0.21 21.41 0.58C21.78 0.96 22 1.46 22 2ZM6.5 0L2 0C1.46 0 0.96 0.21 0.58 0.58C0.21 0.96 0 1.46 0 2L0 22C0 22.53 0.21 23.03 0.58 23.41C0.96 23.78 1.46 24 2 24L6.5 24C7.03 24 7.53 23.78 7.91 23.41C8.28 23.03 8.5 22.53 8.5 22L8.5 2C8.5 1.46 8.28 0.96 7.91 0.58C7.53 0.21 7.03 0 6.5 0Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function OptionsButtonIcon({
  isDark = false,
  className = "",
  status,
}: FuncIconPropTypes) {
  const fill = setFill(isDark, status);

  return (
    <svg
      width="27.000004"
      height="7.000000"
      viewBox="0 0 27 7"
      fill="none"
      className={className}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M17 3.5C17 4.19 16.79 4.86 16.41 5.44C16.02 6.02 15.47 6.46 14.83 6.73C14.19 6.99 13.49 7.06 12.81 6.93C12.13 6.79 11.51 6.46 11.02 5.97C10.53 5.48 10.2 4.86 10.06 4.18C9.93 3.5 10 2.8 10.26 2.16C10.53 1.52 10.97 0.97 11.55 0.58C12.13 0.2 12.8 0 13.5 0C14.42 0 15.31 0.37 15.97 1.02C16.62 1.68 16.99 2.57 17 3.5ZM3.5 0C2.8 0 2.13 0.2 1.55 0.58C0.97 0.97 0.53 1.52 0.26 2.16C0 2.8 -0.07 3.5 0.06 4.18C0.2 4.86 0.53 5.48 1.02 5.97C1.51 6.46 2.13 6.79 2.81 6.93C3.49 7.06 4.19 6.99 4.83 6.73C5.47 6.46 6.02 6.02 6.41 5.44C6.79 4.86 7 4.19 7 3.5C6.99 2.57 6.62 1.68 5.97 1.02C5.31 0.37 4.42 0 3.5 0ZM23.5 0C22.8 0 22.13 0.2 21.55 0.58C20.97 0.97 20.53 1.52 20.26 2.16C20 2.8 19.93 3.5 20.06 4.18C20.2 4.86 20.53 5.48 21.02 5.97C21.51 6.46 22.13 6.79 22.81 6.93C23.49 7.06 24.19 6.99 24.83 6.73C25.47 6.46 26.02 6.02 26.41 5.44C26.79 4.86 27 4.19 27 3.5C26.99 2.57 26.62 1.68 25.97 1.02C25.31 0.37 24.42 0 23.5 0Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function NextButtonIcon({
  isDark = false,
  className = "",
  status,
}: FuncIconPropTypes) {
  const fill = setFill(isDark, status);

  return (
    <svg
      width="29.150024"
      height="18.343018"
      viewBox="0 0 29.15 18.343"
      fill="none"
      className={className}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M29.15 9.17C29.15 9.5 29.06 9.83 28.9 10.13C28.74 10.42 28.51 10.67 28.23 10.85L17.08 18.02C16.78 18.21 16.43 18.32 16.07 18.34C15.71 18.35 15.35 18.27 15.04 18.09C14.72 17.92 14.46 17.66 14.27 17.35C14.09 17.04 13.99 16.69 14 16.33L14 11L3.08 18.02C2.78 18.21 2.43 18.32 2.07 18.34C1.71 18.35 1.35 18.27 1.04 18.09C0.72 17.92 0.46 17.66 0.27 17.35C0.09 17.04 -0.01 16.69 0 16.33L0 2C-0.01 1.64 0.09 1.29 0.27 0.98C0.46 0.67 0.72 0.41 1.04 0.24C1.35 0.07 1.71 -0.02 2.07 0C2.43 0.01 2.78 0.12 3.08 0.32L14 7.33L14 2C13.99 1.64 14.09 1.29 14.27 0.98C14.46 0.67 14.72 0.41 15.04 0.24C15.35 0.07 15.71 -0.02 16.07 0C16.43 0.01 16.78 0.12 17.08 0.32L28.23 7.48C28.51 7.66 28.74 7.91 28.9 8.21C29.06 8.5 29.15 8.83 29.15 9.17Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}
