import type { SVGProps } from "react";

/**
 * Icon paths exported from the Figma Icon set (node 5:158): 24×24 grid, 1.75 stroke, round caps and joins.
 * GENERATED from Figma — to add an icon, add it to the Figma set first, then re-export.
 */
export const iconPaths = {
  "arrow-right": ["M5 12H19", "M13 6L19 12L13 18"],
  "arrow-left": ["M19 12H5", "M11 6L5 12L11 18"],
  "arrow-up-right": ["M7 17L17 7", "M8 7H17V16"],
  external: [
    "M14 4H20V10",
    "M20 4L11 13",
    "M18 14V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H10",
  ],
  mail: [
    "M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z",
    "M3 7L12 13L21 7",
  ],
  linkedin: [
    "M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z",
    "M8 10V17",
    "M8 7V7.01",
    "M12 17V10",
    "M12 13C12 12.337 12.2634 11.7011 12.7322 11.2322C13.2011 10.7634 13.837 10.5 14.5 10.5C15.163 10.5 15.7989 10.7634 16.2678 11.2322C16.7366 11.7011 17 12.337 17 13V17",
  ],
  menu: ["M4 7H20", "M4 12H20", "M4 17H20"],
  close: ["M6 6L18 18", "M18 6L6 18"],
  plus: ["M12 5V19", "M5 12H19"],
  check: ["M5 12L10 17L19 7"],
  play: ["M8 5L19 12L8 19V5Z"],
  filter: ["M4 6H20", "M7 12H17", "M10 18H14"],
  sparkle: ["M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"],
  download: ["M12 4V15", "M7 10L12 15L17 10", "M5 20H19"],
} as const satisfies Record<string, readonly string[]>;

/** Every available icon name (matches the Figma Icon set's `Name` property). */
export type IconName = keyof typeof iconPaths;
export const iconNames = Object.keys(iconPaths) as IconName[];

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  /** Which icon to draw. Same names as the Figma Icon set. */
  name: IconName;
  /** Size in px. Default 24 (the Figma grid). */
  size?: number;
  /**
   * Accessible name. Leave empty when the icon sits next to visible text (it is then hidden from screen readers).
   * Set it when the icon is the only content, e.g. inside an icon-only control.
   */
  label?: string;
}

/**
 * Icon — draws one of Kieran's 14 icons. Colour comes from the surrounding text colour (`currentColor`),
 * so set it with a token class such as `text-icon-primary` or `text-icon-inverse`.
 *
 * @example <Icon name="arrow-right" />
 * @example <Icon name="linkedin" label="LinkedIn" className="text-icon-primary" />
 */
export function Icon({ name, size = 24, label, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      data-icon={name}
      {...props}
    >
      {iconPaths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
