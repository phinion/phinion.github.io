---
title: "Real Time Shadows Demo"
description: "Real-time omnidirectional shadow mapping with hard and soft shadows, developed using C++ and OpenGL."
category: "university"
type: "software"
youtubeUrl: "https://youtu.be/WKsjZeUeNe4"
---

# Real Time Shadows Demo

This project was developed during my third year at university as part of the **Graphics and Computational Programming** module. It involved extending an existing C++ and OpenGL graphics engine to implement real-time shadow rendering.

It remains one of the most technically interesting projects I worked on during my degree, combining graphics programming, mathematical concepts and research into rendering techniques.

## Building on an Existing Engine

Rather than starting from scratch, this project built upon the entity component system (ECS) engine I had developed in a previous university module.

The engine already supported fundamental 3D rendering functionality, including a camera system, lighting, basic 3D geometry and matrix-based transformations.

Our assignment was to extend the engine with one of three available graphics features. I chose to investigate **real-time shadows**, as I was interested in understanding how lighting and shadow calculations worked behind the scenes in 3D games.

## Researching Shadow Techniques

One of my favourite parts of this project was researching the different approaches to shadow rendering.

I explored a range of techniques, including:

- **Shadow Mapping** – Rendering depth information from a light's perspective to determine which surfaces are in shadow.
- **Variance Shadow Mapping** – Using statistical depth information to approximate softer shadow boundaries.
- **Cascaded Shadow Mapping** – Improving shadow detail across different distances from the camera.
- **Percentage-Closer Filtering (PCF)** – Sampling neighbouring shadow map values to soften shadow edges.
- **Deep Shadow Maps** – Exploring shadow representations for more complex scenes and geometry.
- **Geometry-Based Shadows** – Investigating techniques that use geometry to calculate shadow regions.
- **Ray Tracing and Ray Marching** – Researching alternative approaches to calculating light visibility and shadows.

After comparing the different methods, I decided to implement **omnidirectional shadow mapping using point lights**, alongside percentage-closer filtering to produce softer shadows.

## Implementing Real-Time Shadows

The implementation extended the engine's existing lighting and rendering systems to support shadows cast in all directions from a point light.

Unlike directional shadow mapping, omnidirectional shadows require capturing depth information around the light source, allowing objects to cast shadows regardless of their position relative to the light.

I implemented shadow mapping using this approach and integrated **percentage-closer filtering** to experiment with both hard and soft shadow effects.

One of the most satisfying parts was being able to position and move a light source around the scene and immediately see how the shadows responded to the surrounding geometry.

Seeing the mathematics and rendering techniques come together into something interactive was incredibly rewarding.

## Testing and Lessons Learned

Looking back, one area I would significantly improve is my approach to performance testing.

My original testing focused primarily on measuring rendering performance with a single point light while varying the shadow map resolution.

While this provided some useful information, it didn't fully represent how the system would behave in a more realistic game environment.

A better approach would have been to test scenes with **multiple dynamic point lights**, varying scene complexity and shadow map resolutions to understand how these factors affected GPU performance and frame times.

This is something I appreciate much more now, having gained professional experience with performance optimisation and profiling in game development.

The project taught me that successfully implementing a rendering technique is only one part of the challenge. Understanding its performance characteristics under realistic conditions is equally important.

## What I Took Away

This was one of my favourite university projects because it allowed me to build upon something I had already created and take it in a completely new direction.

I particularly enjoyed exploring different graphics techniques, understanding the trade-offs between them and eventually producing an interactive demonstration of real-time shadows.

It strengthened my understanding of **3D graphics programming, rendering pipelines, lighting and performance considerations**, while also giving me valuable experience researching and implementing unfamiliar technical concepts.

Most importantly, it reinforced how much I enjoy taking existing systems, understanding how they work and extending them to create something new.