// src/data/creators.ts

export interface CreatorLink {
  name: string;
  url: string;
  style: 'yt' | 'pod' | 'spot' | 'default';
}

export interface CreatorSocials {
  twitter?: string;
  instagram?: string;
}

export interface Creator {
  name: string;
  type: 'Podcast' | 'YouTube';
  categories: string[];
  host: string;
  description: string;
  tags: string[];
  socials?: CreatorSocials;
  links: CreatorLink[];
  featured?: boolean;
  imageUrl?: string;
}

const creatorsArray: Creator[] = [
  {
    name: "P1 with Matt & Tommy",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee1d53c95c2a6e825eb93af7c3",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Matt Gallagher & Tommy Bellingham",
    description: "Matt Gallagher and Tommy Bellingham bring their signature banter, race reactions, and F1 news breakdowns. Essential listening for the modern F1 fan.",
    tags: ["Race Review", "News", "Humor"],
    featured: true,
    socials: { twitter: "https://twitter.com/p1mattandtommy", instagram: "https://instagram.com/p1mattandtommy" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@p1withmattandtommy", style: "yt" },
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/p1-with-matt-and-tommy/id1670705840", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/20La1QIIVElT4mkc046AIV?si=e61f0e7e346540ee", style: "spot" }
    ]
    
  },
  {
    name: "The Race",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeeed5fcb0f3bc56550399c5d1d4",
    type: "YouTube",
    categories: ["YouTube", "Podcast"],
    host: "The Race Media",
    description: "In-depth technical analysis, historical deep-dives, and breaking news explained clearly with excellent 3D animations and paddock sources.",
    tags: ["Technical", "News", "Analysis"],
    featured: true,
    socials: { twitter: "https://twitter.com/wearetherace", instagram: "https://instagram.com/wearetherace" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@TheRace", style: "yt" },
      {name: "Apple", url:"https://podcasts.apple.com/gb/podcast/the-race-f1-podcast/id1495557562", style: "pod"},
      { name: "Spotify", url: "https://open.spotify.com/show/5jYPRckNa9oSZAiuURm8WZ?si=c2af83d1eaa843d0", style: "spot" }
    ]
  },
  {
    name: "Missed Apex Podcast",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeeed997d6093bb8759ea7526daa",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Spanners & Trumpets",
    description: "An independent F1 podcast bringing paddock-level analysis with a fun, slightly irreverent shed-based atmosphere. Features ex-F1 personnel regularly.",
    tags: ["Independent", "Debate", "Fun"],
    featured: true,
    socials: { twitter: "https://twitter.com/MissedApexF1", instagram: "https://instagram.com/missedapexf1" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@missedapexf1", style: "yt" },
      { name: "Apple", url: "https://podcasts.apple.com/us/podcast/missed-apex-f1-podcast/id1156681023", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/6Ru3YXjbgKmQtt0dvxTs42?si=0f9be77de0d44904", style: "spot" }
    ]
  },
  {
    name: "F1: Beyond The Grid",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee5ec46fc8eeca364dde4212d1",
    type: "Podcast",
    categories: ["Podcast"],
    host: "Tom Clarkson",
    description: "The official long-form interview podcast. Tom Clarkson sits down with current drivers, legends of the sport, and team bosses for revealing, hour-long conversations.",
    tags: ["Interviews", "History", "Official"],
    socials: { twitter: "https://twitter.com/f1", instagram: "https://instagram.com/f1" },
    links: [
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/f1-beyond-the-grid/id1405972616", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/44YvwJyqsCEEhNZBxuXZQ9?si=b2451d9af615486c", style: "spot" }
    ]
  },
  {
    name: "The F1 Show",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee57d61b85243091e343cd3758",
    type: "Podcast",
    categories: ["Podcast"],
    host: "Sky F1 Team",
    description: "Join Simon Lazenby and special guests from the world of F1 and sport, as they bring you behind-the-scenes stories from the paddock.",
    tags: ["Debate", "Expert", "Broadcaster"],
    socials: { twitter: "https://twitter.com/skysportsf1", instagram: "https://instagram.com/skysportsf1" },
    links: [
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/sky-sports-f1-podcast/id1675204481", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/38A3a2EBr6ExRHmHs3loTW?si=9f80d52162ba465d", style: "spot" }
    ]
  },
  {
    name: "Up To Speed",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeeea50d41770627d4c80271fcbc",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Will Buxton, Naomi Schiff, David Coulthard & Jolie Sharpe",
    description: "Step inside sport's greatest soap opera. This powerhouse lineup offers razor-sharp reaction, behind-the-scenes insight, and blockbuster interviews, providing an unfiltered look at paddock gossip.",
    tags: ["Expert", "News", "Paddock"],
    socials: { instagram: "https://instagram.com/uptospeedshow" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@uptospeedshow", style: "yt" },
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/up-to-speed/id1875990109", style: "pod" },
      {name: "Spotify", url: "https://open.spotify.com/show/7r6fWqgdkBIN5yhvAmGIzc?si=ae1d4abb7c7e4698", style: "spot"},
      { name: "Global", url: "https://global.com/podcast/up-to-speed/", style: "default" }
    ]
  },
  {
    name: "The Fast and The Curious",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee7830edef70d75507f43d68fb",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Greg James, Betty Glover & Christian Hewgill",
    description: "A highly entertaining, fan-first podcast that takes you inside the fascinating world of Formula 1. Less about deep technical analysis and more about the human side of the sport, bringing out driver personalities with brilliant humor.",
    tags: ["Entertainment", "Interviews", "Humor"],
    socials: { twitter: "https://twitter.com/fastcuriouspod", instagram: "https://instagram.com/fastcuriouspod" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@fastcuriouspod", style: "yt" },
      { name: "Apple", url: "https://open.spotify.com/show/3WksoKM9wSSSf7lbfwTA3a?si=10db7f395a2b4e8a", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/2vF69zJOhZz4pU3vjTqL5B", style: "spot" }
    ]
  },
  {
    name: "The Red Flags Podcast",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee302d5285c6925a1379c226e0",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Brian Muller & Matt Elisofon",
    description: "A uniquely American, highly comedic take on F1. Brian and Matt dive into the drama, the memes, and the absurdity of the sport. Perfect for fans who love the Drive to Survive reality-TV aspect of F1.",
    tags: ["Comedy", "Culture", "Entertainment"],
    socials: { twitter: "https://twitter.com/TheRedFlagsPod", instagram: "https://instagram.com/theredflagspod" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@theredflagspod", style: "yt" },
      { name: "Apple", url: "https://podcasts.apple.com/us/podcast/the-red-flags-podcast/id1588691515", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/3AQS9qSsPgqNY3b8hrvyHT?si=8c404eaead644798", style: "spot" }
    ]
  },
  {
    name: "Pitstop",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee34fad3e8193cc7368ed83572",
    type: "Podcast",
    categories: ["Podcast", "YouTube"],
    host: "Jake Boys & Fabio Bocca",
    description: "Bringing incredible energy and a casual 'chat with your mates' vibe. Jake and Fabio have taken the F1 world by storm, scoring interviews with team principals and drivers while keeping things incredibly fun and accessible.",
    tags: ["Accessible", "Culture", "Fun"],
    socials: { twitter: "https://twitter.com/pitstop", instagram: "https://instagram.com/pitstop" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@PitstopPodcast", style: "yt" },
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/pitstop/id1608933256", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/4mGSuIE5o5RFDWsJ36453G?si=fe39b3bd13da4f74", style: "spot" }
    ]
  },
  {
    name: "F1 Nation",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeee1dd447580f41e60636955781",
    type: "Podcast",
    categories: ["Podcast"],
    host: "Tom Clarkson & Guests",
    description: "The official race preview and review podcast from the paddock. Features exclusive interviews and insights straight from the drivers and team principals post-race.",
    tags: ["Race Review", "News", "Official"],
    socials: { twitter: "https://twitter.com/f1", instagram: "https://instagram.com/f1" },
    links: [
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/f1-nation/id1510488661", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/5J0D7hF4hR3b3ZzB3yX0nO", style: "spot" }
    ]
  },
  {
    name: "Shift+F1",
    imageUrl: "https://i.scdn.co/image/ab6765630000eeeea56fc88c84793535f57f7f06",
    type: "Podcast",
    categories: ["Podcast"],
    host: "Drew, Rob & Danny",
    description: "A fantastic, accessible weekly podcast about Formula 1. Great for both seasoned veterans and new fans (check out their Preseason Primer).",
    tags: ["Accessible", "News", "Humor"],
    socials: { twitter: "https://twitter.com/shiftf1podcast" },
    links: [
      { name: "Apple", url: "https://podcasts.apple.com/us/podcast/shift-f1/id1209355152", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/372ltEFNF8MUiqbFmELmO5?si=ea472ed458f74d1b", style: "spot" }
    ]
  },
  {
    name: "BBC F1: Chequered Flag",
    imageUrl:"https://i.scdn.co/image/ab6765630000eeeeabd63742173d93753ea2fbcb",
    type: "Podcast",
    categories: ["Podcast"],
    host: "BBC Radio 5 Live",
    description: "Expert analysis, exclusive interviews, and immediate post-race reactions from the BBC commentary team.",
    tags: ["Analysis", "Race Review", "Expert"],
    socials: { twitter: "https://twitter.com/bbc5live" },
    links: [
      { name: "BBC Sounds", url: "https://www.bbc.co.uk/programmes/p02nrsjn/episodes/downloads", style: "default" },
      { name: "Apple", url: "https://podcasts.apple.com/gb/podcast/f1-chequered-flag/id1393699341", style: "pod" },
      { name: "Spotify", url: "https://open.spotify.com/show/3U7jXzetFkBXJfw14DKqCl?si=c646ef44e6634ca9", style: "spot"}
    ]
  },
  {
    name: "Driver61",
    imageUrl: "https://yt3.googleusercontent.com/C0wM377kRnigT8R33RO2fCWJeGm4u9zQonSYav9iQx6zW_E56DfotGgMmCjDMp2YfNUDJLbL=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube"],
    host: "Scott Mansell",
    description: "A former professional racing driver breaks down driving techniques, engineering secrets, and track-specific challenges in Formula 1.",
    tags: ["Engineering", "Driving Technique", "Educational"],
    socials: { twitter: "https://twitter.com/driver61", instagram: "https://instagram.com/officialdriver61" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@Driver61", style: "yt" }
    ]
  },
  {
    name: "Tommo",
    imageUrl: "https://yt3.googleusercontent.com/nXUJrpisTzGeTBsicogDb5S8lFumQ0OIKo4HojZ59bsHDEvmn1FsyjH4Ts-bq0VtwQW9eFNH=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube"],
    host: "Tommo",
    description: "High-quality video essays, race reviews, and liveries rankings. Tommo blends great production value with passionate F1 fandom.",
    tags: ["Video Essays", "Culture", "Design"],
    socials: { twitter: "https://twitter.com/TwommoF1", instagram: "https://instagram.com/twommof1" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@TommoMcCluskey", style: "yt" }
    ]
  },
  {
    name: "RAFA TV",
    imageUrl: "https://yt3.googleusercontent.com/hrZX7R4EclITgNqoSJvzv0GqpKXpV3TSR1hGCFrvH3hX6bn_NxQJpSev5jx0uCQapkIP6Z60bA=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube", "Podcast"],
    host: "RAFA TV Team",
    description: "RAFA TV is your all-access pass to motorsport — cinematic racing films, raw paddock culture, and the private racing lifestyle money rarely buys.",
    tags: ["Entertainment", "Memes", "Culture"],
    socials: { twitter: "https://twitter.com/wtf1official", instagram: "https://instagram.com/wtf1official" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@weareRAFATV", style: "yt" }
    ]
  },
  {
    name: "Live The Dash",
    imageUrl: "https://yt3.googleusercontent.com/3aUe7bld9dypAiXr8gd-_DsruFwykWFtdxTAit6b-oHmTXQZ9Hbx40lc8YNw3557vN99uY3Q=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube"],
    host: "Live The Dash",
    description: "Follow the ultimate F1 travel vloggers as they travel around the world attending Grand Prix weekends. Get an incredible fan-perspective of the atmosphere, trackside experiences, and global F1 culture.",
    tags: ["Travel", "Vlogs", "Trackside"],
    socials: { twitter: "https://twitter.com/livetodash", instagram: "https://instagram.com/livetodash" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@LiveTheDash", style: "yt" }
    ]
  },
  {
    name: "Kym Illman",
    imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_kOmE0sQ6LWtrgJRWA0-sLwdKHiqVvltzGqJBLjGejfR5E=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube"],
    host: "Kym Illman",
    description: "Renowned F1 photographer Kym Illman takes you behind the scenes of the paddock. Get exclusive looks at the drivers, VIPs, and the fascinating world of F1 photography.",
    tags: ["Photography", "Behind the Scenes", "Paddock"],
    socials: { instagram: "https://instagram.com/kymillman" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@KymIllman", style: "yt" }
    ]
  },
  {
    name: "Josh Revell",
    imageUrl: "https://yt3.googleusercontent.com/mpeGD2MOiq5d_IPaPTlfHVcAsOGL4ndUUSpFeq3jps8hdxu_JmBQZwC1-vOp6Pyt8swP2OcYTw=s160-c-k-c0x00ffffff-no-rj",
    type: "YouTube",
    categories: ["YouTube"],
    host: "Josh Revell",
    description: "Known for his witty commentary and highly entertaining video essays. Josh covers F1 history, driver profiles, and motorsport controversies with a unique comedic flair.",
    tags: ["Comedy", "Video Essays", "History"],
    socials: { twitter: "https://twitter.com/thejoshrevell" },
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@TheJoshRevell", style: "yt" }
    ]
  }
];

// Sort and export the data
export const creatorsData = creatorsArray.sort((a, b) => a.name.localeCompare(b.name));