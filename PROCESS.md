# Process overview

## What I built

A redesign of the Savoir French website, a French café and bakery on ANU campus, built using Claude Code with Astro. The real site is a default Shopify template that does not do justice to the quality of the café. My redesign lifts the whole experience: a premium visual identity using Playfair Display headings, a warm cream and gold palette, and full width photography. On top of that it fixes the basics the original completely misses: a homepage that tells you who they are and where they are, a clear note about the lobby entrance that everyone misses, and opening hours you can actually read.

## The moments that mattered

1. **Locking scope and facts down before building anything.** Rather than
   letting the agent start writing pages straight from a one-line brief, I had
   it research the real site first and report back ambiguities and unmade
   decisions, then wrote the answers into `CLAUDE.md` (rules) and `PLAN.md` (changes)
   ([`1e3b3e8`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-tejastagra/commit/1e3b3e8),
   [`61f2ab8`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-tejastagra/commit/61f2ab8)).
   Because I wrote the rules down in CLAUDE.md before building anything, when I later asked the agent to do something that broke those rules, I could see it was a conflict and decide how to handle it rather than the agent quietly adding unconfirmed content without me noticing

2. **Catching a real bug from visual testing.** I noticed that footer links were 
   running directly into the surrounding text with no space. The cause turned out 
   to be Astro trimming whitespace before inline links when they sit on a new line 
   in the source, something invisible in the code but obvious once built. Rather 
   than just fixing the one instance I had seen, I had the agent check the built 
   HTML across all four pages for the same pattern, which caught a second broken 
   instance on the catering page I had not noticed 
   ([`6b6543f`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-tejastagra/commit/6b6543f)).