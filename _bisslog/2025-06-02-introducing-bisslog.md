---
title: "Building Sustainable Microservices with bisslog"
layout: post
date: 2025-06-01
permalink: /bisslog/introducing-bisslog/
---


<p align="center">
  <img src="https://raw.githubusercontent.com/darwinhc/bisslog-docs/master/docs/assets/brand/bisslog-logo-imagotipo.png" alt="bisslog logo" width="160"/>
</p>

---

## The Problem: When Microservices Become a Mess

Building a modern microservice in Python **seems** easy — until it isn’t.

As the service grows, you start noticing problems:

- 🧱 Business logic tightly coupled to frameworks and infrastructure
- 🔍 Unit tests become hard to write and maintain
- 🔄 Switching from Mongo to Dynamo or SQS to Kafka involves rewriting logic
- 🌀 Architectural chaos: every service ends up with its own patterns and hacks

These issues don’t just slow down development — they lead to **technical debt**, **fragile systems**, and **teams that can’t move fast**.

---

## The Solution: `bisslog` + Hexagonal Architecture

[`bisslog`](https://github.com/darwinhc/bisslog-core-py) is a lightweight Python library that helps you build clean, decoupled, production-ready microservices.

It brings a practical and framework-agnostic implementation of **Hexagonal Architecture**, giving you:

- 🔌 **Ports and adapters** for any infrastructure (Mongo, SQS, Email, etc.)
- 🧠 Use cases **independent of FastAPI, Flask, or AWS Lambda**
- 📦 Clean separation of input/output layers
- 🧪 Easier unit testing and mocking
- 📊 Built-in support for **observability**, **validation**, and **error handling**
- ⚙️ Automatic handler code generation for AWS Lambda (HTTP, SQS, EventBridge...)

---

![bisslog architecture diagram](https://raw.githubusercontent.com/darwinhc/darwinhc.github.io/master/assets/img/entry-points-explanation.png)

*Example: Entry points (HTTP, events) talk to domain logic through ports. Infrastructure is fully pluggable.*

---

## Real Example: `company-data-registry.microservice`

To validate this approach, I built a reference service called [`company-data-registry.microservice`](https://github.com/darwinhc/company-data-registry.microservice).

It includes:

- 🏗️ Domain-centric use cases (no framework code inside)
- 🧩 Pluggable adapters for MongoDB and AWS Lambda
- 📝 A declarative metadata file describing inputs, outputs, and bindings
- 🚀 Auto-generated Lambda handlers with `bisslog-aws-lambda-py`

```text
src/
├── domain/
│   └── use_cases/
│       └── create_data.py
│       └── ... (more use cases)
├── infra/
│   ├── database/
│   │   ├── data_x_division.py          # Port definition
│   │   └── impls/
│   │       └── data_x_mongo_div.py     # MongoDB adapter
│   └── entry_points/
│       ├── flask/
│       │   └── setup.py
│       ├── fastapi/
│       │   └── setup.py
│       └── lambda_aws/
│           └── setup.py
metadata.yml
```

*Modular structure: use_cases, ports, adapters, entrypoints, and metadata.*

---

## Bonus: Declarative Inputs + Generated Outputs

One of the key ideas in `bisslog` is this: **you define what your service should do, not how to wire everything together.**

With a simple YAML metadata file like:

```yaml
---
name: "user management"
type: "microservice"
description: "Handles creation, update, and retrieval of user accounts in the system"
service_type: "functional"
team: "identity-platform"
tags:
  service: "user-management"

use_cases:
  registerUser:
    name: "register user"
    description: "Registers or creates a new user in the system"
    actor: "end user"
    criticality: "high"
    type: "create functional data"
    triggers:
      - type: "http"
        options:
          route: "/user"
          method: "post"
          apigw: "public"
          mapper:
            body: user_data
    external_interactions:
      - keyname: users_division
        type_interaction: "database"
        operation: "register_user_on_db"
    tags:
      accessibility: "public"
```

you get a full AWS Lambda handler, with body parsing, validation, response formatting, and trace support


 From metadata → to auto-generated, production-ready handler.


---

## What If You Want to Change the Framework or the Language?

One of the most common long-term problems in microservice development is **technology lock-in**.  
With `bisslog`, you're protected against that from day one.

### 🛠️ Switching Frameworks? Easy.

Because your use cases are completely decoupled from your HTTP framework, switching from **FastAPI to Flask**, or from **AWS Lambda to an ASGI app**, requires **no changes to your domain logic**.

You only need to:

1. Replace the entry point adapter
2. Rewire the handler (which can be auto-generated again)
3. Keep your use case untouched

Your logic doesn’t care where the request comes from — and that’s the point.


### 🌐 Switching Programming Language? Possible.

Because `bisslog` enforces clean boundaries, your **business logic is portable**.

Imagine this:

- Your Python service grows, and you decide to rewrite the core in **Go**, **Rust**, or **Java**
- If your ports are well-defined and your core logic is framework-agnostic, the rewrite is scoped to the **domain layer only**

The rest (APIs, infra, observability) can stay in Python — or be gradually migrated.

This level of **future-proofing** is rare, and it’s built into `bisslog` by design.

---

[image]

*Use cases remain stable while frameworks and infrastructure evolve independently.*


---
## So... What's Next?

If you’ve ever thought “this should be simpler”, bisslog might be exactly what you’re looking for.

I built this ecosystem with one mission:
Let teams focus on domain logic — not wiring, boilerplate, or brittle architecture.

You're invited to:

- ⭐ Explore the core repo: [bisslog-core-py](https://github.com/darwinhc/bisslog-core-py)

- 🔬 Try the [example microservice](https://github.com/darwinhc/company-data-registry.microservice)

- 🧵 Open issues, ask questions, or suggest improvements

- 🤝 Reach out if you want to adopt bisslog or contribute

I'm working on a short video walkthrough — follow [@darwinhc](https://github.com/darwinhc) on GitHub or check out the official docs to stay in the loop.

