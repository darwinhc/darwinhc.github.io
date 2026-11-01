---
title: "Bisslog isn't a dependency — it's a mindset"
date: 2025-06-06
permalink: /bisslog/mindset-vs-dependency/
---

<p>
  <img src="/assets/img/brand/bisslog-logo-imagotipo.png" alt="bisslog logo" width="160"/>
</p>

---

What if your architecture didn’t *depend* on a library — but simply followed a consistent way of thinking?

That’s the philosophy behind `bisslog`.

At its core, `bisslog` is **not a framework**, **not a runtime**, and **not a black box**.  
It’s an architecture-first toolkit that helps you write use cases in a clean, testable, framework-agnostic way — and **lets you evolve** your infrastructure freely.

---

## The Core Principle: Your Logic Comes First

The only thing `bisslog` *really* needs from you is this:

```python
from bisslog import use_case

@use_case
def create_user(...):
    ...
```


That’s it.

Your function can be plain. It can live in any folder. It doesn’t need to inherit anything. It doesn’t even need bisslog to run — the decorator simply wraps it with optional observability, input validation, and transaction logic.

More importantly:

> 🧠 Your use cases remain decoupled.

You can rename the decorator. Replace it. Remove it entirely. Your domain logic stays untouched.

## Not a Framework — A Guide

Traditional frameworks tell you what to do. `bisslog` tells you what to separate.

- Business logic stays in use cases

- Infrastructure is accessed via ports

- Entry points are adapters

- Communication happens via metadata

It’s hexagonal architecture made practical, with just enough tooling to support automation and deployment — but never forcing a particular runtime or dependency.

You could even copy-paste the core ideas and remove the library. `bisslog` doesn't mind.


## What About the Metadata?

In `bisslog`, metadata isn’t magic config — it’s intent made explicit.


```yaml
use_cases:
  registerUser:
    type: "create functional data"
    triggers:
      - type: "http"
        options:
          route: "/user"
          method: "post"
    external_interactions:
      - type_interaction: "database"
        operation: "register_user_on_db"
```

This YAML file becomes a **contract between architects and developers**:


- Architects define what the system should expose

- Developers focus on implementing the use case

- DevOps teams get consistent interfaces, observability, and automation

You’re not locked into this format. You can transform it, version it, or replace it entirely. But its value is in being a **shared language** across your team.



## Evolve Without Fear

With bisslog, you're not betting your system on a single tool. You’re betting on a structure that’s:

- ✅ **Testable** without mocks everywhere

- ✅ **Replaceable** at any layer (framework, infra, even language)

- ✅ **Scalable** without creating chaos

And because your code isn’t glued to HTTP frameworks, cloud platforms, or specific libraries — you can evolve parts of your system without rewriting everything.

Change SQS to Kafka? Swap Flask for Lambda? Replace Python with Rust in the core?

It’s all possible — because you’ve **separated concerns** from day one.




## TL;DR

- `bisslog` is a style, not a runtime

- Your use cases are just functions

- The `@use_case` decorator is optional glue, not a contract

- The metadata is just structure, not magic

- You can evolve your infra and language stack freely

## Start With the Mindset

You don’t have to adopt all the tooling at once.
Start by doing this:

- Write your use cases in their own module

- Keep them free of frameworks and I/O

- Add a `@use_case` decorator to signal intent

- Connect inputs and outputs via ports

Then, if you want, layer in metadata, code generation, adapters, and more.

Explore the core ideas in [bisslog-core-py](https://github.com/darwinhc/bisslog-core-py)
Or try a working example: [company-data-registry-microservice](https://github.com/darwinhc/company-data-registry.microservice).


> bisslog isn’t what runs your service.
It’s what keeps your service sane.