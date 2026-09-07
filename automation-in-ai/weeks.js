// Automation in AI — weekly content (fall 2026)
// One entry per week. To register a video: set video to the YouTube embed URL
// ("https://www.youtube.com/embed/VIDEO_ID"). To add extra links: push {label, url} into links.
// The tutorial field is easy-English HTML shown on the week page. Edit freely — text only, no logic here.

const WEEK1_DATE = new Date("2026-09-02T00:00:00+09:00");

const WEEKS = {
  1: {
    noSubmit: true,   // 1주차는 제출이 없다 — 인트로만 했다 (작가 2026-09-07)
    name: "Getting Started — Introduction",
    build: "nothing. Week 1 was the introduction: what automation is, and how this course runs.",
    submit: "nothing. Week 1 had no assignment. Submissions start in Week 2.",
    video: "",
    coach: "Week 1 was an introduction only — no assignment, no login, no submission. If the student asks what they missed, give them the short version: automation means the computer does a repetitive task for you; this course builds one automation every week for the student's own field; the three tracks are A (work I do now), B (work I want to do), C (my work and study). Then tell them the only preparation for Week 2: bring a Google account and think of ONE repetitive task they do by hand. Do not ask them for a list of three tasks — that was never assigned.",
    links: [
      { label: "Week 1 slides (PDF)", url: "materials/W01_Slides.pdf" },
      { label: "Week 1 handout (PDF)", url: "materials/W01_Handout.pdf" },
    ],
    tutorial: `
      <h4>Week 1 was the introduction — there was no assignment</h4>
      <p>No homework, no login, no submission. We sat in E401 and talked about what this course is.
      If you missed it, here is the whole thing in one minute.</p>
      <h4>What is automation?</h4>
      <p><b>Automation</b> = the computer does a repetitive task for you, so you do not do it by hand.
      Instead of hiring a person for repetitive work, you set up a computer to do it. The four steps are the same either way:
      prepare the work, give the instructions, check the process, check the result. Only <i>who does the work</i> changes.</p>
      <h4>Two kinds of automation</h4>
      <p><b>Computer automation</b> follows a fixed rule and gives the same result every time — send the same reminder every Monday at 9am.
      <b>AI automation</b> needs judgment — read 100 different messages and write a different reply to each.
      Calculation, rules, copying &rarr; just a computer. Reading, writing, deciding &rarr; you need AI.</p>
      <h4>How this course runs</h4>
      <p>This is not a course about memorizing software menus. <b>You pick your own field</b>, and every week you automate
      one repetitive task from that field. After 15 weeks you have a working system, not a finished assignment.</p>
      <p>Three tracks, all equal, and you can change any time:
      <b>A.</b> work I do now (family shop, side job, online selling) &middot;
      <b>B.</b> work I want to do (a business idea) &middot;
      <b>C.</b> my work &amp; study (job applications, deadlines, documents).
      <b>Track C is not lower</b> — about half of every class starts there.</p>
      <p>Our tools are <b>Make.com</b> and <b>Notion</b>. Both free. No coding, not even a little.</p>
      <h4>The only thing to bring to Week 2</h4>
      <p>Your <b>Google account</b>, and <b>one repetitive task</b> you want to stop doing by hand. Think about that one task — that is the whole preparation.</p>
      <p>Nothing in mind? Borrow a field and change it later: small online shop &middot; tutoring &middot; delivery &middot; caf&eacute; &middot; clothes reselling &middot; photography &middot; translation &middot; travel guide &middot; importing goods from your country &middot; running an SNS account.</p>
      <h4>Curious before Week 2?</h4>
      <p>See what automation looks like in a real business.
      Free lessons: <a href="https://academy.make.com" target="_blank" rel="noopener">academy.make.com</a> &middot;
      the official Make channel on YouTube — start with the <i>What is Make?</i> video.</p>
    `,
  },

  2: {
    name: "Make Basics — Trigger & Action",
    build: "your first automation in Make — and your own field, in words.",
    submit: "an interview with the AI assistant: who you are, what business you think about, and which part of it you would automate. Talk to it in your own language; it writes the submission for you.",
    video: "",
    coach: "Week 1 was an introduction with no assignment, so the student has NO written list — never ask them for one. This week you run the interview below and then submit for them. Separately, if they are stuck inside Make, help them: one Trigger, one Action, then mapping.",
    interview: [
      "Introduce yourself. Where are you from, what are you studying, and what do you do outside class?",
      "What kind of student are you? How do you like to work and learn — alone or with people, planning first or trying first?",
      "What business are you thinking about? It can be work you already do, an idea you want to start, or your own studying and job hunting. One or two sentences.",
      "In that business, which part would you automate? Name one thing you do again and again by hand, and say why it is boring or slow.",
    ],
    links: [],
    tutorial: `
      <h4>Two words for the whole semester</h4>
      <p>Every automation has two parts. A <b>Trigger</b> — the event that starts it ("a new row appears").
      An <b>Action</b> — what happens next ("send me an email"). Today you connect one Trigger to one Action.</p>
      <p>Say the sentence before you build it: <b>"When ___ happens, do ___."</b>
      If you cannot say it out loud, do not open Make yet.</p>
      <h4>First — your two accounts</h4>
      <ol>
        <li><b>This website</b> — sign in with your <b>student ID</b> (9 digits) and <b>the email address the school has for you</b>, the one you gave at admission. The first sign-in locks that email to your ID, so use your real one. Wrong email? Tell the professor — it takes ten seconds to unlock.</li>
        <li><b>Make</b> — go to <b>make.com</b> → <i>Get started free</i> → sign up <b>with Google</b>. No Google account? Sign up with your email address instead; it works exactly the same.</li>
      </ol>
      <h4>Core steps</h4>
      <ol>
        <li>Make a Google Sheet with two columns: <b>Task</b> and <b>Note</b>. This sheet stands for your field's list (orders, applications, requests).</li>
        <li>In Make, click <b>Create a new scenario</b>.</li>
        <li>Click the big <b>+</b> → search <b>Google Sheets</b> → choose <b>Watch New Rows</b>. Connect your Google account and pick your sheet. This is your Trigger.</li>
        <li>Click <b>+</b> after it → search <b>Gmail</b> → choose <b>Send an email</b>. Put your own address in "To". This is your Action.</li>
        <li>In the email body, click the small colored panels to insert the row data (Task, Note). This is called <b>mapping</b> — data from one app flowing into another.</li>
        <li>Click <b>Run once</b> → add a new row to your sheet → watch the email arrive.</li>
        <li><b>Turn the scenario OFF</b> when you finish (free plan = 1,000 runs per month — save them).</li>
      </ol>
      <h4>Make it yours</h4>
      <p>Rename the sheet columns to match your field: "Order / Customer", "Company / Deadline". Same automation, your material. That is what you submit.</p>
      <h4>Submit — by talking to the AI assistant</h4>
      <p>This week you do not fill a form. Open the <b>AI assistant</b> (bottom right) and type <b>start</b>.
      It interviews you with four questions, one at a time, and writes the submission for you:</p>
      <ol>
        <li><b>Introduce yourself</b> — where you are from, what you study, what you do outside class.</li>
        <li><b>What kind of student are you?</b> — alone or with people, plan first or try first.</li>
        <li><b>What business are you thinking about?</b> — work you already do, an idea you want to start, or your own studying and job hunting.</li>
        <li><b>Which part would you automate?</b> — one thing you do again and again by hand, and why it is slow.</li>
      </ol>
      <p><b>Write in your own language.</b> Nepali, Uzbek, Vietnamese, Urdu, Korean — the assistant answers in the same language and writes the submission in your language and in English.
      At the end it shows a draft: <b>nothing is recorded until you press Submit.</b> Something wrong? Keep talking and it rewrites.</p>
      <p>Made your Make automation work? Give the link when it asks. Did not finish it? That is fine — <b>the interview is the assignment.</b>
      Submitting during class = attendance, and you can fix it later and keep the attendance.
      Also draw it by hand on the A4 paper: one box for the Trigger, one box for the Action, an arrow between them.</p>
      <p class="note">The assistant runs during class hours only.</p>
      <h4>What gets recorded</h4>
      <p>Your submissions, the time you sent them, and <b>your chats with the AI assistant</b> are saved.
      The professor reads them to improve the class — if many of you get stuck on the same step, that step is taught again the next week.
      Nobody else sees them, and never other students. Please do not type passwords or bank details anywhere on this site.</p>
      <h4>Stuck?</h4>
      <p>Ask <b>3 people around you</b> first — someone next to you just solved it. Most problems are the Google connection: remove it and connect again, it usually works the second time. Then: red paper up on your monitor.</p>
      <h4>Also starting this week — form your own group</h4>
      <p>From Week 4 we present in groups, and when you are stuck you ask your group first.
      <b>You choose your own group and there is no fixed size</b> — three people, six people, up to you. Same country, same language, same table: whatever helps you actually help each other. Nobody is assigned.</p>
      <p>When your group is set, <b>one person posts it in the KakaoTalk group</b> — a group name, then everyone's student ID and name. One message per group, not per person.
      The professor then posts the list of all groups in the chat, so you can see who is where and pick one. Nobody is left out for not knowing where to go — if you have no group, look at the list and say where you want to go.</p>
      <p>No hurry: you have until <b>Week 4 or 5</b>, and you can move until then.
      <b>Building and submitting stay yours.</b> You still automate your own field every week, you still submit your own link and your own line, and attendance is still yours alone. A group is for presenting and for helping — not for building one thing together.</p>
      <h4>Advanced</h4>
      <p>Add a third module after Gmail — for example Google Sheets <i>Add a Row</i> to a second "log" sheet.
      Learn how modules pass data: <a href="https://academy.make.com" target="_blank" rel="noopener">Make Academy — Foundation course</a>.</p>
    `,
  },

  3: {
    name: "Connecting Apps — Conditions & Filters",
    build: "an automation with more than one app, plus a condition.",
    submit: "one task from your field that needs a condition — link + one line.",
    video: "",
    coach: "Help them find one task that has a real rule ('only urgent', 'only over 50,000') and phrase the filter condition precisely.",
    links: [],
    tutorial: `
      <h4>Not every row is the same</h4>
      <p>Real work has rules: "only urgent orders", "only amounts over 50,000", "only emails with an attachment".
      In Make, a rule between two modules is called a <b>Filter</b>.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-2 scenario (or copy it: scenario menu → <b>Clone</b>).</li>
        <li>Add a column to your sheet: <b>Status</b> (write "urgent" or "normal" in each row).</li>
        <li>Click the <b>wrench on the line</b> between the two modules → <b>Set up a filter</b>.</li>
        <li>Condition: <b>Status</b> — <i>equal to</i> — <b>urgent</b>. Label it "Only urgent".</li>
        <li>Run once → add one "urgent" row and one "normal" row → only the urgent one sends an email.</li>
        <li>Now add a second app: after Gmail, add <b>Google Sheets → Add a Row</b> to a separate "Urgent log" sheet. Three modules, two apps, one rule.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>Make it yours</h4>
      <p>What is the real rule in your field? Late payments? Orders over a size? Deadlines this week? Build that rule as the filter — that is your submission.</p>
      <h4>Advanced</h4>
      <p>Try a <b>Router</b> (right-click the line → Add a router): urgent rows → email, normal rows → just log.
      Docs: <a href="https://help.make.com" target="_blank" rel="noopener">help.make.com</a> — search "filter" and "router".</p>
    `,
  },

  4: {
    name: "Forms → Spreadsheet · Field Talk 1",
    build: "a Google Form that fills a spreadsheet by itself.",
    submit: "your intake form, automated — and your 1-minute field talk.",
    video: "",
    coach: "Help them design their intake form: who fills it, which 2-3 questions, what happens after. Also help them rehearse their 1-minute field talk.",
    links: [],
    tutorial: `
      <h4>Today two things happen</h4>
      <p>① You automate the front door of your field — where orders, requests, or applications come in.
      ② <b>Everyone stands up for 1 minute</b>: your field, one line, and the one task you most want to automate. Timer on screen. No exceptions.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Go to <b>forms.google.com</b> → new form. Title it for your field ("Order form", "Booking request", "Contact me").</li>
        <li>Add 2–3 questions: name, what they want, contact.</li>
        <li>In the form's <b>Responses</b> tab → click the green sheet icon → <b>Link to Sheets</b>. Now every answer becomes a row, by itself.</li>
        <li>In Make: <b>Google Sheets → Watch New Rows</b> on that response sheet → <b>Gmail → Send an email</b> to yourself: "New request from …".</li>
        <li>Open your form on your phone → submit a test answer → watch the row appear and the email arrive.</li>
        <li>Turn the scenario off after testing.</li>
      </ol>
      <h4>Your 1-minute talk</h4>
      <p>Three sentences are enough: <i>"I do ___ for ___. Every week I repeat ___. I want to automate ___."</i>
      Say it, sit down. This is graded (4 points) — speaking it out loud makes your field real.</p>
      <h4>Advanced</h4>
      <p>Send a confirmation email <b>to the person who filled the form</b> — map their email answer into Gmail "To".
      Careful: test with your own address first.</p>
    `,
  },

  5: {
    name: "Email Automation",
    build: "an email that sends itself.",
    submit: "one automatic reply from your field — link + one line.",
    video: "",
    coach: "Help them find the message they send most often and draft the reply template together, with the mapped fields marked.",
    links: [],
    tutorial: `
      <h4>The task everyone repeats</h4>
      <p>Answering the same message again and again — every shop, every freelancer, every job-seeker knows it.
      Today the reply writes and sends itself.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Take your Week-4 scenario (form → sheet → email to you).</li>
        <li>Change the last module: Gmail <b>Send an email</b> → "To" = the <b>email answer from the form</b> (map it).</li>
        <li>Write a warm template: "Hi [name], thank you! We received your [request]. We will reply within one day."
          Map [name] and [request] from the row.</li>
        <li>Test with your own email as the customer. Read what arrives — would you be happy to receive it?</li>
        <li>Extra Action: add <b>Google Sheets → Update a Row</b> to mark Status = "replied". One trigger, two actions.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>Make it yours</h4>
      <p>What message do you send most often in your field? A price list? Directions? "Your order shipped"? An application follow-up? Automate that exact one.</p>
      <h4>Advanced</h4>
      <p>Explore Gmail's <b>Watch Emails</b> trigger: when a mail with a certain label arrives, Make can act on it.
      Search "Gmail" at <a href="https://help.make.com" target="_blank" rel="noopener">help.make.com</a>.</p>
    `,
  },

  6: {
    name: "AI Inside Your Automation",
    build: "an AI step inside your Make scenario.",
    submit: "AI writing your customer reply — link + one line.",
    video: "",
    coach: "Help them write the AI prompt for their auto-reply: role, tone, what to never promise. Test it against 2-3 fake customer messages in the chat.",
    links: [],
    tutorial: `
      <h4>From template to thinking</h4>
      <p>Last week your reply was a fixed template. Today an <b>AI writes each reply</b> — reading what the person asked, answering in your voice. This is where "Automation" meets "AI".</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-5 scenario.</li>
        <li>Between the Trigger and Gmail, add an <b>AI module</b> (we set up the class key together in the lab — do not buy anything yourself).</li>
        <li>Write the AI instruction (the <b>prompt</b>): "You reply for [your field]. Be short, warm, easy English. The customer wrote: [map the form answer]."</li>
        <li>Map the AI's output text into the Gmail body.</li>
        <li>Test with three different fake requests. Read every reply — does it sound like you? Fix the prompt, not the reply.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <h4>One warning</h4>
      <p>Never let AI send money-related or promise-related answers without checking. In real business, AI drafts — you decide what auto-sends.</p>
      <h4>Advanced</h4>
      <p>Ask the AI for two outputs at once: a reply <i>and</i> a one-word category (order / question / complaint).
      Route by category with a Router — different answers for different kinds of mail.</p>
    `,
  },

  7: {
    name: "Project 1 · Peer Test",
    build: "one complete automation combining weeks 2–6.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them decide which pieces from weeks 2-6 combine into one complete flow, and define 'done' for it. Remind them peer feedback is part of the task.",
    links: [],
    tutorial: `
      <h4>Put it together</h4>
      <p>You now know: Trigger &amp; Action · filters · forms → sheets · email · AI. Today you build <b>one complete flow for your field</b>, start to finish.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Choose one real flow: request comes in → gets recorded → gets answered.</li>
        <li>Build it: Form → Sheet → (Filter) → AI reply → Gmail → mark as done.</li>
        <li>Test it yourself three times with different inputs.</li>
        <li>Submit your form's public link here — your partner needs to use it.</li>
      </ol>
      <h4>Peer test (20 minutes, in class)</h4>
      <p>The site assigns you a partner. Open their link and <b>really use it</b> — fill their form, watch what happens. Then answer three questions on their submission:
      ① Did it work? ② Is it useful for their field, 1–5? ③ One suggestion.
      Automation is honest: it runs or it does not. <b>Leaving feedback is part of this week's task.</b></p>
      <h4>Advanced</h4>
      <p>Add error handling: what happens when someone leaves the email field empty? Add a filter so the scenario does not crash.</p>
    `,
  },

  8: {
    name: "Midterm Presentations",
    build: "nothing new — you present.",
    submit: "your 2-minute demo link, before class starts.",
    video: "",
    coach: "Rehearse the 2-minute midterm demo: 20s field, 70s live trigger, 30s what it saves. Time it in the chat.",
    links: [],
    tutorial: `
      <h4>Two minutes, running live</h4>
      <p>Everyone presents. Timer on screen — at 2:00 the mic moves on. No exceptions, no slides needed.</p>
      <h4>How to structure 2 minutes</h4>
      <ol>
        <li><b>0:00–0:20</b> — your field, one line. What task you automated.</li>
        <li><b>0:20–1:30</b> — <b>trigger it live</b>: fill your form on the screen, let everyone watch the row appear and the reply arrive.</li>
        <li><b>1:30–2:00</b> — one sentence: what this saves you every week.</li>
      </ol>
      <h4>Rules</h4>
      <p>Your demo runs from the professor's PC — <b>submit your link here before class starts</b>. Presentation order is posted on this site. Two people before your turn, wait in the front row. Questions go to comments on your submission, not out loud.</p>
      <h4>If your automation is broken</h4>
      <p>Present anyway: show the scenario, explain where it stops, say what you tried. An honest broken demo scores better than no demo.</p>
    `,
  },

  9: {
    name: "Project 2 · Peer Test",
    build: "the same skills on a different task from your field.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them pick task #2 from their list and apply one piece of peer feedback from Project 1.",
    links: [],
    tutorial: `
      <h4>Second lap</h4>
      <p>Take your task list from Week 1. Pick a <b>different</b> repetitive task — and automate it. You will be surprised how fast the second one goes.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Read the peer feedback on your Project 1 (your progress page). Fix one thing they pointed at.</li>
        <li>Pick task #2 from your list. Sketch it on paper first: what is the Trigger? what are the Actions?</li>
        <li>Build it in a <b>new scenario</b> — do not overwrite Project 1.</li>
        <li>Test three times, submit the link.</li>
      </ol>
      <h4>Peer test again</h4>
      <p>New partner, same three questions: worked? useful 1–5? one suggestion. You are building a habit: <b>ship → get tested → improve</b>. That is how real products grow.</p>
      <h4>Advanced</h4>
      <p>Connect Projects 1 and 2 — can the output of one feed the other? One sheet as the shared memory of your field.</p>
    `,
  },

  10: {
    name: "Notion — Your Business Data",
    build: "a Notion space for your field, and data flowing into it by itself.",
    submit: "your Notion page + the automation that fills it — link + one line.",
    video: "",
    coach: "Two things in one week: help them name the Notion columns their field actually needs (Name, Status options, Date, Note), then map their form fields into those columns through Make. If they are slow, the Notion page alone is enough — the automation can come next week.",
    links: [],
    tutorial: `
      <h4>Where your data lives</h4>
      <p>Sheets hold rows. <b>Notion</b> holds your whole field — orders, customers, notes, plans — in one place you actually want to open.
      Today you build it <i>and</i> make it fill itself.</p>
      <h4>Part 1 — build the space (30 min)</h4>
      <ol>
        <li>Go to <b>notion.com</b> → sign up free (Google account is fine).</li>
        <li>New page → name it after your field ("Bobur's Shop", "My Job Search").</li>
        <li>Inside, type <b>/database</b> → choose <b>Table</b>.</li>
        <li>Columns that match your field: Name · Status (<i>Select</i> type: new / doing / done) · Date · Note.</li>
        <li>Add three real entries by hand — feel what belongs in each column.</li>
        <li><b>+ Add a view</b> → <b>Board</b>, grouped by Status. Same data, kanban board.</li>
      </ol>
      <h4>Part 2 — make it fill itself (40 min)</h4>
      <ol>
        <li>In Make, open your form scenario → add <b>Notion → Create a Database Item</b>.</li>
        <li>Connect Notion — give access only to the page you just made.</li>
        <li>Map the form answers into the columns: name → Name, request → Note, Status → "new".</li>
        <li>Run once → submit a test form → watch the card appear in the table <i>and</i> the Board.</li>
        <li>Turn the scenario off.</li>
      </ol>
      <p>Your flow is now: form → sheet → email reply → Notion card. Four apps, zero hands.</p>
      <h4>Make it yours</h4>
      <p>Build the page you would actually open every morning. That is the difference between homework and a tool.</p>
      <h4>Advanced</h4>
      <p>Reverse direction: Notion trigger <b>Watch Database Items</b> — drag a card to "done", and Make emails the customer.</p>
    `,
  },

  11: {
    name: "AI Coding Day — say it, and it exists",
    build: "one small working tool of your own, made by describing it in one sentence.",
    submit: "your tool — link + the sentence you used.",
    video: "",
    coach: "Their tool will fail because the sentence is vague, not because the tool is broken. Push them to name three things: who uses it, what they see on screen, what happens when they press the button. Never write the sentence for them — ask the missing question instead.",
    links: [],
    tutorial: `
      <h4>Today is different</h4>
      <p>No Make. No modules. Today you tell a computer what you want <b>in one sentence</b>, and it builds it.
      This is a whole day — the only one like it this semester.</p>
      <h4>What coding became</h4>
      <p>Coding is giving a computer instructions. It always was. The old way: you wrote those instructions in the computer's language, and that took years to learn.
      The new way: you write them in <b>your language</b>. So the hard part moved — from grammar to <b>knowing what you want</b>.</p>
      <blockquote>The clearer your picture, the better the machine builds it.</blockquote>
      <h4>Core steps</h4>
      <ol>
        <li>Pick <b>one small thing</b> your field needs. Not a whole website — one tool. A price calculator. A booking form. A checklist that remembers.</li>
        <li>Write <b>one sentence</b> that answers three questions: <b>who uses it</b>, <b>what they see</b>, <b>what happens when they press the button</b>.</li>
        <li>Paste the sentence into Claude (or ChatGPT). Wait. Something appears — press it, use it.</li>
        <li><b>Fix the sentence, not the tool.</b> If it came out wrong, your picture had a hole. Find the hole, write it in, run again.</li>
        <li>Submit the working thing <i>and</i> the sentence that made it.</li>
      </ol>
      <h4>Vague vs clear</h4>
      <p><b>Vague</b> — "make a useful website for my shop." Nobody knows what that is, including the AI.</p>
      <p><b>Clear</b> — "Make a one-page site where a customer types their name and menu choice, the order appears in a list below, and when the owner clicks Done the order disappears from the list."</p>
      <p>Not longer — <b>no empty spaces</b>. That is the difference.</p>
      <h4>Why this belongs in an automation course</h4>
      <p>Week 6 asked you: which step needs judgment? Today asks: what exactly do you want?
      Both are the same muscle — <b>seeing clearly</b>. Tools change every year. That does not.</p>
      <h4>Advanced</h4>
      <p>Connect today's tool to your Make scenario — when someone uses it, a row appears in your sheet, and your automation takes over from there.</p>
    `,
  },

  12: {
    name: "Project 3 · Peer Test",
    build: "a bigger automation with several steps.",
    submit: "your project link — and your test of a partner's automation.",
    video: "",
    coach: "Help them choose their most valuable flow and list its steps: trigger, router rule, and every action. Failure cases too.",
    links: [],
    tutorial: `
      <h4>The full chain</h4>
      <p>Your last practice project before the final. Use everything: form → AI → sheet + Notion + email, with a Router splitting paths. This one should look like a small product.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Pick the most valuable flow in your field — the one that costs you the most time every week.</li>
        <li>Draw it on paper first: every Trigger, every Action, every rule. (This drawing is practice for Week 13.)</li>
        <li>Build with at least 4 modules and 1 Router or Filter.</li>
        <li>Test the failure cases too: empty answers, wrong email, double submission.</li>
        <li>Submit the link.</li>
      </ol>
      <h4>Peer test — final round</h4>
      <p>Third partner, same three questions. By now you know what good feedback looks like — give the kind you want to receive.</p>
      <h4>Advanced</h4>
      <p>Add a daily summary: a scheduled scenario that counts today's new rows and sends you one evening email — "today: 4 orders, 2 urgent".</p>
    `,
  },

  13: {
    name: "Design Your System",
    build: "a one-page plan: every automation your field needs.",
    submit: "your design proposal — link + one line.",
    video: "",
    coach: "Help them write the system map: every repetitive task, marked done/next/later, and one line per planned automation. The test: someone else could build it.",
    links: [],
    tutorial: `
      <h4>From pieces to a system</h4>
      <p>You have built five or six automations. Today you <b>design the whole machine</b>: what should your field run by itself when the semester ends?</p>
      <h4>Core steps — write a one-page plan</h4>
      <ol>
        <li>Open a Google Doc or a Notion page. Title: "[Your field] — Automation System".</li>
        <li><b>Section 1 — My field</b>: three sentences. What, for whom, what repeats.</li>
        <li><b>Section 2 — The map</b>: list every repetitive task. Mark each: ✅ already automated (which week) · 🔜 will build next week · ⏳ later.</li>
        <li><b>Section 3 — The build plan</b>: for each 🔜, one line — Trigger → Actions → which apps.</li>
        <li><b>Section 4 — What it saves</b>: hours per week, honestly counted.</li>
        <li>Share the link and submit it.</li>
      </ol>
      <h4>The test of a good plan</h4>
      <p>Someone else could build it. If your partner cannot understand a line, it is not designed yet — it is only wished.</p>
      <h4>Advanced</h4>
      <p>Add cost: which parts stay on Make's free plan? What would the paid plan cost, and does the saved time pay for it?</p>
    `,
  },

  14: {
    name: "Build Your System",
    build: "the system you designed last week.",
    submit: "your working system — link + one line.",
    video: "",
    coach: "Help them prioritize: which planned item is highest value, and what is the smallest version that actually runs today.",
    links: [],
    tutorial: `
      <h4>Building day</h4>
      <p>The whole class is one long lab. You have your plan — today you make the 🔜 items real.</p>
      <h4>Core steps</h4>
      <ol>
        <li>Open your Week-13 plan. Pick the highest-value 🔜 item.</li>
        <li>Build it. Test it. Mark it ✅ in the plan.</li>
        <li>Repeat for the next item — as far as you get. Depth beats breadth: two working flows &gt; five broken ones.</li>
        <li>Connect the pieces: shared sheet, shared Notion, one naming style ("[Field] - order intake", "[Field] - daily summary").</li>
        <li>Update the plan document so it matches what actually runs — submit the link.</li>
      </ol>
      <h4>Prepare for the final</h4>
      <p>Next week: 3 minutes, everything live. Decide today which flow you will trigger on screen — and test it five times.</p>
      <h4>Advanced</h4>
      <p>Turn ON the one scenario your field really uses from now on. Watch the run history for a day. Congratulations — you are in production.</p>
    `,
  },

  15: {
    name: "Final Presentations",
    build: "nothing new — you present.",
    submit: "your 3-minute demo link, before class starts.",
    video: "",
    coach: "Rehearse the 3-minute final demo and sharpen the one sentence: why this system deserves attention (or money).",
    links: [],
    tutorial: `
      <h4>Three minutes, your whole system</h4>
      <p>The last stand-up. Timer on screen, order posted here, demo runs from the professor's PC — <b>submit your link before class</b>.</p>
      <h4>How to structure 3 minutes</h4>
      <ol>
        <li><b>0:00–0:30</b> — your field, and the system map (show your Week-13 plan for ten seconds).</li>
        <li><b>0:30–2:20</b> — <b>trigger the main flow live</b>. Form in, AI reply out, Notion card appears. Let the machine speak.</li>
        <li><b>2:20–3:00</b> — what it saves you per week, and the one thing you will automate next.</li>
      </ol>
      <h4>What is graded (8 points)</h4>
      <p>It runs · it fits your real field · you can explain <i>why</i> each piece exists. Polish matters less than truth — a small system that really runs beats a big diagram.</p>
      <h4>After this course</h4>
      <p>Your Make account, your Notion, your system — they leave with you. The habit you built — <i>see a repeated task, automate it</i> — is the actual grade. Keep it running.</p>
    `,
  },
};
