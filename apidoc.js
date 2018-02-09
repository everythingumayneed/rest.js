/**,
 * Authorization
 * @namespace Authorization
 */


/**
 * @api {GET} /authorizations/:id get
 * @apiName get
 * @apiDescription Get a single authorization.
 * @apiGroup Authorization
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.authorization.get({id})
 * @apiExample {js} Promise
 * octokit.authorization.get({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.get({id}, (error, result) => {})
 */


/**
 * @api {POST} /authorizations create
 * @apiName create
 * @apiDescription Create a new authorization.
 * @apiGroup Authorization
 *
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {string} [client_secret]  The 40 character OAuth app client secret for which to create the token.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint})
 * @apiExample {js} Promise
 * octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}, (error, result) => {})
 */


/**
 * @api {PATCH} /authorizations/:id update
 * @apiName update
 * @apiDescription Update an existing authorization.
 * @apiGroup Authorization
 *
 * @apiParam {string} id  
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string[]} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {string[]} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint})
 * @apiExample {js} Promise
 * octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}, (error, result) => {})
 */


/**
 * @api {DELETE} /authorizations/:id delete
 * @apiName delete
 * @apiDescription Delete an authorization.
 * @apiGroup Authorization
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.authorization.delete({id})
 * @apiExample {js} Promise
 * octokit.authorization.delete({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.delete({id}, (error, result) => {})
 */


/**
 * @api {GET} /applications/:client_id/tokens/:access_token check
 * @apiName check
 * @apiDescription Check an authorization
 * @apiGroup Authorization
 *
 * @apiParam {string} access_token  OAuth token
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.check({access_token, client_id})
 * @apiExample {js} Promise
 * octokit.authorization.check({access_token, client_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.check({access_token, client_id}, (error, result) => {})
 */


/**
 * @api {POST} /applications/:client_id/tokens/:access_token reset
 * @apiName reset
 * @apiDescription Reset an authorization
 * @apiGroup Authorization
 *
 * @apiParam {string} access_token  OAuth token
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.reset({access_token, client_id})
 * @apiExample {js} Promise
 * octokit.authorization.reset({access_token, client_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.reset({access_token, client_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /applications/:client_id/tokens/:access_token revoke
 * @apiName revoke
 * @apiDescription Revoke an authorization for an application
 * @apiGroup Authorization
 *
 * @apiParam {string} access_token  OAuth token
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.revoke({access_token, client_id})
 * @apiExample {js} Promise
 * octokit.authorization.revoke({access_token, client_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.revoke({access_token, client_id}, (error, result) => {})
 */


/**
 * @api {GET} /applications/grants getGrants
 * @apiName getGrants
 * @apiDescription List your grants.
 * @apiGroup Authorization
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.getGrants({page, per_page})
 * @apiExample {js} Promise
 * octokit.authorization.getGrants({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.getGrants({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /applications/grants/:id getGrant
 * @apiName getGrant
 * @apiDescription Get a single grant.
 * @apiGroup Authorization
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.getGrant({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.authorization.getGrant({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.getGrant({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {DELETE} /applications/grants/:id deleteGrant
 * @apiName deleteGrant
 * @apiDescription Delete a grant.
 * @apiGroup Authorization
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.authorization.deleteGrant({id})
 * @apiExample {js} Promise
 * octokit.authorization.deleteGrant({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.deleteGrant({id}, (error, result) => {})
 */


/**
 * @api {GET} /authorizations getAll
 * @apiName getAll
 * @apiDescription List your authorizations.
 * @apiGroup Authorization
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.getAll({page, per_page})
 * @apiExample {js} Promise
 * octokit.authorization.getAll({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.getAll({page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app.
 * @apiGroup Authorization
 *
 * @apiParam {string} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint})
 * @apiExample {js} Promise
 * octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.getOrCreateAuthorizationForApp({client_secret, client_id, scopes, note, note_url, fingerprint}, (error, result) => {})
 */


/**
 * @api {PUT} /authorizations/clients/:client_id/:fingerprint getOrCreateAuthorizationForAppAndFingerprint
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint.
 * @apiGroup Authorization
 *
 * @apiParam {string} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url})
 * @apiExample {js} Promise
 * octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_secret, client_id, fingerprint, scopes, note, note_url}, (error, result) => {})
 */


/**
 * @api {DELETE} /applications/:client_id/grants/:access_token revokeGrant
 * @apiName revokeGrant
 * @apiDescription Revoke a grant for an application
 * @apiGroup Authorization
 *
 * @apiParam {string} access_token  OAuth token
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} async/await
 * const result = await octokit.authorization.revokeGrant({access_token, client_id})
 * @apiExample {js} Promise
 * octokit.authorization.revokeGrant({access_token, client_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.authorization.revokeGrant({access_token, client_id}, (error, result) => {})
 */



/**,
 * Activity
 * @namespace Activity
 */


/**
 * @api {GET} /events getEvents
 * @apiName getEvents
 * @apiDescription List public events
 * @apiGroup Activity
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEvents({page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEvents({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEvents({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/events getEventsForRepo
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForRepo({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForRepo({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForRepo({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForRepoIssues({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForRepoNetwork({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/events getEventsForOrg
 * @apiName getEventsForOrg
 * @apiDescription List public events for an organization
 * @apiGroup Activity
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForOrg({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForOrg({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForOrg({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/received_events getEventsReceived
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsReceived({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsReceived({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsReceived({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/received_events/public getEventsReceivedPublic
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsReceivedPublic({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsReceivedPublic({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsReceivedPublic({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/events getEventsForUser
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/events/public getEventsForUserPublic
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForUserPublic({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForUserPublic({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForUserPublic({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/events/orgs/:org getEventsForUserOrg
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getEventsForUserOrg({username, org, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getEventsForUserOrg({username, org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getEventsForUserOrg({username, org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /feeds getFeeds
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup Activity
 *
 * @apiExample {js} async/await
 * const result = await octokit.activity.getFeeds({})
 * @apiExample {js} Promise
 * octokit.activity.getFeeds({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getFeeds({}, (error, result) => {})
 */


/**
 * @api {GET} /notifications getNotifications
 * @apiName getNotifications
 * @apiDescription Get all notifications for the current user, grouped by repository.
 * @apiGroup Activity
 *
 * @apiParam {boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {string} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getNotifications({all, participating, since, before})
 * @apiExample {js} Promise
 * octokit.activity.getNotifications({all, participating, since, before}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getNotifications({all, participating, since, before}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {string} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before})
 * @apiExample {js} Promise
 * octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before}, (error, result) => {})
 */


/**
 * @api {PUT} /notifications markNotificationsAsRead
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup Activity
 *
 * @apiParam {string} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} async/await
 * const result = await octokit.activity.markNotificationsAsRead({last_read_at})
 * @apiExample {js} Promise
 * octokit.activity.markNotificationsAsRead({last_read_at}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.markNotificationsAsRead({last_read_at}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} async/await
 * const result = await octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at})
 * @apiExample {js} Promise
 * octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}, (error, result) => {})
 */


/**
 * @api {GET} /notifications/threads/:id getNotificationThread
 * @apiName getNotificationThread
 * @apiDescription View a single notification thread.
 * @apiGroup Activity
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.getNotificationThread({id})
 * @apiExample {js} Promise
 * octokit.activity.getNotificationThread({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getNotificationThread({id}, (error, result) => {})
 */


/**
 * @api {PATCH} /notifications/threads/:id markNotificationThreadAsRead
 * @apiName markNotificationThreadAsRead
 * @apiDescription Mark a notification thread as read.
 * @apiGroup Activity
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.markNotificationThreadAsRead({id})
 * @apiExample {js} Promise
 * octokit.activity.markNotificationThreadAsRead({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.markNotificationThreadAsRead({id}, (error, result) => {})
 */


/**
 * @api {GET} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup Activity
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.checkNotificationThreadSubscription({id})
 * @apiExample {js} Promise
 * octokit.activity.checkNotificationThreadSubscription({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.checkNotificationThreadSubscription({id}, (error, result) => {})
 */


/**
 * @api {PUT} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiName setNotificationThreadSubscription
 * @apiDescription This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).
 * @apiGroup Activity
 *
 * @apiParam {string} id  
 * @apiParam {boolean} [subscribed]  Determines if notifications should be received from this thread
 * @apiParam {boolean} [ignored]  Determines if all notifications should be blocked from this thread
 * @apiExample {js} async/await
 * const result = await octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored})
 * @apiExample {js} Promise
 * octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.setNotificationThreadSubscription({id, subscribed, ignored}, (error, result) => {})
 */


/**
 * @api {DELETE} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiName deleteNotificationThreadSubscription
 * @apiDescription Delete a notification thread subscription.
 * @apiGroup Activity
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.deleteNotificationThreadSubscription({id})
 * @apiExample {js} Promise
 * octokit.activity.deleteNotificationThreadSubscription({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.deleteNotificationThreadSubscription({id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getStargazersForRepo({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getStargazersForRepo({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getStargazersForRepo({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/starred getStarredReposForUser
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {string=created,updated} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getStarredReposForUser({username, sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/starred getStarredRepos
 * @apiName getStarredRepos
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup Activity
 *
 * @apiParam {string=created,updated} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getStarredRepos({sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getStarredRepos({sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getStarredRepos({sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/starred/:owner/:repo checkStarringRepo
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.checkStarringRepo({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.checkStarringRepo({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.checkStarringRepo({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /user/starred/:owner/:repo starRepo
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.starRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.starRepo({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.starRepo({owner, repo}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/starred/:owner/:repo unstarRepo
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.unstarRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.unstarRepo({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.unstarRepo({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getWatchersForRepo({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getWatchersForRepo({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getWatchersForRepo({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/subscriptions getWatchedReposForUser
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getWatchedReposForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getWatchedReposForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getWatchedReposForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/subscriptions getWatchedRepos
 * @apiName getWatchedRepos
 * @apiDescription List repositories being watched by the authenticated user.
 * @apiGroup Activity
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getWatchedRepos({page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getWatchedRepos({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getWatchedRepos({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.activity.getRepoSubscription({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.activity.getRepoSubscription({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.getRepoSubscription({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} async/await
 * const result = await octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored})
 * @apiExample {js} Promise
 * octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/subscription unwatchRepo
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.unwatchRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.unwatchRepo({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.activity.unwatchRepo({owner, repo}, (error, result) => {})
 */



/**,
 * Gists
 * @namespace Gists
 */


/**
 * @api {GET} /gists/:id get
 * @apiName get
 * @apiDescription Get a single gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.get({id})
 * @apiExample {js} Promise
 * octokit.gists.get({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.get({id}, (error, result) => {})
 */


/**
 * @api {POST} /gists create
 * @apiName create
 * @apiDescription Create a gist
 * @apiGroup Gists
 *
 * @apiParam {json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {boolean} public  
 * @apiParam {string} [description]  
 * @apiExample {js} async/await
 * const result = await octokit.gists.create({files, public, description})
 * @apiExample {js} Promise
 * octokit.gists.create({files, public, description}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.create({files, public, description}, (error, result) => {})
 */


/**
 * @api {PATCH} /gists/:id edit
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiParam {json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {string} [description]  
 * @apiParam {string} [content]  Updated file contents.
 * @apiParam {string} [filename]  New name for this file.
 * @apiExample {js} async/await
 * const result = await octokit.gists.edit({id, files, description, content, filename})
 * @apiExample {js} Promise
 * octokit.gists.edit({id, files, description, content, filename}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.edit({id, files, description, content, filename}, (error, result) => {})
 */


/**
 * @api {PUT} /gists/:id/star star
 * @apiName star
 * @apiDescription Star a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.star({id})
 * @apiExample {js} Promise
 * octokit.gists.star({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.star({id}, (error, result) => {})
 */


/**
 * @api {DELETE} /gists/:id/star unstar
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.unstar({id})
 * @apiExample {js} Promise
 * octokit.gists.unstar({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.unstar({id}, (error, result) => {})
 */


/**
 * @api {POST} /gists/:id/forks fork
 * @apiName fork
 * @apiDescription Fork a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.fork({id})
 * @apiExample {js} Promise
 * octokit.gists.fork({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.fork({id}, (error, result) => {})
 */


/**
 * @api {DELETE} /gists/:id delete
 * @apiName delete
 * @apiDescription Delete a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.delete({id})
 * @apiExample {js} Promise
 * octokit.gists.delete({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.delete({id}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/gists getForUser
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup Gists
 *
 * @apiParam {string} username  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gists.getForUser({username, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.gists.getForUser({username, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getForUser({username, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /gists getAll
 * @apiName getAll
 * @apiDescription List the authenticated user's gists or if called anonymously, this will return all public gists
 * @apiGroup Gists
 *
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gists.getAll({since, page, per_page})
 * @apiExample {js} Promise
 * octokit.gists.getAll({since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getAll({since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /gists/public getPublic
 * @apiName getPublic
 * @apiDescription List all public gists
 * @apiGroup Gists
 *
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} async/await
 * const result = await octokit.gists.getPublic({since})
 * @apiExample {js} Promise
 * octokit.gists.getPublic({since}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getPublic({since}, (error, result) => {})
 */


/**
 * @api {GET} /gists/starred getStarred
 * @apiName getStarred
 * @apiDescription List the authenticated user's starred gists
 * @apiGroup Gists
 *
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} async/await
 * const result = await octokit.gists.getStarred({since})
 * @apiExample {js} Promise
 * octokit.gists.getStarred({since}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getStarred({since}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:id/:sha getRevision
 * @apiName getRevision
 * @apiDescription Get a specific revision of a gist
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gists.getRevision({id, sha})
 * @apiExample {js} Promise
 * octokit.gists.getRevision({id, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getRevision({id, sha}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:id/commits getCommits
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.getCommits({id})
 * @apiExample {js} Promise
 * octokit.gists.getCommits({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getCommits({id}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:id/star checkStar
 * @apiName checkStar
 * @apiDescription Check if a gist is starred
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.checkStar({id})
 * @apiExample {js} Promise
 * octokit.gists.checkStar({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.checkStar({id}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:id/forks getForks
 * @apiName getForks
 * @apiDescription List gist forks
 * @apiGroup Gists
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gists.getForks({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.gists.getForks({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getForks({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:gist_id/comments getComments
 * @apiName getComments
 * @apiDescription List comments on a gist
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  Id (SHA1 hash) of the gist.
 * @apiExample {js} async/await
 * const result = await octokit.gists.getComments({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.getComments({gist_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getComments({gist_id}, (error, result) => {})
 */


