const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo', () => {
  test('return async value', async () => {
    const result = await Ajax.echo('some data');
    expect(result).toBe('some data');
  });

  test('return promise resolved value', () => {
    return Ajax.echo('some data').then(result => {
      expect(result).toBe('some data');
    });
  });

  test('return promise rejected promise', () => {
    return Ajax.echo().catch(result => {
      expect(result).toBeInstanceOf(Error);
    });
  });

  test('return async error', async () => {
    try {
      return await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe('no data');
    }
  });
});

describe('Ajax: get', () => {
  let response, todos;

  beforeEach(() => {
    todos = [
      { id: 1, title: 'todo 1', completed: false },
      { id: 2, title: 'todo 2', completed: false },
    ];
    response = {
      data: todos,
    };
  });

  test('should return backend data', () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then(data => {
      expect(data).toEqual(todos);
    });
  });
});
