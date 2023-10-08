
export function cleanData(list1, list2, list3) {
  const zips = []
  for (let i = 0; i < list1.length; i++) {
    if (!list2[i])
      break
    if (!list3[i])
      break

    // Saving the dates for the bar graph
    const date = list1[i].start_interval.replace(/2023-01-(\d+)T([\d:]+):00.000Z/, "Jan $1, $2");
    // Consumption as integer
    const consumption = parseInt(list1[i].consumption);
    // Generation mix as object to make processing easier later
    const generation = list2[i].generationmix.reduce((ac, a) => ({
      ...ac, [a.fuel]: (a.perc * parseInt(list1[i].consumption) / 100)
    }), {});
    // Intensity, backfilling with forecast when actual is null
    let intensity = 0
    if (list3[i].intensity.actual != null) intensity = list3[i].intensity.actual
    else intensity = list3[i].intensity.forecast

    zips.push({
      date: date,
      consumption: consumption,
      generation: generation,
      intensity: intensity
    })
  }
  return zips
}