/**
 * @api {GET} /gists/:gist_id/comments/:id getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.getComment({gist_id, id})
 * @apiExample {js} Promise
 * octokit.gists.getComment({gist_id, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.getComment({gist_id, id}, (error, result) => {})
 */


/**
 * @api {POST} /gists/:gist_id/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.gists.createComment({gist_id, body})
 * @apiExample {js} Promise
 * octokit.gists.createComment({gist_id, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.createComment({gist_id, body}, (error, result) => {})
 */


/**
 * @api {PATCH} /gists/:gist_id/comments/:id editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {string} id  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.gists.editComment({gist_id, id, body})
 * @apiExample {js} Promise
 * octokit.gists.editComment({gist_id, id, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.editComment({gist_id, id, body}, (error, result) => {})
 */


/**
 * @api {DELETE} /gists/:gist_id/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.deleteComment({gist_id, id})
 * @apiExample {js} Promise
 * octokit.gists.deleteComment({gist_id, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gists.deleteComment({gist_id, id}, (error, result) => {})
 */



/**,
 * Gitdata
 * @namespace Gitdata
 */


/**
 * @api {GET} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getBlob({owner, repo, sha, page, per_page})
 * @apiExample {js} Promise
 * octokit.gitdata.getBlob({owner, repo, sha, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getBlob({owner, repo, sha, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/blobs createBlob
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} content  
 * @apiParam {string} encoding  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.createBlob({owner, repo, content, encoding})
 * @apiExample {js} Promise
 * octokit.gitdata.createBlob({owner, repo, content, encoding}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.createBlob({owner, repo, content, encoding}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getCommit({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.gitdata.getCommit({owner, repo, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getCommit({owner, repo, sha}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/commits createCommit
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} message  String of the commit message
 * @apiParam {string} tree  String of the SHA of the tree object this commit points to
 * @apiParam {string[]} parents  Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 * @apiParam {json} [author]  
 * @apiParam {json} [committer]  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer})
 * @apiExample {js} Promise
 * octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.createCommit({owner, repo, message, tree, parents, author, committer}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getCommitSignatureVerification({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.gitdata.getCommitSignatureVerification({owner, repo, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getCommitSignatureVerification({owner, repo, sha}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getReference({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.gitdata.getReference({owner, repo, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getReference({owner, repo, ref}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/refs getReferences
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getReferences({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.gitdata.getReferences({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getReferences({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/refs/tags getTags
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getTags({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.gitdata.getTags({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getTags({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/refs createReference
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected. NOTE: After creating the reference, on calling (get|update|delete)Reference, drop the leading 'refs/' when providing the 'ref' param.
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.createReference({owner, repo, ref, sha})
 * @apiExample {js} Promise
 * octokit.gitdata.createReference({owner, repo, ref, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.createReference({owner, repo, ref, sha}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {string} sha  
 * @apiParam {boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.updateReference({owner, repo, ref, sha, force})
 * @apiExample {js} Promise
 * octokit.gitdata.updateReference({owner, repo, ref, sha, force}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.updateReference({owner, repo, ref, sha, force}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.deleteReference({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.gitdata.deleteReference({owner, repo, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.deleteReference({owner, repo, ref}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getTag({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.gitdata.getTag({owner, repo, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getTag({owner, repo, sha}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/tags createTag
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag  String of the tag
 * @apiParam {string} message  String of the tag message
 * @apiParam {string} object  String of the SHA of the git object this is tagging
 * @apiParam {string} type  String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 * @apiParam {json} tagger  JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger})
 * @apiExample {js} Promise
 * octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getTagSignatureVerification({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.gitdata.getTagSignatureVerification({owner, repo, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getTagSignatureVerification({owner, repo, sha}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {boolean} [recursive]  
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.getTree({owner, repo, sha, recursive})
 * @apiExample {js} Promise
 * octokit.gitdata.getTree({owner, repo, sha, recursive}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.getTree({owner, repo, sha, recursive}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/trees createTree
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup Gitdata
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {string} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} async/await
 * const result = await octokit.gitdata.createTree({owner, repo, tree, base_tree})
 * @apiExample {js} Promise
 * octokit.gitdata.createTree({owner, repo, tree, base_tree}).then(result => {})
 * @apiExample {js} Callback
 * octokit.gitdata.createTree({owner, repo, tree, base_tree}, (error, result) => {})
 */



/**,
 * Integrations
 * @namespace Integrations
 */


/**
 * @api {GET} /app/installations getInstallations
 * @apiName getInstallations
 * @apiDescription List the app's installations. (In preview period. See README.)
 * @apiGroup Integrations
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.integrations.getInstallations({page, per_page})
 * @apiExample {js} Promise
 * octokit.integrations.getInstallations({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.integrations.getInstallations({page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /installations/:installation_id/access_tokens createInstallationToken
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup Integrations
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} [user_id]  The id of the user for whom the app is acting on behalf of.
 * @apiExample {js} async/await
 * const result = await octokit.integrations.createInstallationToken({installation_id, user_id})
 * @apiExample {js} Promise
 * octokit.integrations.createInstallationToken({installation_id, user_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.integrations.createInstallationToken({installation_id, user_id}, (error, result) => {})
 */


/**
 * @api {GET} /installation/repositories getInstallationRepositories
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation. (In preview period. See README.)
 * @apiGroup Integrations
 *
 * @apiParam {string} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} async/await
 * const result = await octokit.integrations.getInstallationRepositories({user_id})
 * @apiExample {js} Promise
 * octokit.integrations.getInstallationRepositories({user_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.integrations.getInstallationRepositories({user_id}, (error, result) => {})
 */


/**
 * @api {PUT} /installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup Integrations
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.integrations.addRepoToInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.integrations.addRepoToInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.integrations.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup Integrations
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.integrations.removeRepoFromInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.integrations.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.integrations.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})
 */



/**,
 * Apps
 * @namespace Apps
 */


/**
 * @api {GET} /app get
 * @apiName get
 * @apiDescription Get the authenticated GitHub App. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiExample {js} async/await
 * const result = await octokit.apps.get({})
 * @apiExample {js} Promise
 * octokit.apps.get({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.get({}, (error, result) => {})
 */


/**
 * @api {GET} /apps/:app_slug getForSlug
 * @apiName getForSlug
 * @apiDescription Get a single GitHub App. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} app_slug  The URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., https://github.com/settings/apps/:app_slug).
 * @apiExample {js} async/await
 * const result = await octokit.apps.getForSlug({app_slug})
 * @apiExample {js} Promise
 * octokit.apps.getForSlug({app_slug}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getForSlug({app_slug}, (error, result) => {})
 */


/**
 * @api {GET} /app/installations getInstallations
 * @apiName getInstallations
 * @apiDescription List the app's installations. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getInstallations({page, per_page})
 * @apiExample {js} Promise
 * octokit.apps.getInstallations({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getInstallations({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /app/installations/:installation_id getInstallation
 * @apiName getInstallation
 * @apiDescription Get a single installation. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} installation_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.getInstallation({installation_id})
 * @apiExample {js} Promise
 * octokit.apps.getInstallation({installation_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getInstallation({installation_id}, (error, result) => {})
 */


/**
 * @api {POST} /installations/:installation_id/access_tokens createInstallationToken
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} [user_id]  The id of the user for whom the app is acting on behalf of.
 * @apiExample {js} async/await
 * const result = await octokit.apps.createInstallationToken({installation_id, user_id})
 * @apiExample {js} Promise
 * octokit.apps.createInstallationToken({installation_id, user_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.createInstallationToken({installation_id, user_id}, (error, result) => {})
 */


/**
 * @api {GET} /installation/repositories getInstallationRepositories
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getInstallationRepositories({user_id})
 * @apiExample {js} Promise
 * octokit.apps.getInstallationRepositories({user_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getInstallationRepositories({user_id}, (error, result) => {})
 */


/**
 * @api {PUT} /installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.addRepoToInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.apps.addRepoToInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.removeRepoFromInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.apps.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/plans getMarketplaceListingPlans
 * @apiName getMarketplaceListingPlans
 * @apiDescription List all plans for your Marketplace listing. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getMarketplaceListingPlans({page, per_page})
 * @apiExample {js} Promise
 * octokit.apps.getMarketplaceListingPlans({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getMarketplaceListingPlans({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/plans getMarketplaceListingStubbedPlans
 * @apiName getMarketplaceListingStubbedPlans
 * @apiDescription List all stubbed plans for your Marketplace listing. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getMarketplaceListingStubbedPlans({page, per_page})
 * @apiExample {js} Promise
 * octokit.apps.getMarketplaceListingStubbedPlans({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getMarketplaceListingStubbedPlans({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/plans/:id/accounts getMarketplaceListingPlanAccounts
 * @apiName getMarketplaceListingPlanAccounts
 * @apiDescription List all GitHub accounts (user or organization) on a specific plan. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getMarketplaceListingPlanAccounts({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/plans/:id/accounts getMarketplaceListingStubbedPlanAccounts
 * @apiName getMarketplaceListingStubbedPlanAccounts
 * @apiDescription List all GitHub accounts (user or organization) on a specific stubbed plan. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/accounts/:id checkMarketplaceListingAccount
 * @apiName checkMarketplaceListingAccount
 * @apiDescription Check if a GitHub account is associated with any Marketplace listing. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.checkMarketplaceListingAccount({id})
 * @apiExample {js} Promise
 * octokit.apps.checkMarketplaceListingAccount({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.checkMarketplaceListingAccount({id}, (error, result) => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/accounts/:id checkMarketplaceListingStubbedAccount
 * @apiName checkMarketplaceListingStubbedAccount
 * @apiDescription Check if a stubbed GitHub account is associated with any Marketplace listing. (In preview period. See README.)
 * @apiGroup Apps
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.checkMarketplaceListingStubbedAccount({id})
 * @apiExample {js} Promise
 * octokit.apps.checkMarketplaceListingStubbedAccount({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.apps.checkMarketplaceListingStubbedAccount({id}, (error, result) => {})
 */



/**,
 * Issues
 * @namespace Issues
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number get
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.get({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.get({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.get({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues create
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  
 * @apiParam {string} [body]  
 * @apiParam {string} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {number} [milestone]  Milestone to associate this issue with.
 * @apiParam {string[]} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {string[]} [assignees]  Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} async/await
 * const result = await octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees})
 * @apiExample {js} Promise
 * octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/issues/:number edit
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} [title]  
 * @apiParam {string} [body]  
 * @apiParam {string} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {string=open,closed} [state=open]  open or closed
 * @apiParam {number} [milestone]  Milestone to associate this issue with.
 * @apiParam {string[]} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {string[]} [assignees]  Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} async/await
 * const result = await octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees})
 * @apiExample {js} Promise
 * octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/issues/:number/lock lock
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.lock({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.lock({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.lock({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.unlock({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.unlock({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.unlock({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {GET} /issues getAll
 * @apiName getAll
 * @apiDescription List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories
 * @apiGroup Issues
 *
 * @apiParam {string=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {string=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {string} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {string=created,updated,comments} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getAll({filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/issues getForUser
 * @apiName getForUser
 * @apiDescription List all issues across owned and member repositories for the authenticated user
 * @apiGroup Issues
 *
 * @apiParam {string=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {string=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {string} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {string=created,updated,comments} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getForUser({filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/issues getForOrg
 * @apiName getForOrg
 * @apiDescription List all issues for a given organization for the authenticated user
 * @apiGroup Issues
 *
 * @apiParam {string} org  
 * @apiParam {string=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {string=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {string} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {string=created,updated,comments} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues getForRepo
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [milestone]  
 * @apiParam {string=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {string} [assignee]  String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 * @apiParam {string} [creator]  The user that created the issue.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {string} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {string=created,updated,comments} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {string} [mentioned]  String User login.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned})
 * @apiExample {js} Promise
 * octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, per_page, labels, sort, direction, since, page, mentioned}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/assignees getAssignees
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getAssignees({owner, repo})
 * @apiExample {js} Promise
 * octokit.issues.getAssignees({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getAssignees({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} async/await
 * const result = await octokit.issues.checkAssignee({owner, repo, assignee})
 * @apiExample {js} Promise
 * octokit.issues.checkAssignee({owner, repo, assignee}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.checkAssignee({owner, repo, assignee}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string[]} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} async/await
 * const result = await octokit.issues.addAssigneesToIssue({owner, repo, number, assignees})
 * @apiExample {js} Promise
 * octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {json} body  
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeAssigneesFromIssue({owner, repo, number, body})
 * @apiExample {js} Promise
 * octokit.issues.removeAssigneesFromIssue({owner, repo, number, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.removeAssigneesFromIssue({owner, repo, number, body}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getComments({owner, repo, number, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getComments({owner, repo, number, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getComments({owner, repo, number, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=created,updated} [sort=created]  
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.issues.getComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.issues.createComment({owner, repo, number, body})
 * @apiExample {js} Promise
 * octokit.issues.createComment({owner, repo, number, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.createComment({owner, repo, number, body}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.issues.editComment({owner, repo, id, body})
 * @apiExample {js} Promise
 * octokit.issues.editComment({owner, repo, id, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.editComment({owner, repo, id, body}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.issues.deleteComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.deleteComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:issue_number/events getEvents
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} issue_number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getEvents({owner, repo, issue_number, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getEvents({owner, repo, issue_number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getEvents({owner, repo, issue_number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getEventsForRepo({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getEventsForRepo({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getEventsForRepo({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getEvent({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.issues.getEvent({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getEvent({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/labels getLabels
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getLabels({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getLabels({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getLabels({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/labels/:name getLabel
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getLabel({owner, repo, name})
 * @apiExample {js} Promise
 * octokit.issues.getLabel({owner, repo, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getLabel({owner, repo, name}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/labels createLabel
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiParam {string} color  6 character hex code, without a leading #.
 * @apiExample {js} async/await
 * const result = await octokit.issues.createLabel({owner, repo, name, color})
 * @apiExample {js} Promise
 * octokit.issues.createLabel({owner, repo, name, color}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.createLabel({owner, repo, name, color}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} oldname  The old name of the label.
 * @apiParam {string} name  The new name of the label.
 * @apiParam {string} color  6 character hex code, without a leading #.
 * @apiExample {js} async/await
 * const result = await octokit.issues.updateLabel({owner, repo, oldname, name, color})
 * @apiExample {js} Promise
 * octokit.issues.updateLabel({owner, repo, oldname, name, color}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.updateLabel({owner, repo, oldname, name, color}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteLabel({owner, repo, name})
 * @apiExample {js} Promise
 * octokit.issues.deleteLabel({owner, repo, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.deleteLabel({owner, repo, name}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getIssueLabels({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.getIssueLabels({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getIssueLabels({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string[]} labels  
 * @apiExample {js} async/await
 * const result = await octokit.issues.addLabels({owner, repo, number, labels})
 * @apiExample {js} Promise
 * octokit.issues.addLabels({owner, repo, number, labels}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.addLabels({owner, repo, number, labels}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeLabel({owner, repo, number, name})
 * @apiExample {js} Promise
 * octokit.issues.removeLabel({owner, repo, number, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.removeLabel({owner, repo, number, name}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string[]} labels  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} async/await
 * const result = await octokit.issues.replaceAllLabels({owner, repo, number, labels})
 * @apiExample {js} Promise
 * octokit.issues.replaceAllLabels({owner, repo, number, labels}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.replaceAllLabels({owner, repo, number, labels}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeAllLabels({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.removeAllLabels({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.removeAllLabels({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getMilestoneLabels({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.getMilestoneLabels({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getMilestoneLabels({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones getMilestones
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiParam {string=due_on,completeness} [sort=due_on]  due_on, completeness, default: due_on
 * @apiParam {string=asc,desc} [direction=asc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getMilestones({owner, repo, state, sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getMilestone({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.getMilestone({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getMilestone({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/milestones createMilestone
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiParam {string} [description]  
 * @apiParam {date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} async/await
 * const result = await octokit.issues.createMilestone({owner, repo, title, state, description, due_on})
 * @apiExample {js} Promise
 * octokit.issues.createMilestone({owner, repo, title, state, description, due_on}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.createMilestone({owner, repo, title, state, description, due_on}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} title  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiParam {string} [description]  
 * @apiParam {date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} async/await
 * const result = await octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on})
 * @apiExample {js} Promise
 * octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteMilestone({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.deleteMilestone({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.deleteMilestone({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:issue_number/timeline getEventsTimeline
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} issue_number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page})
 * @apiExample {js} Promise
 * octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.issues.getEventsTimeline({owner, repo, issue_number, page, per_page}, (error, result) => {})
 */



