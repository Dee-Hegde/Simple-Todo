export const cardsData = [
        { name: "total tasks" },
        { name: "Completed tasks" },
        { name: "Inprogress tasks" }
  ];
  export const specialCharactersCheck = (name) => {
      let nameformat = /^[A-Za-z0-9]+$/;
      return nameformat.test(name);
    };