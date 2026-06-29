# Circle MVP Scope

## Goal

Prove that Circle can form and complete real event bookings in a controlled Istanbul pilot.

The MVP is successful when an İşletme, Organizer, Sanatçı, and Saha Çalışanı can complete the Slot-to-Event loop and produce trustworthy profile history.

## Included

- Istanbul-only market.
- Invite-only İşletme access.
- Organizer registration with Admin approval.
- Open Sanatçı and Saha Çalışanı registration after email OTP.
- Role-based mobile app experience.
- Next.js Admin panel.
- Pre-Flow job feed.
- Slot creation with structured core terms and notes.
- Event Idea creation.
- Worker applications.
- Organizer roster selection.
- Seed submission.
- İşletme Seed approval.
- Automatic same-date conflict removal.
- WhatsApp group link for confirmed Event coordination.
- Push and in-app notifications.
- Organizer/Admin cancellation.
- Organizer positive/negative reviews.
- Organizer-Level Blocks.
- Warning history shown to Organizers as count, most recent date, and issuing Organizer.
- Automated Log and self-reported Manual Log.
- Temas tracking only.

## Deferred

- SMS OTP.
- Payments.
- Guest logic.
- General Flow.
- Post-Flow.
- Event photo upload.
- In-app DMs.
- Full Event Chat.
- Public profiles.
- Temas-based ranking.
- Numeric rating algorithm.
- Custom backend server.

## Acceptance Scenarios

1. Admin creates or invites an İşletme account.
2. Organizer registers by email OTP and waits for Admin approval.
3. Approved Organizer creates an Event Idea for an İşletme Slot.
4. Sanatçı and Saha Çalışanı users apply to the Event Idea.
5. Organizer fills all required positions and submits a Seed.
6. İşletme approves the Seed and it becomes an Event.
7. Confirmed roster members are removed from competing same-date Seeds.
8. Organizer closes the Event and marks each roster member positive or negative.
9. Completed Event appears in Automated Log.
10. Negative/block history appears to future Organizers without exposing review text.

Related: [[docs/prd]], [[docs/roadmap]], [[CONTEXT]]