/**,
 * Migrations
 * @namespace Migrations
 */


/**
 * @api {POST} /orgs/:org/migrations startMigration
 * @apiName startMigration
 * @apiDescription Start a migration. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string[]} repositories  A list of arrays indicating which repositories should be migrated.
 * @apiParam {boolean} [lock_repositories=false]  Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false.
 * @apiParam {boolean} [exclude_attachments=false]  Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments})
 * @apiExample {js} Promise
 * octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/migrations getMigrations
 * @apiName getMigrations
 * @apiDescription Get a list of migrations. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getMigrations({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.migrations.getMigrations({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getMigrations({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/migrations/:id getMigrationStatus
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getMigrationStatus({org, id})
 * @apiExample {js} Promise
 * octokit.migrations.getMigrationStatus({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getMigrationStatus({org, id}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getMigrationArchiveLink({org, id})
 * @apiExample {js} Promise
 * octokit.migrations.getMigrationArchiveLink({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getMigrationArchiveLink({org, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.deleteMigrationArchive({org, id})
 * @apiExample {js} Promise
 * octokit.migrations.deleteMigrationArchive({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.deleteMigrationArchive({org, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/migrations/:id/repos/:repo_name/lock unlockRepoLockedForMigration
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiParam {string} repo_name  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name})
 * @apiExample {js} Promise
 * octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/import startImport
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} vcs_url  The URL of the originating repository.
 * @apiParam {string=subversion,git,mercurial,tfvc} [vcs]  The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @apiParam {string} [vcs_username]  If authentication is required, the username to provide to vcs_url.
 * @apiParam {string} [vcs_password]  If authentication is required, the password to provide to vcs_url.
 * @apiParam {string} [tfvc_project]  For a tfvc import, the name of the project that is being imported.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project})
 * @apiExample {js} Promise
 * octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/import getImportProgress
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getImportProgress({owner, repo})
 * @apiExample {js} Promise
 * octokit.migrations.getImportProgress({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getImportProgress({owner, repo}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/import updateImport
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [vcs_username]  The username to provide to the originating repository.
 * @apiParam {string} [vcs_password]  The password to provide to the originating repository.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password})
 * @apiExample {js} Promise
 * octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getImportCommitAuthors({owner, repo, since})
 * @apiExample {js} Promise
 * octokit.migrations.getImportCommitAuthors({owner, repo, since}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getImportCommitAuthors({owner, repo, since}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} author_id  The commit author id.
 * @apiParam {string} [email]  The new Git author email.
 * @apiParam {string} [name]  The new Git author name.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name})
 * @apiExample {js} Promise
 * octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}, (error, result) => {})
 */


/**
 * @api {PATCH} /:owner/:name/import/lfs setImportLfsPreference
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} name  
 * @apiParam {string} use_lfs  Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
 * @apiExample {js} async/await
 * const result = await octokit.migrations.setImportLfsPreference({owner, name, use_lfs})
 * @apiExample {js} Promise
 * octokit.migrations.setImportLfsPreference({owner, name, use_lfs}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.setImportLfsPreference({owner, name, use_lfs}, (error, result) => {})
 */


/**
 * @api {GET} /:owner/:name/import/large_files getLargeImportFiles
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getLargeImportFiles({owner, name})
 * @apiExample {js} Promise
 * octokit.migrations.getLargeImportFiles({owner, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.getLargeImportFiles({owner, name}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/import cancelImport
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.cancelImport({owner, repo})
 * @apiExample {js} Promise
 * octokit.migrations.cancelImport({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.migrations.cancelImport({owner, repo}, (error, result) => {})
 */



/**,
 * Misc
 * @namespace Misc
 */


/**
 * @api {GET} /codes_of_conduct getCodesOfConduct
 * @apiName getCodesOfConduct
 * @apiDescription List all codes of conduct. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getCodesOfConduct({})
 * @apiExample {js} Promise
 * octokit.misc.getCodesOfConduct({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getCodesOfConduct({}, (error, result) => {})
 */


/**
 * @api {GET} /codes_of_conduct/:key getCodeOfConduct
 * @apiName getCodeOfConduct
 * @apiDescription Get an code of conduct. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiParam {string} key  Ex: contributor_covenant
 * @apiExample {js} async/await
 * const result = await octokit.misc.getCodeOfConduct({key})
 * @apiExample {js} Promise
 * octokit.misc.getCodeOfConduct({key}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getCodeOfConduct({key}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/community/code_of_conduct getRepoCodeOfConduct
 * @apiName getRepoCodeOfConduct
 * @apiDescription Get the contents of a repository's code of conduct. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.misc.getRepoCodeOfConduct({owner, repo})
 * @apiExample {js} Promise
 * octokit.misc.getRepoCodeOfConduct({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getRepoCodeOfConduct({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /emojis getEmojis
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getEmojis({})
 * @apiExample {js} Promise
 * octokit.misc.getEmojis({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getEmojis({}, (error, result) => {})
 */


/**
 * @api {GET} /gitignore/templates getGitignoreTemplates
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getGitignoreTemplates({})
 * @apiExample {js} Promise
 * octokit.misc.getGitignoreTemplates({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getGitignoreTemplates({}, (error, result) => {})
 */


/**
 * @api {GET} /gitignore/templates/:name getGitignoreTemplate
 * @apiName getGitignoreTemplate
 * @apiDescription Get a single gitignore template
 * @apiGroup Misc
 *
 * @apiParam {string} name  The name of the .gitignore template to get e.g. 'C'
 * @apiExample {js} async/await
 * const result = await octokit.misc.getGitignoreTemplate({name})
 * @apiExample {js} Promise
 * octokit.misc.getGitignoreTemplate({name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getGitignoreTemplate({name}, (error, result) => {})
 */


/**
 * @api {GET} /licenses getLicenses
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getLicenses({})
 * @apiExample {js} Promise
 * octokit.misc.getLicenses({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getLicenses({}, (error, result) => {})
 */


/**
 * @api {GET} /licenses/:license getLicense
 * @apiName getLicense
 * @apiDescription Get an individual license. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiParam {string} license  Ex: /licenses/mit
 * @apiExample {js} async/await
 * const result = await octokit.misc.getLicense({license})
 * @apiExample {js} Promise
 * octokit.misc.getLicense({license}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getLicense({license}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/license getRepoLicense
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup Misc
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.misc.getRepoLicense({owner, repo})
 * @apiExample {js} Promise
 * octokit.misc.getRepoLicense({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getRepoLicense({owner, repo}, (error, result) => {})
 */


/**
 * @api {POST} /markdown renderMarkdown
 * @apiName renderMarkdown
 * @apiDescription Render an arbitrary Markdown document
 * @apiGroup Misc
 *
 * @apiParam {string} text  The Markdown text to render
 * @apiParam {string=markdown,gfm} [mode=markdown]  The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {string} [context]  The repository context. Only taken into account when rendering as `gfm`
 * @apiExample {js} async/await
 * const result = await octokit.misc.renderMarkdown({text, mode, context})
 * @apiExample {js} Promise
 * octokit.misc.renderMarkdown({text, mode, context}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.renderMarkdown({text, mode, context}, (error, result) => {})
 */


/**
 * @api {POST} /markdown/raw renderMarkdownRaw
 * @apiName renderMarkdownRaw
 * @apiDescription Render a Markdown document in raw mode
 * @apiGroup Misc
 *
 * @apiParam {string} data  Raw data to send as the body of the request
 * @apiExample {js} async/await
 * const result = await octokit.misc.renderMarkdownRaw({data})
 * @apiExample {js} Promise
 * octokit.misc.renderMarkdownRaw({data}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.renderMarkdownRaw({data}, (error, result) => {})
 */


/**
 * @api {GET} /meta getMeta
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getMeta({})
 * @apiExample {js} Promise
 * octokit.misc.getMeta({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getMeta({}, (error, result) => {})
 */


/**
 * @api {GET} /rate_limit getRateLimit
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup Misc
 *
 * @apiExample {js} async/await
 * const result = await octokit.misc.getRateLimit({})
 * @apiExample {js} Promise
 * octokit.misc.getRateLimit({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.misc.getRateLimit({}, (error, result) => {})
 */



/**,
 * Orgs
 * @namespace Orgs
 */


/**
 * @api {GET} /orgs/:org get
 * @apiName get
 * @apiDescription Get an organization
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.get({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.get({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.get({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {PATCH} /orgs/:org update
 * @apiName update
 * @apiDescription Edit an organization
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} [billing_email]  Billing email address. This address is not publicized.
 * @apiParam {string} [company]  The company name.
 * @apiParam {string} [email]  The publicly visible email address.
 * @apiParam {string} [location]  The location.
 * @apiParam {string} [name]  The shorthand name of the company.
 * @apiParam {string} [description]  The description of the company.
 * @apiParam {string=read,write,admin,none} [default_repository_permission=read]  Default permission level members have for organization repositories.
 * @apiParam {boolean} [members_can_create_repositories=true]  Toggles ability of non-admin organization members to create repositories.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories})
 * @apiExample {js} Promise
 * octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.update({org, billing_email, company, email, location, name, description, default_repository_permission, members_can_create_repositories}, (error, result) => {})
 */


/**
 * @api {GET} /organizations getAll
 * @apiName getAll
 * @apiDescription List all organizations
 * @apiGroup Orgs
 *
 * @apiParam {string} [since]  The integer ID of the last Organization that you've seen.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getAll({since, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getAll({since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getAll({since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/orgs getForUser
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup Orgs
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/members getMembers
 * @apiName getMembers
 * @apiDescription Members list
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string=all,2fa_disabled} [filter=all]  Filter members returned in the list.
 * @apiParam {string=all,admin,member} [role=all]  Filter members returned by their role.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getMembers({org, filter, role, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getMembers({org, filter, role, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getMembers({org, filter, role, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/members/:username checkMembership
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.checkMembership({org, username}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/members/:username removeMember
 * @apiName removeMember
 * @apiDescription Remove a member
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeMember({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeMember({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.removeMember({org, username}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/public_members getPublicMembers
 * @apiName getPublicMembers
 * @apiDescription Public members list
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getPublicMembers({org})
 * @apiExample {js} Promise
 * octokit.orgs.getPublicMembers({org}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getPublicMembers({org}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/public_members/:username checkPublicMembership
 * @apiName checkPublicMembership
 * @apiDescription Check public membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkPublicMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkPublicMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.checkPublicMembership({org, username}, (error, result) => {})
 */


/**
 * @api {PUT} /orgs/:org/public_members/:username publicizeMembership
 * @apiName publicizeMembership
 * @apiDescription Publicize a user's membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.publicizeMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.publicizeMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.publicizeMembership({org, username}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/public_members/:username concealMembership
 * @apiName concealMembership
 * @apiDescription Conceal a user's membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.concealMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.concealMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.concealMembership({org, username}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/memberships/:username getOrgMembership
 * @apiName getOrgMembership
 * @apiDescription Get organization membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getOrgMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.getOrgMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getOrgMembership({org, username}, (error, result) => {})
 */


