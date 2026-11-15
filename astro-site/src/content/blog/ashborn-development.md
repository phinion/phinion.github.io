---
title: "Ashborn: From Unity Developer to Lead Programmer"
description: "A look back at my first professional game development experience, building combat systems, designing gameplay architecture and leading a programming team at Fireslug Studios."
pubDate: 2026-11-15
category: "devlog"
tags:
  - Unity
  - C#
  - Game Development
  - Combat Systems
  - Technical Leadership
  - Professional Career
project: "ashborn"
draft: false
---

## My First Step Into Professional Game Development

Ashborn was my first professional game development opportunity after graduating from Bournemouth University.

I joined Fireslug Studios as a Unity Developer, working remotely with a team of over 15 talented developers and creatives.

The team included programmers, 2D and 3D artists, animators, riggers, musicians and designers, all working together to bring an ambitious indie RPG to life.

It was my first real introduction to how a game development studio operates.

I learned about daily stand-ups, sprint planning, Trello boards, programming meetings, company-wide discussions and the importance of keeping everyone aligned on shared goals.

One thing I particularly appreciated was how collaborative the studio was. Everyone had opportunities to voice their opinions, contribute ideas and help shape the game's direction.

Over time, I started taking on more responsibility beyond my initial programming tasks. I became involved in planning future development, discussing gameplay direction and helping coordinate the programming team.

Eventually, I was promoted to **Lead Programmer**, which became one of the most important learning experiences of my early career.

## What Was Ashborn?

Ashborn was a 3D hack-and-slash action RPG inspired by games such as *Final Fantasy Crystal Chronicles*.

The central idea was to protect your village from enemies known as the Ashborn.

Players would explore nearby dungeons, complete quests, battle enemies and interact with villagers as they progressed through the game.

We wanted combat to feel deliberate and rewarding, while also building a wider world with memorable characters, exploration and village interactions.

When I first joined, the project was still in the early stages of combat development.

Over time, I helped develop and expand the game's underlying architecture and gameplay systems, moving it towards a more complete playable experience.

## Designing a Deliberate Combat System

One of the most interesting technical challenges was Ashborn's combat.

Rather than encouraging players to repeatedly mash the attack button, we wanted every input to feel meaningful.

Each attack was divided into four phases:

1. **Pre-Attack:** The preparation and wind-up before an attack.
2. **Active:** The window during which the attack could deal damage.
3. **Combo:** A short window allowing the player to chain into the next move.
4. **Post-Attack:** A recovery period where poorly timed inputs could leave the player vulnerable.

This meant that players had to pay attention to the timing of their attacks rather than simply pressing buttons as quickly as possible.

Working alongside our 3D animators, we developed weapon-based attack combinations for swords and axes.

I helped clean up the existing combat implementation and expand its architecture to support additional gameplay mechanics.

It was a great opportunity to understand how combat programming, animation and game design need to work together to create a satisfying experience.

## Expanding Combat With Modular Spells

One of my favourite features was the addition of magical abilities.

We had an incredibly talented VFX artist who created over 20 different spell effects.

The challenge was finding a way to integrate these abilities into our existing combat system without having to build every spell as a completely separate implementation.

I expanded the combat architecture using Unity's **ScriptableObjects** to create a more modular, data-driven approach.

Spells could be configured as reusable assets and added to a character's moveset.

This allowed us to:

- Assign different spells to characters and attacks.
- Configure spell timings and behaviour.
- Connect VFX with existing combat sequences.
- Experiment with abilities without rewriting the combat system each time.

It was incredibly satisfying seeing the VFX artist's work come to life through systems I had helped build.

More importantly, this taught me the value of designing systems around flexibility and reusability, especially when working with a creative team where requirements frequently evolve.

## Building the Inventory, Dialogue and Interaction Systems

As I became more involved in the project, I started taking ownership of entire gameplay systems.

At the time, Ashborn was primarily focused on combat. We wanted to develop it further into a playable RPG experience with exploration, characters and interactions.

I implemented several foundational systems, including:

- An inventory system.
- A dialogue system.
- Character and world interactions.
- Level transitions.

These features helped connect different parts of the game and established the foundations for a more complete gameplay loop.

Although not every planned mechanic reached full implementation, these systems helped move Ashborn beyond its original combat prototype.

## Working With Hexagonal Maps

Ashborn also featured a hex-based world map.

