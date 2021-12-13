let photographers = [];

export const fetchPhotographer = async () => {
  //   await fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => (photographers = data.photographers));

  const res = await fetch("data.json");
  return res.json();
};