/**
 * @api {PUT} /orgs/:org/memberships/:username addOrgMembership
 * @apiName addOrgMembership
 * @apiDescription Add or update organization membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiParam {string=admin,member} role=member  The role to give the user in the organization.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.addOrgMembership({org, username, role})
 * @apiExample {js} Promise
 * octokit.orgs.addOrgMembership({org, username, role}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.addOrgMembership({org, username, role}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/memberships/:username removeOrgMembership
 * @apiName removeOrgMembership
 * @apiDescription Remove organization membership
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeOrgMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeOrgMembership({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.removeOrgMembership({org, username}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/invitations getPendingOrgInvites
 * @apiName getPendingOrgInvites
 * @apiDescription List pending organization invites.
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getPendingOrgInvites({org})
 * @apiExample {js} Promise
 * octokit.orgs.getPendingOrgInvites({org}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getPendingOrgInvites({org}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/outside_collaborators getOutsideCollaborators
 * @apiName getOutsideCollaborators
 * @apiDescription List all users who are outside collaborators of an organization.
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string=all,2fa_disabled} [filter=all]  Filter the list of outside collaborators.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getOutsideCollaborators({org, filter, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getOutsideCollaborators({org, filter, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getOutsideCollaborators({org, filter, page, per_page}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/outside_collaborators/:username removeOutsideCollaborator
 * @apiName removeOutsideCollaborator
 * @apiDescription Remove outside collaborator.
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeOutsideCollaborator({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeOutsideCollaborator({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.removeOutsideCollaborator({org, username}, (error, result) => {})
 */


/**
 * @api {PUT} /orgs/:org/outside_collaborators/:username convertMemberToOutsideCollaborator
 * @apiName convertMemberToOutsideCollaborator
 * @apiDescription Convert member to outside collaborator.
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.convertMemberToOutsideCollaborator({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.convertMemberToOutsideCollaborator({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.convertMemberToOutsideCollaborator({org, username}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/teams getTeams
 * @apiName getTeams
 * @apiDescription List teams
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getTeams({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getTeams({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getTeams({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id getTeam
 * @apiName getTeam
 * @apiDescription Get team
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getTeam({id})
 * @apiExample {js} Promise
 * octokit.orgs.getTeam({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getTeam({id}, (error, result) => {})
 */


/**
 * @api {POST} /orgs/:org/teams createTeam
 * @apiName createTeam
 * @apiDescription Create team
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} name  
 * @apiParam {string} [description]  The description of the team.
 * @apiParam {string[]} [maintainers]  The logins of organization members to add as maintainers of the team.
 * @apiParam {string[]} [repo_names]  The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
 * @apiParam {string=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiParam {string} [parent_team_id]  The ID of a team to set as the parent team.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id})
 * @apiExample {js} Promise
 * octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, parent_team_id}, (error, result) => {})
 */


/**
 * @api {PATCH} /teams/:id editTeam
 * @apiName editTeam
 * @apiDescription Edit team
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} name  
 * @apiParam {string} [description]  The description of the team.
 * @apiParam {string=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiParam {string} [parent_team_id]  The ID of a team to set as the parent team.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.editTeam({id, name, description, privacy, parent_team_id})
 * @apiExample {js} Promise
 * octokit.orgs.editTeam({id, name, description, privacy, parent_team_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.editTeam({id, name, description, privacy, parent_team_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /teams/:id deleteTeam
 * @apiName deleteTeam
 * @apiDescription Delete team
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.deleteTeam({id})
 * @apiExample {js} Promise
 * octokit.orgs.deleteTeam({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.deleteTeam({id}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/members getTeamMembers
 * @apiName getTeamMembers
 * @apiDescription List team members
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string=member,maintainer,all} [role=all]  Filters members returned by their role in the team.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getTeamMembers({id, role, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getTeamMembers({id, role, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getTeamMembers({id, role, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/teams getChildTeams
 * @apiName getChildTeams
 * @apiDescription List child teams
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getChildTeams({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getChildTeams({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getChildTeams({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/memberships/:username getTeamMembership
 * @apiName getTeamMembership
 * @apiDescription Get team membership
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getTeamMembership({id, username})
 * @apiExample {js} Promise
 * octokit.orgs.getTeamMembership({id, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getTeamMembership({id, username}, (error, result) => {})
 */


/**
 * @api {PUT} /teams/:id/memberships/:username addTeamMembership
 * @apiName addTeamMembership
 * @apiDescription Add team membership
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} username  
 * @apiParam {string=member,maintainer} [role=member]  The role that this user should have in the team.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.addTeamMembership({id, username, role})
 * @apiExample {js} Promise
 * octokit.orgs.addTeamMembership({id, username, role}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.addTeamMembership({id, username, role}, (error, result) => {})
 */


/**
 * @api {DELETE} /teams/:id/memberships/:username removeTeamMembership
 * @apiName removeTeamMembership
 * @apiDescription Remove team membership
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeTeamMembership({id, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeTeamMembership({id, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.removeTeamMembership({id, username}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/repos getTeamRepos
 * @apiName getTeamRepos
 * @apiDescription Get team repos
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getTeamRepos({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getTeamRepos({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getTeamRepos({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/invitations getPendingTeamInvites
 * @apiName getPendingTeamInvites
 * @apiDescription List pending team invitations.
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getPendingTeamInvites({id, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getPendingTeamInvites({id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getPendingTeamInvites({id, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkTeamRepo({id, owner, repo})
 * @apiExample {js} Promise
 * octokit.orgs.checkTeamRepo({id, owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.checkTeamRepo({id, owner, repo}, (error, result) => {})
 */


/**
 * @api {PUT} /teams/:id/repos/:org/:repo addTeamRepo
 * @apiName addTeamRepo
 * @apiDescription Add team repository
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} org  
 * @apiParam {string} repo  
 * @apiParam {string=pull,push,admin} [permission]  `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.addTeamRepo({id, org, repo, permission})
 * @apiExample {js} Promise
 * octokit.orgs.addTeamRepo({id, org, repo, permission}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.addTeamRepo({id, org, repo, permission}, (error, result) => {})
 */


/**
 * @api {DELETE} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup Orgs
 *
 * @apiParam {string} id  
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.deleteTeamRepo({id, owner, repo})
 * @apiExample {js} Promise
 * octokit.orgs.deleteTeamRepo({id, owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.deleteTeamRepo({id, owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/hooks getHooks
 * @apiName getHooks
 * @apiDescription List hooks
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getHooks({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getHooks({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getHooks({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/hooks/:id getHook
 * @apiName getHook
 * @apiDescription Get single hook
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getHook({org, id})
 * @apiExample {js} Promise
 * octokit.orgs.getHook({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getHook({org, id}, (error, result) => {})
 */


/**
 * @api {POST} /orgs/:org/hooks createHook
 * @apiName createHook
 * @apiDescription Create a hook
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} name  Must be passed as "web".
 * @apiParam {json} config  Key/value pairs to provide settings for this webhook
 * @apiParam {string[]} [events=["push"]]  Determines what events the hook is triggered for. Default: ["push"].
 * @apiParam {boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.createHook({org, name, config, events, active})
 * @apiExample {js} Promise
 * octokit.orgs.createHook({org, name, config, events, active}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.createHook({org, name, config, events, active}, (error, result) => {})
 */


/**
 * @api {PATCH} /orgs/:org/hooks/:id editHook
 * @apiName editHook
 * @apiDescription Edit a hook
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiParam {json} config  Key/value pairs to provide settings for this webhook
 * @apiParam {string[]} [events=["push"]]  Determines what events the hook is triggered for. Default: ["push"].
 * @apiParam {boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.editHook({org, id, config, events, active})
 * @apiExample {js} Promise
 * octokit.orgs.editHook({org, id, config, events, active}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.editHook({org, id, config, events, active}, (error, result) => {})
 */


/**
 * @api {POST} /orgs/:org/hooks/:id/pings pingHook
 * @apiName pingHook
 * @apiDescription Ping a hook
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.pingHook({org, id})
 * @apiExample {js} Promise
 * octokit.orgs.pingHook({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.pingHook({org, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiDescription Delete a hook
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.deleteHook({org, id})
 * @apiExample {js} Promise
 * octokit.orgs.deleteHook({org, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.deleteHook({org, id}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/blocks getBlockedUsers
 * @apiName getBlockedUsers
 * @apiDescription List blocked users. (In preview period. See README.)
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getBlockedUsers({org, page, per_page})
 * @apiExample {js} Promise
 * octokit.orgs.getBlockedUsers({org, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.getBlockedUsers({org, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/blocks/:username checkBlockedUser
 * @apiName checkBlockedUser
 * @apiDescription Check whether you've blocked a user. (In preview period. See README.)
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkBlockedUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkBlockedUser({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.checkBlockedUser({org, username}, (error, result) => {})
 */


/**
 * @api {PUT} /orgs/:org/blocks/:username blockUser
 * @apiName blockUser
 * @apiDescription Block a user. (In preview period. See README.)
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.blockUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.blockUser({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.blockUser({org, username}, (error, result) => {})
 */


/**
 * @api {DELETE} /orgs/:org/blocks/:username unblockUser
 * @apiName unblockUser
 * @apiDescription Unblock a user. (In preview period. See README.)
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.unblockUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.unblockUser({org, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.orgs.unblockUser({org, username}, (error, result) => {})
 */



/**,
 * Projects
 * @namespace Projects
 */


/**
 * @api {GET} /repos/:owner/:repo/projects getRepoProjects
 * @apiName getRepoProjects
 * @apiDescription List repository projects. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getRepoProjects({owner, repo, state})
 * @apiExample {js} Promise
 * octokit.projects.getRepoProjects({owner, repo, state}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getRepoProjects({owner, repo, state}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/projects getOrgProjects
 * @apiName getOrgProjects
 * @apiDescription List organization projects. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} org  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getOrgProjects({org, state})
 * @apiExample {js} Promise
 * octokit.projects.getOrgProjects({org, state}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getOrgProjects({org, state}, (error, result) => {})
 */


/**
 * @api {GET} /projects/:id getProject
 * @apiName getProject
 * @apiDescription Get a project. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getProject({id})
 * @apiExample {js} Promise
 * octokit.projects.getProject({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getProject({id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/projects createRepoProject
 * @apiName createRepoProject
 * @apiDescription Create a repository project. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiParam {string} [body]  
 * @apiExample {js} async/await
 * const result = await octokit.projects.createRepoProject({owner, repo, name, body})
 * @apiExample {js} Promise
 * octokit.projects.createRepoProject({owner, repo, name, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.createRepoProject({owner, repo, name, body}, (error, result) => {})
 */


/**
 * @api {POST} /orgs/:org/projects createOrgProject
 * @apiName createOrgProject
 * @apiDescription Create an organization project. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} org  
 * @apiParam {string} name  
 * @apiParam {string} [body]  
 * @apiExample {js} async/await
 * const result = await octokit.projects.createOrgProject({org, name, body})
 * @apiExample {js} Promise
 * octokit.projects.createOrgProject({org, name, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.createOrgProject({org, name, body}, (error, result) => {})
 */


/**
 * @api {PATCH} /projects/:id updateProject
 * @apiName updateProject
 * @apiDescription Update a project. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiParam {string} name  
 * @apiParam {string} [body]  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiExample {js} async/await
 * const result = await octokit.projects.updateProject({id, name, body, state})
 * @apiExample {js} Promise
 * octokit.projects.updateProject({id, name, body, state}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.updateProject({id, name, body, state}, (error, result) => {})
 */


/**
 * @api {DELETE} /projects/:id deleteProject
 * @apiName deleteProject
 * @apiDescription Delete a project. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.deleteProject({id})
 * @apiExample {js} Promise
 * octokit.projects.deleteProject({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.deleteProject({id}, (error, result) => {})
 */


/**
 * @api {GET} /projects/columns/:column_id/cards getProjectCards
 * @apiName getProjectCards
 * @apiDescription List project cards. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} column_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getProjectCards({column_id})
 * @apiExample {js} Promise
 * octokit.projects.getProjectCards({column_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getProjectCards({column_id}, (error, result) => {})
 */


/**
 * @api {GET} /projects/columns/cards/:id getProjectCard
 * @apiName getProjectCard
 * @apiDescription Get project card. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getProjectCard({id})
 * @apiExample {js} Promise
 * octokit.projects.getProjectCard({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getProjectCard({id}, (error, result) => {})
 */


/**
 * @api {POST} /projects/columns/:column_id/cards createProjectCard
 * @apiName createProjectCard
 * @apiDescription Create a project card. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} column_id  
 * @apiParam {string} [note]  The note of the card.
 * @apiParam {string} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {string} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createProjectCard({column_id, note, content_id, content_type})
 * @apiExample {js} Promise
 * octokit.projects.createProjectCard({column_id, note, content_id, content_type}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.createProjectCard({column_id, note, content_id, content_type}, (error, result) => {})
 */


/**
 * @api {PATCH} /projects/columns/cards/:id updateProjectCard
 * @apiName updateProjectCard
 * @apiDescription Update a project card. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiParam {string} [note]  The note of the card.
 * @apiExample {js} async/await
 * const result = await octokit.projects.updateProjectCard({id, note})
 * @apiExample {js} Promise
 * octokit.projects.updateProjectCard({id, note}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.updateProjectCard({id, note}, (error, result) => {})
 */


/**
 * @api {DELETE} /projects/columns/cards/:id deleteProjectCard
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.deleteProjectCard({id})
 * @apiExample {js} Promise
 * octokit.projects.deleteProjectCard({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.deleteProjectCard({id}, (error, result) => {})
 */


/**
 * @api {POST} /projects/columns/cards/:id/moves moveProjectCard
 * @apiName moveProjectCard
 * @apiDescription Move a project card. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiParam {string} position  Can be one of top, bottom, or after:<card-id>, where <card-id> is the id value of a card in the same project.
 * @apiParam {string} [column_id]  The id value of a column in the same project.
 * @apiExample {js} async/await
 * const result = await octokit.projects.moveProjectCard({id, position, column_id})
 * @apiExample {js} Promise
 * octokit.projects.moveProjectCard({id, position, column_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.moveProjectCard({id, position, column_id}, (error, result) => {})
 */


/**
 * @api {GET} /projects/:project_id/columns getProjectColumns
 * @apiName getProjectColumns
 * @apiDescription List project columns. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} project_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getProjectColumns({project_id})
 * @apiExample {js} Promise
 * octokit.projects.getProjectColumns({project_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getProjectColumns({project_id}, (error, result) => {})
 */


/**
 * @api {GET} /projects/columns/:id getProjectColumn
 * @apiName getProjectColumn
 * @apiDescription Get a project column. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getProjectColumn({id})
 * @apiExample {js} Promise
 * octokit.projects.getProjectColumn({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.getProjectColumn({id}, (error, result) => {})
 */


