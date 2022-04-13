const reduceTitleLength = (title) => {
  if (title.length > 66) {
    return title.split("").splice(0, 66).join("") + "...";
  } else {
    return title;
  }
};

export {reduceTitleLength};
