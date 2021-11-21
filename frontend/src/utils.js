export const nextPage = (func, data) => {
  func((oldPage) => {
    let nextPage = oldPage + 1;
    if (nextPage > data.length - 1) nextPage = 0;
    return nextPage;
  });
};

export const prevPage = (func, data) => {
  func((oldPage) => {
    let prevPage = oldPage - 1;
    if (prevPage < 0) prevPage = data.length - 1;
    return prevPage;
  });
};