/**
 * @api {POST} /projects/:project_id/columns createProjectColumn
 * @apiName createProjectColumn
 * @apiDescription Create a project column. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} project_id  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.projects.createProjectColumn({project_id, name})
 * @apiExample {js} Promise
 * octokit.projects.createProjectColumn({project_id, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.createProjectColumn({project_id, name}, (error, result) => {})
 */


/**
 * @api {PATCH} /projects/columns/:id updateProjectColumn
 * @apiName updateProjectColumn
 * @apiDescription Update a project column. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.projects.updateProjectColumn({id, name})
 * @apiExample {js} Promise
 * octokit.projects.updateProjectColumn({id, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.updateProjectColumn({id, name}, (error, result) => {})
 */


/**
 * @api {DELETE} /projects/columns/:id deleteProjectColumn
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.deleteProjectColumn({id})
 * @apiExample {js} Promise
 * octokit.projects.deleteProjectColumn({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.deleteProjectColumn({id}, (error, result) => {})
 */


/**
 * @api {POST} /projects/columns/:id/moves moveProjectColumn
 * @apiName moveProjectColumn
 * @apiDescription Move a project column. (In preview period. See README.)
 * @apiGroup Projects
 *
 * @apiParam {string} id  
 * @apiParam {string} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} async/await
 * const result = await octokit.projects.moveProjectColumn({id, position})
 * @apiExample {js} Promise
 * octokit.projects.moveProjectColumn({id, position}).then(result => {})
 * @apiExample {js} Callback
 * octokit.projects.moveProjectColumn({id, position}, (error, result) => {})
 */



/**,
 * PullRequests
 * @namespace PullRequests
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number get
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.get({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.pullRequests.get({owner, repo, number}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.get({owner, repo, number}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls create
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {string} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.create({owner, repo, head, base})
 * @apiExample {js} Promise
 * octokit.pullRequests.create({owner, repo, head, base}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.create({owner, repo, head, base}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/pulls/:number update
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} [title]  The title of the pull request.
 * @apiParam {string} [body]  The contents of the pull request.
 * @apiParam {string=open,closed} [state]  open or closed
 * @apiParam {string} [base]  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {boolean} [maintainer_can_modify=true]  Indicates whether maintainers can modify the pull request.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify})
 * @apiExample {js} Promise
 * octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {string} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {string} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {string=merge,squash,rebase} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method})
 * @apiExample {js} Promise
 * octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls getAll
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state=open]  
 * @apiParam {string} [head]  Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
 * @apiParam {string} [base]  Filter pulls by base branch name. Example: gh-pages.
 * @apiParam {string=created,updated,popularity,long-running} [sort=created]  Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls createFromIssue
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {string} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {string} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.createFromIssue({owner, repo, issue, head, base})
 * @apiExample {js} Promise
 * octokit.pullRequests.createFromIssue({owner, repo, issue, head, base}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.createFromIssue({owner, repo, issue, head, base}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getCommits({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getCommits({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getCommits({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getFiles({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getFiles({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getFiles({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.checkMerged({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.checkMerged({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.checkMerged({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews getReviews
 * @apiName getReviews
 * @apiDescription List reviews on a pull request.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getReviews({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getReviews({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getReviews({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews/:id getReview
 * @apiName getReview
 * @apiDescription Get a single pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getReview({owner, repo, number, id})
 * @apiExample {js} Promise
 * octokit.pullRequests.getReview({owner, repo, number, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getReview({owner, repo, number, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/:number/reviews/:id deletePendingReview
 * @apiName deletePendingReview
 * @apiDescription Delete a pending pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.deletePendingReview({owner, repo, number, id})
 * @apiExample {js} Promise
 * octokit.pullRequests.deletePendingReview({owner, repo, number, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.deletePendingReview({owner, repo, number, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews/:id/comments getReviewComments
 * @apiName getReviewComments
 * @apiDescription Get comments for a pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getReviewComments({owner, repo, number, id, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/reviews createReview
 * @apiName createReview
 * @apiDescription Create a pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} [commit_id]  Sha of the commit to comment on.
 * @apiParam {string} [body]  The body text of the pull request review.
 * @apiParam {string=APPROVE,REQUEST_CHANGES,COMMENT,PENDING} [event=PENDING]  The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.
 * @apiParam {string[]} [comments]  An array of draft review comment objects. Draft review comments must include a `path`, `position`, and `body`.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments})
 * @apiExample {js} Promise
 * octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/reviews/:id/events submitReview
 * @apiName submitReview
 * @apiDescription Submit a pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} id  
 * @apiParam {string} [body]  The body text of the pull request review.
 * @apiParam {string=APPROVE,REQUEST_CHANGES,COMMENT,PENDING} [event=PENDING]  The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.submitReview({owner, repo, number, id, body, event})
 * @apiExample {js} Promise
 * octokit.pullRequests.submitReview({owner, repo, number, id, body, event}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.submitReview({owner, repo, number, id, body, event}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals dismissReview
 * @apiName dismissReview
 * @apiDescription Dismiss a pull request review.
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} id  
 * @apiParam {string} [message]  The message for the pull request review dismissal.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.dismissReview({owner, repo, number, id, message, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getComments({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getComments({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getComments({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=created,updated} [sort=created]  Possible values are: `created`, `updated`, Default: `created`
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments/:id getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.pullRequests.getComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.createComment({owner, repo, number, body})
 * @apiExample {js} Promise
 * octokit.pullRequests.createComment({owner, repo, number, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.createComment({owner, repo, number, body}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string} body  
 * @apiParam {number} in_reply_to  The comment id to reply to.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to})
 * @apiExample {js} Promise
 * octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/pulls/comments/:id editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.editComment({owner, repo, id, body})
 * @apiExample {js} Promise
 * octokit.pullRequests.editComment({owner, repo, id, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.editComment({owner, repo, id, body}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.deleteComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.pullRequests.deleteComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.deleteComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/requested_reviewers getReviewRequests
 * @apiName getReviewRequests
 * @apiDescription List review requests. (In preview period. See README.)
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page})
 * @apiExample {js} Promise
 * octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.getReviewRequests({owner, repo, number, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/requested_reviewers createReviewRequest
 * @apiName createReviewRequest
 * @apiDescription Create a review request. (In preview period. See README.)
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string[]} [reviewers]  An array of user logins that will be requested.
 * @apiParam {string[]} [team_reviewers]  An array of team slugs that will be requested.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers})
 * @apiExample {js} Promise
 * octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/:number/requested_reviewers deleteReviewRequest
 * @apiName deleteReviewRequest
 * @apiDescription Delete a review request. (In preview period. See README.)
 * @apiGroup PullRequests
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string[]} [reviewers]  An array of user logins that will be requested.
 * @apiParam {string[]} [team_reviewers]  An array of team slugs that will be requested.
 * @apiExample {js} async/await
 * const result = await octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers})
 * @apiExample {js} Promise
 * octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})
 * @apiExample {js} Callback
 * octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})
 */



/**,
 * Reactions
 * @namespace Reactions
 */


/**
 * @api {DELETE} /reactions/:id delete
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.reactions.delete({id})
 * @apiExample {js} Promise
 * octokit.reactions.delete({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.delete({id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.getForCommitComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.getForCommitComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.getForCommitComment({owner, repo, id, content}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForCommitComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForCommitComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.createForCommitComment({owner, repo, id, content}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.getForIssue({owner, repo, number, content})
 * @apiExample {js} Promise
 * octokit.reactions.getForIssue({owner, repo, number, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.getForIssue({owner, repo, number, content}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForIssue({owner, repo, number, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForIssue({owner, repo, number, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.createForIssue({owner, repo, number, content}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.getForIssueComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.getForIssueComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.getForIssueComment({owner, repo, id, content}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForIssueComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForIssueComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.createForIssueComment({owner, repo, id, content}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}).then(result => {})
 * @apiExample {js} Callback
 * octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}, (error, result) => {})
 */



/**,
 * Repos
 * @namespace Repos
 */


/**
 * @api {POST} /user/repos create
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup Repos
 *
 * @apiParam {string} name  
 * @apiParam {boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {string} [homepage]  
 * @apiParam {boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {boolean} [has_projects=true]  True to enable projects for this repository, false to disable them. Default is true.
 * @apiParam {boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {string} [description]  
 * @apiParam {boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {string} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {string} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiExample {js} async/await
 * const result = await octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id})
 * @apiExample {js} Promise
 * octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.create({name, allow_rebase_merge, homepage, private, has_issues, has_projects, has_wiki, description, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, team_id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo get
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.get({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.get({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.get({owner, repo}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo edit
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} name  
 * @apiParam {string} repo  
 * @apiParam {string} [description]  
 * @apiParam {string} [homepage]  
 * @apiParam {boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [has_projects=true]  True to enable projects for this repository, false to disable them. Default is true.
 * @apiParam {boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {string} [default_branch]  Updates the default branch for this repository.
 * @apiParam {boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} async/await
 * const result = await octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues})
 * @apiExample {js} Promise
 * octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.edit({owner, name, repo, description, homepage, private, allow_rebase_merge, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, has_issues}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo delete
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.delete({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.delete({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.delete({owner, repo}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/forks fork
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} async/await
 * const result = await octokit.repos.fork({owner, repo, organization})
 * @apiExample {js} Promise
 * octokit.repos.fork({owner, repo, organization}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.fork({owner, repo, organization}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/merges merge
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {string} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {string} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} async/await
 * const result = await octokit.repos.merge({owner, repo, base, head, commit_message})
 * @apiExample {js} Promise
 * octokit.repos.merge({owner, repo, base, head, commit_message}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.merge({owner, repo, base, head, commit_message}, (error, result) => {})
 */


/**
 * @api {GET} /user/repos getAll
 * @apiName getAll
 * @apiDescription List your repositories
 * @apiGroup Repos
 *
 * @apiParam {string=all,public,private} [visibility=all]  Can be one of `all`, `public`, or `private`. Default: `all`.
 * @apiParam {string} [affiliation=owner,collaborator,organization_member]  Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`.
 * @apiParam {string=all,owner,public,private,member} [type=all]  Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {string=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getAll({visibility, affiliation, type, sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/repos getForUser
 * @apiName getForUser
 * @apiDescription List public repositories for the specified user.
 * @apiGroup Repos
 *
 * @apiParam {string} username  
 * @apiParam {string=all,owner,member} [type=owner]  Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {string=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {string=asc,desc} [direction=desc]  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getForUser({username, type, sort, direction, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getForUser({username, type, sort, direction, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getForUser({username, type, sort, direction, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /orgs/:org/repos getForOrg
 * @apiName getForOrg
 * @apiDescription List repositories for the specified org.
 * @apiGroup Repos
 *
 * @apiParam {string} org  
 * @apiParam {string=all,public,private,forks,sources,member} [type=all]  Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getForOrg({org, type, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getForOrg({org, type, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getForOrg({org, type, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repositories getPublic
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup Repos
 *
 * @apiParam {string} [since]  The integer ID of the last Repository that you've seen.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPublic({since, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getPublic({since, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getPublic({since, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /orgs/:org/repos createForOrg
 * @apiName createForOrg
 * @apiDescription Create a new repository for an organization.
 * @apiGroup Repos
 *
 * @apiParam {string} org  
 * @apiParam {string} name  
 * @apiParam {string} [description]  
 * @apiParam {string} [homepage]  
 * @apiParam {boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {boolean} [has_projects=true]  True to enable projects for this repository, false to disable them. Default is true.
 * @apiParam {boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiParam {boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {string} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {string} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki})
 * @apiExample {js} Promise
 * octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, allow_rebase_merge, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, has_wiki}, (error, result) => {})
 */


