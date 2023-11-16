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

    shadow: "ODODOD99",
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

      contrastColor1: "#0D0D0D",
      contrastColor2: "#262626",

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
      contrastColor1: "#F5F5F5",
      contrastColor2: "#D9D9D9",

      primary1: "#023059",
      primary2: "#023E73",
      primary3: "#034C8C",
      primary4: "#023E73",
      primary5: "#00040D",

      secondary5: "#A1A69C",
      secondary4: "#6E7371",
      secondary3: "#343A40",
      secondary2: "#1A1E26",
      secondary1: "#08090D",

      btn: {
        equal: {
          primary: "#1A1E26",
          secondary: "#08090D",
          border: "#343A40",
          color: "#ECECF9",
        },
        default: {
          primary: "#A1A69C",
          secondary: "#6E7371",
          border: "#818681",
          color: "#593D08",
        },
        emphasis: {
          primary: "#034C8C",
          secondary: "#023E73",
          border: "#023E73",
          color: baseTheme.colors.contrastColor2,
        },
      },
    },
  },
}

export default theme
