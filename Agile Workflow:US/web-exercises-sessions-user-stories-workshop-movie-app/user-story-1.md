# Title

Enhancing Data Reliability and Freshness in Movie Listing App

## Value Proposition

As a User of the app, <br>
I want to always access an up-to-date list of movies, <br>
so that I can stay informed even if there are technical issues in the backend. <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- [ ] The app should display movies whose data is no more than 24 hours old.
- [ ] If the main data source fails, the app should switch to a backup data source.
- [ ] Users should be informed about the data fetching status. ("Using older data")
- [ ] The app should automatically try to fetch the latest data every 2 minutes if the first attempt fails.

## Tasks

- [ ] Develop a system within the app that regularly checks for the newest movie data every 24 hours.
- [ ] Switch to a secondary data source if the primary one fails.
- [ ] Display messages about data update status.
- [ ] Implement logic that automatically refresh the data every 2 minutes. (maybe useEffect)
