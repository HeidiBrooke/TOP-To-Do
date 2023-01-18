const card = (name) => {
  const cardName = name;
  const cardSteps = [];
  const cardDate = new Date().toLocaleDateString();
  const cardCompleteValue = 0;
  const cardDecks = ["all"];
  return {
    cardName,
    cardCompleteValue,
    cardDate,
    cardSteps,
    cardDecks,
  };
};
export default card;