/**
 * @api {GET} /repositories/:id getById
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup Repos
 *
 * @apiParam {string} id  Numerical ID of the repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getById({id})
 * @apiExample {js} Promise
 * octokit.repos.getById({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getById({id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/topics getTopics
 * @apiName getTopics
 * @apiDescription List all topics for a repository. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getTopics({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getTopics({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getTopics({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/topics replaceTopics
 * @apiName replaceTopics
 * @apiDescription Replace all topics for a repository. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string[]} names  An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceTopics({owner, repo, names})
 * @apiExample {js} Promise
 * octokit.repos.replaceTopics({owner, repo, names}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.replaceTopics({owner, repo, names}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/contributors getContributors
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getContributors({owner, repo, anon, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getContributors({owner, repo, anon, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getContributors({owner, repo, anon, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/languages getLanguages
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getLanguages({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getLanguages({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getLanguages({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/teams getTeams
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getTeams({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getTeams({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getTeams({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/tags getTags
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getTags({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getTags({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getTags({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches getBranches
 * @apiName getBranches
 * @apiDescription List branches.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [protected]  Set to true to only return protected branches
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getBranches({owner, repo, protected, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getBranches({owner, repo, protected, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getBranches({owner, repo, protected, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch getBranch
 * @apiName getBranch
 * @apiDescription Get branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getBranch({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getBranch({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getBranch({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiName getBranchProtection
 * @apiDescription Get branch protection.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getBranchProtection({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getBranchProtection({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getBranchProtection({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {json} required_status_checks  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled.
 * @apiParam {json} required_pull_request_reviews  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators.
 * @apiParam {json} restrictions  JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled.
 * @apiParam {boolean} enforce_admins  Enforces required status checks for repository administrators.
 * @apiParam {json} [dismissal_restrictions]  JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_pull_request_reviews, restrictions, enforce_admins, dismissal_restrictions, page, per_page}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeBranchProtection({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeBranchProtection({owner, repo, branch}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeBranchProtection({owner, repo, branch}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {string[]} [contexts]  The list of status checks to require in order to merge into this branch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts})
 * @apiExample {js} Promise
 * octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews getProtectedBranchPullRequestReviewEnforcement
 * @apiName getProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Get pull request review enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews updateProtectedBranchPullRequestReviewEnforcement
 * @apiName updateProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Update pull request review enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {json} [dismissal_restrictions]  JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled.
 * @apiParam {boolean} [dismiss_stale_reviews]  Dismiss approved reviews automatically when a new commit is pushed.
 * @apiParam {boolean} [require_code_owner_reviews]  Blocks merge until code owners have reviewed.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews})
 * @apiExample {js} Promise
 * octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews removeProtectedBranchPullRequestReviewEnforcement
 * @apiName removeProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Remove pull request review enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/enforce_admins getProtectedBranchAdminEnforcement
 * @apiName getProtectedBranchAdminEnforcement
 * @apiDescription Get admin enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/enforce_admins addProtectedBranchAdminEnforcement
 * @apiName addProtectedBranchAdminEnforcement
 * @apiDescription Add admin enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/enforce_admins removeProtectedBranchAdminEnforcement
 * @apiName removeProtectedBranchAdminEnforcement
 * @apiDescription Remove admin enforcement of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  An array of team slugs (e.g. justice-league).
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators getCollaborators
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=outside,all,direct} [affiliation=all]  Filter collaborators returned by their affiliation.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCollaborators({owner, repo, affiliation, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators/:username checkCollaborator
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.checkCollaborator({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.checkCollaborator({owner, repo, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.checkCollaborator({owner, repo, username}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators/:username/permission reviewUserPermissionLevel
 * @apiName reviewUserPermissionLevel
 * @apiDescription Review a user's permission level.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.reviewUserPermissionLevel({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.reviewUserPermissionLevel({owner, repo, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.reviewUserPermissionLevel({owner, repo, username}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/collaborators/:username addCollaborator
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiParam {string=pull,push,admin} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.addCollaborator({owner, repo, username, permission})
 * @apiExample {js} Promise
 * octokit.repos.addCollaborator({owner, repo, username, permission}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addCollaborator({owner, repo, username, permission}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/collaborators/:username removeCollaborator
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeCollaborator({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.removeCollaborator({owner, repo, username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.removeCollaborator({owner, repo, username}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/comments getAllCommitComments
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getAllCommitComments({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getAllCommitComments({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getAllCommitComments({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/comments getCommitComments
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommitComments({owner, repo, ref, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getCommitComments({owner, repo, ref, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCommitComments({owner, repo, ref, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {string} body  
 * @apiParam {string} [path]  Relative path of the file to comment on.
 * @apiParam {number} [position]  Line index in the diff to comment on.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createCommitComment({owner, repo, sha, body, path, position})
 * @apiExample {js} Promise
 * octokit.repos.createCommitComment({owner, repo, sha, body, path, position}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createCommitComment({owner, repo, sha, body, path, position}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommitComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getCommitComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCommitComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} body  
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateCommitComment({owner, repo, id, body})
 * @apiExample {js} Promise
 * octokit.repos.updateCommitComment({owner, repo, id, body}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateCommitComment({owner, repo, id, body}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteCommitComment({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteCommitComment({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteCommitComment({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:name/community/profile getCommunityProfileMetrics
 * @apiName getCommunityProfileMetrics
 * @apiDescription Retrieve community profile metrics.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommunityProfileMetrics({owner, name})
 * @apiExample {js} Promise
 * octokit.repos.getCommunityProfileMetrics({owner, name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCommunityProfileMetrics({owner, name}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits getCommits
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [sha]  Sha or branch to start listing commits from.
 * @apiParam {string} [path]  Only commits containing this file path will be returned.
 * @apiParam {string} [author]  GitHub login or email address by which to filter by commit author.
 * @apiParam {date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {date} [until]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCommits({owner, repo, sha, path, author, since, until, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommit({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.repos.getCommit({owner, repo, sha}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCommit({owner, repo, sha}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getShaOfCommitRef({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.repos.getShaOfCommitRef({owner, repo, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getShaOfCommitRef({owner, repo, ref}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {string} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} async/await
 * const result = await octokit.repos.compareCommits({owner, repo, base, head})
 * @apiExample {js} Promise
 * octokit.repos.compareCommits({owner, repo, base, head}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.compareCommits({owner, repo, base, head}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/readme getReadme
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReadme({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.repos.getReadme({owner, repo, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getReadme({owner, repo, ref}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/contents/:path getContent
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  The content path.
 * @apiParam {string} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getContent({owner, repo, path, ref})
 * @apiExample {js} Promise
 * octokit.repos.getContent({owner, repo, path, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getContent({owner, repo, path, ref}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/contents/:path createFile
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  The content path.
 * @apiParam {string} message  The commit message.
 * @apiParam {string} content  The new file content, Base64 encoded.
 * @apiParam {string} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {json} [committer]  
 * @apiParam {json} [author]  
 * @apiExample {js} async/await
 * const result = await octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author})
 * @apiExample {js} Promise
 * octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}, (error, result) => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/contents/:path updateFile
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  The content path.
 * @apiParam {string} message  The commit message.
 * @apiParam {string} content  The updated file content, Base64 encoded.
 * @apiParam {string} sha  The blob SHA of the file being replaced.
 * @apiParam {string} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {json} [committer]  
 * @apiParam {json} [author]  
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author})
 * @apiExample {js} Promise
 * octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/contents/:path deleteFile
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  The content path.
 * @apiParam {string} message  The commit message.
 * @apiParam {string} sha  The blob SHA of the file being removed.
 * @apiParam {string} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {json} [committer]  
 * @apiParam {json} [author]  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author})
 * @apiExample {js} Promise
 * octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=tarball,zipball} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {string} [ref]  A valid Git reference. Default: the repository’s default branch (usually master).
 * @apiExample {js} async/await
 * const result = await octokit.repos.getArchiveLink({owner, repo, archive_format, ref})
 * @apiExample {js} Promise
 * octokit.repos.getArchiveLink({owner, repo, archive_format, ref}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getArchiveLink({owner, repo, archive_format, ref}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/keys getDeployKeys
 * @apiName getDeployKeys
 * @apiDescription List deploy keys.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployKeys({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getDeployKeys({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeployKeys({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/keys/:id getDeployKey
 * @apiName getDeployKey
 * @apiDescription Get a deploy key.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployKey({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getDeployKey({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeployKey({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/keys addDeployKey
 * @apiName addDeployKey
 * @apiDescription Add a new deploy key.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  
 * @apiParam {string} key  
 * @apiParam {boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} async/await
 * const result = await octokit.repos.addDeployKey({owner, repo, title, key, read_only})
 * @apiExample {js} Promise
 * octokit.repos.addDeployKey({owner, repo, title, key, read_only}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.addDeployKey({owner, repo, title, key, read_only}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/keys/:id deleteDeployKey
 * @apiName deleteDeployKey
 * @apiDescription Remove a deploy key.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteDeployKey({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteDeployKey({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteDeployKey({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments getDeployments
 * @apiName getDeployments
 * @apiDescription List deployments.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [sha=none]  The short or long sha that was recorded at creation time. Default: none.
 * @apiParam {string} [ref=none]  The name of the ref. This can be a branch, tag, or sha. Default: none.
 * @apiParam {string} [task=none]  The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none.
 * @apiParam {string} [environment=none]  The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:deployment_id getDeployment
 * @apiName getDeployment
 * @apiDescription Get a single Deployment. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} deployment_id  The deployment id.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployment({owner, repo, deployment_id})
 * @apiExample {js} Promise
 * octokit.repos.getDeployment({owner, repo, deployment_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeployment({owner, repo, deployment_id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/deployments createDeployment
 * @apiName createDeployment
 * @apiDescription Create a deployment. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} ref  The ref to deploy. This can be a branch, tag, or sha.
 * @apiParam {string} repo  
 * @apiParam {string} [task=deploy]  The named task to execute. e.g. deploy or deploy:migrations. Default: deploy
 * @apiParam {boolean} [auto_merge=true]  Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true
 * @apiParam {boolean} [production_environment]  Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is `production` and false otherwise. (In preview period. See README.)
 * @apiParam {string} [payload=""]  Optional JSON payload with extra information about the deployment. Default: ""
 * @apiParam {string} [environment=none]  The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {string} [description=""]  Optional short description. Default: ""
 * @apiParam {boolean} [transient_environment=false]  Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.)
 * @apiParam {string[]} [required_contexts]  Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts})
 * @apiExample {js} Promise
 * octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createDeployment({owner, ref, repo, task, auto_merge, production_environment, payload, environment, description, transient_environment, required_contexts}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeploymentStatuses({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getDeploymentStatuses({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeploymentStatuses({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:id/statuses/:status_id getDeploymentStatus
 * @apiName getDeploymentStatus
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  The Deployment ID to list the statuses from.
 * @apiParam {string} status_id  The Deployment Status ID.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeploymentStatus({owner, repo, id, status_id})
 * @apiExample {js} Promise
 * octokit.repos.getDeploymentStatus({owner, repo, id, status_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDeploymentStatus({owner, repo, id, status_id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} [state]  The state of the status. Can be one of pending, success, error, or failure.
 * @apiParam {string} [target_url=""]  The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: ""
 * @apiParam {string} [log_url=""]  Functionally equivalent to target_url. Default: "". (In preview period. See README.)
 * @apiParam {string} [description=""]  A short description of the status. Default: ""
 * @apiParam {string} [environment_url=""]  URL for accessing the deployment environment. Default: "". (In preview period. See README.)
 * @apiParam {boolean} [auto_inactive=true]  When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.)
 * @apiExample {js} async/await
 * const result = await octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive})
 * @apiExample {js} Promise
 * octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/downloads getDownloads
 * @apiName getDownloads
 * @apiDescription List downloads for a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDownloads({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getDownloads({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDownloads({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/downloads/:id getDownload
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDownload({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getDownload({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getDownload({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteDownload({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteDownload({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteDownload({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/forks getForks
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=newest,oldest,stargazers} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getForks({owner, repo, sort, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getForks({owner, repo, sort, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getForks({owner, repo, sort, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/invitations getInvites
 * @apiName getInvites
 * @apiDescription List invitations for a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getInvites({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getInvites({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getInvites({owner, repo}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/invitations/:invitation_id deleteInvite
 * @apiName deleteInvite
 * @apiDescription Delete a repository invitation.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteInvite({owner, repo, invitation_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteInvite({owner, repo, invitation_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteInvite({owner, repo, invitation_id}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/invitations/:invitation_id updateInvite
 * @apiName updateInvite
 * @apiDescription Update a repository invitation.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} invitation_id  
 * @apiParam {string=read,write,admin} [permissions]  The permissions that the associated user will have on the repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateInvite({owner, repo, invitation_id, permissions})
 * @apiExample {js} Promise
 * octokit.repos.updateInvite({owner, repo, invitation_id, permissions}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.updateInvite({owner, repo, invitation_id, permissions}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages getPages
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPages({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getPages({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getPages({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.requestPageBuild({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.requestPageBuild({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.requestPageBuild({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPagesBuilds({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getPagesBuilds({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getPagesBuilds({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getLatestPagesBuild({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getLatestPagesBuild({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getLatestPagesBuild({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build. (In preview period. See README.)
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPagesBuild({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getPagesBuild({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getPagesBuild({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases getReleases
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReleases({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getReleases({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getReleases({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/:id getRelease
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getRelease({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getRelease({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getRelease({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getLatestRelease({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getLatestRelease({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getLatestRelease({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag  String of the tag
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReleaseByTag({owner, repo, tag})
 * @apiExample {js} Promise
 * octokit.repos.getReleaseByTag({owner, repo, tag}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getReleaseByTag({owner, repo, tag}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/releases createRelease
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag_name  String of the tag
 * @apiParam {string} [target_commitish]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {string} [name]  
 * @apiParam {string} [body]  
 * @apiParam {boolean} [draft=false]  true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {boolean} [prerelease=false]  true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} async/await
 * const result = await octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease})
 * @apiExample {js} Promise
 * octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/releases/:id editRelease
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} tag_name  String of the tag
 * @apiParam {string} [target_commitish]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {string} [name]  
 * @apiParam {string} [body]  
 * @apiParam {boolean} [draft=false]  true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {boolean} [prerelease=false]  true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} async/await
 * const result = await octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease})
 * @apiExample {js} Promise
 * octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteRelease({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteRelease({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteRelease({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/:id/assets getAssets
 * @apiName getAssets
 * @apiDescription List assets for a release.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getAssets({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getAssets({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getAssets({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} :url uploadAsset
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup Repos
 *
 * @apiParam {string} url  This endpoint makes use of a Hypermedia relation (https://developer.github.com/v3/#hypermedia) to determine which URL to access. This endpoint is provided by a URI template in the release's API response (https://developer.github.com/v3/repos/releases/#get-a-single-release). You need to use an HTTP client which supports SNI (https://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
 * @apiParam {object} file  A file read stream, a String or a Buffer.
 * @apiParam {string} contentType  The content type of the asset. This should be set in the Header. Example: 'application/zip'. For a list of acceptable types, refer this list of media types (https://www.iana.org/assignments/media-types/media-types.xhtml)
 * @apiParam {number} contentLength  File size in bytes.
 * @apiParam {string} name  The file name of the asset. This should be set in a URI query parameter.
 * @apiParam {string} [label]  An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.
 * @apiExample {js} async/await
 * const result = await octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label})
 * @apiExample {js} Promise
 * octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.uploadAsset({url, file, contentType, contentLength, name, label}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getAsset({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getAsset({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getAsset({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} name  
 * @apiParam {string} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} async/await
 * const result = await octokit.repos.editAsset({owner, repo, id, name, label})
 * @apiExample {js} Promise
 * octokit.repos.editAsset({owner, repo, id, name, label}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.editAsset({owner, repo, id, name, label}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteAsset({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteAsset({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteAsset({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatsContributors({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getStatsContributors({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatsContributors({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatsCommitActivity({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getStatsCommitActivity({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatsCommitActivity({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatsCodeFrequency({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getStatsCodeFrequency({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatsCodeFrequency({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatsParticipation({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getStatsParticipation({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatsParticipation({owner, repo}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatsPunchCard({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getStatsPunchCard({owner, repo}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatsPunchCard({owner, repo}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {string=pending,success,error,failure} state  State of the status - can be one of pending, success, error, or failure.
 * @apiParam {string} [target_url]  Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {string} [description]  Short description of the status.
 * @apiParam {string} [context]  A string label to differentiate this status from the status of other systems.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context})
 * @apiExample {js} Promise
 * octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/statuses getStatuses
 * @apiName getStatuses
 * @apiDescription List statuses for a specfic ref.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getStatuses({owner, repo, ref, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getStatuses({owner, repo, ref, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getStatuses({owner, repo, ref, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/status getCombinedStatusForRef
 * @apiName getCombinedStatusForRef
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getCombinedStatusForRef({owner, repo, ref, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReferrers({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getReferrers({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getReferrers({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPaths({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getPaths({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getPaths({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/views getViews
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getViews({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getViews({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getViews({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/clones getClones
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getClones({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getClones({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getClones({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/hooks getHooks
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getHooks({owner, repo, page, per_page})
 * @apiExample {js} Promise
 * octokit.repos.getHooks({owner, repo, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getHooks({owner, repo, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/hooks/:id getHook
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getHook({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.getHook({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.getHook({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks createHook
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiParam {json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {string[]} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createHook({owner, repo, name, config, events, active})
 * @apiExample {js} Promise
 * octokit.repos.createHook({owner, repo, name, config, events, active}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.createHook({owner, repo, name, config, events, active}, (error, result) => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/hooks/:id editHook
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiParam {string} name  
 * @apiParam {json} config  A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {string[]} [events=["push"]]  Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
 * @apiParam {string[]} [add_events]  Determines a list of events to be added to the list of events that the Hook triggers for.
 * @apiParam {string[]} [remove_events]  Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @apiParam {boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} async/await
 * const result = await octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active})
 * @apiExample {js} Promise
 * octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.editHook({owner, repo, id, name, config, events, add_events, remove_events, active}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks/:id/tests testHook
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.testHook({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.testHook({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.testHook({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.pingHook({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.pingHook({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.pingHook({owner, repo, id}, (error, result) => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteHook({owner, repo, id})
 * @apiExample {js} Promise
 * octokit.repos.deleteHook({owner, repo, id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.repos.deleteHook({owner, repo, id}, (error, result) => {})
 */



