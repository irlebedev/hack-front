export interface ICard {
  title: string,
  dateEnd: string,
  descr: string,
  status: number,
}

export interface IEmployees {
  id: string,
  date: string,
  customer: string,
  direction: string,
  status: number,
  goals: IGoals[]
}

export interface IGoals {
  id: string,
  name: string,
  priority: string,
  done: boolean,
  steps: ISteps[]
}

export interface ISteps {
  id: string,
  order: number,
  completionDate: string,
  expectedResult: string,
  done: boolean,
  competenceId: number
}