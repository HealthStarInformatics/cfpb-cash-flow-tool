export const exampleMonthlyData = {
  "October 2019": {
    startingBalance: {
      checking: 0,
      prepaid: 0,
      other: 0,
      total: 50000,
      startDay: 4
    },
    incomes: {
      "1": {
        id: "1",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 185000,
        recurring: true,
        date: "Saturday, October 5, 2019"
      },
      "2": {
        id: "2",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 185000,
        recurring: true,
        date: "Thursday, October 24, 2019"
      }
    },
    expenses: {
      "2": {
        id: "2",
        type: { value: "rent", label: "Rent or mortgage" },
        name: "Apt. Rent",
        amount: 170050,
        recurring: true,
        date: "Tuesday, October 15, 2019"
      },
      "3": {
        id: "3",
        type: { value: "savings", label: "Savings" },
        name: "for car",
        amount: 20000,
        recurring: true,
        date: "Tuesday, October 15, 2019"
      },
      "4": {
        id: "4",
        type: { value: "savings", label: "Savings" },
        name: "Holiday Gifts",
        amount: 25,
        recurring: true,
        date: "Tuesday, October 15, 2019"
      }
    }
  },
  "November 2019": {
    startingBalance: {
      checking: 0,
      prepaid: 0,
      other: 0,
      total: -50,
      startDay: null
    },
    incomes: {
      "1": {
        id: "1",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 110050,
        recurring: true,
        date: "Friday, November 15, 2019"
      }
    },
    expenses: {
      "2": {
        id: "2",
        type: { value: "rent", label: "Rent or mortgage" },
        name: "Apt. Rent",
        amount: 100050,
        recurring: true,
        date: "Tuesday, November 5, 2019"
      }
    }
  }
};