/**,
 * Search
 * @namespace Search
 */


/**
 * @api {GET} /search/repositories repos
 * @apiName repos
 * @apiDescription Search repositories.
 * @apiGroup Search
 *
 * @apiParam {string} q  Search Term
 * @apiParam {string=stars,forks,updated} [sort]  stars, forks, or updated
 * @apiParam {string=asc,desc} [order=desc]  asc or desc
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.search.repos({q, sort, order, page, per_page})
 * @apiExample {js} Promise
 * octokit.search.repos({q, sort, order, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.repos({q, sort, order, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /search/code code
 * @apiName code
 * @apiDescription Search code.
 * @apiGroup Search
 *
 * @apiParam {string} q  Search Term
 * @apiParam {string=indexed} [sort]  The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.
 * @apiParam {string=asc,desc} [order=desc]  asc or desc
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.search.code({q, sort, order, page, per_page})
 * @apiExample {js} Promise
 * octokit.search.code({q, sort, order, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.code({q, sort, order, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /search/commits commits
 * @apiName commits
 * @apiDescription Search commits. (In preview period. See README.)
 * @apiGroup Search
 *
 * @apiParam {string} q  Search Term
 * @apiParam {string=author-date,committer-date} [sort]  The sort field. Can be author-date or committer-date. Default: best match.
 * @apiParam {string=asc,desc} [order=desc]  asc or desc
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.search.commits({q, sort, order, page, per_page})
 * @apiExample {js} Promise
 * octokit.search.commits({q, sort, order, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.commits({q, sort, order, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /search/issues issues
 * @apiName issues
 * @apiDescription Search issues.
 * @apiGroup Search
 *
 * @apiParam {string} q  Search Term
 * @apiParam {string=comments,created,updated} [sort]  The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
 * @apiParam {string=asc,desc} [order=desc]  asc or desc
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.search.issues({q, sort, order, page, per_page})
 * @apiExample {js} Promise
 * octokit.search.issues({q, sort, order, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.issues({q, sort, order, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /search/users users
 * @apiName users
 * @apiDescription Search users.
 * @apiGroup Search
 *
 * @apiParam {string} q  Search Term
 * @apiParam {string=followers,repositories,joined} [sort]  The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.
 * @apiParam {string=asc,desc} [order=desc]  asc or desc
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.search.users({q, sort, order, page, per_page})
 * @apiExample {js} Promise
 * octokit.search.users({q, sort, order, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.users({q, sort, order, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /legacy/user/email/:email email
 * @apiName email
 * @apiDescription Search against public email addresses.
 * @apiGroup Search
 *
 * @apiParam {string} email  The email address
 * @apiExample {js} async/await
 * const result = await octokit.search.email({email})
 * @apiExample {js} Promise
 * octokit.search.email({email}).then(result => {})
 * @apiExample {js} Callback
 * octokit.search.email({email}, (error, result) => {})
 */



/**,
 * Users
 * @namespace Users
 */


/**
 * @api {GET} /user get
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.get({})
 * @apiExample {js} Promise
 * octokit.users.get({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.get({}, (error, result) => {})
 */


/**
 * @api {PATCH} /user update
 * @apiName update
 * @apiDescription Update the authenticated user
 * @apiGroup Users
 *
 * @apiParam {string} [name]  The new name of the user
 * @apiParam {string} [email]  Publicly visible email address.
 * @apiParam {string} [blog]  The new blog URL of the user.
 * @apiParam {string} [company]  The new company of the user.
 * @apiParam {string} [location]  The new location of the user.
 * @apiParam {boolean} [hireable]  The new hiring availability of the user.
 * @apiParam {string} [bio]  The new short biography of the user.
 * @apiExample {js} async/await
 * const result = await octokit.users.update({name, email, blog, company, location, hireable, bio})
 * @apiExample {js} Promise
 * octokit.users.update({name, email, blog, company, location, hireable, bio}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.update({name, email, blog, company, location, hireable, bio}, (error, result) => {})
 */


/**
 * @api {PUT} /users/:username/site_admin promote
 * @apiName promote
 * @apiDescription Promote an ordinary user to a site administrator
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.promote({username})
 * @apiExample {js} Promise
 * octokit.users.promote({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.promote({username}, (error, result) => {})
 */


/**
 * @api {DELETE} /users/:username/site_admin demote
 * @apiName demote
 * @apiDescription Demote a site administrator to an ordinary user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.demote({username})
 * @apiExample {js} Promise
 * octokit.users.demote({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.demote({username}, (error, result) => {})
 */


/**
 * @api {PUT} /users/:username/suspended suspend
 * @apiName suspend
 * @apiDescription Suspend a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.suspend({username})
 * @apiExample {js} Promise
 * octokit.users.suspend({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.suspend({username}, (error, result) => {})
 */


/**
 * @api {DELETE} /users/:username/suspended unsuspend
 * @apiName unsuspend
 * @apiDescription Unsuspend a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.unsuspend({username})
 * @apiExample {js} Promise
 * octokit.users.unsuspend({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.unsuspend({username}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username getForUser
 * @apiName getForUser
 * @apiDescription Get a single user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.getForUser({username})
 * @apiExample {js} Promise
 * octokit.users.getForUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getForUser({username}, (error, result) => {})
 */


/**
 * @api {GET} /user/:id getById
 * @apiName getById
 * @apiDescription Get a single user by GitHub ID. This method uses numerical user ID. Use users.getForUser method if you need to get a user by username.
 * @apiGroup Users
 *
 * @apiParam {string} id  Numerical ID of the user.
 * @apiExample {js} async/await
 * const result = await octokit.users.getById({id})
 * @apiExample {js} Promise
 * octokit.users.getById({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getById({id}, (error, result) => {})
 */


/**
 * @api {GET} /users getAll
 * @apiName getAll
 * @apiDescription Get all users
 * @apiGroup Users
 *
 * @apiParam {number} [since]  The integer ID of the last User that you’ve seen.
 * @apiExample {js} async/await
 * const result = await octokit.users.getAll({since})
 * @apiExample {js} Promise
 * octokit.users.getAll({since}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getAll({since}, (error, result) => {})
 */


/**
 * @api {GET} /user/orgs getOrgs
 * @apiName getOrgs
 * @apiDescription List organizations for the authenticated user.
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getOrgs({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getOrgs({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getOrgs({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/memberships/orgs getOrgMemberships
 * @apiName getOrgMemberships
 * @apiDescription List your organization memberships
 * @apiGroup Users
 *
 * @apiParam {string=active,pending} [state]  Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.
 * @apiExample {js} async/await
 * const result = await octokit.users.getOrgMemberships({state})
 * @apiExample {js} Promise
 * octokit.users.getOrgMemberships({state}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getOrgMemberships({state}, (error, result) => {})
 */


/**
 * @api {GET} /user/memberships/orgs/:org getOrgMembership
 * @apiName getOrgMembership
 * @apiDescription Get your organization membership
 * @apiGroup Users
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.users.getOrgMembership({org})
 * @apiExample {js} Promise
 * octokit.users.getOrgMembership({org}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getOrgMembership({org}, (error, result) => {})
 */


/**
 * @api {PATCH} /user/memberships/orgs/:org editOrgMembership
 * @apiName editOrgMembership
 * @apiDescription Edit your organization membership.
 * @apiGroup Users
 *
 * @apiParam {string} org  
 * @apiParam {string=active} state  The state that the membership should be in. Only "active" will be accepted.
 * @apiExample {js} async/await
 * const result = await octokit.users.editOrgMembership({org, state})
 * @apiExample {js} Promise
 * octokit.users.editOrgMembership({org, state}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.editOrgMembership({org, state}, (error, result) => {})
 */


/**
 * @api {GET} /user/teams getTeams
 * @apiName getTeams
 * @apiDescription Get your teams.
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getTeams({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getTeams({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getTeams({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/emails getEmails
 * @apiName getEmails
 * @apiDescription List email addresses for a user.
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getEmails({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getEmails({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getEmails({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/public_emails getPublicEmails
 * @apiName getPublicEmails
 * @apiDescription List public email addresses for a user.
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getPublicEmails({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getPublicEmails({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getPublicEmails({page, per_page}, (error, result) => {})
 */


/**
 * @api {POST} /user/emails addEmails
 * @apiName addEmails
 * @apiDescription Add email address(es).
 * @apiGroup Users
 *
 * @apiParam {string[]} emails  You can post a single email address or an array of addresses.
 * @apiExample {js} async/await
 * const result = await octokit.users.addEmails({emails})
 * @apiExample {js} Promise
 * octokit.users.addEmails({emails}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.addEmails({emails}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/emails deleteEmails
 * @apiName deleteEmails
 * @apiDescription Delete email address(es).
 * @apiGroup Users
 *
 * @apiParam {string[]} emails  You can post a single email address or an array of addresses.
 * @apiExample {js} async/await
 * const result = await octokit.users.deleteEmails({emails})
 * @apiExample {js} Promise
 * octokit.users.deleteEmails({emails}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.deleteEmails({emails}, (error, result) => {})
 */


/**
 * @api {PATCH} /user/email/visibility togglePrimaryEmailVisibility
 * @apiName togglePrimaryEmailVisibility
 * @apiDescription Toggle primary email visibility.
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.togglePrimaryEmailVisibility({})
 * @apiExample {js} Promise
 * octokit.users.togglePrimaryEmailVisibility({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.togglePrimaryEmailVisibility({}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/followers getFollowersForUser
 * @apiName getFollowersForUser
 * @apiDescription List a user's followers
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getFollowersForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getFollowersForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getFollowersForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/followers getFollowers
 * @apiName getFollowers
 * @apiDescription List the authenticated user's followers
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getFollowers({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getFollowers({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getFollowers({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/following getFollowingForUser
 * @apiName getFollowingForUser
 * @apiDescription List who a user is following
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getFollowingForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getFollowingForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getFollowingForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/following getFollowing
 * @apiName getFollowing
 * @apiDescription List who the authenticated user is following
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getFollowing({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getFollowing({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getFollowing({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/following/:username checkFollowing
 * @apiName checkFollowing
 * @apiDescription Check if you are following a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkFollowing({username})
 * @apiExample {js} Promise
 * octokit.users.checkFollowing({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.checkFollowing({username}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/following/:target_user checkIfOneFollowersOther
 * @apiName checkIfOneFollowersOther
 * @apiDescription Check if one user follows another
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {string} target_user  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkIfOneFollowersOther({username, target_user})
 * @apiExample {js} Promise
 * octokit.users.checkIfOneFollowersOther({username, target_user}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.checkIfOneFollowersOther({username, target_user}, (error, result) => {})
 */


/**
 * @api {PUT} /user/following/:username followUser
 * @apiName followUser
 * @apiDescription Follow a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.followUser({username})
 * @apiExample {js} Promise
 * octokit.users.followUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.followUser({username}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/following/:username unfollowUser
 * @apiName unfollowUser
 * @apiDescription Unfollow a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.unfollowUser({username})
 * @apiExample {js} Promise
 * octokit.users.unfollowUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.unfollowUser({username}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/keys getKeysForUser
 * @apiName getKeysForUser
 * @apiDescription List public keys for a user
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getKeysForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getKeysForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getKeysForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/keys getKeys
 * @apiName getKeys
 * @apiDescription List your public keys
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getKeys({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getKeys({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getKeys({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/keys/:id getKey
 * @apiName getKey
 * @apiDescription Get a single public key
 * @apiGroup Users
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.users.getKey({id})
 * @apiExample {js} Promise
 * octokit.users.getKey({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getKey({id}, (error, result) => {})
 */


/**
 * @api {POST} /user/keys createKey
 * @apiName createKey
 * @apiDescription Create a public key
 * @apiGroup Users
 *
 * @apiParam {string} title  
 * @apiParam {string} key  
 * @apiExample {js} async/await
 * const result = await octokit.users.createKey({title, key})
 * @apiExample {js} Promise
 * octokit.users.createKey({title, key}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.createKey({title, key}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/keys/:id deleteKey
 * @apiName deleteKey
 * @apiDescription Delete a public key
 * @apiGroup Users
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.users.deleteKey({id})
 * @apiExample {js} Promise
 * octokit.users.deleteKey({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.deleteKey({id}, (error, result) => {})
 */


