const Line = ({linesOfThisMantra}) => {
  return (
    <div>
        {
          linesOfThisMantra.map(line => {
            return (
              <div key={line.id} className="todo-item">
                <p>{line.text}</p>
              </div>
            );
          })
        }
    </div>
  );
};