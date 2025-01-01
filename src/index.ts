import plugin from "tailwindcss/plugin";

interface MasterClassConfig {
  /**
   * Will be transported to:
   *
   * .${name}, .${name}2, .${name}3
   * @default "debug"
   */
  name: string;
  /**
   * Specify a contrasting color for the selection.
   * @default "salmon"
   */
  color: string;
}

const masterClass = plugin(({ addUtilities, config }) => {
  if (process.env.NODE_ENV === "production") return;
  const name: string = config("masterClass.name", "debug");
  const color: string = config("masterClass.color", "salmon");
  const border = { border: `1px solid ${color}` };
  const generateKeys = (baseName: string) => {
    return Array.from({ length: 3 }).map((_, id) => {
      if (id === 0) return `.${baseName}`;
      return `.${baseName}${id + 1}${id === 1 ? " > *" : " *"}`;
    });
  };
  const utility = Object.fromEntries(
    generateKeys(name).map((key) => [key, border]),
  );
  addUtilities(utility);
});

export { masterClass, type MasterClassConfig };