/**
 * @api {GET} /users/:username/gpg_keys getGpgKeysForUser
 * @apiName getGpgKeysForUser
 * @apiDescription Lists the GPG keys for a user. This information is accessible by anyone. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getGpgKeysForUser({username, page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getGpgKeysForUser({username, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getGpgKeysForUser({username, page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/gpg_keys getGpgKeys
 * @apiName getGpgKeys
 * @apiDescription List your GPG keys. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getGpgKeys({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getGpgKeys({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getGpgKeys({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/gpg_keys/:id getGpgKey
 * @apiName getGpgKey
 * @apiDescription Get a single GPG key. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.users.getGpgKey({id})
 * @apiExample {js} Promise
 * octokit.users.getGpgKey({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getGpgKey({id}, (error, result) => {})
 */


/**
 * @api {POST} /user/gpg_keys createGpgKey
 * @apiName createGpgKey
 * @apiDescription Create a GPG key. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} armored_public_key  GPG key contents
 * @apiExample {js} async/await
 * const result = await octokit.users.createGpgKey({armored_public_key})
 * @apiExample {js} Promise
 * octokit.users.createGpgKey({armored_public_key}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.createGpgKey({armored_public_key}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/gpg_keys/:id deleteGpgKey
 * @apiName deleteGpgKey
 * @apiDescription Delete a GPG key. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.users.deleteGpgKey({id})
 * @apiExample {js} Promise
 * octokit.users.deleteGpgKey({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.deleteGpgKey({id}, (error, result) => {})
 */


/**
 * @api {GET} /user/blocks getBlockedUsers
 * @apiName getBlockedUsers
 * @apiDescription List blocked users. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.getBlockedUsers({})
 * @apiExample {js} Promise
 * octokit.users.getBlockedUsers({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getBlockedUsers({}, (error, result) => {})
 */


/**
 * @api {GET} /user/blocks/:username checkBlockedUser
 * @apiName checkBlockedUser
 * @apiDescription Check whether you've blocked a user. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkBlockedUser({username})
 * @apiExample {js} Promise
 * octokit.users.checkBlockedUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.checkBlockedUser({username}, (error, result) => {})
 */


/**
 * @api {PUT} /user/blocks/:username blockUser
 * @apiName blockUser
 * @apiDescription Block a user. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.blockUser({username})
 * @apiExample {js} Promise
 * octokit.users.blockUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.blockUser({username}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/blocks/:username unblockUser
 * @apiName unblockUser
 * @apiDescription Unblock a user. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.unblockUser({username})
 * @apiExample {js} Promise
 * octokit.users.unblockUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.unblockUser({username}, (error, result) => {})
 */


/**
 * @api {GET} /user/repository_invitations getRepoInvites
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations.
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.getRepoInvites({})
 * @apiExample {js} Promise
 * octokit.users.getRepoInvites({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getRepoInvites({}, (error, result) => {})
 */


/**
 * @api {PATCH} /user/repository_invitations/:invitation_id acceptRepoInvite
 * @apiName acceptRepoInvite
 * @apiDescription Accept a repository invitation.
 * @apiGroup Users
 *
 * @apiParam {string} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.acceptRepoInvite({invitation_id})
 * @apiExample {js} Promise
 * octokit.users.acceptRepoInvite({invitation_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.acceptRepoInvite({invitation_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/repository_invitations/:invitation_id declineRepoInvite
 * @apiName declineRepoInvite
 * @apiDescription Decline a repository invitation.
 * @apiGroup Users
 *
 * @apiParam {string} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.declineRepoInvite({invitation_id})
 * @apiExample {js} Promise
 * octokit.users.declineRepoInvite({invitation_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.declineRepoInvite({invitation_id}, (error, result) => {})
 */


/**
 * @api {GET} /user/installations getInstallations
 * @apiName getInstallations
 * @apiDescription List installations. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getInstallations({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getInstallations({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getInstallations({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/installations/:installation_id/repositories getInstallationRepos
 * @apiName getInstallationRepos
 * @apiDescription List repositories accessible to the user for an installation. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} installation_id  
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getInstallationRepos({installation_id, page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getInstallationRepos({installation_id, page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getInstallationRepos({installation_id, page, per_page}, (error, result) => {})
 */


/**
 * @api {PUT} /user/installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.addRepoToInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.users.addRepoToInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})
 */


/**
 * @api {DELETE} /user/installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {string} installation_id  
 * @apiParam {string} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.removeRepoFromInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.users.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})
 */


/**
 * @api {GET} /user/marketplace_purchases getMarketplacePurchases
 * @apiName getMarketplacePurchases
 * @apiDescription Get a user's Marketplace purchases. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getMarketplacePurchases({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getMarketplacePurchases({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getMarketplacePurchases({page, per_page}, (error, result) => {})
 */


/**
 * @api {GET} /user/marketplace_purchases/stubbed getMarketplaceStubbedPurchases
 * @apiName getMarketplaceStubbedPurchases
 * @apiDescription Get a user's stubbed Marketplace purchases. (In preview period. See README.)
 * @apiGroup Users
 *
 * @apiParam {number} [page]  Page number of the results to fetch.
 * @apiParam {number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} async/await
 * const result = await octokit.users.getMarketplaceStubbedPurchases({page, per_page})
 * @apiExample {js} Promise
 * octokit.users.getMarketplaceStubbedPurchases({page, per_page}).then(result => {})
 * @apiExample {js} Callback
 * octokit.users.getMarketplaceStubbedPurchases({page, per_page}, (error, result) => {})
 */



/**,
 * Enterprise
 * @namespace Enterprise
 */


/**
 * @api {GET} /enterprise/stats/:type stats
 * @apiName stats
 * @apiDescription Get statistics.
 * @apiGroup Enterprise
 *
 * @apiParam {string=issues,hooks,milestones,orgs,comments,pages,users,gists,pulls,repos,all} type  Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.stats({type})
 * @apiExample {js} Promise
 * octokit.enterprise.stats({type}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.stats({type}, (error, result) => {})
 */


/**
 * @api {PATCH} /admin/ldap/users/:username/mapping updateLdapForUser
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup Enterprise
 *
 * @apiParam {string} username  
 * @apiParam {string} ldap_dn  LDAP DN for user
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.updateLdapForUser({username, ldap_dn})
 * @apiExample {js} Promise
 * octokit.enterprise.updateLdapForUser({username, ldap_dn}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.updateLdapForUser({username, ldap_dn}, (error, result) => {})
 */


/**
 * @api {POST} /admin/ldap/users/:username/sync syncLdapForUser
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup Enterprise
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.syncLdapForUser({username})
 * @apiExample {js} Promise
 * octokit.enterprise.syncLdapForUser({username}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.syncLdapForUser({username}, (error, result) => {})
 */


/**
 * @api {PATCH} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup Enterprise
 *
 * @apiParam {number} team_id  
 * @apiParam {string} ldap_dn  LDAP DN for user
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.updateLdapForTeam({team_id, ldap_dn})
 * @apiExample {js} Promise
 * octokit.enterprise.updateLdapForTeam({team_id, ldap_dn}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.updateLdapForTeam({team_id, ldap_dn}, (error, result) => {})
 */


/**
 * @api {POST} /admin/ldap/teams/:team_id/sync syncLdapForTeam
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup Enterprise
 *
 * @apiParam {number} team_id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.syncLdapForTeam({team_id})
 * @apiExample {js} Promise
 * octokit.enterprise.syncLdapForTeam({team_id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.syncLdapForTeam({team_id}, (error, result) => {})
 */


/**
 * @api {GET} /enterprise/settings/license getLicense
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup Enterprise
 *
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getLicense({})
 * @apiExample {js} Promise
 * octokit.enterprise.getLicense({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getLicense({}, (error, result) => {})
 */


/**
 * @api {GET} /admin/pre-receive-environments/:id getPreReceiveEnvironment
 * @apiName getPreReceiveEnvironment
 * @apiDescription Get a single pre-receive environment. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getPreReceiveEnvironment({id})
 * @apiExample {js} Promise
 * octokit.enterprise.getPreReceiveEnvironment({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getPreReceiveEnvironment({id}, (error, result) => {})
 */


/**
 * @api {GET} /admin/pre_receive_environments getPreReceiveEnvironments
 * @apiName getPreReceiveEnvironments
 * @apiDescription List pre-receive environments. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getPreReceiveEnvironments({})
 * @apiExample {js} Promise
 * octokit.enterprise.getPreReceiveEnvironments({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getPreReceiveEnvironments({}, (error, result) => {})
 */


/**
 * @api {POST} /admin/pre_receive_environments createPreReceiveEnvironment
 * @apiName createPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} name  The new pre-receive environment's name.
 * @apiParam {string} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.createPreReceiveEnvironment({name, image_url})
 * @apiExample {js} Promise
 * octokit.enterprise.createPreReceiveEnvironment({name, image_url}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.createPreReceiveEnvironment({name, image_url}, (error, result) => {})
 */


/**
 * @api {PATCH} /admin/pre_receive_environments/:id editPreReceiveEnvironment
 * @apiName editPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiParam {string} name  This pre-receive environment's new name.
 * @apiParam {string} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.editPreReceiveEnvironment({id, name, image_url})
 * @apiExample {js} Promise
 * octokit.enterprise.editPreReceiveEnvironment({id, name, image_url}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.editPreReceiveEnvironment({id, name, image_url}, (error, result) => {})
 */


/**
 * @api {DELETE} /admin/pre_receive_environments/:id deletePreReceiveEnvironment
 * @apiName deletePreReceiveEnvironment
 * @apiDescription Delete a pre-receive environment. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.deletePreReceiveEnvironment({id})
 * @apiExample {js} Promise
 * octokit.enterprise.deletePreReceiveEnvironment({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.deletePreReceiveEnvironment({id}, (error, result) => {})
 */


/**
 * @api {GET} /admin/pre-receive-environments/:id/downloads/latest getPreReceiveEnvironmentDownloadStatus
 * @apiName getPreReceiveEnvironmentDownloadStatus
 * @apiDescription Get a pre-receive environment's download status. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id})
 * @apiExample {js} Promise
 * octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getPreReceiveEnvironmentDownloadStatus({id}, (error, result) => {})
 */


/**
 * @api {POST} /admin/pre_receive_environments/:id/downloads triggerPreReceiveEnvironmentDownload
 * @apiName triggerPreReceiveEnvironmentDownload
 * @apiDescription Trigger a pre-receive environment download. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.triggerPreReceiveEnvironmentDownload({id})
 * @apiExample {js} Promise
 * octokit.enterprise.triggerPreReceiveEnvironmentDownload({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.triggerPreReceiveEnvironmentDownload({id}, (error, result) => {})
 */


/**
 * @api {GET} /admin/pre-receive-hooks/:id getPreReceiveHook
 * @apiName getPreReceiveHook
 * @apiDescription Get a single pre-receive hook. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getPreReceiveHook({id})
 * @apiExample {js} Promise
 * octokit.enterprise.getPreReceiveHook({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getPreReceiveHook({id}, (error, result) => {})
 */


/**
 * @api {GET} /admin/pre-receive-hooks getPreReceiveHooks
 * @apiName getPreReceiveHooks
 * @apiDescription List pre-receive hooks. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.getPreReceiveHooks({})
 * @apiExample {js} Promise
 * octokit.enterprise.getPreReceiveHooks({}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.getPreReceiveHooks({}, (error, result) => {})
 */


/**
 * @api {POST} /admin/pre-receive-hooks createPreReceiveHook
 * @apiName createPreReceiveHook
 * @apiDescription Create a pre-receive hook. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} name  The name of the hook.
 * @apiParam {string} script  The script that the hook runs.
 * @apiParam {json} script_repository  The GitHub repository where the script is kept.
 * @apiParam {json} environment  The pre-receive environment where the script is executed.
 * @apiParam {string} [enforcement=disabled]  The state of enforcement for this hook. default: disabled
 * @apiParam {boolean} [allow_downstream_configuration=false]  Whether enforcement can be overridden at the org or repo level. default: false
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration})
 * @apiExample {js} Promise
 * octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.createPreReceiveHook({name, script, script_repository, environment, enforcement, allow_downstream_configuration}, (error, result) => {})
 */


/**
 * @api {PATCH} /admin/pre_receive_hooks/:id editPreReceiveHook
 * @apiName editPreReceiveHook
 * @apiDescription Edit a pre-receive hook. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiParam {json} hook  JSON object that contains pre-receive hook info.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.editPreReceiveHook({id, hook})
 * @apiExample {js} Promise
 * octokit.enterprise.editPreReceiveHook({id, hook}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.editPreReceiveHook({id, hook}, (error, result) => {})
 */


/**
 * @api {DELETE} /admin/pre_receive_hooks/:id deletePreReceiveHook
 * @apiName deletePreReceiveHook
 * @apiDescription Delete a pre-receive hook. (In preview period. See README.)
 * @apiGroup Enterprise
 *
 * @apiParam {string} id  
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.deletePreReceiveHook({id})
 * @apiExample {js} Promise
 * octokit.enterprise.deletePreReceiveHook({id}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.deletePreReceiveHook({id}, (error, result) => {})
 */


/**
 * @api {POST} /staff/indexing_jobs queueIndexingJob
 * @apiName queueIndexingJob
 * @apiDescription Queue an indexing job
 * @apiGroup Enterprise
 *
 * @apiParam {string} target  A string representing the item to index.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.queueIndexingJob({target})
 * @apiExample {js} Promise
 * octokit.enterprise.queueIndexingJob({target}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.queueIndexingJob({target}, (error, result) => {})
 */


/**
 * @api {POST} /admin/organizations createOrg
 * @apiName createOrg
 * @apiDescription Create an organization
 * @apiGroup Enterprise
 *
 * @apiParam {string} login  The organization's username.
 * @apiParam {string} admin  The login of the user who will manage this organization.
 * @apiParam {string} [profile_name]  The organization's display name.
 * @apiExample {js} async/await
 * const result = await octokit.enterprise.createOrg({login, admin, profile_name})
 * @apiExample {js} Promise
 * octokit.enterprise.createOrg({login, admin, profile_name}).then(result => {})
 * @apiExample {js} Callback
 * octokit.enterprise.createOrg({login, admin, profile_name}, (error, result) => {})
 */
