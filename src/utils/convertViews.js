const convertViews = (views) => {
  switch (views.length) {
    case 4:
    case 5:
    case 6:
      return Math.trunc(parseInt(views, 10) / 1000) + "K";
    case 7:
    case 8:
    case 9:
      return Math.trunc(parseInt(views, 10) / 1000000) + "M";
    default:
      return views;
  }
};

export {convertViews};
