import { randomInteger, IEmployees } from "../";

export const createMockEmployees: (count: number) => IEmployees[] =
  (count: number) =>
    Array(count)
      .fill(0)
      .reduce(
        (cardList) =>
          cardList.concat(
            {
              id: `${randomInteger(0, 50)}`,
              date: new Date().toLocaleString("ru", { month: "numeric", day: "numeric" }),
              customer: Math.random() < 0.1
              ? "Сергеев Александр Григорьевич"
              : Math.random() < 0.2
              ? "Алексеева Анна Григорьевна"
              : Math.random() < 0.3
              ? "Константинопольский Константин Константинович"
              : Math.random() < 0.4
              ? "Иванов Дмитрий Александрович"
              : Math.random() < 0.5
              ? "Минин Владилен Владимирович"
              : Math.random() < 0.6
              ? "Захарова Анастасия Витальевна"
              : Math.random() < 0.7
              ? "Мячина Анна Григорьевна"
              : Math.random() < 0.8
              ? "Грозный Иван Васильевич"
              : "Петров Александр Тарасович",
              direction: Math.random() < 0.1
              ? "Frontend"
              : Math.random() < 0.2
              ? "Backend"
              : Math.random() < 0.3
              ? "QA"
              : Math.random() < 0.4
              ? "SDET"
              : "Mobile", 
              status: randomInteger(0, 2),
              goals: [
                {
                  id: `${randomInteger(0, 500)}`,
                  name: "Цель 1",
                  priority: "LOW",
                  done: false,
                  steps: [
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },                  
                  ]
                },
                {
                  id: `${randomInteger(0, 500)}`,
                  name: "Цель 2",
                  priority: "LOW",
                  done: false,
                  steps: [
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },                  
                  ]
                },
                {
                  id: `${randomInteger(0, 500)}`,
                  name: "Цель 3",
                  priority: "LOW",
                  done: false,
                  steps: [
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },
                    {
                      id: `${randomInteger(0, 500)}`,
                      order: 1,
                      completionDate: "2021-09-12T09:47:41.904",
                      expectedResult: "string",
                      done: false,
                      competenceId: null
                    },                  
                  ]
                },
              ]
            }
          ), []);