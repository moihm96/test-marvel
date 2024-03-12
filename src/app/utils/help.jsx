export const isAlreadyFavorite = (favorites, character) => {
  const favorite = favorites.find((favorite) => favorite.id == character.id);

  return favorite != undefined;
};
