// let photographers = [];

export const fetchPhotographer = async () => {
  const res = await fetch("data.json");
  return res.json();
};
