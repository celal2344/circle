# Circle

Circle is the domain language for a professional event and entertainment marketplace. It names the people, places, relationships, and lifecycle concepts used to form and complete real-world events.

## Language

### Roles

**Admin**:
The system operator who controls trusted platform actions such as approving Organizers and issuing pilot access for İşletme accounts.
_Avoid_: Superuser in product copy, moderator

**İşletme**:
An event venue or entertainment business that offers calendar availability to Organizers. An İşletme owns Slots and chooses which submitted Seed becomes the confirmed Event.
_Avoid_: Venue when speaking product language, business, place

**Organizer**:
A professional who creates Event Ideas for available İşletme Slots, assembles the required Sanatçı and Saha Çalışanı roster, and submits Seeds for İşletme approval.
_Avoid_: Promoter when the person owns the whole event concept, manager

**Sanatçı**:
A performer role such as DJ, solo musician, band, vocalist, or similar event talent. A Sanatçı applies to matching Event Ideas and may become part of a confirmed Event roster.
_Avoid_: Talent when speaking product language, artist if used inconsistently with Sanatçı

**Saha Çalışanı**:
An operational event worker role such as bartender, waiter, host/hostess, sound/light technician, photographer/videographer, security, or PR. A Saha Çalışanı applies to matching Event Ideas and may become part of a confirmed Event roster.
_Avoid_: Staff when speaking product language, worker if it blurs the role boundary

**PR**:
A Saha Çalışanı sub-role focused on promotion and guest-facing relationship work.
_Avoid_: Organizer, guest

### Event Formation

**Slot**:
A calendar availability offered by an İşletme for a specific event date and commercial conditions. One Slot can receive multiple competing Seeds, but only one can become the confirmed Event.
_Avoid_: Availability if it does not include event terms, date

**Tohumlama**:
The event-sprouting process where an Organizer turns an available Slot into an Event Idea, gathers applicants, and submits a complete Seed for İşletme approval.
_Avoid_: Booking when referring to the whole formation process, matching

**Event Idea**:
An Organizer's proposed event concept for a Slot before the required roster is complete. Event Ideas are visible in Pre-Flow to matching Sanatçı and Saha Çalışanı users.
_Avoid_: Event before confirmation, Seed before the roster is filled

**Seed**:
A complete Event Idea with all required roster positions filled and submitted to the İşletme for approval. A Seed is not yet a confirmed Event.
_Avoid_: Confirmed event, booking request

**Event**:
A Seed approved by the İşletme for a Slot. An Event has a committed roster, blocks that date for roster members, and can later be completed or cancelled.
_Avoid_: Idea, Seed, Post

**Roster**:
The set of Sanatçı and Saha Çalışanı users selected by the Organizer for an Event Idea, Seed, or Event.
_Avoid_: Crew when the context needs role precision

**Pre-Flow**:
The job feed where Sanatçı and Saha Çalışanı users see open Event Ideas that match their sub-roles.
_Avoid_: Feed when meaning social feed, Post-Flow

### Trust And History

**Temas**:
A work relationship created when users participate in the same confirmed Event. Temas is not a phone contact, friend relationship, or message permission by itself.
_Avoid_: Contact, friend, follower

**Automated Log**:
The Circle-verified history of completed Events attached to a user's profile. Entries are created from Circle events, not self-reported claims.
_Avoid_: Manual experience, portfolio

**Manual Log**:
Self-reported external experience added by a user. Manual Log entries are separate from Circle-verified Automated Log entries.
_Avoid_: Verified badge, Automated Log

**Review**:
The Organizer's positive or negative assessment of a roster member after an Event. A Review can create trust signals for future Organizer decisions.
_Avoid_: Feedback when it implies every participant must review every other participant

**Organizer-Level Block**:
A relationship where an Organizer prevents a specific Sanatçı or Saha Çalışanı from applying to that Organizer's future Event Ideas.
_Avoid_: Platform ban, suspension

**Warning History**:
The aggregate negative/block history visible to Organizers when evaluating applicants. It shows count, most recent date, and issuing Organizer, not the review text.
_Avoid_: Public review, rating

## Flagged Ambiguities

**context.md vs CONTEXT.md**:
The original root `context.md` was a PRD. In this project, `CONTEXT.md` is reserved for domain language only; product requirements live in `docs/prd.md`.

**Temas vs contacts**:
Temas means people connected through shared event work. It must not be used for phone contacts, address-book imports, or general social friendships.

**Event vs Seed**:
A Seed is complete but still awaiting İşletme approval. Only an approved Seed is an Event.

## Example Dialogue

Organizer: "I want to create an Event Idea for the Friday Slot at this İşletme."

İşletme: "Submit a Seed once the roster is complete. I will compare it with the other Seeds for the same Slot."

Sanatçı: "If I apply to two Event Ideas on the same date, am I booked?"

Organizer: "No. You are only committed if one Seed is approved and becomes an Event. Then that date is blocked for you."

Admin: "This user's Automated Log shows completed Circle Events. Their Manual Log is self-reported and should be treated differently."
