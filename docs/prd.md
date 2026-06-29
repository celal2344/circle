# Circle Product Requirements

## Vision

Circle is a professional mobile ecosystem and multi-sided marketplace for the event and entertainment industry. It connects İşletme, Organizers, Sanatçı, and Saha Çalışanı into a controlled workflow for forming, confirming, and reviewing real-world events.

The long-term product includes marketplace booking, professional reputation, Temas-based discovery, social feeds, event media, and guest acquisition. The MVP intentionally proves only the core booking loop.

## MVP Wedge

The MVP proves an Istanbul-first booking loop:

1. İşletme publishes an available Slot.
2. Organizer creates an Event Idea for the Slot.
3. Matching Sanatçı and Saha Çalışanı users apply from Pre-Flow.
4. Organizer fills the roster and submits a Seed.
5. İşletme approves one Seed.
6. The Seed becomes a confirmed Event.
7. Confirmed roster members are removed from competing same-date Seeds.
8. Organizer closes the Event with positive or negative reviews.

## Roles And Access

**Admin**
- Operates the pilot.
- Issues İşletme access.
- Approves Organizers.
- Can cancel Events and inspect operational state.

**İşletme**
- Invite-only in the MVP.
- Expected pilot size is 2-3 venues.
- Creates Slots with structured terms and free-text notes.
- Reviews competing Seeds and approves one.

**Organizer**
- Can register with email OTP.
- Requires Admin approval before applying to Slots or submitting Seeds.
- Creates Event Ideas, approves applicants, submits Seeds, and reviews roster members after completed Events.

**Sanatçı**
- Activates after email OTP.
- Has one primary role and can hold primary/secondary sub-roles inside the worker taxonomy.
- Applies to matching Event Ideas from Pre-Flow.

**Saha Çalışanı**
- Activates after email OTP.
- Has one primary role and can hold primary/secondary sub-roles inside the worker taxonomy.
- Applies to matching Event Ideas from Pre-Flow.

## Authentication

MVP authentication uses email OTP to avoid SMS provider cost and abuse risk. Phone/SMS verification is a later trust upgrade when the project is ready to spend money on SMS infrastructure.

## Worker Sub-Roles

The MVP uses a curated core set:

- DJ
- Musician/Band
- Bartender
- Waiter
- Host/Hostess
- Sound/Light Tech
- Photographer/Videographer
- Security
- PR

## Booking Workflow

**Slot Creation**
- İşletme creates a Slot for a specific date.
- Slot terms include structured core fields such as city/district, capacity, opening time, commercial deal type, amount/share, and notes.
- Circle does not process payments in v1. Commercial terms are recorded only.

**Event Idea**
- Organizer selects a Slot and creates an Event Idea with required roster positions.
- Event Ideas appear in Pre-Flow for matching Sanatçı and Saha Çalışanı users.

**Applications**
- Users may apply to multiple Event Ideas on the same date.
- Applying means consent to be auto-committed if that Seed wins.
- A user's calendar remains open until an Event is confirmed.

**Seed**
- Once all required positions are filled, the Organizer submits the complete Seed to the İşletme.
- The Seed remains invisible to selected roster members until İşletme approval.

**Confirmation**
- İşletme approves one Seed for a Slot.
- The Slot is locked.
- The Seed becomes an Event.
- Selected roster members are committed automatically.
- Confirmed roster members are removed from competing same-date Seeds.
- A confirmed Event blocks the whole date for each roster member.

**Cancellation**
- Organizer and Admin can cancel confirmed Events.
- Cancellation releases schedules and has no reputation effect in the MVP.

## Communication

The MVP does not include full in-app chat. Confirmed Event coordination uses a WhatsApp group link stored in Circle.

Circle still owns:

- Event state.
- Roster state.
- Notifications.
- Review requirements.
- Trust history.

## Feeds And Social Scope

V1 includes Pre-Flow only.

Deferred:

- Post-Flow.
- General Flow.
- Direct messages.
- Message requests.
- Guest logic.
- Event photo upload/curation.
- Public profiles.

Temas relationships are tracked from shared Events but are not used for feed ranking or messaging in v1.

## Reviews And Trust

Organizer review is positive/negative only.

For each roster member after a completed Event:

- Organizer marks positive or negative.
- Negative review can also create an Organizer-Level Block.
- Other Organizers can see warning count, most recent date, and issuing Organizer.
- Other Organizers cannot see the review text in v1.

All completed Events appear in the user's Automated Log. Manual external experience is allowed but clearly labeled as self-reported.

## Privacy Baseline

The MVP is pilot-private:

- No public web profiles.
- Profiles, applications, logs, and warning history are visible only to authenticated relevant roles.
- Warning history is an Organizer decision aid, not public content.

## Out Of Scope For MVP

- In-app payments.
- Full social feed.
- Post-Flow event gallery.
- Public guest acquisition.
- In-app DMs.
- Full Event Chat.
- SMS OTP.
- Full rating algorithm.
- Public review text.

Related: [[docs/mvp-scope]], [[docs/architecture]], [[CONTEXT]]
