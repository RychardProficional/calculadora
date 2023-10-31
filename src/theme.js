export const fonts = {
  primaryText: "'Roboto Mono', monospace",
  secondaryText: "Arial, Helvetica, sans-serif",

  primaryNumber: "'Noto Sans', sans-serif",
  secondaryNumber: "'Roboto Mono', monospace",

  primaryTitle: "'Times New Roman', Times, serif",
  secondaryTitle: "'Open Sans', sans-serif",
}

export const theme = {
  lite: {
    name: "lite",
    colors: {
      primary: "#E4F6FF",
      primaryLetter: "#010021",
      primaryBackground: "#F0F1FF",

      secondary: "#3071F2",
      secondaryLetter: "#ECECF9",
      secondaryBackground: "#D5CFE8",

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
    fonts: fonts,
  },

  dark: {
    name: "dark",
    colors: {
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
        fonts: fonts,
      },
    },
  },
}
