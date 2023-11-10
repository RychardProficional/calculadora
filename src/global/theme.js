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
  longShadow: (color, size, blur) => {
    let shadows = ""
    for (let i = 1; i <= size; i++) {
      shadows += `${i}px ${i}px ${blur}px ${color},`
    }
    return shadows.slice(0, -1)
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
        emphasis: {
          primary: "#B3C8F2",
          secondary: "#91B2F2",
          border: "#6B98F2",
          color: "#010021",
        },
        default: {
          primary: "#F0F1FF",
          secondary: "#CFD9E8",
          border: "#D5CFE8",
          color: "#010021",
        },
        equal: {
          primary: "#4B83F2",
          secondary: "#3071F2",
          border: "#91B2F2",
          color: "#F2CB05",
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
      primarycolor: "#ececf9",
      primaryBackground: "?",

      secondary: "#08090D",
      secondarycolor: "#010021",
      secondaryBackground: "?",

      btn: {
        equal: {
          primary: "#1A1E26",
          secondary: "#08090D",
          border: "#343A40",
          color: "#ECECF9",
        },
        emphasis: {
          primary: "#6E7371",
          secondary: "#343A40",
          border: "#A1A69C",
          color: "#F29F05",
        },
        default: {
          primary: "#034C8C",
          secondary: "#3071F2",
          border: "#023E73",
          color: "#023059",
        },
      },
    },
  },
}

export default theme
