const root = document.getElementById("root");

function Button({ title, onClick, icon = null, type = "default" }) {
  const button = document.createElement("button");

  if (icon) {
    button.textContent = title + " " + icon;
  } else {
    button.textContent = title;
  }

  button.onclick = onClick;

  if (type === "default") {
    button.classList.add("button-default");
  } else if (type === "outline") {
    button.classList.add("button-outline");
  } else if (type === "destructive") {
    button.classList.add("button-default-destructive");
  } else if (type === "destructive-outline") {
    button.classList.add("button-outline-destructive");
  }

  return button;
}

const lista = [
  {
    id: 1,
    matricula: "1231",
  },
  {
    id: 2,
    matricula: "1234",
  },
  {
    id: 3,
    matricula: "1235",
  },
];

function Item({ matricula, id, onDelete }) {
  const li = document.createElement("li");
  li.textContent = matricula;
  li.classList.add("item");
  li.appendChild(
    Button({
      title: "Remover",
      onClick: () => {
        //DELETE pelo id
        if (matricula > 10) {
          onDelete(id);
        }
      },
      type: "destructive",
    })
  );
  return li;
}

function List({ listaDeUsuarios }) {
  const ul = document.createElement("ul");
  listaDeUsuarios.forEach((user) => {
    ul.appendChild(
      Item({
        id: user.id,
        matricula: user.matricula,
        onDelete: (id) => {
          console.log(id);
        },
      })
    );
  });
  return ul;
}

function page() {
  root.appendChild(
    Item({
      id: "Teste",
      matricula: "123",
      onDelete: (id) => {
        console.log(id);
      },
    })
  );
}

page();
