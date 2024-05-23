import nextra from "nextra";
import bundleAnalyzer from "@next/bundle-analyzer";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  defaultShowCopyCode: true,
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const env = {
  NEXT_PUBLIC_SITE_NAME: "STALKER on UE",
  NEXT_PUBLIC_BASE_URL: "https://s2ue.org",
  NEXT_PUBLIC_DISCORD_URL: "https://discord.gg/red-projects-530968529311367178",
  NEXT_PUBLIC_BOOSTY_URL: "https://boosty.to/stalker2ue",
  NEXT_PUBLIC_MODDB_URL: "https://www.moddb.com/mods/stalker2ue",
  NEXT_PUBLIC_SOURCE_CODE_URL: "https://github.com/RedPandaProjects/STALKERonUE",
  NEXT_PUBLIC_DOCS_SOURCE_CODE_URL: "https://github.com/PSIget/SonUE-Docs",
};

const i18n = {
  locales: ["ru", "en", "uk"],
  defaultLocale: "ru",
};

const images = {
  minimumCacheTTL: 86400,
  formats: ["image/avif", "image/webp"],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 294, 384, 512, 600, 792],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**.s2ue.org",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "**.youtube.com",
      port: "",
      pathname: "/vi/**",
    },
    {
      protocol: "https",
      hostname: "**.ytimg.com",
      port: "",
      pathname: "/vi/**",
    },
    {
      protocol: "https",
      hostname: "**.imgur.com",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "**.steamstatic.com",
      port: "",
      pathname: "/**",
    },
  ],
};

const redirects = async () => {
  return [
    // Tech Switcher Redirects
    {
      source: "/game",
      destination: "/",
      statusCode: 301,
    },
    {
      source: "/game/docs",
      destination: "/game/docs/install",
      statusCode: 301,
    },
    {
      source: "/editor/docs",
      destination: "/editor/docs/getting-started",
      statusCode: 301,
    },
    // Main Redirects
    {
      source: "/docs",
      destination: "/docs/getting-started",
      statusCode: 301,
    },
  ];
};

const nextraConfig = withNextra({
  env,
  i18n,
  images,
  redirects,
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
});

export default withBundleAnalyzer(nextraConfig);
