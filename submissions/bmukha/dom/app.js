const heroes = [
  {
    heroId: 'demonhunter',
    heroName: 'Illidan Stormrage',
    heroLore:
      'Illidan Stormrage is the first of the demon hunters, the former self-proclaimed Lord of Outland, former ruler of the Black Temple, and the original leader of the Illidari. He is the twin brother of Malfurion Stormrage and was, like his sibling, in love with Tyrande Whisperwind. Though born a night elf and renowned as a powerful sorcerer, Illidan officially betrayed his people as he temporarily sided with the demonic Burning Legion during the War of the Ancients, though his reasons for doing so were noble as he secretly aimed to repel the Legion\'s invasion. Due to this betrayal, as well as having secretly created a second Well of Eternity after the first one was destroyed at the end of the war, he was dubbed "the Betrayer" and imprisoned in the Barrow Deeps below Mount Hyjal. There, Illidan remained for over 10,000 years, watched over by the warden Ashes of OutlandMaiev Shadowsong and her Watchers.',
  },
  {
    heroId: 'druid',
    heroName: 'Malfurion Stormrage',
    heroLore:
      "The blessings of the forest lord LegacyCenarius have made Malfurion Stormrage the epitome of what it means to be a druid. Under the guidance of Cenarius - the demigod of nature and patron of druids - the venerable Malfurion Stormrage has protected the night elves from demonic invaders for millennia. During the War of the Ancients, Malfurion was among those who defended all life on Azeroth from the terrible Burning Legion, along with his future lover Tyrande Whisperwind and his brother Illidan Stormrage. After their victory against the demons, Malfurion saw to it that the night elves left the Legion's ravages behind, settling in a new home near Mount Hyjal and overseeing the growth of the World Tree, Nordrassil. The Aspect of Dreams, LegacyYsera, linked Nordrassil to the Emerald Dream—a representation of Azeroth without war and interference from sentient beings—allowing all druids, including Malfurion, access to the realm. Malfurion and others explored the Dream for centuries.",
  },
  {
    heroId: 'hunter',
    heroName: 'Rexxar',
    heroLore:
      'As a member of the half-orc, half-ogre Mok\'Nathal Clan from the Outlands, Rexxar was instrumental in helping Thrall conquer Durotar, the Azerothian homelands of the Orcs, where Orgrimmar would later be built. Rexxar is historically considered to be a Beastmaster, which is a warrior hero of the wilderness able to call upon creatures of the forest to serve him. Beastmasters were generally considered to be loners or mercenaries, though many of Horde race Beastmasters aligned themselves specifically with the Horde. Beastmasters were a Hero unit in Warcraft III that were able to have multiple summoned beasts (Bear, Hawk, and Quilbeast) at the same time, and had an Ultimate ability called "Stampede," which called down "hordes of rampaging thunder lizards to explode upon the Beastmaster\'s enemies." Rexxar was also a playable character in the Warcraft III: The Frozen Throne Bonus Campaign, The Founding of Durotar. During his time on Draenor and through the first and second wars, Rexxar was accompanied by a large black wolf named Haratha who was his loyal companion. Haratha was killed by an orc warlock while trying to save Rexxar. Rexxar killed the warlock but lost his beloved companion and declared a trust only for beasts from then on. During his travels in the wilderness, Rexxar befriended a bear named Misha with whom he wanders Azeroth to this day. Rexxar at one time held the prestigious title "Champion of the Horde" but upon leaving Azeroth to return to Outland is considered champion of the New Horde forces there. He now resides in Thunderhold Stronghold in the Blade\'s Edge Mountains of Outland, protecting the base from the beasts and monstrosities of Blade\'s Edge.',
  },
  {
    heroId: 'mage',
    heroName: 'Jaina Proudmoore',
    heroLore:
      'One of the most powerful magic-wielders on the face of Azeroth and Princess of Kul Tiras, the once kindhearted and compassionate Jaina Proudmoore has mastered the arcane arts, fought against demons of the Burning Legion and the undead Scourge, and gained a newfound fury towards the Horde after the destruction of her beloved Theramore. As a child, Jaina showed great aptitude for magic and much compassion for her people. She was sent to Dalaran—a powerful kingdom and a haven for magi—to learn how to harness the powers of the arcane. The leader of the Kirin Tor, LegacyArchmage Antonidas, sensed great potential in Jaina and accepted her as a pupil. Studious and talented, Jaina immediately took to the arcane arts. Her studies and responsibilities consumed most of her waking moments, leaving little room for mundane pursuits. Jaina’s childhood friend, the Crown Prince of Lordaeron Arthas Menethil, reentered her life during her training in Dalaran, and the two fell in love. However, Jaina’s rigorous studies and Arthas’s duties to his kingdom prevented their relationship from ever becoming more than a brief dalliance, and their relationship ended abruptly. Heartbroken, Jaina returned to the comfort of her studies. Years later, a terrible plague washed over Lordaeron. Suspecting this was no ordinary sickness, Archmage Antonidas sent his prized pupil to meet with Arthas to investigate the cause. The plague, originating from infected grain, was spreading over the region like wildfire. It twisted the townsfolk into undead abominations of their former selves. The towns of Brill and Andorhal had completely succumbed to the plague, and Jaina knew she had to seek reinforcements.',
  },
  {
    heroId: 'paladin',
    heroName: 'Uther Lightbringer',
    heroLore:
      "The sobriquet “Lightbringer” is not softly won, nor softly maintained beyond death. The legend of noble Uther guides the Alliance years after his passing. Many devout followers of the Light were killed during the First War, unprepared for the sheer brutality of warfare against the Horde. The leader of the Clerics of Northshire, Alonsus Faol, believed that the Light could protect the faithful and devoted, and thus began training the most virtuous knights of Lordaeron to wield the Light in battle. The first knight to be named a paladin was Uther, who helped found the Knights of the Silver Hand alongside Archbishop Faol and became a legend among his order. When the Second War began, Uther fought alongside his brother-in-arms, Turalyon, to fend off the forces of Horde commander Orgrim Doomhammer and lead the Alliance in a final, successful attack on the Dark Portal. In the wake of the Horde's defeat, Uther helped rebuild Stormwind City and cared for the sick and injured. Uther remained in a leadership role with the Silver Hand for years, eventually taking Lordaeron's prince, Arthas Menethil, as his apprentice. The two forged a close relationship as teacher and student, and together they served justice throughout the land…until the Scourge struck Lordaeron. Arthas' growing anger at the spreading plague of undeath led him to horrific acts—such as the culling of Stratholme—and his thirst for vengeance drove him to madness. After the prince became a champion of the Lich King and killed his own father, Uther decided to personally guard the urn of the slain king. Arthas and Uther fought in Andorhal, and when the battle ended, the legendary paladin lay dead.",
  },
  {
    heroId: 'priest',
    heroName: 'Anduin Wrynn',
    heroLore:
      "Young King Anduin carries a heavy burden, but it is the preservation of uneasy peace, not the stratagems of war. The son of Tiffin and The Grand TournamentVarian Wrynn, Anduin Llane Wrynn is the heir to the throne of Stormwind. Years ago, when his father disappeared, young Anduin was crowned king of Stormwind. Due to his age, he was unable to rule, and the task of regency was given to Highlord Bolvar Fordragon, a venerated paladin of the Alliance. Once King Varian returned to reclaim his throne, the King began to focus his efforts on spiritual matters and diplomacy, traveling throughout Azeroth to understand how he might heal lands and souls ravaged by war. Anduin's spirit and empathy--so unlike his father's warrior impulses--enabled him to form strong bonds with the draenei Prophet Velen and even a few members of the Horde. During Vanilla WoW, Anduin was the boy-king of Stormwind, when his father was kidnapped by the Defias rogues, led by LegacyEdwin VanCleef. Lady Katrana Prestor convinced Goblins vs GnomesBolvar Fordragon to make the boy King in his father's absence. Anduin was said to be 10 years old upon the release of World of Warcraft — making him about 12 by the end of Wrath of the Lich King, and 15 by the end of Cataclysm. Following Cataclysm, Anduin pulled away from traditional combat training to study the Light; ultimately choosing the path of a priest after being encouraged by King Magni Bronzebeard and High Priest Rohan. During Mists of Pandaria, Anduin traveled to the Vale of Eternal Blossoms to study alongside the night elves.",
  },
  {
    heroId: 'rogue',
    heroName: 'Valeera Sanguinar',
    heroLore:
      'Orphaned at a young age, the blood elf Valeera Sanguinar spent her youth stealing to survive. After being imprisoned for a failed theft, she was sold to Rehgar Earthfury, a trainer of fierce gladiators, who saw great fighting potential in Valeera. Rehgar grouped Valeera with the night elf druid Broll Bearmantle and a mysterious but fierce human male, who had no memory of who he was or how he arrived in orc territory. After arriving in Orgrimmar, Valeera, Broll, and the human fought together out of necessity; otherwise they wouldn’t survive the gladiatorial contests in the ancient Dire Maul arena. They quickly warmed up to each other. With Valeera’s speed, Broll’s shape-shifting prowess, and the human’s skill, the trio would conquer any gladiators they faced. The human even earned a name for himself: “Ghost Wolf,” or Lo’Gosh in the Tauren tongue. Eventually, the three unlikely allies escaped from their life of slavery. With help from Jaina Proudmoore and her advisor Aegwynn, they were able to dispel some of the dark magics blocking Lo’Gosh’s memories. Lo’Gosh was able to remember that he was in fact The Grand TournamentVarian Wrynn - the lost King of Stormwind! Together, the group journeyed to Stormwind to reclaim Varian’s rightful place on the throne. When they journeyed to Stormwind, they discovered that a doppelganger was acting as king in Varian’s place. The doppelganger king was being controlled and manipulated by one of his own advisors: Lady Katrana Prestor—the black dragon LegacyOnyxia in human form. Seeing her dark magic blocking Varian’s true memories had been pierced, Onyxia revealed her true form and attempted to destroy the heroes. After a fierce battle, Valeera, Varian, Broll, and others vanquished Onyxia and freed Varian’s son Anduin from the dragon’s clutches.',
  },
  {
    heroId: 'shaman',
    heroName: 'Thrall',
    heroLore:
      'Raised by humans as a gladiator, Thrall later escaped from Durnholde, and fought under Orgrim Doomhammer, the name sake of the Horde capital, Orgrimmar, to liberate the orcs interned after the Second War. During the liberation of the last of the camps, Orgrim fell in combat bestowing his black plate, the title of Warchief, and the LegacyDoomhammer upon Thrall. Thrall then gathered his Horde and sailed to Kalimdor, and settled Durotar, the new home for the orcs. After joining the Earthen Ring shamans to help repair the elements of the world from the Shattering, Thrall, with the help of the dragon aspects and a group of mortal heroes, used the Dragon Soul to destroy Deathwing, and save Azeroth from destruction. Thrall was born as the son of Durotan, whom Durotar is named after, and Draka. According to the World of Warcraft novels, Thrall was found as an infant in close proximity to the slaughtered corpses of his parents by Aedelas Blackmoore. Blackmoore then named him "Thrall", which in human tongue is another word for "slave". Blackmoore then took Thrall to Durnholde Keep, raising him as a gladiator. Thrall had both the intelligence of a human, and the ferocity and savagery of an orc. Thrall grew to befriend Taretha Foxton, a human woman who can be seen in World of Warcraft at the Caverns of Time instance Escape From Durnholde Keep, in which the player aids Thrall in his escape from Durnholde. Taretha later allowed for Thrall to escape by creating a diversion with fire. Thrall was then taken to an internment camp, where he met fellow members of the Horde, and learned of the corruption of Gul\'dan, an orcish warlock. Thrall, with the help of Grom Hellscream, father to Garrosh Hellscream, later created a Horde army, which he used to return to Durnholde and confront Blackmoore, only to have Taretha\'s severed head thrown at his feet.',
  },
  {
    heroId: 'warlock',
    heroName: "Gul'dan",
    heroLore:
      'Once called “Darkness Incarnate” and “Destroyer of Dreams,” Gul’dan was the first orc warlock and is considered one of the most powerful warlocks to have ever existed. He lived to amass power by any means necessary—even betraying his kin to those that sought to enslave them. Gul’dan’s tale began on the planet Draenor, the homeworld of the orcs. The most spiritual of Draenor’s orcs were the Shadowmoon Clan, which was led by the orc shaman Ner’zhul. Ner’zhul was Gul’dan’s mentor, and he taught the young Gul’dan how to harness the elements. Gul’dan was a talented pupil, and with his intelligence and cunning he took to shamanism readily. Gul’dan’s hunger for power only grew when he encountered the demon lord, Kil’jaeden. Gul’dan was promised unfathomable power in the form of mastery over fel magic—the ways of the warlock—if he would only swear fealty to the demon lord and usurp his mentor. However, Gul’dan would pay a terrible price for such power. His actions would damn the orcs, binding them to the will of the Burning Legion. Gul’dan accepted Kil’jaeden’s terms without hesitation, and the empowered Horde would later decimate their enemies—and their world.',
  },
  {
    heroId: 'warrior',
    heroName: 'Garrosh Hellscream',
    heroLore:
      "Garrosh Hellscream, former Warchief of the Horde, is a living testament to the dangers of unchecked aggression Garrosh was born on the orcish homeworld of Draenor, and grew up untainted by the demonic blood that twisted the orcs who invaded Azeroth. Though he wasn't demonically influenced himself, Garrosh was haunted by his family's legacy: his father, Grom Hellscream, was the first orc to embrace corruption by drinking the blood of the pit lord Mannoroth. Garrosh lived in the shadow of his father's acts until he met Warchief Thrall, founder of the renewed Horde, who explained to the younger Hellscream how Grom ultimately gave his life to lift the demonic blood-curse, and freed his race from servitude to dark forces Uplifted, Garrosh joined Thrall in Azeroth and quickly became a hero of the Horde by leading a successful offensive against the Lich King. When LegacyDeathwing shattered the world, Thrall was forced to leave his throne to stop the destruction, and left Garrosh as his successor. Looking for ways to gather more resources and new territory for his people, Hellscream has initiated several brutal strikes against the Alliance, razing the city of Theramore and later clashing over the continent of Pandaria. As warchief, Garrosh's controversial actions have exposed the Horde to great scrutiny from outside--and within--his faction. With this increased scrutiny comes a greater danger of dissension and retaliation than the Horde has ever faced before.",
  },
];

const renderHero = ({ heroId, heroName, heroLore }) => {
  return `<h2 class="hero-name">${heroName}</h2>
    <div class="hero-portrait">
        <img class="hero-portrait_img" src="./img/${heroId}.webp" alt="heroportrait" />
    </div>
    <div class="hero-power">
        <img class="hero-power_img" src="./img/${heroId}-heropower.webp" alt="heropower" />
    </div>
    <p class="lore">
        ${heroLore}
    </p>`;
};

const content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
  const randomNumber = Math.floor(Math.random() * heroes.length);
  content.innerHTML = renderHero(heroes[randomNumber]);
});

document.querySelector('.list').addEventListener('click', ({ target }) => {
  content.innerHTML = renderHero(
    heroes.find((item) => item.heroId === target.parentElement.id)
  );
});
