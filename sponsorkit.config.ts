import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  /* SyntaxFM supports on thanks.dev also */
  onSponsorsReady(sponsors) {
    const syntaxfm = sponsors.find((s) => s.sponsor.login === "syntaxfm");
    if (syntaxfm) {
      syntaxfm.monthlyDollars = 25;
    }
    return sponsors;
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
});
