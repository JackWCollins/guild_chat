import * as actions from '../../bundles/actions/guildChatActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('login should return the userId and userName', () => {
    expect(actions.login(123, "Jack")).toMatchSnapshot();
  });

  // This is testing an action that is using `thunk`.
  // Test for both actions when the mock HTTP request is returned.
  it('loadConversations should load the user conversations', () => {

    fetch.mockResponse(JSON.stringify(
      [
        { id: 1,
          messages: [
            {id: 10, body: "Cool!", user: {id: 4, first_name: "Jack", last_name: "Collins"}}
          ],
          users: [
            {id: 4, first_name: "Jack", last_name: "Collins"},
            {id: 5, first_name: "Annie", last_name: "Collins"}
          ]
        }
      ]
    ));

    const expectedActions = [
      { type: 'LOAD_CONVERSATIONS_REQUEST' },
      { type: 'LOAD_CONVERSATIONS_SUCCESS', conversations:
        [
          { id: 1,
            messages: [
              {id: 10, body: "Cool!", user: {id: 4, first_name: "Jack", last_name: "Collins"}}
            ],
            users: [
              {id: 4, first_name: "Jack", last_name: "Collins"},
              {id: 5, first_name: "Annie", last_name: "Collins"}
            ]
          }
        ]
      }
    ];
    const store = mockStore({ home: { conversations: [] } });

    return (
      store.dispatch(actions.loadConversations(4))
        .then( () => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    );
  });
});
