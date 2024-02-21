# Backend API Documentation

## Navigation Links

- [Forum List](#forum-list)
- [News List](#news-list)
- [News Comments List](#news-comments-list)
- [User List](#user-list)
- [Sign Up](#sign-up)
- [Sign In](#sign-in)
- [Get new access token](#get_new_access_token)

---

## Forum List

### Route
- `api/forum`

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
- `api/news`

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

## Sign Up

### Route
- `api/auth/signup`

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
    "access_token": "JWT_TOKEN",
    "refresh_token": "JWT_TOKEN"
}
```

---

## Sign In

### Route
- `api/signin`

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
    "access_token": "JWT_TOKEN",
    "refresh_token": "JWT_TOKEN"
}
```

---

---

## Get new access token

### Route
- `api/auth/signin/access-token`

### Description
- Update current access token.

### Method
- POST

### Expected Input
```json
{
    "access_token": "JWT_TOKEN",
    "refresh_token": "JWT_TOKEN"
}
```

### Expected Output
```json
{
    "access_token": "JWT_TOKEN"
}
```

---
