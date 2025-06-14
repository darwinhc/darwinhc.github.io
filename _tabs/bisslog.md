---
layout: bisslog
title: Bisslog
icon: fa-solid fa-plug
order: 3
---



![bisslog imagotipo](/assets/img/brand/bisslog-logo-imagotipo.png)

> _A disciplined architecture for building sustainable microservices._

---

## Why Bisslog?

Frameworks promise simplicity — until they start dictating how your domain logic should behave.

**Bisslog** is not a framework. It's a lightweight, dependency-free core library that helps you **organize your backend code around business rules**, not around frameworks, plugins, or adapters.

It brings **architectural clarity** to Python microservices by:

- Enforcing separation of concerns through well-defined ports.
- Making your use cases framework-agnostic.
- Encouraging metadata-driven definitions.
- Keeping the domain code pure, testable, and portable.

> If you've ever asked "Where should this logic go?" — Bisslog gives you the answer.

---

## What does it look like?

![Entry point explanation Diagram](/assets/img/entry-points-explanation.png)

Each Bisslog-based application is organized around _core use cases_ that define **what** the system does, completely separated from **how** it's triggered (e.g., HTTP, EventBridge, Lambda, CLI) or **where** data is stored (MongoDB, PostgreSQL, S3, etc).

**No decorators leaking HTTP context into your domain. No global objects. No magic.**

![bisslog animation](/assets/img/bisslog-animation.gif)

---

## Read more

📖 [The Myth of Lightweight Frameworks](/architecture-lightweight-frameworks-coupling) – Why convenience becomes coupling.

📘 [Towards Sustainable Microservice Architecture](/architecture-sustainable-separation-business-logic) – The theory behind Bisslog’s design.


