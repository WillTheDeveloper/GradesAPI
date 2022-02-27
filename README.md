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
- [X] BTEC NQF
- [ ] BTEC QCF
- [ ] BTEC RQF
- [X] Cambridge PREU
- [X] Core Maths
- [ ] OCR Cambridge Technical
- [X] T Levels
- [X] AQA Technicals
- [X] Extended Project

## Concept

- The idea behind this API is to allow for all applications to be able to convert grades for all qualifications easily without having to implement their own version. The idea of the API is to do that job for them. The API should be able to take both grades and points and give the result that the person wants. The current UCAS api that we assume has grade calculations on, is not public facing so people cannot use it for applications of their own.
