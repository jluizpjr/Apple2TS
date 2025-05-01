const tourSVG =
  '<svg viewBox="0 0 512 512" width="20" height="20" style="vertical-align: middle;"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>'

export let defaultHelpText = `Might and Magic 2: The Gates to Another World
TypeScript Apple IIe Emulator
(c) ${new Date().getFullYear()} CT6502

`

const isMac = navigator.platform.startsWith("Mac")
const keyMod = isMac ? "⌘" : "Alt+"
const arrowMod = isMac ? "⌘" : "Ctrl+"
const isTouchDevice = "ontouchstart" in document.documentElement

if (isTouchDevice) {
  defaultHelpText += `\nMobile platforms:
Tap the screen to show the keyboard.
Press the arrow keys, esc, or tab buttons to send those keys to the emulator.
To send a control character, press the ctrl button once. Then tap the screen to show the keyboard and press the desired key. The ctrl button will automatically be released.
To send multiple control characters, press the ctrl button twice to lock it on (indicated by a green dot). Then tap the screen to show the keyboard and press the desired keys. Press the ctrl button again to release it.
The open apple and closed apple keys behave the same as the ctrl key.`
} else {
  defaultHelpText += `\n

<b><H2>Cleric Spells</H2></b>
<a href="#cleric_level1">[1]</a> <a href="#cleric_level2">[2]</a> <a href="#cleric_level3">[3]</a> <a href="#cleric_level4">[4]</a> <a href="#cleric_level5">[5]</a> <a href="#cleric_level6">[6]</a> <a href="#cleric_level7">[7]</a> <a href="#cleric_level8">[8]</a> <a href="#cleric_level9">[9]</a>

<b><H3 id="cleric_level1">Level 1</H3></b>
<b>1. Apparition:</b> Combat spell that costs 1 spell point. Creates a frightening apparition in all monsters' memory causing them to be afraid, reducing their chance to hit.
<b>2. Awaken:</b> Costs 1 spell point and can be cast any time. Awakens all sleeping members of the party, instantaneously canceling the sleep condition. May be critical if party is attacked during rest.
<b>3. Bless:</b> Combat spell that costs 1 spell point. Increases the accuracy with which all characters fight, for the duration of combat.
<b>4. First Aid:</b> Costs 1 spell point and can be cast any time. Heals minor battle wounds, restoring 8 Hit Points to one character.
<b>5. Light:</b> Non-combat spell that costs 1 spell point. Gives the party 1 light factor, which is sufficient to light up 1 dark area. Multiple light spells can be cast to accumulate multiple light factors.
<b>6. Power Cure:</b> Costs 1 spell point per level and 1 gem, and can be cast any time. Restores one character's health and 1-10 Hit Points per experience level of caster.
<b>7. Turn Undead:</b> Combat spell that costs 1 spell point. Destroys some or all undead monsters, depending on caster's experience level and monster's power level.

<b><H3 id="cleric_level2">Level 2</H3></b>
<b>1. Cure Wounds:</b> Costs 2 spell points and can be cast any time. Cures more serious wounds, restoring 15 Hit Points to one character.
<b>2. Heroism:</b> Combat spell that costs 2 spell points and 1 gem. Temporarily elevates one character 6 levels of experience. Spell lasts for the duration of combat.
<b>3. Nature's Gate:</b> Non-combat spell that costs 2 spell points and can only be cast outside. Using the forces of nature, opens a portal between two locations in the land of CRON. These locations vary with time (days/years).
<b>4. Pain:</b> Combat spell that costs 2 spell points. Cripples one living monster with pain, inflicting 2-16 damage points, unless the monster is immune to pain.
<b>5. Protection From Elements:</b> Costs 2 spell points and 1 gem, and can be cast any time. Increases all character's resistance to fear, cold, fire, poison, acid and electricity. Amount of the increase depends on the caster's experience level. Spell lasts 1 day.
<b>6. Silence:</b> Combat spell that costs 2 spell points. Targets 4 monsters, +1 per level. Prevents the monsters from casting spells for the duration of combat, or until they overcome the spell.
<b>7. Weaken:</b> Combat spell that costs 2 spell points and 1 gem. Weakens all monsters affected, reducing their physical damage by half until the spell is overcome.

<b><H3 id="cleric_level3">Level 3</H3></b>
<b>1. Cold Ray:</b> Combat spell that costs 3 spell points and 2 gems. Targets 5 monsters. Attacks with a ray of intensive cold that penetrates to the monster's heart and inflicts 25 points of damage to each monster affected. Can't be cast in hand-to-hand combat.
<b>2. Create Food:</b> Non-combat spell that costs 3 spell points and 2 gems. Adds 8 food units to caster's food supply. Caster may then distribute food among other party members, if they desire.
<b>3. Cure Poison:</b> Costs 3 spell points and can be cast any time. Flushes poison out of one character's system, instantaneously removing the Poisoned condition.
<b>4. Immobilize:</b> Combat spell that costs 3 spell points. Targets 5 monsters. Immobilizes any monster affected.
<b>5. Lasting Light:</b> Non-combat spell that costs 3 spell points. Bestows 20 light factors on the party, for use in dispelling darkness.
<b>6. Walk on Water:</b> Non-combat spell that costs 3 spell points and 3 gems, and can only be cast outside. Creates a floating sand dune upon which the party may walk on. Lasts 1 day.

<b><H3 id="cleric_level4">Level 4</H3></b>
<b>1. Acid Spray:</b> Combat spell that costs 4 spell points and 3 gems. Targets 3 monsters. Sprays a corrosive stream of acid inflicting 6-60 points of damage, unless immune to acid. Can't be cast in hand-to-hand combat.
<b>2. Air Transmutation:</b> Non-combat spell that costs 4 spell points and 3 gems, and can only be cast outdoors. Transforms the party into air, allowing the exploration of the elemental plane of air.
<b>3. Cure Disease:</b> Costs 4 spell points and can be cast any time. Restores full health to one sick character, instantaneously removing the diseased condition.
<b>4. Restore Alignment:</b> Non-combat spell that costs 4 spell points and 3 gems. Restores one character's original alignment, after actions and responses have caused it to shift.
<b>5. Surface:</b> Non-combat spell that costs 4 spell points. Instantly transports all party members from an underground location to grounds surface.
<b>6. Holy Bonus:</b> Combat spell that costs 4 spell points and 3 gems. The generous forces of the cleric's deity increase the damage done by party members by 1 point per 2 levels of the caster.

<b><H3 id="cleric_level5">Level 5</H3></b>
<b>1. Air Encasement:</b> Combat spell that costs 5 spell points and 5 gems. Encases one monster in a field of air, inflicting 10 points of damage per combat round and separating it from the battle until the spell is overcome or the monster is attacked.
<b>2. Deadly Swarm:</b> Combat spell that costs 5 spell points and 5 gems. Sends a swarm of killer insects against all monsters, inflicting 4-40 damage points against each monster.
<b>3. Frenzy:</b> Combat spell that costs 5 spell points and 5 gems. Sends one party member into a frenzy, allowing them to attack all the monsters on the screen. Drained from the experience, the character loses 1 point of endurance and is then rendered unconscious.
<b>4. Paralyze:</b> Combat spell that costs 5 spell points and 5 gems. Attempts to immobilize all monsters and prevent them from fighting. May be partially or completely effective on some or all monsters.
<b>5. Remove Condition:</b> Costs 5 spell points and 5 gems and can be cast any time. Releases one character from all undesirable conditions except dead, stoned or eradicated.

<b><H3 id="cleric_level6">Level 6</H3></b>
<b>1. Earth Transmutation:</b> Non-combat spell that costs 6 spell points and 6 gems, and can only be cast outdoors. Transforms the party into earth, allowing the exploration of the elemental plane of earth.
<b>2. Rejuvenate:</b> Non-combat spell that costs 6 spell points and 6 gems. A fountain of youth that trims 1-10 years off a character's age, restoring their abilities to the younger level. Spell carries some risk of producing the opposite effect.
<b>3. Stone to Flesh:</b> Costs 6 spell points and 6 gems, and can be cast any time. Re-animates one character who has been turned to stone, removing the stoned condition.
<b>4. Water Encasement:</b> Combat spell that costs 6 spell points and 6 gems. Encases one monster in a field of water, inflicting 20 points of damage per combat round and separating it from the battle until the spell is overcome or the monster is attacked.
<b>5. Water Transmutation:</b> Non-combat spell that costs 6 spell points and 6 gems, and can only be cast outdoors. Transforms the party into water, allowing the exploration of the elemental plane of water.

<b><H3 id="cleric_level7">Level 7</H3></b>
<b>1. Earth Encasement:</b> Combat spell that costs 7 spell points and 7 gems. Encases one monster in a field of earth, inflicting 40 points of damage per combat round and separating it from the battle until the spell is overcome or the monster is attacked.
<b>2. Fiery Flail:</b> Combat spell that costs 7 spell points and 7 gems. Creates a huge flail of fire, striking a single opponent, inflicting 100-400 points of damage.
<b>3. Moon Ray:</b> Combat spell that costs 7 spell points and 7 gems, and can only be cast outdoors. Bathes all combatants in a beneficent ray that bestows 10-100 Hit Points on each character and removes 10-100 Hit Points from each monster.
<b>4. Raise Dead:</b> Costs 7 spell points and 7 gems, and can be cast any time. Brings one character back to life, removing the dead condition. Spell carries a moderate chance of failure and a remote chance of eradicating the character (note: Spell-caster and recipient age by 1 year).

<b><H3 id="cleric_level8">Level 8</H3></b>
<b>1. Fire Encasement:</b> Combat spell that costs 8 spell points and 8 gems. Encases one monster in a field of fire, inflicting 80 points of damage per combat round and separating it from the battle until the spell is overcome or the monster is attacked.
<b>2. Fire Transmutation:</b> Non-combat spell that costs 8 spell points and 8 gems, and can only be cast outdoors. Transforms the party into fire, allowing the exploration of the elemental plane of fire.
<b>3. Mass Distortion:</b> Combat spell that costs 8 spell points and 8 gems. Increases the weight of 2 monsters causing them to fall and subsequently lose half their hit points.
<b>4. Town Portal:</b> Non-combat spell that costs 8 spell points and 8 gems. Opens a temporary portal to any town and moves the party through the portal to that town.

<b><H3 id="cleric_level9">Level 9</H3></b>
<b>1. Divine Intervention:</b> Combat spell that costs 10 spell points and 30 gems. Intercedes with supernatural forces to restore all characters' Hit Points and remove all undesirable conditions, except eradicated (note: Spell-caster ages 5 years every time this spell is cast).
<b>2. Holy Word:</b> Combat spell that costs 10 spell points and 10 gems. Utters a single word of devastating power, that destroys all undead monsters (note: Ages caster 1 year).
<b>3. Resurrection:</b> Non-combat spell that costs 10 spell points and 10 gems. Removes the eradicated condition from one character, adding 5 years to their age and subtracting 1 endurance point from their vital statistics. There is a chance that the spell will fail (note: Ages caster 1 year).
<b>4. Uncurse Item:</b> Non-combat spell that costs 10 spell points and 50 gems. Attempts to remove the curse from an item in caster's backpack.

`
}

