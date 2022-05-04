import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v4 } from 'uuid';

// This service replaces the HttpClient module's HttpBackend and
// simulates the behavior of a REST-like backend.
// see: https://github.com/angular/in-memory-web-api/blob/master/README.md

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: v4(),
        text: 'hey',
        completed: false,
        created: new Date('11/07/1917'),
      },
      {
        id: v4(),
        text: 'ho',
        completed: true,
        created: new Date('05/05/1789'),
      },
      {
        id: v4(),
        text: "let's go",
        completed: false,
        created: new Date('08/21/1791'),
      },
    ];

    return { todos };
  }

  genId() {
    return v4();
  }
}
