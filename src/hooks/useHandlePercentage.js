export const useHandlePercentage = (votes) => {
  const { positive, negative } = votes
  const total = positive + negative
  const percentagePositive = ((positive * 100) / total).toFixed(2)
  const percentageNegative = ((negative * 100) / total).toFixed(2)
  return { percentagePositive, percentageNegative }
}