defaultHelpText += `

<b><H2>Sorcerer Spells</H2></b>
<a href="#level1">[1]</a> <a href="#level2">[2]</a> <a href="#level3">[3]</a> <a href="#level4">[4]</a> <a href="#level5">[5]</a> <a href="#level6">[6]</a> <a href="#level7">[7]</a> <a href="#level8">[8]</a> <a href="#level9">[9]</a>

<b><H3 id="level1">Level 1</H3></b>
<b>1. Awaken:</b> Costs 1 spell point and can be cast any time. Awakens all sleeping members of the party, instantaneously canceling the sleep condition. May be critical if party is attacked during rest.
<b>2. Detect Magic:</b> Non-combat spell that costs 1 spell point. Reveals any magical items in caster's backpack, and notes the number of magical charges remaining in any item which must be charged for use. Also detects any magic surrounding or inside a chest.
<b>3. Energy Blast:</b> Combat spell that costs 1 spell point per level, and 1 gem. Zaps one monster with a blast of pure energy, inflicting 1-6 damage points per experience level of caster.
<b>4. Flame Arrow:</b> Combat spell that costs 1 spell point. Sends a burning shaft into one monster, inflicting 2-8 points of fire damage, unless monster is immune to fire.
<b>5. Light:</b> Non-combat spell that costs 1 spell point. Gives the party 1 light factor, sufficient to light a single darkened square. Multiple light spells can be cast, to accumulate light factors.
<b>6. Location:</b> Non-combat spell that costs 1 spell point. Gives precise information on party's location. Shows a map of the current 16x16 area that the party has mapped and shows their present location on that map. May be critical when party is lost or magically transported. In general, this spell is the key to successful mapping.
<b>7. Sleep:</b> Combat spell that costs 1 spell point. Targets 4 monsters + 1 per level. Sends monsters into a deep sleep, preventing them from attacking. Effective until monster is damaged or overcomes the spell.

<b><H3 id="level2">Level 2</H3></b>
<b>1. Eagle Eye:</b> Non-combat spell that costs 2 spell points per level and can only be cast outdoors. Targets 5 steps per caster level. An eagle eye view of the outdoor terrain appears on the screen, providing a 5x5 overhead view of the area and the party's location.
<b>2. Electric Arrow:</b> Combat spell that costs 2 spell points. Electrocutes one monster, inflicting 4-16 damage points, unless monster is immune to electrical attack.
<b>3. Identify Monster:</b> Combat spell that costs 2 spell points and 1 gem. Informs caster of the current condition of any one monster during combat.
<b>4. Jump:</b> Non-combat spell that costs 2 spell points. Moves the party 2 squares forward, providing there are no magical obstructions (force fields, etc.) in the way.
<b>5. Levitate:</b> Non-combat spell that costs 2 spell points. Raises all characters above ground level, protecting them from various dangers for 1 day.
<b>6. Lloyd's Beacon:</b> Non-combat spell that costs 2 spell points and 1 gem, and can only be cast in dungeons. Leaves a beacon at your current location so that you may instantaneously return to that location the next time you cast this spell.
<b>7. Protection from Magic:</b> Costs 1 spell point per level and 1 gem, and can be cast any time. Increases all characters' resistance to magic. Amount of the increase depends on experience level of caster. Spell lasts 1 day.

<b><H3 id="level3">Level 3</H3></b>
<b>1. Acid Stream:</b> Combat spell that costs 1 spell point per level, and 2 gems. Sprays one monster with a burning stream of acid inflicting 2-8 points of damage per level of caster, unless immune to acid.
<b>2. Fly:</b> Non-combat spell that costs 3 spell points and can only be cast outdoors. Grants magical flight to all characters, allowing the party as a whole to move to any other outdoor area. The party will land in the safest square in that area.
<b>3. Invisibility:</b> Combat spell that costs 3 spell points. Drops a cloak of invisibility over all characters, greatly decreasing the monsters' chances of hitting them.
<b>4. Lightning Bolt:</b> Combat spell that costs 1 spell point per level, and 3 gems. Targets 4 monsters. Blasts the monsters with a gigantic lightning bolt that inflicts 1-6 damage points per level of caster.
<b>5. Web:</b> Combat spell that costs 3 spell points and 3 gems. Targets 4 monsters +1 per caster level. Wraps monsters in a supernatural web, preventing them from fighting for the duration of combat or until they escape. Can't be cast in hand-to-hand combat.
<b>6. Wizard Eye:</b> Non-combat spell that costs 3 spell points per level and 2 gems, and can only be cast indoors. Targets 5 steps per caster level. Uses the magical eye of a powerful wizard to show a 5x5 overhead view of the party's location in any indoor maze.

<b><H3 id="level4">Level 4</H3></b>
<b>1. Cold Beam:</b> Combat spell that costs 1 gem per level. Attacks with a beam of intense cold that penetrates to one monster's heart and inflicts 6 damage point per level of caster, unless the monster is immune to cold.
<b>2. Feeble Mind:</b> Combat spell that costs 4 spell points and 3 gems. Targets 5 monsters. Erases the monster's brain, removing all its abilities for the duration of combat or until the monster overcomes the spell.
<b>3. Fire Ball:</b> Combat spell that costs 1 spell point per level, and 3 gems. Targets 6 monsters. Rolls a deadly ball of fire into the monsters' midst, inflicting 1-6 damage points per level of caster. Can't be cast in hand-to-hand combat.
<b>4. Guard Dog:</b> Non-combat spell that costs 4 spell points. Places a supernatural guard over party, preventing surprise attacks for 1 day.
<b>5. Shield:</b> Combat spell that costs 4 spell points. Creates an invisible shield which surrounds the party and protects all characters from most missile weapons for the duration of combat.
<b>6. Time Distortion:</b> Combat spell that costs 4 spell points and 3 gems. Creates a warp in time that enables the party to retreat safely from most battles.

<b><H3 id="level5">Level 5</H3></b>
<b>1. Disrupt:</b> Combat spell that costs 5 spell points and 5 gems. Creates a powerful energy field that disrupts the molecular bonds of one monster, inflicting 100 points of damage. Can't be cast in hand-to-hand combat.
<b>2. Fingers of Death:</b> Combat spell that costs 5 spell points and 5 gems. Targets 3 living monsters. Channels the ancient power of all dead sorcerers through the caster, resulting in death to the monsters at whom the caster points a finger.
<b>3. Sand Storm:</b> Combat spell that costs 2 spell points per level and 5 gems, and can only be cast outdoors. Targets all monsters. Calls upon the forces of nature to create a violent sand storm inflicting 1-8 points of damage per level of caster.
<b>4. Shelter:</b> Non-combat spell that costs 5 spell points. Targets the entire party. Provides 1 day's rest free of the danger of encounter.
<b>5. Teleport:</b> Non-combat spell that costs 5 spell points. Instantly moves the party from its present position, up to 9 squares in any direction.

<b><H3 id="level6">Level 6</H3></b>
<b>1. Disintegration:</b> Combat spell that costs 6 spell points and 6 gems. Targets 3 monsters. Inflicts 50 damage points while disintegrating parts or all of the target.
<b>2. Entrapment:</b> Combat spell that costs 6 spell points and 6 gems. Surrounds the battle with a magical energy field preventing all from escaping.
<b>3. Fantastic Freeze:</b> Combat spell that costs 2 spell points and gems per level. Shoots a fantastic beam of cold at 5 monsters, crystallizing them and inflicting 10 damage points per level of caster. Can't be cast in hand-to-hand combat.
<b>4. Recharge Item:</b> Non-combat spell that costs 6 spell points and 6 gems. Restores 1-6 charges to any item in caster's backpack that still has 1 magical charge remaining. Some risk that the spell will fail and destroy the item.
<b>5. Super Shock:</b> Combat spell that costs 2 spell points per level, and 6 gems. Shoots an intense beam of electricity, shocking one monster with 20 damage points per level of caster.

<b><H3 id="level7">Level 7</H3></b>
<b>1. Dancing Sword:</b> Combat spell that costs 3 spell points per level, and 7 gems. Targets 10 monsters. A magical sword that moves with lightning speed and inflicts 1-12 damage points per level of caster.
<b>2. Duplication:</b> Non-combat spell that costs 7 spell points and 100 gems. Allows the caster to exactly duplicate any 1 item in their backpack, provided that there is room in the caster's pack for the new item. Small chance that the spell will fail and destroy the original item.
<b>3. Etherealize:</b> Non-combat spell that costs 7 spell points and 7 gems. Alters all characters' molecular structure long enough to allow them to move 1 square forward through any barrier (force field, wall, mountain, etc).
<b>4. Prismatic Light:</b> Combat spell that costs 7 spell points and 7 gems. Targets all monsters. A powerful, but erratic spell that has completely unpredictable effects.

<b><H3 id="level8">Level 8</H3></b>
<b>1. Incinerate:</b> Combat spell that costs 5 spell points per level, and 8 gems. Engulfs one monster with the heat of a thousand fires doing 20-40 damage points per level of caster.
<b>2. Mega Volts:</b> Combat spell that costs 5 spell points per level, and 8 gems. Creates a chain of electricity connecting all opponents with the deadly voltage doing 4-16 damage points per level of caster.
<b>3. Meteor Shower:</b> Combat spell that costs 8 spell points +1 per monster and 8 gems, and can only be cast outdoors. Buries all monsters under a hail of meteors, inflicting 5-50 damage points on each monster.
<b>4. Power Shield:</b> Combat spell that costs 8 spell points and 8 gems. Reduces the damage inflicted on all characters by any attack, by 1/2. Lasts for the duration of combat.

<b><H3 id="level9">Level 9</H3></b>
<b>1. Implosion:</b> Combat spell that costs 10 spell points and 10 gems. Targets 1 monster. Creates a hole in space, at the center of the target creature, sucking it into nothingness.
<b>2. Inferno:</b> Combat spell that costs 3 spell points per level and 10 gems. Targets all monsters. Unleashes the heat of the sun on all monsters shown, doing 1-20 points damage per level of caster.
<b>3. Star Burst:</b> Combat spell that costs 10 spell points +1 per monster and 20 gems, and can only be cast outdoors. Showers all monsters with pieces of an exploding star, doing 20-200 points of damage.
<b>4. Enchant Item:</b> Non-combat spell that costs 50 spell points per 'plus' of items, and 50 gems. Attempts to raise the magic ability of an item by increasing its '+' by 1 (for example, changing a +1 sword into a +2).

`
