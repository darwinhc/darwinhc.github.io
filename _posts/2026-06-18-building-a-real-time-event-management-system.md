---
title: Building a Real-time Event Management System with FastAPI and React
author: darwin
date: 2026-06-18 08:30:00 +0200
categories: [Architecture, Fullstack]
tags: [fastapi, python, react, websockets, hexagonal-architecture, real-time]
---

In this post, I want to dive into the technical details of a recent project I built: a **Real-time Event Management System**. This project served as a technical exercise to demonstrate how to handle consistent state transitions in a distributed real-time environment.

## The Architecture: Domain-First

Instead of layering logic directly inside FastAPI routes, I opted for a **domain-oriented structure**. The core business rules—handling event lifecycles, organizer permissions, and join/leave logic—reside in a pure domain layer.

Why this approach? Because in a real-time system, the most critical part isn't the HTTP routing; it's the **consistency of the event state**. By isolating the domain rules from the framework, the system becomes easier to test and more resilient to infrastructure changes.

### Key Backend Decisions
- **FastAPI & SQLAlchemy**: Used for the REST API and persistence.
- **WebSockets**: A single `/ws/events` channel acts as a live notification layer.
- **Hexagonal Architecture**: Business logic is isolated from adapters (database, API, real-time publishers).
- **Conservative Real-time Design**: HTTP remains the source of truth. WebSockets push notifications after successful mutations, rather than acting as the primary state synchronization mechanism.

## The Frontend: Responsive and Reactive

The frontend is built with **React**, **TypeScript**, and **Vite**. To keep the application maintainable, I maintained a strict separation between UI components and the logic handling API communication and WebSocket state.

- **Reducer State Management**: Handles explicit state transitions for the UI.
- **WebSocket Mapper**: Raw notifications from the backend are parsed into frontend domain events before reaching the UI state, ensuring a clean data flow.
- **USability Features**: Includes i18n support, local join state, and a split list/detail layout for optimal user experience.

## Technical Showcase

This project isn't just about functionality; it's about building a maintainable service. It includes:
- **100+ automated tests** with >85% coverage.
- **Alembic migrations** for explicit schema control.
- **AsyncAPI 3.1.0 contract** for the real-time communication channel.

### Explore the Project
- 💻 **Backend Code**: [GitHub Repository](https://github.com/darwinhc/tt-events-realtime.service.python)
- 🖥️ **Frontend Code**: [GitHub Repository](https://github.com/darwinhc/tt-events-realtime.frontend.react)
- 🚀 **Live Demo**: [Check it out here](https://tt-events-realtime-frontend-react.vercel.app/)
- 📖 **API Docs**: [Interactive OpenAPI Docs](https://tt-events-realtime-service-python.onrender.com/docs)

Overall, the goal was to keep the product small but not disposable—simple enough for a review, yet structured enough to showcase professional engineering standards.
