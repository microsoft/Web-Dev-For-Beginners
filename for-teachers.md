### For Educators

You are welcome to use this curriculum in your classroom. It works seamlessly with GitHub Classroom and leading LMS platforms, and it can also be used as a standalone repo with your students.

### Use with GitHub Classroom

To manage lessons and assignments per cohort, create one repository per lesson so GitHub Classroom can attach each assignment independently.

- Fork this repo to your organization.
- Create a separate repo for each lesson by extracting each lesson folder into its own repository.
  - Option A: Create empty repos (one per lesson) and copy the lesson folder contents into each.
  - Option B: Use a Git history‑preserving approach (e.g., split a folder into a new repo) if you need provenance.
- In GitHub Classroom, create an assignment per lesson and point it to the corresponding lesson repo.
- Recommended settings:
  - Repository visibility: private for student work.
  - Use starter code from the lesson repo’s default branch.
  - Add issue and pull request templates for quizzes and submissions.
  - Optionally configure autograding and tests if your lessons include them.
- Conventions that help:
  - Repository names like lesson-01-intro, lesson-02-html, etc.
  - Labels: quiz, assignment, needs-review, late, resubmission.
  - Tags/releases per cohort (e.g., v2025-term1).

Tip: Avoid storing repositories inside synced folders (e.g., OneDrive/Google Drive) to prevent Git conflicts on Windows.

### Use with Moodle, Canvas, or Blackboard

This curriculum includes importable packages for common LMS workflows.

- Moodle: Use the Moodle upload file [Moodle upload file](/teaching-files/webdev-moodle.mbz) to load the full course.
- Common Cartridge: Use the Common Cartridge file [Common Cartridge file](/teaching-files/webdev-common-cartridge.imscc) for broader LMS compatibility.
- Notes:
  - Moodle Cloud has limited Common Cartridge support. Prefer the Moodle file above, which can also be uploaded into Canvas.
  - After import, review modules, due dates, and quiz settings to match your term schedule.

![Moodle](/teaching-files/moodle.png)
> The curriculum in a Moodle classroom

![Canvas](/teaching-files/canvas.png)
> The curriculum in Canvas

### Use the repo directly (no Classroom)

If you prefer not to use GitHub Classroom, you can run the course directly from this repo.

- Synchronous/online formats (Zoom/Teams):
  - Run short mentor‑led warmups; use breakout rooms for quizzes.
  - Announce a time window for quizzes; students submit answers as GitHub Issues.
  - For collaborative assignments, students work in public lesson repos and open pull requests.
- Private/asynchronous formats:
  - Students fork each lesson to their own **private** repos and add you as a collaborator.
  - They submit via Issues (quizzes) and Pull Requests (assignments) on your classroom repo or their private forks.

### Best practices

- Provide an orientation lesson on Git/GitHub basics, Issues, and PRs.
- Use checklists in Issues for multi‑step quizzes/assignments.
- Add CONTRIBUTING.md and CODE_OF_CONDUCT.md to set classroom norms.
- Add accessibility notes (alt text, captions) and offer printable PDFs.
- Version your content per term and freeze lesson repos after publishing.

### Feedback and support

We want this curriculum to work for you and your students. Please open a new Issue in this repository for bugs, requests, or improvements, or start a discussion in the Teacher Corner.
