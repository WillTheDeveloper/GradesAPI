# Grades API

This is an GraphQL (js) API that allows you to query grades. It's quite that simple.

## Query Example

Let's query A Levels. We pass in a subject because why not. Pass in the points that we achieved.

```
{
  ALevel(subject: "Math", point: 50)
}
```

Then we will get returned a string (for now) that states our grade.

```
{
  "data": {
    "ALevel": "You got A for Math"
  }
}
```

## Installation

This command will start the server:

```shell
node server.js
```

## Documentation

[Docs can be found here.](https://github.com/WillTheDeveloper/GradesAPI/wiki/Documentation) *Will be moved to web based docs in the future.*

## Qualifications to be covered

- [X] A Levels
- [ ] BTEC NQF
- [ ] BTEC QCF
- [ ] BTEC RQF
- [ ] Cambridge PREU
- [ ] Core Maths
- [ ] OCR Cambridge Technical
- [ ] T Levels
- [ ] AQA Technicals
- [ ] Extended Project
