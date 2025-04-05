# NX and Storybook Integration Issue

## Project Overview
This project demonstrates a basic Angular standalone configuration with a Storybook app hosted in a library under `projects/sb`.

## Issue Description
While the development server works without issues:
```
nx storybook sb
```

Building Storybook fails with the following error:
```
Daemon process terminated and closed the connection
```

Checking the NX logs reveals:
```
Error: The externalDependency 'storybook' for 'sb:build-storybook' could not be found
```

## Root Cause
The issue is caused by excluding the `package-lock.json` file from git tracking in the `.gitignore` file.

## Solution
Comment out or remove the `package-lock.json` entry in your `.gitignore` file:

```diff
# From
package-lock.json

# To
# package-lock.json
```

After making this change, the `nx build-storybook sb` command should work correctly.


