const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

images.forEach(({ url, alt }) => {
  const image = `<img src="${url}" alt="${alt}" width="1200" height="600">`;
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery_item");
  galleryItem.setAttribute(
    "style",
    "display: flex; list-style: none; justify-content: center; margin-top: 20px"
  );
  galleryItem.insertAdjacentHTML("beforeend", image);
  galleryList.append(galleryItem);
});
