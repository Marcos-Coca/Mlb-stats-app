import React from 'react'

import SortByFilter from '../SortByFilter'
export default function PitchingStats() {
  return (
    <>
      <SortByFilter value="Wins" text="W" />
      <SortByFilter value="Losses" text="L" />
      <SortByFilter value="EarnedRunAverage" text="ERA" />
      <SortByFilter value="Games" text="G" />
      <SortByFilter value="Started" text="GS" />
      <SortByFilter value="PitchingShutOuts" text="SHO" />
      <SortByFilter value="Saves" text="SV" />
      <SortByFilter value="PitchingBlownSaves" text="SVB" />
      <SortByFilter value="InningsPitchedDecimal" text="IP" />
      <SortByFilter value="PitchingHits" text="H" />
      <SortByFilter value="PitchingRuns" text="R" />
      <SortByFilter value="PitchingEarnedRuns" text="ER" />
      <SortByFilter value="PitchingHomeRuns" text="HR" />
      <SortByFilter value="PitchingHitByPitch" text="HB" />
      <SortByFilter value="PitchingWalks" text="BB" />
      <SortByFilter value="PitchingStrikeouts" text="SO" />
      <SortByFilter value="WalksHitsPerInningsPitched" text="WHIP" />
      <SortByFilter value="PitchingBattingAverageAgainst" text="AVG" />
    </>
  )
}
