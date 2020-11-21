const theme = {};

theme.palette = {
  search: [
    '#E7E7E7', // 0 - Search Box Background
    '#9E9E9E', // 1 - Search icon & text color
    '#f3f3f3', // 2 - Search BG Color
    '#777777', // 3 - Search menu & Add icon Color
  ],
  border: [
    '#8C8C8C', // 0 0 Dark Border
    '#d8d8d8', // 1 - Search Bar Border
  ],
  text: [
    '#595959', // 0 - Default text Color
    '#333333', // 1 - Dark Text Color
    '#8C8C8C', // 2 - Light Text Color
  ],
  color: [
    '#30C56D', // 0 - Button Color
    '#5CABE6', // 1 - Twitter Color
    '#475E9F', // 2 - FB Color
    '#F2A43E', // 3 - Price Tag Color
    '#E2E2E2', // 4 - Button Disabled Color
  ],
  overlay: [
    'rgba(0, 0, 0, 0.4)', // 0 - category slider overlay
  ],
};

theme.flexboxgrid = {
  // Defaults
  gridSize: 12, // columns
  gutterWidth: 2, // rem
  outerMargin: 2, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em
    md: 64, // em
    lg: 75, // em
  },
};

export default theme;
