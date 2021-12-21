/**
 * @file List of quotes.
 * @author Alexey Ptitsyn <numidium.ru@gmail.com>
 */

interface QuoteItem {
  author: string,
  quotes: string[]
}

const quotes: QuoteItem[] = [
  {
    author: "John Carmack",
    quotes: [
      "When it became clear that I wasn't going to have the opportunity to do any work on VR while at id software, I decided to not renew my contract.",
      "One of the reasons microcomputers progressed so fast is people are willing to accept crashes. It's faster to build something and try it, even if it means you'll have to rebuild later... If you spent too much time building and massaging one vehicle, you don't learn anything.",
      "I'd rather have a search engine or a compiler on a deserted island than a game.",
      "We were happy with funding 'Rage' on our own nickel for years. We intended to do the same with 'Doom 4'. We had offers early on for 'Rage'. People offered us X million dollars. But we carried the risk, and when we finally signed a deal, it was X plus $10 million.",
      "Programming is not a zero-sum game. Teaching something to a fellow programmer doesn't take it away from you. I'm happy to share what I can, because I'm in it for the love of programming.",
      "Developing games for the PC and consoles is all about everything and the kitchen sink. In many ways, you don't have design decisions to make. You do it all. So I enjoy going back to making decisions about what's important as I'm working on a game.",
      "If it weren't for Moore's law changing the playing field continuously, I would have been long gone. The rapid pace of hardware evolution still keeps things fresh for me.",
      "Because of the nature of Moore's law, anything that an extremely clever graphics programmer can do at one point can be replicated by a merely competent programmer some number of years later.",
      "The speed of light sucks.",
      "A strong team can take any crazy vision and turn it into reality.",
      "There is absolutely zero doubt that you can technically do an excellent full-featured FPS game, because these devices are more powerful now than, like, a previous generation Xbox.",
      "It is clearly a bad idea to try to just move games from other platforms directly over, but I'm sure we will see a lot of it, especially as the handsets surpass the hardware capabilities of previous generation consoles.",
      "Rocket science has been mythologized all out of proportion to its true difficulty.",
      "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it. If you aren't sure which way to do something, do it both ways and see which works better.",
      "There are some things that are exciting for distributors. I love Apple's AppStore and the things people can do with digital distribution.",
      "At its best, entertainment is going to be a subjective thing that can't win for everyone, while at worst, a particular game just becomes a random symbol for petty tribal behavior.",
      "Low-level programming is good for the programmer's soul.",
      "The cost of adding a feature isn't just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don't fight each other.",
      "I consider myself a remarkably unsentimental person. I don't look back on the good old days.",
      "The core of what I do is solve problems, whether that's in graphic engine flow or rockets. I like working on things that are going to have an impact one way or the other.",
      "Focus is a matter of deciding what things you're not going to do.",
      "I've never been one of those programmers that works effectively on short amounts of sleep. I've always needed eight hours.",
      "It's nice to be able to, you know, for me to be able to personally do whatever the heck I feel like, whether I think that I can justify it exactly in business concerns or not.",
      "I've said before that I'm a remarkably unsentimental person.",
    ]
  }
];

export {
  QuoteItem,
  quotes
}
