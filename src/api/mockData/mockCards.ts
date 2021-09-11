import { randomInteger, ICard } from '../';

export const createMockCards: (count: number, isActive?: boolean) => ICard[] =
  (count: number, isActive?: boolean) =>
    Array(count)
      .fill(0)
      .reduce(
        (cardList) =>
          cardList.concat({
            id: `${randomInteger(0, 50)}`,
            title: "Название ИПР",
            dateEnd: new Date().toLocaleString("ru", { month: 'numeric', day: "numeric" }),
            descr: "Описание ИПР",
            status: isActive ? 2 : randomInteger(0, 1)
          }
          ), []);