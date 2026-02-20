import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { style } from "@/app/resources";
import { ThemeProvider } from "@/components";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(primary.variable, code.variable)}
      suppressHydrationWarning
    >
      <ThemeProvider attribute="data-theme" defaultTheme={style.theme} enableSystem={false}>
        <body style={{ margin: 0, padding: 0 }}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
