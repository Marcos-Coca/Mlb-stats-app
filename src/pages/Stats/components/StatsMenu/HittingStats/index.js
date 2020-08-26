import React from 'react'

import SortByFilter from '../SortByFilter'
export default function HittingStats() {
  return (
    <>
      <SortByFilter value="OnBasePlusSlugging" text="OPS" />
      <SortByFilter value="BattingAverage" text="AVG" />
      <SortByFilter value="HomeRuns" text="HR" />
      <SortByFilter value="RunsBattedIn" text="RBI" />
      <SortByFilter value="Runs" text="R" />
      <SortByFilter value="Hits" text="H" />
      <SortByFilter value="Doubles" text="2B" />
      <SortByFilter value="Triples" text="3B" />
      <SortByFilter value="Games" text="G" />
      <SortByFilter value="AtBats" text="AB" />
      <SortByFilter value="Walks" text="BB" />
      <SortByFilter value="Strikeouts" text="SO" />
      <SortByFilter value="StolenBases" text="SB" />
      <SortByFilter value="CaughtStealing" text="CS" />
      <SortByFilter value="OnBasePercentage" text="OBP" />
      <SortByFilter value="SluggingPercentage" text="SLG" />
    </>
  )
}
