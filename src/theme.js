const baseTheme = {
  fonts: {
    primaryText: "'Roboto Mono', monospace",
    secondaryText: "Arial, Helvetica, sans-serif",

    primaryNumber: "'Noto Sans', sans-serif",
    secondaryNumber: "'Roboto Mono', monospace",

    primaryTitle: "'Times New Roman', Times, serif",
    secondaryTitle: "'Open Sans', sans-serif",
  },
  colors: {
    yellow1: "#F2CB05",
    yellow2: "#F2B705",
    yellow3: "#8C6D0F",
    yellow4: "#F29F05",
    yellow5: "#593D08",

    blackTransparent: "",
    black1: "",
    black2: "",

    whiteTransparent: "",
    white1: "",
    white2: "",
  },
}

export const theme = {
  lite: {
    ...baseTheme,
    name: "lite",
    colors: {
      ...baseTheme.colors,

      primary1: "#F0F1FF",
      primary2: "#F2E4FF",
      primary3: "#D5CFE8",
      primary4: "#CFD9E8",
      primary5: "#E4F6FF",

      secondary1: "#3071F2",
      secondary3: "#4B83F2",
      secondary2: "#6B98F2",
      secondary4: "#91B2F2",
      secondary5: "#B3C8F2",

      btn: {
        Equal: {
          primary: "#B3C8F2",
          secundary: "#91B2F2",
          Border: "#6B98F2",
          Letter: "#010021",
        },
        Emphasis: {
          primary: "#F0F1FF",
          secundary: "#D5CFE8",
          Border: "#CFD9E8",
          Letter: "#010021",
        },
        Normal: {
          primary: "#4B83F2",
          secundary: "#3071F2",
          Border: "#91B2F2",
          Letter: "#F2CB05",
        },
      },
    },
  },

  dark: {
    ...baseTheme,
    name: "dark",
    colors: {
      ...baseTheme.colors,
      primary: "#023059",
      primaryLetter: "#ececf9",
      primaryBackground: "?",

      secondary: "#08090D",
      secondaryLetter: "#010021",
      secondaryBackground: "?",

      btn: {
        Equal: {
          primary: "#1A1E26",
          secundary: "#08090D",
          Border: "#343A40",
          Letter: "#ECECF9",
        },
        Emphasis: {
          primary: "#6E7371",
          secundary: "#343A40",
          Border: "#A1A69C",
          Letter: "#F29F05",
        },
        Normal: {
          primary: "#034C8C",
          secundary: "#3071F2",
          Border: "#023E73",
          Letter: "#023059",
        },
      },
    },
  },
}

export default theme
