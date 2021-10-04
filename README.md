## Steps to reproduce

### Initial setup

1. `npm i @superfaceai/one-sdk`
1. `npx @superfaceai/cli install weather/current-city`
1. `npx @superfaceai/cli configure wttr-in --profile=weather/current-city`
1. Use the example code (see [index.js](index.js))
1. Create a new project at https://superface.ai/dashboard
1. Export the provided token
1. Run with `index.js`

### Issue reproduction

1. Block wttr.in in `/etc/hosts`:
   ```
   127.0.0.1 wttr.in
   ```
1. Rerun the application

- On Node.js v14.17.6: The error appears in the dashboard
- On Node.js v16.9.1: The failed perform isn't propagated
