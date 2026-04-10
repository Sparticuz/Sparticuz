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
      preset: tierPresets.base,
    },
    {
      title: "Backers",
      preset: tierPresets.medium,
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.large,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
});
