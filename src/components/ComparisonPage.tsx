export default function ComparisonPage() {
    return (
      <>
        <h1>Zustand vs Redux vs Context</h1>
        <p>
        Context API is built into React and ideal for simple global state needs, but lacks advanced features like middleware and devtools. Redux, while powerful and extensible with tools like middleware and devtools, comes with significant boilerplate and a steeper learning curve. Zustand offers a minimal API with built-in async support, optional devtools, and less setup, making it a lightweight alternative for managing state.
        </p>
        <p>
        This table summarizes key differences to help you choose the right solution based on complexity, scalability, and developer experience.
        </p>
  
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Context</th>
                <th>Redux</th>
                <th>Zustand</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boilerplate</td>
                <td>Medium</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Global state</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Async logic</td>
                <td>Manual</td>
                <td>Thunks/Sagas</td>
                <td>Built-in</td>
              </tr>
              <tr>
                <td>Devtools</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅ (optional)</td>
              </tr>
              <tr>
                <td>Middleware</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Learning curve</td>
                <td>Low–Med</td>
                <td>High</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  