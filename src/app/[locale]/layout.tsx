import { Footer } from "@/components";
import { baseURL, effects, style } from "@/app/resources";
import { getDictionary } from "@/app/resources/dictionaries";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";
import { Toaster } from "sonner";
import { Locale, i18n } from "@/i18n.config";
import { ThemeToggle, LanguageToggle } from "@/components";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: dict.home.title,
    description: dict.home.description,
    openGraph: {
      title: `${dict.person.firstName} Portafolio`,
      description: "Portafolio web que muestra mi trabajo",
      url: baseURL,
      siteName: `${dict.person.firstName} Portafolio`,
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  return (
    <>
      <Toaster richColors />
      <ToastProvider>
        <Column
          style={{ minHeight: "100vh" }}
          fillWidth
          margin="0"
          padding="0"
          background="page"
        >
          <Background
            mask={{
              cursor: effects.mask.cursor,
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
            }}
            gradient={{
              display: effects.gradient.display,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
              opacity: effects.gradient.opacity as any,
            }}
            dots={{
              display: effects.dots.display,
              color: effects.dots.color,
              size: effects.dots.size as any,
              opacity: effects.dots.opacity as any,
            }}
            grid={{
              display: effects.grid.display,
              color: effects.grid.color,
              width: effects.grid.width as any,
              height: effects.grid.height as any,
              opacity: effects.grid.opacity as any,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as any,
            }}
          />
          <Flex fillWidth minHeight="16"></Flex>
          
          {/* Top Navigation / Controls */}
          <Flex 
            fillWidth 
            horizontal="end" 
            vertical="center"
            gap="12"
            paddingX="l" 
            paddingY="m" 
            position="fixed"
            style={{ top: 0, zIndex: 100 }}
          >
            <LanguageToggle currentLocale={locale} />
            <ThemeToggle />
          </Flex>

          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            paddingY="xl"
            paddingX="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer locale={locale} />
        </Column>
      </ToastProvider>
    </>
  );
}

