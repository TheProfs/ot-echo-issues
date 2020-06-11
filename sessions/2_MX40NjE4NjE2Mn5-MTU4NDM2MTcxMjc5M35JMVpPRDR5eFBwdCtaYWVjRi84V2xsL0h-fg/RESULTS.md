## Results

Show a *double subscription* error on
stream: `c459e893-2db7-49d8-821c-b26808559438`.

The offending user is on Firefox (Win 10), and the 2nd subscription event
is preceded by:

This could explain echo issues.

```js
{ '2020-05-20 19:45:44':
   [ { user: 'User 2',
       streamId: '99dab0f7-07b2-469f-8633-5832046f8419',
       date: '2020-05-20 19:45:44',
       subscribers: [ { user: 'User 1', date: '2020-05-20 19:46:01' } ],
       destroyed: '2020-05-20 20:15:48' } ],
  '2020-05-20 19:45:54':
   [ { user: 'User 1',
       streamId: '8530e676-f810-4cde-99f3-0113b889b19a',
       date: '2020-05-20 19:45:54',
       subscribers: [ { user: 'User 2', date: '2020-05-20 19:46:01' } ],
       destroyed: '2020-05-20 20:16:12' } ],
  '2020-05-27 19:45:02':
   [ { user: 'User 3',
       streamId: '6bbe15fc-2a8b-4d34-889b-1c5328377dda',
       date: '2020-05-27 19:45:02',
       subscribers: [ { user: 'User 1', date: '2020-05-27 19:45:33' } ],
       destroyed: '2020-05-27 19:55:06' } ],
  '2020-05-27 19:45:29':
   [ { user: 'User 1',
       streamId: 'c459e893-2db7-49d8-821c-b26808559438',
       date: '2020-05-27 19:45:29',
       subscribers:
        [ { user: 'User 3', date: '2020-05-27 19:45:35' },
          { user: 'User 3', date: '2020-05-27 19:55:16' } ],
       destroyed: '2020-05-27 20:18:50' } ],
  '2020-05-27 19:55:14':
   [ { user: 'User 3',
       streamId: '9959abfe-8cd6-4cd4-885c-f9abc874a0e8',
       date: '2020-05-27 19:55:14',
       subscribers: [ { user: 'User 1', date: '2020-05-27 19:55:17' } ],
       destroyed: '2020-05-27 20:18:48' } ],
  '2020-06-03 19:43:23':
   [ { user: 'User 4',
       streamId: 'b123f7f7-6436-432f-960b-5f9013971a2f',
       date: '2020-06-03 19:43:23',
       subscribers: [ { user: 'User 1', date: '2020-06-03 19:44:05' } ],
       destroyed: '2020-06-03 20:16:07' } ],
  '2020-06-03 19:44:02':
   [ { user: 'User 1',
       streamId: 'a08ed2b7-804b-4e3d-a27a-f91f63928190',
       date: '2020-06-03 19:44:02',
       subscribers: [ { user: 'User 4', date: '2020-06-03 19:44:08' } ],
       destroyed: '2020-06-03 20:16:07' } ] }
```
