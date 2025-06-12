---
title: 🧩 Guide to Creating Database Adapters in bisslog
layout: post
date: 2025-06-06
permalink: /bisslog/database-adapters-guide/
---


<p>
  <img src="/assets/img/brand/bisslog-logo-imagotipo.png" alt="bisslog logo" width="160"/>
</p>

---

This guide shows how to implement database adapters in `bisslog`-based projects using the Ports and Adapters approach to build sustainable and decoupled architectures.

---

## 📁 Project Structure

```bash
src/
├── domain/
│   └── model/
│       └── schema.py
├── infra/
│   └── database/
│       ├── schema_division.py              # Port
│       └── implementations/
│           ├── vanilla_cache/
│           │   ├── schema_vanilla_cache_division.py
│           │   ├── stores_vanilla_cache_division.py
│           │   └── schema_def_version_vanilla_cache_div.py
│           └── pymongo/
│               └── schema_pymongo_division.py
```

---

## 🔌 Defining the Port (Division)

The port acts as an interface between your business logic and the data layer. It defines what operations are required, not how they are implemented.

```python
# schema_division.py

from abc import ABC, abstractmethod
from typing import Optional, List
from src.domain.model.schema import Schema

class SchemaDivision(ABC):
    @abstractmethod
    def get_schema(self, schema_keyname: str) -> Optional[Schema]: ...

    @abstractmethod
    def get_schemas(self, params: dict) -> List[Schema]: ...

    @abstractmethod
    def create_schema(self, schema: Schema): ...
```

---

## 🍃 Implementing an Adapter (Example: PyMongo)

Concrete adapters live in `infra/database/implementations`.

```python
# schema_pymongo_division.py

from dataclasses import asdict
from typing import Hashable, Optional, List
from bisslog_pymongo import BasicPymongoHelper, bisslog_exc_mapper_pymongo
from src.domain.model.schema import Schema
from src.infra.database.schema_division import SchemaDivision

class SchemaMongoDivision(SchemaDivision, BasicPymongoHelper):
    col = "schemas"

    @bisslog_exc_mapper_pymongo
    def get_schema(self, schema_keyname: str) -> Optional[Schema]:
        res = self.get_collection(self.col).find_one({"schema_keyname": schema_keyname})
        return self.stringify_identifier(res)

    @bisslog_exc_mapper_pymongo
    def get_schemas(self, params: dict) -> List[Schema]:
        res = self.get_collection(self.col).find(params)
        return self.stringify_list_identifier(res)

    @bisslog_exc_mapper_pymongo
    def create_schema(self, schema: Schema) -> Hashable:
        res = self.get_collection(self.col).insert_one(asdict(schema))
        return res.inserted_id
```

---

## 🔧 Registering Adapters with `bisslog`

Once your adapters are implemented, register them using `bisslog`'s adapter registry to make them available across the application:

```python
from bisslog import bisslog_db as db
from src.infra.database.implementations.vanilla_cache import (
    StoresVanillaCacheDivision,
    SchemaVanillaCacheDivision,
    SchemaDefVersionVanillaCacheDiv
)

db.register_adapters(
    stores=StoresVanillaCacheDivision(),
    schema=SchemaVanillaCacheDivision(),
    schema_version=SchemaDefVersionVanillaCacheDiv()
)
```

This enables dynamic port resolution and decouples domain logic from infrastructure.

---

## ✅ Best Practices

- **Ports define contracts** in `infra/database/`, and should be pure abstract classes.
- **Adapters live in subfolders like `vanilla_cache` or `pymongo`**.
- **Use helper classes** like `BasicPymongoHelper` to avoid duplicating logic.
- **Decorators** like `@bisslog_exc_mapper_pymongo` provide consistent tracing and error mapping.

---

## 🧪 Testing Strategies

**Unit testing** should use mock or in-memory adapters.

```python
from src.infra.database.implementations.mock.mock_schema_division import MockSchemaDivision
from src.domain.model.schema import Schema

def test_create_and_get_schema():
    repo = MockSchemaDivision()
    schema = Schema(schema_keyname="x", fields={"f": "str"})
    repo.create_schema(schema)
    assert repo.get_schema("x") is not None
```

**Integration testing** can use the real adapter and a test database.

---

## 📚 Additional Resources

- [bisslog-core-py](https://github.com/darwinhc/bisslog-core-py)
- [bisslog-pymongo](https://github.com/darwinhc/bisslog-pymongo)
- [PyMongo Documentation](https://pymongo.readthedocs.io/)
- [Guide to Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)

---

With this guide, you can structure your database adapters in a clean, scalable, and `bisslog`-compliant way.