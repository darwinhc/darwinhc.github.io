---
title: "Bisslog Adapter Catalog: Organized by Purpose"
date: 2025-06-06
permalink: "/bisslog/adapter-catalog/"
---

The `bisslog` ecosystem supports clean, sustainable service architecture through the use of adapters that encapsulate infrastructure concerns. These adapters enable integration with external systems while preserving separation from core business logic.

Below is the current catalog of available, in-development, and planned adapters, grouped by their architectural purpose.

---


## 🧩 Entry Point Adapters

Using this kind of adapters requires `bisslog-schema` to be able of start the applications.

| Name               | Purpose                               | Status        |
|--------------------|---------------------------------------|---------------|
| `bisslog-flask`    | HTTP entrypoint using Flask.          | ✅ Available   |
| `bisslog-fastapi`  | HTTP entrypoint using FastAPI.        | 🧭 Planned     |
| `bisslog-aws-lambda-py` | AWS Lambda handlers for multiple triggers. | ✅ Available   |
| `bisslog-azure-functions-py`    | Azure functions handlers for multiple triggers. | 🧭 Planned    |

---

## 🗄️ Database Adapters

| Name               | Purpose                                           | Status        |
|--------------------|---------------------------------------------------|---------------|
| `bisslog-pymongo`  | MongoDB access using PyMongo.                     | ✅ Available   |
| `bisslog-sqlalchemy` | Relational database support via SQLAlchemy.     | 🧭 Planned |
| `bisslog-dynamodb` | Access to DynamoDB (NoSQL).                       | 🧭 Planned     |
| `bisslog-supabase-py` | Access to Supabase.                       | 🧭 Planned     |

---

## 📤 Publisher / Consumer Adapters

| Name                 | Purpose                                                             | Status        |
|----------------------|---------------------------------------------------------------------|---------------|
| `bisslog-aws-lambda-py` | Event consumers and HTTP/WebSocket triggers for AWS Lambda.     | ✅ Available   |
| `bisslog-rabbitmq-pika`     | Message publishing and consumption from Rabbit MQ queues.         | 🚧 In Development |
| `bisslog-kafka`       | Integration with Apache Kafka for pub/sub messaging.               | 🧭 Planned     |

---

## 🔔 Notifier Adapters

| Name              | Purpose                                     | Status        |
|-------------------|---------------------------------------------|---------------|
| `bisslog-ses`     | Email sending via Amazon SES.              | 🧭 Planned |
| `bisslog-sms`     | SMS notifications via an external service. | 🧭 Planned     |

---

## 📁 File Storage Adapters

| Name          | Purpose                                  | Status        |
|---------------|------------------------------------------|---------------|
| `bisslog-ftp`  | File upload and download via FTP. | 🧭 Planned     |


---

## Contributing

If you'd like to suggest a new adapter or contribute to one in progress, feel free to open an issue or a pull request in the central repository:

👉 [bisslog-core-py on GitHub](https://github.com/darwinhc/bisslog-core-py)

Together, we can continue expanding a sustainable and composable ecosystem for backend services.

---