This functioned as a level-selection system, allowing players to navigate between different areas.

I worked on cleaning up and improving much of the existing implementation, alongside connecting the map with the game's level transitions.

Interestingly, the experience would become particularly useful later in my career.

At Code Wizards, I went on to work with hex-based strategy games, so some of the concepts I first encountered during Ashborn became directly relevant to my next professional role.

## Creating a Village of Unique Characters

The game featured four main characters, but we also wanted the village itself to feel populated.

Our art team had created a range of character models, clothing options and other 3D assets.

I developed a villager randomisation system that combined these assets to generate different appearances.

Using different clothing arrangements, we could populate the village with over 15 visually distinct villagers.

We also explored systems involving villager jobs, dialogue and quest-giving NPCs.

Not all of these ideas were fully implemented before development ended, but the randomisation system was an interesting exercise in building reusable features from modular assets.

## Interactive Music With Wwise

Another feature I particularly enjoyed was our use of **Audiokinetic Wwise** for interactive music.

Instead of relying entirely on static background tracks, we wanted the soundtrack to respond to what was happening during gameplay.

For example, the music could become more or less intense depending on:

- How many enemies were present in the scene.
- Whether the player's health was high or low.
- The overall intensity of the combat encounter.

Working with our musicians and the audio system was a really interesting experience.

I've always had a passion for music, so getting to combine that interest with game development was particularly rewarding.

It also demonstrated how audio can become an active part of gameplay rather than simply something playing in the background.

## Working With Artists, Animators and Musicians

One of my biggest takeaways from Ashborn was learning how much communication matters in game development.

I regularly collaborated with artists, animators, VFX artists and musicians to integrate their work into Unity.

This involved receiving assets, implementing them, testing the results, providing feedback and working through multiple iterations together.

It wasn't simply a case of receiving an animation or model and dropping it into a scene.

We often needed to discuss how an asset would work within the game's mechanics, whether changes were required and how to achieve the best possible result.

These experiences helped me become a better developer by teaching me to consider the needs and perspectives of other disciplines.

## Growing Into a Leadership Role

When I first joined Fireslug Studios, I was primarily focused on developing my programming skills.

As the project progressed, I gradually became more involved in planning and coordinating development.

Eventually, I took on the responsibilities of Lead Programmer.

I helped organise programming tasks, identify dependencies and plan development milestones.

Using Trello and Agile workflows, we broke down larger objectives into more manageable tasks and coordinated work across the programming team.

I also supported newly recruited developers, helping them understand the codebase and get comfortable working on the project.

Another new experience was participating in recruitment and conducting technical interviews.

This was a significant change from being responsible only for my own programming tasks.

I had to learn how to communicate expectations, understand other developers' strengths and help everyone work towards shared goals.

It was challenging at times, but also incredibly rewarding.

Looking back, I think Ashborn was where I first discovered how much I enjoyed technical leadership.

## Why Ashborn Never Released

Unfortunately, Ashborn never made it out of development.

We were a relatively small independent team attempting to create a large and ambitious RPG.

As development progressed, the scale of the project became increasingly difficult to sustain.

Ultimately, we weren't able to secure the publishing funding required to continue development.

It was disappointing, especially after seeing how much effort and creativity everyone had put into the game.

We had talented artists producing beautiful concept art and 3D models, animators bringing characters to life, musicians creating the soundtrack and developers building the systems that connected everything together.

There was so much potential in what we were creating.

Although we weren't able to finish the game, I still consider the experience an important success in my own development.

## Looking Back

Ashborn will always be a special project to me.

It was my introduction to professional game development, my first experience leading a programming team and an opportunity to work with an incredibly talented group of people.

I learned about:

- Building and maintaining gameplay architecture.
- Designing modular systems that support creative iteration.
- Integrating animation, VFX and interactive audio.
- Collaborating across different game development disciplines.
- Planning development work using Agile methodologies.
- Supporting, mentoring and coordinating other programmers.
- Understanding the challenges of developing an ambitious indie game.

Most importantly, it taught me that making games is a collaborative process, and that the people you work with are just as important as the technology you're using.

I'm incredibly proud of what we accomplished, even if the game never reached release.

I'll always remember the people at Fireslug Studios and everything I learned from working alongside them.

## Links

- [Fireslug Studios Website](https://www.fireslugstudios.com/#1)
- [Fireslug Studios Instagram](https://www.instagram.com/fireslugstudios/)