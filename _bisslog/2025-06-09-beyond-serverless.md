---
title: "Beyond Serverless: Why `bisslog` Is Different"
layout: post
date: 2025-06-09
permalink: /bisslog/beyond-serverless-compatible/
---

<p>
  <img src="/assets/img/brand/bisslog-logo-imagotipo.png" alt="bisslog logo" width="160"/>
</p>

---

Modern backend systems often turn to serverless frameworks to build scalable microservices quickly. These platforms offer powerful tooling, flexible event-based execution, and seamless cloud integration. At the same time, serverless development can introduce challenges when business logic becomes entangled with infrastructure and deployment concerns.

That’s where **`bisslog`** complements and elevates the serverless experience — not by replacing it, but by refining **how we design backend systems from the inside out**.

---

## Not Against Serverless — But Beyond It

Serverless is an execution model. `bisslog` is an architectural mindset.

Most serverless frameworks center around:

- The **event** (e.g., HTTP request, queue message) as the unit of design.
- The **framework configuration** (`serverless.yml`, etc.) as the entry point to business logic.
- Application logic split across **routes, handlers, and plugins**.

These tools are powerful, but without careful structure, they can lead to fragile systems that are hard to test, reason about, or evolve.

---

## `bisslog`: Architecture-First, Still Serverless-Compatible

`bisslog` is a framework built on Clean Architecture and Hexagonal principles. Its core idea: treat infrastructure (including serverless runtimes) as **adapters**, and define your business behavior independently from execution context.

### ✅ Use Cases at the Center

All logic is encapsulated in **use cases** — isolated, portable units of behavior.

```python
@use_case
def insert_company_data(input_data):
    # validate schema
    # store data
    # log event
```

These use cases can be reused across AWS Lambda, Flask, or even CLI scripts.

---

### ✅ Declarative Metadata = Infrastructure as Output

With `bisslog`, developers write metadata describing the service and triggers. From this, `bisslog` can generate not only handler code but also infrastructure definitions like `serverless.yml`.

```yaml
use_cases:
  insert_company_data:
    triggers:
      - type: http
        options:
          method: post
          path: /company/data/{schema_keyname}
          mapper:
            path_query.schema_keyname: schema_keyname
            body: data
      - type: consumer
        options:
          queue: company_data_insertion.queue
          dead_letter_queue: company_data_insertion.dlq_queue
```

This makes `bisslog` compatible with serverless platforms **without locking business logic to them**.

---

### ✅ Cloud-Portable, Test-Friendly

Because the domain is cleanly separated:

- You can deploy the same code to AWS Lambda or run it in a container.
- You can change queues (e.g., from SQS to Kafka) with minimal impact.
- You can test use cases in isolation, without mocking infrastructure.

---

## Coexistence, Not Competition

`bisslog` doesn’t reject serverless — it embraces its flexibility while restoring architectural control. You can use `bisslog` to generate Lambda handlers, `serverless.yml`, or even Express-style routers — all driven by consistent, declarative metadata.

It's not about choosing between `bisslog` and serverless. It’s about using **both** effectively, ensuring business logic remains testable, portable, and future-proof.

---

### Try It Yourself

Explore the [`company-data-registry`](https://github.com/your-org/company-data-registry.microservice) example to see how you can define a microservice with `bisslog`, generate serverless-compatible code, and keep your architecture clean.

---

Want to understand the theory behind it? Read our article:

📄 [Towards Sustainable Microservice Architecture: A Discipline of Separation](https://github.com/your-org/bisslog-docs/articles/towards-sustainable-microservice-architecture.md)