// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Liverpool",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://github.com/kuisux?tab=repositories",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "fotmob",
              url: "https://www.fotmob.com/en-GB",
              icon: "soccer-field",
              icon_color: palette.green,
            },
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.peach,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "notion",
              url: "https://www.notion.so",
              icon: "brand-notion",
              icon_color: palette.blue,
            },
            {
              name: "vial",
              url: "https://vial.rocks/",
              icon: "keyboard",
              icon_color: palette.mauve,
            }
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.peach,
            },
            {
              name: "Miruro",
              url: "https://www.miruro.tv/",
              icon: "brand-funimation",
              icon_color: palette.red,
            },
            {
              name: "streamed",
              url: "https://streamed.su/",
              icon: "medal-2",
              icon_color: palette.blue,
            },
            {
              name: "7Xtream",
              url: "https://cinema.7xtream.com/",
              icon: "device-tv",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "music",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "soundcloud",
              url: "https://soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: palette.red,
            },
            {
              name: "cobalt.tools",
              url: "https://cobalt.tools/",
              icon: "cat",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/banners/cbg-05.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "moodle",
              url: "https://moodle.bolton.ac.uk/my/",
              icon: "square-letter-m",
              icon_color: palette.green,
            },
            {
              name: "office 365",
              url: "https://m365.cloud.microsoft/?auth=2",
              icon: "file",
              icon_color: palette.peach,
            },
            {
              name: "teams",
              url: "https://teams.microsoft.com",
              icon: "brand-teams",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stack overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "wikipedia",
              url: "https://en.wikipedia.org",
              icon: "brand-wikipedia",
              icon_color: palette.red,
            },
            {
              name: "houdini-python",
              url: "https://www.sidefx.com/docs/houdini/hom/hou/index.html",
              icon: "brand-python",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "codespaces",
              url: "https://github.com/codespaces",
              icon: "code",
              icon_color: palette.green,
            },
            {
              name: "code beautifier",
              url: "https://codebeautify.org/python-formatter-beautifier",
              icon: "brand-python",
              icon_color: palette.peach,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "google drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "cute",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: " ",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.green,
            },
            {
              name: "copy paste fonts",
              url: "https://lingojam.com/FancyTextGenerator",
              icon: "abc",
              icon_color: palette.peach,
            },
            {
              name: "text decor",
              url: "https://www.cutesymbols.net/",
              icon: "sparkles",
              icon_color: palette.red,
            },
            {
              name: "ascii text",
              url: "https://fsymbols.com/generators/carty/",
              icon: "file-code",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: " ",
          links: [
            {
              name: "tabler",
              url: "https://tabler.io/icons",
              icon: "brand-tabler",
              icon_color: palette.green,
            },
            {
              name: "kernclub",
              url: "https://kernclub.com/",
              icon: "abc",
              icon_color: palette.peach,
            },
            {
              name: "dafont",
              url: "https://www.dafont.com/",
              icon: "abc",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: " ",
          links: [
            {
              name: "anime girls holding programming books",
              url: "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books",
              icon: "brand-cpp",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
