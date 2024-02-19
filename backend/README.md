# Backend API Documentation

## Navigation Links

- [Forum List](#forum-list)
- [News List](#news-list)
- [News Comments List](#news-comments-list)
- [User List](#user-list)
- [Sign Up](#sign-up)
- [Sign In](#sign-in)

---

## Forum List

### Route
- `api/forum/`

### Description
- Get a list of forums.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "thread_id": 1,
        "creator": "string",
        "content": "string",
        "category": "string"
    },
    {
        "thread_id": 2,
        "creator": "string",
        "content": "string",
        "category": "string"
    },
]
```

---

## News List

### Route
- `api/news/`

### Description
- Get a list of news.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "news_id": 1,
        "date": "YYYY-MM-DD",
        "content_text": "string",
        "content_img": "string",
        "category": "string",
        "likes": 0
    },
    {
        "news_id": 2,
        "date": "YYYY-MM-DD",
        "content_text": "string",
        "content_img": "string",
        "category": "string",
        "likes": 0
    },
]
```

---

## News Comments List

### Route
- `api/news_comments/`

### Description
- Get a list of comments on news articles.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "comment_id": 1,
        "author_name": "string",
        "author_img": "string",
        "date": "YYYY-MM-DD",
        "content": "string"
    },
    {
        "comment_id": 2,
        "author_name": "string",
        "author_img": "string",
        "date": "YYYY-MM-DD",
        "content": "string"
    },
]
```

---

## User List

### Route
- `api/users/`

### Description
- Get a list of users.

### Method
- GET

### Expected Input
- None

### Expected Output
```json
[
    {
        "id": 1,
        "email": "user@example.com",
        "username": "string",
        "password": "string",
        "info": "string",
        "role": "user",
        "active": true,
        "profile_img": "string"
    },
    {
        "id": 2,
        "email": "admin@example.com",
        "username": "string",
        "password": "string",
        "info": "string",
        "role": "admin",
        "active": true,
        "profile_img": "string"
    },
]
```

---

## Sign Up

### Route
- `api/signup/`

### Description
- Create a new user account.

### Method
- POST

### Expected Input
```json
{
    "username": "string",
    "password": "string",
    "email": "user@example.com"
}
```

### Expected Output
```json
{
    "token": "JWT_TOKEN"
}
```

---

## Sign In

### Route
- `api/signin/`

### Description
- Authenticate and sign in a user.

### Method
- POST

### Expected Input
```json
{
    "username": "string",
    "password": "string"
}
```

### Expected Output
```json
{
    "valid": "bool",
    "token": "JWT_TOKEN",
    "user_id": "int"
}
```

---
