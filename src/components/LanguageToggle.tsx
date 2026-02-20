"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/once-ui/components";

export function LanguageToggle({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    // Ensure we don't duplicate the locale in the URL if switching from one to another
    const newPath = pathname ? pathname.replace(`/${currentLocale}`, `/${newLocale}`) : `/${newLocale}`;
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <Button
      variant="secondary"
      size="s"
      onClick={switchLanguage}
      style={{ textTransform: "uppercase" }}
    >
      {currentLocale === "es" ? "EN" : "ES"}
    </Button>
  );
}
